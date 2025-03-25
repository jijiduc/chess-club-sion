import requests
from bs4 import BeautifulSoup
import csv
import time
import sys
import itertools

def animate_loading():
    """
    Génère une animation de chargement simple
    """
    for c in itertools.cycle(['|', '/', '-', '\\']):
        if getattr(animate_loading, 'stop', False):
            break
        sys.stdout.write('\rChargement ' + c)
        sys.stdout.flush()
        time.sleep(0.1)
    sys.stdout.write('\rTerminé!     \n')

def get_standard_elo(fide_id):
    """
    Récupère la valeur Elo standard d'un joueur à partir de son ID FIDE
    """
    print(f"\rRécupération des données pour l'ID FIDE: {fide_id}...")
    url = f"https://ratings.fide.com/profile/{fide_id}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Vérifie si la requête a réussi
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Recherche la div qui contient le classement standard (nouvelle structure)
        standard_div = soup.find('div', class_='profile-standart profile-game')
        
        if standard_div:
            # Le premier paragraphe contient la valeur Elo
            elo_paragraphs = standard_div.find_all('p')
            if elo_paragraphs and len(elo_paragraphs) > 0:
                # La première balise <p> contient la valeur Elo
                elo_value = elo_paragraphs[0].text.strip()
                return elo_value
        
        # Si la méthode principale échoue, essayons d'autres approches
        # Méthode alternative 1: chercher toutes les divs de jeu
        game_divs = soup.find_all('div', class_='profile-game')
        for div in game_divs:
            # Vérifier si c'est la div de jeu standard
            img = div.find('img', alt='standart')
            if img:
                paragraphs = div.find_all('p')
                if paragraphs and len(paragraphs) > 0:
                    elo_value = paragraphs[0].text.strip()
                    return elo_value
        
        # Méthode alternative 2: recherche par texte
        all_paragraphs = soup.find_all('p')
        for i, p in enumerate(all_paragraphs):
            if p.text.strip().isdigit():  # Si c'est un nombre
                next_p = all_paragraphs[i+1] if i+1 < len(all_paragraphs) else None
                if next_p and "STANDARD" in next_p.text:
                    return p.text.strip()
        
        return "Non trouvé"
    
    except Exception as e:
        return f"Erreur: {str(e)}"

def process_csv(input_file, output_file):
    """
    Traite un fichier CSV contenant des ID FIDE et écrit un nouveau fichier
    avec les ID et leurs valeurs Elo correspondantes
    """
    print(f"📂 Ouverture du fichier d'entrée: {input_file}")
    print("🔍 Analyse du fichier CSV...")
    with open(input_file, 'r', newline='') as csvfile:
        reader = csv.reader(csvfile)
        rows = list(reader)  # Convertir en liste pour pouvoir accéder aux en-têtes
        
        # Déterminer si le fichier a un en-tête
        has_header = False
        if len(rows) > 0:
            first_row = rows[0]
            # Si la première ligne semble être un en-tête (contient des mots comme "ID", "FIDE", etc.)
            if any(isinstance(cell, str) and ("ID" in cell.upper() or "FIDE" in cell.upper()) for cell in first_row):
                has_header = True
                print("✅ En-tête détecté dans le fichier d'entrée")
            else:
                print("ℹ️ Aucun en-tête détecté, un en-tête standard sera ajouté")
        
        # Préparer les données pour l'écriture
        output_rows = []
        if has_header:
            # Ajouter un en-tête au fichier de sortie
            header = first_row.copy()
            header.append("Elo Standard")
            output_rows.append(header)
            start_idx = 1  # Commencer à partir de la deuxième ligne
        else:
            # Ajouter un en-tête générique
            output_rows.append(["FIDE ID", "Elo Standard"])
            start_idx = 0  # Commencer dès la première ligne
        
        # Traiter chaque ligne
        total_rows = len(rows) - start_idx
        print(f"🚀 Début du traitement de {total_rows} joueurs...")
        
        for i, row in enumerate(rows[start_idx:], 1):
            fide_id = row[0].strip()  # Supposons que l'ID FIDE est dans la première colonne
            
            # Afficher la progression avec une barre de chargement simple
            progress = int((i / total_rows) * 40)
            sys.stdout.write('\r')
            sys.stdout.write(f"[{'=' * progress}{' ' * (40 - progress)}] {i}/{total_rows} ({int(i/total_rows*100)}%) ")
            sys.stdout.flush()
            
            elo = get_standard_elo(fide_id)
            
            # Afficher le résultat de chaque recherche
            if elo and elo != "Non trouvé" and not elo.startswith("Erreur"):
                print(f"\r✅ ID {fide_id}: Elo trouvé = {elo}")
            else:
                print(f"\r❌ ID {fide_id}: {elo}")
            
            new_row = row.copy()
            new_row.append(elo)
            output_rows.append(new_row)
            
            # Pause pour éviter de surcharger le serveur
            print(f"⏳ Pause avant la prochaine requête...")
            # Animation pendant la pause
            for _ in range(10):  # 10 points pour 1 seconde
                sys.stdout.write('\r⏳ Pause avant la prochaine requête' + '.' * (_ % 4))
                sys.stdout.flush()
                time.sleep(0.1)
            print()
    
    # Écrire les résultats dans un nouveau fichier CSV
    print(f"💾 Écriture des résultats dans le fichier {output_file}...")
    
    # Animation pendant l'écriture
    for _ in range(15):
        sys.stdout.write('\r📊 Finalisation ' + '[' + '=' * (_ % 10) + ' ' * (9 - (_ % 10)) + ']')
        sys.stdout.flush()
        time.sleep(0.1)
    
    with open(output_file, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerows(output_rows)
    
    print(f"\n✨ Traitement terminé avec succès! ✨")
    print(f"📄 {len(output_rows) - 1} joueurs traités")
    print(f"📁 Résultats enregistrés dans {output_file}")

if __name__ == "__main__":
    input_file = "fide_ids.csv"
    output_file = "fide_elo.csv"
    process_csv(input_file, output_file)