import csv
import re
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
def update_player_match(match):
    player_block = match.group(0)
    
    # Extract FIDE ID
    fide_match = re.search(r'codeFIDE:\s*"(\d+)"', player_block)
    if not fide_match:
        return player_block
        
    fide_id = fide_match.group(1)
    
    if fide_id in elo_data:
        elos = elo_data[fide_id]
        print(f"Updating {fide_id}: Std {elos['std']}, Rapid {elos['rapid']}, Blitz {elos['blitz']}")
        
        # Update Standard Elo
        player_block = re.sub(r'elo:\s*\d+', f'elo: {elos["std"]}', player_block)
        
        # Add/Update Rapid/Blitz
        if 'eloRapid:' not in player_block:
            # Insert after elo. We look for the line with elo: ...,
            # We assume the formatting 'elo: 1234,'
            player_block = re.sub(
                r'(elo:\s*\d+,)', 
                f'\1\n          eloRapid: {elos["rapid"]},\n          eloBlitz: {elos["blitz"]},', 
                player_block
            )
        else:
            # Update existing
            player_block = re.sub(r'eloRapid:\s*\d+', f'eloRapid: {elos["rapid"]}', player_block)
            player_block = re.sub(r'eloBlitz:\s*\d+', f'eloBlitz: {elos["blitz"]}', player_block)
            
    return player_block

# Regex to match player objects
# Assuming they start with { and contain nom: "..."
pattern = r'\{\s*nom:[^}]+\}'
content = re.sub(pattern, update_player_match, content)

# Re-define interfaces cleanly
interface_def = """export interface Player {
  nom: string
  prenom: string
  codeFIDE: string
  elo: number
  eloRapid?: number
  eloBlitz?: number
  federation: string
  note?: string
  category?: string
}

export interface Category {
  title: string
  players: Player[]
}"""

# Remove existing interfaces (rudimentary cleanup)
# We remove lines starting with 'export interface' and the block until '}'
# But since regex across lines is tricky without DOTALL, and we want to be safe:
# We will just replace the known structure if possible, or just strip the top part if we knew where data starts.
# The file has imports at the top? No, just interfaces.
# Let's look at the file start.
# It starts with interfaces. Then `export const membresData`.
# We can split the file at `export const membresData`.

parts = content.split('export const membresData')
if len(parts) == 2:
    data_part = 'export const membresData' + parts[1]
    new_content = interface_def + "\n\n" + data_part
else:
    # Fallback: just prepend if we couldn't split correctly (unlikely)
    print("Could not cleanly split file. Appending interfaces at top might duplicate.")
    new_content = interface_def + "\n" + content

# Write back
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")
