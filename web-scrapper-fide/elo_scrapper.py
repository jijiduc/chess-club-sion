import requests
from bs4 import BeautifulSoup
import csv
import time
import sys
import itertools
import re
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def get_session():
    session = requests.Session()
    retry = Retry(connect=3, backoff_factor=0.5)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session

def get_player_data(session, fide_id):
    """
    Récupère Nom, Fédération, Elo Standard, Rapid et Blitz d'un joueur
    """
    url = f"https://ratings.fide.com/profile/{fide_id}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    data = {
        'name': '',
        'federation': '',
        'std': '0',
        'rapid': '0',
        'blitz': '0'
    }
    
    try:
        response = session.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Name
        # Usually in .profile-top-title
        title_div = soup.find('div', class_='profile-top-title')
        if title_div:
            data['name'] = title_div.text.strip()
        else:
            # Fallback to H1
            h1 = soup.find('h1')
            if h1:
                data['name'] = h1.text.strip()

        # Federation
        # Robust search for "Federation" label
        # Use strict regex to avoid matching "World Chess Federation" etc
        fed_node = soup.find(string=re.compile(r"^\s*Federation\s*$", re.IGNORECASE))
        if fed_node:
            parent = fed_node.find_parent()
            # If inside a span (common), check parent div
            if parent and parent.name == 'span':
                 grandparent = parent.find_parent()
                 if grandparent:
                     full_text = grandparent.get_text(" ", strip=True)
                     data['federation'] = re.sub(r"Federation", "", full_text, flags=re.IGNORECASE).strip()
            # If inside a div directly
            elif parent:
                 full_text = parent.get_text(" ", strip=True)
                 data['federation'] = re.sub(r"Federation", "", full_text, flags=re.IGNORECASE).strip()
        
        # Ratings
        def extract_elo(class_name):
            div = soup.find('div', class_=class_name)
            if div:
                paragraphs = div.find_all('p')
                if paragraphs and len(paragraphs) > 0:
                    val = paragraphs[0].text.strip()
                    if val.isdigit():
                        return val
            return '0'

        data['std'] = extract_elo('profile-standart profile-game')
        data['rapid'] = extract_elo('profile-rapid profile-game')
        data['blitz'] = extract_elo('profile-blitz profile-game')
        
        return data
    
    except Exception as e:
        print(f"\n❌ Erreur pour {fide_id}: {str(e)}")
        return data

def process_csv(input_file, output_file):
    print(f"📂 Ouverture du fichier d'entrée: {input_file}")
    
    try:
        with open(input_file, 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            rows = list(reader)
            
        start_idx = 0
        if len(rows) > 0:
            first_row = rows[0]
            if any("ID" in str(cell).upper() for cell in first_row):
                start_idx = 1
        
        total_rows = len(rows) - start_idx
        print(f"🚀 Début du traitement de {total_rows} joueurs...")
        
        session = get_session()
        
        # Output with Name and Federation
        output_rows = [["FIDE ID", "Name", "Federation", "Elo Standard", "Elo Rapid", "Elo Blitz"]]
        
        for i, row in enumerate(rows[start_idx:], 1):
            if not row: continue
            fide_id = row[0].strip()
            
            # Progress bar
            progress = int((i / total_rows) * 30)
            sys.stdout.write(f"\r[{'=' * progress}{' ' * (30 - progress)}] {i}/{total_rows} ({fide_id})")
            sys.stdout.flush()
            
            data = get_player_data(session, fide_id)
            
            output_rows.append([
                fide_id, 
                data['name'], 
                data['federation'], 
                data['std'], 
                data['rapid'], 
                data['blitz']
            ])
            
            time.sleep(1) # Polite delay
            
        print("\n")
        
        print(f"💾 Écriture des résultats dans {output_file}...")
        with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerows(output_rows)
        
        print(f"\n✨ Traitement terminé! {len(output_rows) - 1} joueurs traités.")
        
    except Exception as e:
        print(f"❌ Une erreur inattendue est survenue: {e}")

if __name__ == "__main__":
    input_file = "web-scrapper-fide/fide_ids.csv"
    output_file = "web-scrapper-fide/fide_elo.csv"
    process_csv(input_file, output_file)