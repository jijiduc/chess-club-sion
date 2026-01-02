import re
import csv
import os

csv_path = 'web-scrapper-fide/fide_elo.csv'
ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print(f"Updating {ts_path} using data from {csv_path}...")

# Load CSV data
elo_data = {}
if os.path.exists(csv_path):
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            elo_data[row['FIDE ID']] = {
                'std': int(row['Elo Standard']) if row['Elo Standard'].isdigit() else 0,
                'rapid': int(row['Elo Rapid']) if row['Elo Rapid'].isdigit() else 0,
                'blitz': int(row['Elo Blitz']) if row['Elo Blitz'].isdigit() else 0
            }
    print(f"Loaded {len(elo_data)} records from CSV.")
else:
    print("CSV file not found!")
    exit(1)

# Read TS file
with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to update player data
def update_player_block(match):
    block = match.group(0)
    
    # Extract FIDE ID
    fide_match = re.search(r'codeFIDE:\s*"(\d+)"', block)
    if not fide_match:
        return block
        
    fide_id = fide_match.group(1)
    
    if fide_id in elo_data:
        elos = elo_data[fide_id]
        print(f"Updating {fide_id}: Std {elos['std']}, Rapid {elos['rapid']}, Blitz {elos['blitz']}")
        
        # Update Standard Elo
        if 'elo:' in block:
             block = re.sub(r'elo:\s*\d+', f'elo: {elos["std"]}', block)
        
        # Add/Update Rapid
        if 'eloRapid:' in block:
            block = re.sub(r'eloRapid:\s*\d+', f'eloRapid: {elos["rapid"]}', block)
        else:
            # Insert after elo:
            block = re.sub(r'(elo:\s*\d+,)', f'\1\n          eloRapid: {elos["rapid"]},', block)
            
        # Add/Update Blitz
        if 'eloBlitz:' in block:
            block = re.sub(r'eloBlitz:\s*\d+', f'eloBlitz: {elos["blitz"]}', block)
        else:
            # Insert after eloRapid if present, else elo
            if 'eloRapid:' in block:
                block = re.sub(r'(eloRapid:\s*\d+,)', f'\1\n          eloBlitz: {elos["blitz"]},', block)
            else:
                block = re.sub(r'(elo:\s*\d+,)', f'\1\n          eloBlitz: {elos["blitz"]},', block)
            
    return block

# Robust regex to match player blocks
# Matches 8 spaces + { ... until ... 8 spaces + },?
# Uses DOTALL to match newlines inside the block
pattern = r'(^\s{8}\{\n.*?\n\s{8}\},?)'
new_content = re.sub(pattern, update_player_block, content, flags=re.DOTALL | re.MULTILINE)

# Write back
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")