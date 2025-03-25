import requests
from bs4 import BeautifulSoup
import csv
import sys
import time
import itertools
import re
import os

# Cache pour stocker les Elos déjà récupérés
player_elo_cache = {}

def get_player_current_elo(player_url, session=None):
    """Récupère le Elo actuel d'un joueur depuis sa page de profil"""
    if not session:
        session = requests.Session()
    
    # Construire l'URL complète
    base_url = "https://www.swisschess.ch/"
    full_url = base_url + player_url
    
    try:
        print(f"\r🔍 Récupération du Elo depuis: {full_url}...")
        headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
        response = session.get(full_url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Chercher l'Elo dans le format "Elo: XXXX"
        elo_h3 = soup.find('h3', string=re.compile(r'Elo:'))
        if elo_h3:
            elo_match = re.search(r'Elo:\s*(\d+)', elo_h3.text)
            if elo_match:
                return int(elo_match.group(1))
        
        return None
    except Exception as e:
        print(f"\r❌ [DEBUG] Erreur récupération Elo: {str(e)}")
        return None

def get_cached_player_elo(player_url, session=None):
    """Récupère le Elo d'un joueur depuis le cache ou depuis sa page de profil"""
    if player_url in player_elo_cache:
        return player_elo_cache[player_url]
    
    elo = get_player_current_elo(player_url, session)
    if elo:
        player_elo_cache[player_url] = elo
    
    return elo

def scrape_tournament_data(url):
    print(f"\r🔍 Récupération des données depuis: {url}...")
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"}
    
    try:
        # Créer une session pour réutiliser la connexion
        session = requests.Session()
        response = session.get(url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        print("\n[DEBUG] HTML récupéré avec succès")

        tournament_data = {
            "league": "",
            "round": "",
            "rankings": [],
            "matches": []
        }

        # 1. Extraction de la ligue
        h2s = soup.find_all("h2")
        print(f"[DEBUG] Nombre de h2 trouvés: {len(h2s)}")
        for i, h2 in enumerate(h2s):
            print(f"[DEBUG] h2 #{i}: {h2.get_text(strip=True)}")
        
        if len(h2s) >= 2:
            tournament_data["league"] = h2s[0].get_text(strip=True)
            print(f"[DEBUG] Ligue extraite: {tournament_data['league']}")
        else:
            print("\r⚠️ [DEBUG] Balises h2 de ligue non trouvées")
        
        # 2. Extraction de la ronde
        round_h3 = None
        for h3 in soup.find_all("h3"):
            h3_text = h3.get_text(strip=True)
            print(f"[DEBUG] h3 trouvé: {h3_text}")
            if re.search(r"[rR]onde", h3_text):
                round_h3 = h3
                print(f"[DEBUG] Section ronde trouvée: {h3_text}")
                break
        
        if round_h3:
            round_text = round_h3.get_text(strip=True)
            round_match = re.search(r"\d+", round_text)
            if round_match:
                tournament_data["round"] = round_match.group()
                print(f"[DEBUG] Numéro de ronde extrait: {tournament_data['round']}")
            else:
                tournament_data["round"] = "1"
                print("\r⚠️ [DEBUG] Format de ronde non reconnu, défaut à 1")
        else:
            tournament_data["round"] = "1"
            print("\r⚠️ [DEBUG] Balise h3 de ronde non trouvée, défaut à 1")

        # 3. Extraction des classements
        print("[DEBUG] Recherche des tables de classement...")
        ranking_tables = [table for table in soup.find_all("table", class_="resulttable") 
                        if "Rang" in table.get_text()]
        print(f"[DEBUG] Nombre de tables de classement trouvées: {len(ranking_tables)}")
        
        if ranking_tables:
            rankings_table = ranking_tables[0]
            rows = rankings_table.find_all("tr")
            print(f"[DEBUG] Nombre de lignes dans la table de classement: {len(rows)}")
            
            for i, row in enumerate(rows[1:]):  # Saute l'en-tête
                cols = [td.get_text(strip=True) for td in row.find_all("td")]
                print(f"[DEBUG] Ligne de classement #{i+1}: {cols}")
                if len(cols) >= 4:
                    tournament_data["rankings"].append({
                        "rank": cols[0].rstrip('.'),
                        "team": cols[1],
                        "matchPoints": cols[2],
                        "gamePoints": cols[3]
                    })
            
            print(f"[DEBUG] Nombre d'équipes classées extraites: {len(tournament_data['rankings'])}")
        else:
            print("\r⚠️ [DEBUG] Tableau des classements introuvable")

        # 4. Extraction des matchs
        print("[DEBUG] Recherche des tables de matchs...")
        match_tables = []
        
        # Chercher les tables qui suivent immédiatement la section "Ronde"
        print("[DEBUG] Recherche de tables après la section 'Ronde'...")
        for h3 in soup.find_all("h3"):
            if "Ronde" in h3.get_text():
                next_container = h3.find_next("div", class_="table-container")
                if next_container:
                    print("[DEBUG] Container de table trouvé après 'Ronde'")
                    match_table = next_container.find("table", class_="resulttable")
                    if match_table:
                        print("[DEBUG] Table de matchs trouvée après 'Ronde'")
                        match_tables.append(match_table)
                        break
        
        # Si l'approche ci-dessus échoue, utiliser une détection basée sur le contenu
        if not match_tables:
            print("[DEBUG] Utilisation de la détection basée sur le contenu...")
            for table in soup.find_all("table", class_="resulttable"):
                rows = table.find_all("tr")
                table_text = table.get_text()
                
                print(f"[DEBUG] Table potentielle: {len(rows)} lignes, contient '-': {''-'' in table_text}, contient ':': {'':'' in table_text}, contient 'Rang': {'"Rang"' in table_text}")
                
                if (4 <= len(rows) <= 8 and "-" in table_text and ":" in table_text and not "Rang" in table_text):
                    print("[DEBUG] Table de matchs identifiée par structure")
                    match_tables.append(table)
                    break
        
        print(f"[DEBUG] Nombre de tables de matchs trouvées: {len(match_tables)}")
        
        if match_tables:
            matches_table = match_tables[0]
            rows = matches_table.find_all("tr")
            print(f"[DEBUG] Nombre de lignes dans la table de matchs: {len(rows)}")
            
            for i, row in enumerate(rows):
                tds = row.find_all("td")
                if len(tds) >= 6:
                    home_team = tds[0].get_text(strip=True)
                    away_team = tds[2].get_text(strip=True)
                    score_home = tds[3].get_text(strip=True)
                    score_away = tds[5].get_text(strip=True)
                    
                    print(f"[DEBUG] Match #{i+1}: {home_team} vs {away_team}, score: {score_home}-{score_away}")
                    
                    if (home_team and away_team and 
                        tds[1].get_text(strip=True) == "-" and 
                        tds[4].get_text(strip=True) == ":"):
                        tournament_data["matches"].append({
                            "homeTeam": home_team,
                            "awayTeam": away_team,
                            "score": f"{score_home}-{score_away}",
                            "boards": []
                        })
            
            print(f"[DEBUG] Nombre de matchs extraits: {len(tournament_data['matches'])}")
        else:
            print("\r⚠️ [DEBUG] Tableau des matchs introuvable")

        # 5. Extraction des résultats individuels (boards)
        print("\n[DEBUG] === EXTRACTION DES BOARDS ===")
        
        # Localiser toutes les tables après la section "Einzelresultate"
        board_tables = []
        
        # Trouver la section "Einzelresultate"
        einzelresultate_h3 = None
        for h3 in soup.find_all("h3"):
            if "Einzelresultate" in h3.get_text():
                einzelresultate_h3 = h3
                print(f"[DEBUG] Section 'Einzelresultate' trouvée à la ligne {h3.sourceline}")
                break
        
        if einzelresultate_h3:
            print("[DEBUG] Recherche des tables après Einzelresultate...")
            
            # Lister tous les containers de tables dans le document
            all_containers = soup.find_all("div", class_="table-container")
            print(f"[DEBUG] Nombre total de containers de tables: {len(all_containers)}")
            
            # Trouver tous les containers qui suivent Einzelresultate
            board_containers = []
            for container in all_containers:
                previous_h3 = container.find_previous("h3")
                if previous_h3 and "Einzelresultate" in previous_h3.get_text():
                    board_containers.append(container)
            
            print(f"[DEBUG] Nombre de containers après Einzelresultate: {len(board_containers)}")
            
            # Extraire les tables de ces containers
            for container in board_containers:
                table = container.find("table", class_="resulttable")
                if table:
                    board_tables.append(table)
            
            print(f"[DEBUG] Nombre de tables de boards trouvées: {len(board_tables)}")
            
            # Afficher la structure des tables trouvées
            for i, table in enumerate(board_tables):
                rows = table.find_all("tr")
                headers = [th.get_text(strip=True) for th in table.find_all("th")]
                print(f"[DEBUG] Table #{i+1}: {len(rows)} lignes, en-têtes: {headers if headers else 'aucun'}")
                
                # Vérifier les deux premières lignes
                if len(rows) >= 1:
                    print(f"[DEBUG] Première ligne: {rows[0].get_text(strip=True)[:50]}...")
                if len(rows) >= 2:
                    print(f"[DEBUG] Deuxième ligne: {rows[1].get_text(strip=True)[:50]}...")
            
            # Vérifier si nous avons une table pour chaque match
            if len(board_tables) != len(tournament_data["matches"]):
                print(f"[DEBUG] ALERTE: Nombre de tables ({len(board_tables)}) différent du nombre de matchs ({len(tournament_data['matches'])})")
        else:
            print("[DEBUG] Section 'Einzelresultate' non trouvée")
            
            # Essayer une autre approche pour trouver les tables de boards
            print("[DEBUG] Recherche des tables après la Rangliste...")
            rangliste_h3 = None
            for h3 in soup.find_all("h3"):
                if "Rangliste" in h3.get_text():
                    rangliste_h3 = h3
                    print(f"[DEBUG] Section 'Rangliste' trouvée à la ligne {h3.sourceline}")
                    break
            
            if rangliste_h3:
                # Trouver toutes les tables après la section "Rangliste"
                for table in soup.find_all("table", class_="resulttable"):
                    if table.sourceline > rangliste_h3.sourceline:
                        # Vérifier si ce n'est pas une table déjà identifiée
                        if all(table != existing_table for existing_table in match_tables + [rankings_table]):
                            rows = table.find_all("tr")
                            print(f"[DEBUG] Table potentielle de boards: {len(rows)} lignes, ligne du document: {table.sourceline}")
                            
                            # Vérifier la présence de liens vers des joueurs (caractéristique des tables de boards)
                            player_links = [a for row in rows for cell in row.find_all("td") for a in cell.find_all("a")]
                            if player_links:
                                print(f"[DEBUG] Table avec {len(player_links)} liens vers des joueurs identifiée")
                                board_tables.append(table)
        
        # Traiter les tables de boards et les associer aux matchs
        print("\n[DEBUG] Association des tables aux matchs...")
        if len(board_tables) == len(tournament_data["matches"]):
            print("[DEBUG] Association directe par nombre égal")
            
            # Association directe par index
            for match_idx, match in enumerate(tournament_data["matches"]):
                print(f"[DEBUG] Traitement du match #{match_idx+1}: {match['homeTeam']} vs {match['awayTeam']}")
                
                table = board_tables[match_idx]
                rows = table.find_all("tr")
                
                # Debug de l'en-tête de la table
                if len(rows) >= 1:
                    header_text = rows[0].get_text(strip=True)
                    print(f"[DEBUG] En-tête de la table: {header_text[:50]}...")
                    print(f"[DEBUG] Équipe domicile dans l'en-tête: {match['homeTeam'] in header_text}")
                    print(f"[DEBUG] Équipe extérieure dans l'en-tête: {match['awayTeam'] in header_text}")
                
                # Traiter les lignes de résultats (après en-tête et attente)
                print(f"[DEBUG] Nombre total de lignes dans la table: {len(rows)}")
                boards_processed = 0
                
                for row_idx, row in enumerate(rows):
                    if row_idx <= 1:  # Sauter l'en-tête et la ligne d'attente
                        continue
                    
                    cells = row.find_all("td")
                    if len(cells) < 6:
                        print(f"[DEBUG] Ligne {row_idx+1}: Nombre insuffisant de cellules ({len(cells)})")
                        continue
                    
                    # Extraire les données des joueurs et résultats
                    home_cell = cells[0]
                    away_cell = cells[2]
                    
                    home_text = home_cell.get_text(strip=True)
                    away_text = away_cell.get_text(strip=True)
                    
                    # Récupérer les liens des joueurs pour extraire l'Elo actuel
                    home_player_link = None
                    away_player_link = None
                    home_player_a = home_cell.find('a')
                    away_player_a = away_cell.find('a')
                    
                    if home_player_a and 'href' in home_player_a.attrs:
                        home_player_link = home_player_a['href']
                    if away_player_a and 'href' in away_player_a.attrs:
                        away_player_link = away_player_a['href']
                    
                    # Extraire nom et rating
                    home_player = home_text
                    home_rating = ""
                    home_match = re.search(r'(.*?)\s*\((\d+)\)', home_text)
                    if home_match:
                        home_player = home_match.group(1).strip()
                        home_rating = home_match.group(2)
                    
                    away_player = away_text
                    away_rating = ""
                    away_match = re.search(r'(.*?)\s*\((\d+)\)', away_text)
                    if away_match:
                        away_player = away_match.group(1).strip()
                        away_rating = away_match.group(2)
                    
                    # Récupérer les Elos actuels depuis les pages de profil
                    if home_player_link:
                        current_home_elo = get_cached_player_elo(home_player_link, session)
                        if current_home_elo:
                            home_rating = str(current_home_elo)
                            print(f"[DEBUG] Elo mis à jour pour {home_player}: {home_rating}")
                    
                    if away_player_link:
                        current_away_elo = get_cached_player_elo(away_player_link, session)
                        if current_away_elo:
                            away_rating = str(current_away_elo)
                            print(f"[DEBUG] Elo mis à jour pour {away_player}: {away_rating}")
                    
                    # Extraire le résultat
                    result = f"{cells[3].get_text(strip=True)}-{cells[5].get_text(strip=True)}"
                    
                    print(f"[DEBUG] Board #{row_idx-1}: {home_player} ({home_rating}) vs {away_player} ({away_rating}), résultat: {result}")
                    
                    # Ajouter le board au match
                    match["boards"].append({
                        "homePlayer": home_player,
                        "homeRating": home_rating,
                        "result": result,
                        "awayPlayer": away_player,
                        "awayRating": away_rating
                    })
                    boards_processed += 1
                
                print(f"[DEBUG] Total de boards extraits pour ce match: {boards_processed}")
        else:
            print(f"[DEBUG] Différence entre nombre de tables ({len(board_tables)}) et de matchs ({len(tournament_data['matches'])})")
            
            # Association par présence des équipes dans l'en-tête
            print("[DEBUG] Tentative d'association par noms d'équipes...")
            
            for match_idx, match in enumerate(tournament_data["matches"]):
                home_team = match["homeTeam"]
                away_team = match["awayTeam"]
                print(f"[DEBUG] Recherche de table pour match #{match_idx+1}: {home_team} vs {away_team}")
                
                # Chercher dans toutes les tables celle qui correspond à ce match
                match_found = False
                for table_idx, table in enumerate(board_tables):
                    header_row = table.find("tr")
                    if not header_row:
                        continue
                    
                    header_text = header_row.get_text(strip=True)
                    print(f"[DEBUG] Table #{table_idx+1}, en-tête: {header_text[:50]}...")
                    
                    # Vérifier si les deux équipes sont présentes dans l'en-tête
                    if home_team in header_text and away_team in header_text:
                        print(f"[DEBUG] Correspondance trouvée dans l'en-tête!")
                        match_found = True
                        
                        # Traiter les lignes de la table
                        rows = table.find_all("tr")
                        boards_processed = 0
                        
                        for row_idx, row in enumerate(rows):
                            if row_idx <= 1:  # Sauter l'en-tête et la ligne d'attente
                                continue
                            
                            cells = row.find_all("td")
                            if len(cells) < 6:
                                continue
                            
                            # Extraire les données des joueurs et résultats
                            home_cell = cells[0]
                            away_cell = cells[2]
                            
                            home_text = home_cell.get_text(strip=True)
                            away_text = away_cell.get_text(strip=True)
                            
                            # Récupérer les liens des joueurs pour extraire l'Elo actuel
                            home_player_link = None
                            away_player_link = None
                            home_player_a = home_cell.find('a')
                            away_player_a = away_cell.find('a')
                            
                            if home_player_a and 'href' in home_player_a.attrs:
                                home_player_link = home_player_a['href']
                            if away_player_a and 'href' in away_player_a.attrs:
                                away_player_link = away_player_a['href']
                            
                            # Extraire nom et rating
                            home_player = home_text
                            home_rating = ""
                            home_match = re.search(r'(.*?)\s*\((\d+)\)', home_text)
                            if home_match:
                                home_player = home_match.group(1).strip()
                                home_rating = home_match.group(2)
                            
                            away_player = away_text
                            away_rating = ""
                            away_match = re.search(r'(.*?)\s*\((\d+)\)', away_text)
                            if away_match:
                                away_player = away_match.group(1).strip()
                                away_rating = away_match.group(2)
                            
                            # Récupérer les Elos actuels depuis les pages de profil
                            if home_player_link:
                                current_home_elo = get_cached_player_elo(home_player_link, session)
                                if current_home_elo:
                                    home_rating = str(current_home_elo)
                                    print(f"[DEBUG] Elo mis à jour pour {home_player}: {home_rating}")
                            
                            if away_player_link:
                                current_away_elo = get_cached_player_elo(away_player_link, session)
                                if current_away_elo:
                                    away_rating = str(current_away_elo)
                                    print(f"[DEBUG] Elo mis à jour pour {away_player}: {away_rating}")
                            
                            result = f"{cells[3].get_text(strip=True)}-{cells[5].get_text(strip=True)}"
                            
                            # Ajouter le board au match
                            match["boards"].append({
                                "homePlayer": home_player,
                                "homeRating": home_rating,
                                "result": result,
                                "awayPlayer": away_player,
                                "awayRating": away_rating
                            })
                            boards_processed += 1
                        
                        print(f"[DEBUG] Total de boards extraits pour ce match: {boards_processed}")
                        # Retirer cette table pour éviter de la réutiliser
                        board_tables.pop(table_idx)
                        break
                
                if not match_found:
                    print(f"[DEBUG] Aucune table trouvée pour ce match!")
        
        # Vérification finale
        print("\n[DEBUG] === RÉSUMÉ DE L'EXTRACTION ===")
        print(f"[DEBUG] Ligue: {tournament_data['league']}")
        print(f"[DEBUG] Ronde: {tournament_data['round']}")
        print(f"[DEBUG] Nombre d'équipes classées: {len(tournament_data['rankings'])}")
        print(f"[DEBUG] Nombre de matchs: {len(tournament_data['matches'])}")
        
        for i, match in enumerate(tournament_data["matches"]):
            print(f"[DEBUG] Match #{i+1}: {match['homeTeam']} vs {match['awayTeam']}, Score: {match['score']}, Boards: {len(match['boards'])}")
        
        return tournament_data

    except Exception as e:
        print(f"\r❌ [DEBUG] Erreur scraping: {str(e)}")
        import traceback
        traceback.print_exc()
        return None


def save_to_csv(data, base_filename):
    """Version robuste de l'enregistrement CSV avec logs de débogage"""
    try:
        print("[DEBUG] === SAUVEGARDE DES DONNÉES ===")
        if not data or not isinstance(data, dict):
            raise ValueError("Données invalides")
        
        base_filename = base_filename.split('.')[0]
        generated_files = []
        
        # 1. Fichier info
        info_path = f"{base_filename}_info.csv"
        print(f"[DEBUG] Création du fichier info: {info_path}")
        with open(info_path, 'w', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['league', 'round'])
            writer.writerow([data.get('league', ''), data.get('round', '')])
        generated_files.append(info_path)
        print(f"[DEBUG] Fichier info créé avec succès")
        
        # 2. Fichier rankings
        rankings_path = f"{base_filename}_rankings.csv"
        print(f"[DEBUG] Création du fichier rankings: {rankings_path}")
        with open(rankings_path, 'w', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['rank', 'team', 'matchPoints', 'gamePoints'])
            for rank in data.get('rankings', []):
                writer.writerow([
                    rank.get('rank', ''),
                    rank.get('team', ''),
                    rank.get('matchPoints', ''),
                    rank.get('gamePoints', '')
                ])
        generated_files.append(rankings_path)
        print(f"[DEBUG] Fichier rankings créé avec succès, {len(data.get('rankings', []))} équipes")
        
        # 3. Fichier matches
        matches_path = f"{base_filename}_matches.csv"
        print(f"[DEBUG] Création du fichier matches: {matches_path}")
        with open(matches_path, 'w', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['matchId', 'homeTeam', 'awayTeam', 'score'])
            for i, match in enumerate(data.get('matches', [])):
                writer.writerow([
                    i+1,
                    match.get('homeTeam', ''),
                    match.get('awayTeam', ''),
                    match.get('score', '')
                ])
        generated_files.append(matches_path)
        print(f"[DEBUG] Fichier matches créé avec succès, {len(data.get('matches', []))} matchs")
        
        # 4. Fichier boards
        boards_path = f"{base_filename}_boards.csv"
        print(f"[DEBUG] Création du fichier boards: {boards_path}")
        board_count = 0
        with open(boards_path, 'w', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(['matchId', 'boardNumber', 'homePlayer', 'homeRating', 'result', 'awayPlayer', 'awayRating'])
            for match_id, match in enumerate(data.get('matches', [])):
                print(f"[DEBUG] Match #{match_id+1}: {match.get('homeTeam')} vs {match.get('awayTeam')}, Boards: {len(match.get('boards', []))}")
                for board_num, board in enumerate(match.get('boards', [])):
                    writer.writerow([
                        match_id+1,
                        board_num+1,
                        board.get('homePlayer', ''),
                        board.get('homeRating', ''),
                        board.get('result', ''),
                        board.get('awayPlayer', ''),
                        board.get('awayRating', '')
                    ])
                    board_count += 1
        generated_files.append(boards_path)
        print(f"[DEBUG] Fichier boards créé avec succès, {board_count} boards au total")
        
        return True, generated_files
        
    except Exception as e:
        print(f"\r❌ [DEBUG] Erreur CSV: {str(e)}")
        import traceback
        traceback.print_exc()
        # Nettoyer les fichiers partiellement créés
        for file in generated_files:
            try: 
                os.remove(file)
                print(f"[DEBUG] Nettoyage du fichier partiel: {file}")
            except: 
                pass
        return False, []

def main():
    """
    Fonction principale
    """
    print("🏆 Récupérateur de données de tournoi d'échecs 🏆")
    print("------------------------------------------------")
    
    # Demander l'URL à l'utilisateur
    url = input("📌 Veuillez entrer l'URL de la page du tournoi: ")
    
    # Demander le nom du fichier de sortie
    output_file = input("💾 Veuillez entrer le nom du fichier de sortie (sans extension): ")
    # Supprimer l'extension si présente
    output_file = output_file.split('.')[0]
    
    print("\n🚀 Démarrage de la récupération des données...")
    
    # Animation pendant le chargement
    for _ in range(3):
        sys.stdout.write('\r⏳ Initialisation' + '.' * (_ + 1))
        sys.stdout.flush()
        time.sleep(0.5)
    print("\n")
    
    # Récupérer les données
    tournament_data = scrape_tournament_data(url)
    
    if tournament_data:
        print(f"Ligue détectée: {tournament_data['league']}")
        print(f"Ronde détectée: {tournament_data['round']}")
        print("\n✅ Données récupérées avec succès !")
        
        # Enregistrer dans des fichiers CSV
        print(f"\n💾 Enregistrement des données au format CSV...")
        success, csv_files = save_to_csv(tournament_data, output_file)
        
        if success:
            print("✅ Données enregistrées avec succès dans les fichiers suivants:")
            for file in csv_files:
                print(f"  - {file}")
            
            print("\n🎉 Récapitulatif des données récupérées:")
            print(f"  - Ligue: {tournament_data['league']}")
            print(f"  - Ronde: {tournament_data['round']}")
            print(f"  - Nombre d'équipes classées: {len(tournament_data['rankings'])}")
            print(f"  - Nombre de matchs: {len(tournament_data['matches'])}")
            
            total_boards = sum(len(match['boards']) for match in tournament_data['matches'])
            print(f"  - Nombre total de parties individuelles: {total_boards}")
            
            print("\n✨ Traitement terminé avec succès! ✨")
        else:
            print("❌ Échec de l'enregistrement des données")
    else:
        print("❌ Échec de la récupération des données")

if __name__ == "__main__":
    main()