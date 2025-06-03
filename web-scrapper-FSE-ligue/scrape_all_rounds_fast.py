#!/usr/bin/env python3
import os
import sys
import json
import shutil
import time

# Importer directement le code depuis le fichier avec tirets
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
# Lire le fichier et modifier pour ne pas récupérer les ELO depuis les profils
with open('FSE-ligue-data-extractor.py', 'r') as f:
    code = f.read()
    # Remplacer l'appel du main par pass
    code = code.replace('if __name__ == "__main__":\n    main()', 'if __name__ == "__main__":\n    pass')
    # Désactiver la récupération des ELO depuis les profils pour gagner du temps
    code = code.replace('if home_player_link:', 'if False and home_player_link:')
    code = code.replace('if away_player_link:', 'if False and away_player_link:')
    exec(code)

def clean_old_files():
    """Supprime les anciens fichiers CSV dans le dossier"""
    print("🧹 Nettoyage des anciens fichiers...")
    files_to_delete = []
    
    # Lister tous les fichiers CSV dans le dossier
    for file in os.listdir('.'):
        if file.endswith('.csv') and ('round' in file or 'data' in file):
            files_to_delete.append(file)
    
    # Supprimer les fichiers
    for file in files_to_delete:
        try:
            os.remove(file)
            print(f"  ✓ Supprimé: {file}")
        except Exception as e:
            print(f"  ✗ Erreur lors de la suppression de {file}: {e}")

def main():
    print("🏆 Récupération automatique des données CSE Sion (version rapide) 🏆")
    print("=" * 50)
    
    # Nettoyage des anciens fichiers
    clean_old_files()
    
    # URLs pour les 4 rondes
    urls = {
        "Sion 1": {
            1: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhZ3J1cHBlPTMwNCZhbGlnYT0zJmFyb3VuZD0x",
            2: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhbGlnYT0zJmFncnVwcGU9MzA0JmFyb3VuZD0y",
            3: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhbGlnYT0zJmFncnVwcGU9MzA0JmFyb3VuZD0z",
            4: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhbGlnYT0zJmFncnVwcGU9MzA0JmFyb3VuZD00"
        },
        "Sion 2": {
            1: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhZ3J1cHBlPTUxNCZhbGlnYT01JmFyb3VuZD0x",
            2: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhbGlnYT01JmFncnVwcGU9NTE0JmFyb3VuZD0y",
            3: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhbGlnYT01JmFncnVwcGU9NTE0JmFyb3VuZD0z",
            4: "https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhZ3J1cHBlPTUxNCZhbGlnYT01JmFyb3VuZD00"
        }
    }
    
    # Créer un dossier pour stocker les données
    data_dir = "cse_data_2025"
    if os.path.exists(data_dir):
        shutil.rmtree(data_dir)
    os.makedirs(data_dir)
    
    all_data = {}
    
    # Scrapper chaque équipe et chaque ronde
    for team, rounds in urls.items():
        print(f"\n📊 Traitement de {team}")
        print("-" * 30)
        
        all_data[team] = {}
        
        for round_num, url in rounds.items():
            print(f"\n🔄 Ronde {round_num}...")
            start_time = time.time()
            
            # Scrapper les données
            data = scrape_tournament_data(url)
            
            if data:
                # Sauvegarder les données CSV dans le dossier
                filename = f"{team.replace(' ', '_')}_round{round_num}"
                success, files = save_to_csv(data, os.path.join(data_dir, filename))
                
                if success:
                    elapsed = time.time() - start_time
                    print(f"✅ Ronde {round_num} sauvegardée en {elapsed:.1f}s")
                    all_data[team][f"round{round_num}"] = data
                else:
                    print(f"❌ Erreur lors de la sauvegarde de la ronde {round_num}")
            else:
                print(f"❌ Erreur lors du scrapping de la ronde {round_num}")
    
    # Sauvegarder toutes les données dans un fichier JSON consolidé
    json_path = os.path.join(data_dir, "all_rounds_data.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(all_data, f, ensure_ascii=False, indent=2)
    print(f"\n📁 Données JSON consolidées sauvegardées dans: {json_path}")
    
    # Afficher un résumé
    print("\n" + "=" * 50)
    print("📊 RÉSUMÉ DES DONNÉES RÉCUPÉRÉES")
    print("=" * 50)
    
    for team, rounds_data in all_data.items():
        print(f"\n{team}:")
        for round_key, round_data in rounds_data.items():
            if round_data:
                print(f"  {round_key}: {len(round_data.get('matches', []))} matchs, "
                      f"{sum(len(m.get('boards', [])) for m in round_data.get('matches', []))} parties")
    
    print(f"\n✅ Toutes les données ont été sauvegardées dans le dossier: {data_dir}/")
    print("🎉 Récupération terminée avec succès!")

if __name__ == "__main__":
    main()