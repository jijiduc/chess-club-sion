import csv
import os

fide_ids_path = 'web-scrapper-fide/fide_ids.csv'
fide_elo_path = 'web-scrapper-fide/fide_elo.csv'
fide_stats_path = 'web-scrapper-fide/fide_stats.csv'
player_to_remove_id = "1358251"

def remove_player_from_csv(file_path, player_id):
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return

    print(f"Removing player {player_id} from {file_path}...")
    rows = []
    with open(file_path, 'r', newline='', encoding='utf-8') as infile:
        reader = csv.reader(infile)
        header = next(reader)
        rows.append(header)
        for row in reader:
            # Assuming FIDE ID is always the first column
            if row and row[0].strip() != player_id:
                rows.append(row)
    
    with open(file_path, 'w', newline='', encoding='utf-8') as outfile:
        writer = csv.writer(outfile)
        writer.writerows(rows)
    print(f"Removed player {player_id} from {file_path}.")

remove_player_from_csv(fide_ids_path, player_to_remove_id)
remove_player_from_csv(fide_elo_path, player_to_remove_id)
remove_player_from_csv(fide_stats_path, player_to_remove_id)
