#!/usr/bin/env python3
import csv
import json
from collections import defaultdict

# Structure pour stocker les données
opponents_data = {
    'Sion_1': defaultdict(list),
    'Sion_2': defaultdict(list)
}

# Lire tous les fichiers boards
for team in ['Sion_1', 'Sion_2']:
    for round_num in range(1, 5):
        filename = f'{team}_round{round_num}_boards.csv'
        try:
            with open(filename, 'r') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    if row['awayPlayer'] and row['awayPlayer'] != 'N.N.' and row['awayRating']:
                        opponents_data[team][f'round{round_num}'].append({
                            'name': row['awayPlayer'],
                            'rating': int(row['awayRating']) if row['awayRating'] else None
                        })
        except Exception as e:
            print(f"Erreur lors de la lecture de {filename}: {e}")

# Afficher les résultats
print('=== ELO DES ADVERSAIRES PAR ÉQUIPE ET PAR RONDE ===\n')

for team in ['Sion_1', 'Sion_2']:
    print(f'\n{team}:')
    total_ratings = []
    for round_num in range(1, 5):
        round_key = f'round{round_num}'
        if round_key in opponents_data[team]:
            opponents = opponents_data[team][round_key]
            ratings = [opp['rating'] for opp in opponents if opp['rating']]
            if ratings:
                avg_rating = sum(ratings) / len(ratings)
                total_ratings.extend(ratings)
                print(f'\n  Ronde {round_num}:')
                print(f'    Nombre d\'adversaires: {len(opponents)}')
                print(f'    Elo moyen: {avg_rating:.0f}')
                print(f'    Elo min: {min(ratings)}')
                print(f'    Elo max: {max(ratings)}')
                print(f'    Adversaires:')
                for opp in sorted(opponents, key=lambda x: x['rating'] if x['rating'] else 0, reverse=True):
                    print(f'      - {opp["name"]}: {opp["rating"]}')
    
    if total_ratings:
        print(f'\n  TOTAL {team}:')
        print(f'    Elo moyen sur toutes les rondes: {sum(total_ratings) / len(total_ratings):.0f}')
        print(f'    Nombre total d\'adversaires: {len(total_ratings)}')

# Créer un fichier JSON avec toutes les données
with open('opponents_elo_summary.json', 'w', encoding='utf-8') as f:
    json.dump(dict(opponents_data), f, indent=2, ensure_ascii=False)

print('\n\nFichier opponents_elo_summary.json créé avec toutes les données.')

# Créer un fichier CSV récapitulatif
with open('opponents_elo_summary.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['Équipe', 'Ronde', 'Adversaire', 'Elo'])
    
    for team in ['Sion_1', 'Sion_2']:
        for round_num in range(1, 5):
            round_key = f'round{round_num}'
            if round_key in opponents_data[team]:
                for opp in sorted(opponents_data[team][round_key], 
                                key=lambda x: x['rating'] if x['rating'] else 0, 
                                reverse=True):
                    writer.writerow([team, round_num, opp['name'], opp['rating']])

print('Fichier opponents_elo_summary.csv créé avec toutes les données.')