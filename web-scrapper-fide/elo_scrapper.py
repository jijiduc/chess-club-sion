import requests
from bs4 import BeautifulSoup
import csv
import time
import sys
import itertools
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def get_session():
    session = requests.Session()
    retry = Retry(connect=3, backoff_factor=0.5)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session

def get_all_ratings(session, fide_id):
    """
    Récupère les valeurs Elo Standard, Rapid et Blitz d'un joueur à partir de son ID FIDE
    """
    print(f"\rRécupération des données pour l'ID FIDE: {fide_id}...")
    url = f"https://ratings.fide.com/profile/{fide_id}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    ratings = {
        'std': '0',
        'rapid': '0',
        'blitz': '0'
    }
    
    try:
        response = session.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Helper pour extraire une note spécifique
        def extract_elo(class_name):
            div = soup.find('div', class_=class_name)
            if div:
                paragraphs = div.find_all('p')
                if paragraphs and len(paragraphs) > 0:
                    val = paragraphs[0].text.strip()
                    if val.isdigit():
                        return val
            return '0'

        ratings['std'] = extract_elo('profile-standart profile-game')
        ratings['rapid'] = extract_elo('profile-rapid profile-game')
        ratings['blitz'] = extract_elo('profile-blitz profile-game')
        
        return ratings
    
    except Exception as e:
        print(f"\n❌ Erreur pour {fide_id}: {str(e)}")
        return ratings

def process_csv(input_file, output_file):
    """
    Traite un fichier CSV contenant des ID FIDE et écrit un nouveau fichier
    avec les ID et leurs valeurs Elo (Standard, Rapid, Blitz)
    """
    print(f"📂 Ouverture du fichier d'entrée: {input_file}")
    print("🔍 Analyse du fichier CSV...")
    
    try:
        with open(input_file, 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            rows = list(reader)
            
        # Déterminer si le fichier a un en-tête
        has_header = False
        if len(rows) > 0:
            first_row = rows[0]
            if any(isinstance(cell, str) and ("ID" in cell.upper() or "FIDE" in cell.upper()) for cell in first_row):
                has_header = True
                print("✅ En-tête détecté dans le fichier d'entrée")
            else:
                print("ℹ️ Aucun en-tête détecté, un en-tête standard sera ajouté")
        
        # Préparer les données pour l'écriture
        output_rows = []
        if has_header:
            header = first_row.copy()
            # Clean header if it already has Elo columns from previous runs? 
            # Just simpler to overwrite/recreate columns.
            # We'll assume input is just IDs or we append to it.
            # To correspond with fix_members_ts.py expectations, we need "FIDE ID", "Elo Standard", ...
            output_rows.append(["FIDE ID", "Elo Standard", "Elo Rapid", "Elo Blitz"])
            start_idx = 1
        else:
            output_rows.append(["FIDE ID", "Elo Standard", "Elo Rapid", "Elo Blitz"])
            start_idx = 0
        
        total_rows = len(rows) - start_idx
        print(f"🚀 Début du traitement de {total_rows} joueurs...")
        
        session = get_session()
        
        for i, row in enumerate(rows[start_idx:], 1):
            fide_id = row[0].strip()
            
            # Progress bar
            progress = int((i / total_rows) * 30)
            sys.stdout.write(f"\r[{'=' * progress}{' ' * (30 - progress)}] {i}/{total_rows}")
            sys.stdout.flush()
            
            ratings = get_all_ratings(session, fide_id)
            
            output_rows.append([fide_id, ratings['std'], ratings['rapid'], ratings['blitz']])
            
            # Pause to be nice to the server
            time.sleep(1)
            
        print("\n")
        
        # Écriture des résultats
        print(f"💾 Écriture des résultats dans {output_file}...")
        with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerows(output_rows)
        
        print(f"\n✨ Traitement terminé! {len(output_rows) - 1} joueurs traités.")
        
    except FileNotFoundError:
        print(f"❌ Erreur: Le fichier {input_file} est introuvable.")
    except Exception as e:
        print(f"❌ Une erreur inattendue est survenue: {e}")

if __name__ == "__main__":
    input_file = "web-scrapper-fide/fide_ids.csv"
    output_file = "web-scrapper-fide/fide_elo.csv"
    process_csv(input_file, output_file)