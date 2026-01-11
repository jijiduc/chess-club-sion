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
            # Handle potential missing columns if old CSV
            name = row.get('Name', '')
            federation = row.get('Federation', 'SUI')
            
            elo_data[row['FIDE ID']] = {
                'name': name,
                'federation': federation,
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

# 1. Update Existing Players
def update_player_block(match):
    block = match.group(0)
    
    # Extract FIDE ID
    fide_match = re.search(r'codeFIDE:\s*"(\d+)"', block)
    if not fide_match:
        return block
        
    fide_id = fide_match.group(1)
    
    if fide_id in elo_data:
        data = elo_data[fide_id]
        # print(f"Updating {fide_id}...") # Verbose
        
        # Update Standard Elo
        if 'elo:' in block:
             block = re.sub(r'elo:\s*\d+', f'elo: {data["std"]}', block)
        
        # Add/Update Rapid
        if 'eloRapid:' in block:
            block = re.sub(r'eloRapid:\s*\d+', f'eloRapid: {data["rapid"]}', block)
        else:
            # Insert after elo:
            block = re.sub(r'(elo:\s*\d+,)', f'\1\n          eloRapid: {data["rapid"]},', block)
            
        # Add/Update Blitz
        if 'eloBlitz:' in block:
            block = re.sub(r'eloBlitz:\s*\d+', f'eloBlitz: {data["blitz"]}', block)
        else:
            # Insert after eloRapid if present, else elo
            if 'eloRapid:' in block:
                block = re.sub(r'(eloRapid:\s*\d+,)', f'\1\n          eloBlitz: {data["blitz"]},', block)
            else:
                block = re.sub(r'(elo:\s*\d+,)', f'\1\n          eloBlitz: {data["blitz"]},', block)
            
    return block

# Robust regex to match player blocks
# Matches 8 spaces + { ... until ... 8 spaces + },?
# Uses DOTALL to match newlines inside the block
pattern = r'(^\s{8}\{\n.*?\n\s{8}\},?)'
new_content = re.sub(pattern, update_player_block, content, flags=re.DOTALL | re.MULTILINE)

# 2. Find Missing Players
existing_ids = set(re.findall(r'codeFIDE:\s*"(\d+)"', new_content))
csv_ids = set(elo_data.keys())
missing_ids = csv_ids - existing_ids

if missing_ids:
    print(f"Found {len(missing_ids)} new players to insert: {missing_ids}")
    
    for fide_id in missing_ids:
        player = elo_data[fide_id]
        
        # If name is empty (old CSV), we skip insertion to avoid bad data
        if not player['name']:
            print(f"Skipping {fide_id} (No Name found in CSV). Run elo_scrapper.py first.")
            continue

        # Split Name
        # Format usually "SURNAME, Firstname"
        name_parts = player['name'].split(',')
        if len(name_parts) >= 2:
            nom = name_parts[0].strip()
            # If all caps, title case it
            if nom.isupper():
                nom = nom.title()
                
            prenom = name_parts[1].strip()
            if prenom.isupper():
                prenom = prenom.title()
        else:
            # Fallback
            parts = player['name'].split()
            if len(parts) > 1:
                nom = parts[0]
                prenom = " ".join(parts[1:])
            else:
                nom = player['name']
                prenom = ""
        
        # Determine Category
        std = player['std']
        category_title = "progresse vers 1er classement" # Default
        if std > 2200: category_title = "Experts (>2200)"
        elif std > 2000: category_title = "Classe A (>2000)"
        elif std > 1800: category_title = "Classe B (>1800)"
        elif std >= 1600: category_title = "Classe C (<1800)"
        elif std > 0: category_title = "Classe D (<1600)"
        
        # Sanitize Federation
        fed = player['federation']
        if not fed or "Chess" in fed or "Switzerland" in fed:
            fed = "SUI"
        elif "France" in fed:
            fed = "FRA"
        
        print(f"Inserting {prenom} {nom} ({fide_id}, Elo {std}) into '{category_title}'")
        
        # Construct Player Block
        # Ensure correct indentation
        new_block = f"""        {{
          nom: \"{nom}\",
          prenom: \"{prenom}\",
          codeFIDE: \"{fide_id}\",
          history: [],
          
          elo: {std},
          eloRapid: {player['rapid']},
          eloBlitz: {player['blitz']},
          federation: \"{fed}\"
        }},"""
        
        # Find insertion point
        cat_regex = re.compile(r'(title:\s*"' + re.escape(category_title) + r'",\s*players:\s*\[)', re.DOTALL)
        match = cat_regex.search(new_content)
        
        if match:
            # Insert after the [
            insert_pos = match.end()
            new_content = new_content[:insert_pos] + "\n" + new_block + new_content[insert_pos:]
        else:
            print(f"Could not find category '{category_title}'! Inserting in 'progresse vers 1er classement' as fallback.")
            cat_regex = re.compile(r'(title:\s*"progresse vers 1er classement",\s*players:\s*\[)', re.DOTALL)
            match = cat_regex.search(new_content)
            if match:
                insert_pos = match.end()
                new_content = new_content[:insert_pos] + "\n" + new_block + new_content[insert_pos:]
            else:
                 print("Critical: Could not find any category to insert!")

# Write back
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")
