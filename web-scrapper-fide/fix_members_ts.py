import csv
import re
import os

csv_path = 'web-scrapper-fide/fide_elo.csv'
ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print(f"Fixing {ts_path} using data from {csv_path}...")

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

def fix_player_block(match):
    block = match.group(0)
    
    # Extract immutable info
    nom_m = re.search(r'nom:\s*"([^"]+)"', block)
    prenom_m = re.search(r'prenom:\s*"([^"]+)"', block)
    code_m = re.search(r'codeFIDE:\s*"([^"]+)"', block)
    fed_m = re.search(r'federation:\s*"([^"]+)"', block)
    cat_m = re.search(r'category:\s*"([^"]+)"', block)
    note_m = re.search(r'note:\s*"([^"]+)"', block) # Capture note if present
    
    if not (nom_m and prenom_m and code_m and fed_m):
        return block # Can't parse critical fields, leave as is
        
    nom = nom_m.group(1)
    prenom = prenom_m.group(1)
    code = code_m.group(1)
    fed = fed_m.group(1)
    
    # Get ratings
    ratings = elo_data.get(code, {'std': 0, 'rapid': 0, 'blitz': 0})
    
    # Reconstruct block
    lines = [
        "        {",
        f'          nom: "{nom}",',
        f'          prenom: "{prenom}",',
        f'          codeFIDE: "{code}",',
        f'          elo: {ratings["std"]},',
        f'          eloRapid: {ratings["rapid"]},',
        f'          eloBlitz: {ratings["blitz"]},',
        f'          federation: "{fed}"'
    ]
    
    if cat_m:
        lines[-1] += "," # Add comma to previous line
        lines.append(f'          category: "{cat_m.group(1)}"')
        
    if note_m:
        lines[-1] += "," # Add comma to previous line
        lines.append(f'          note: "{note_m.group(1)}"')
        
    lines.append("        }")
    
    return "\n".join(lines)

# Match everything between { and }, non-greedy
# We use DOTALL (. matches newline)
pattern = r'\{\s*nom:[^}]+\}'
new_content = re.sub(pattern, fix_player_block, content, flags=re.DOTALL)

# Fix the imports/interfaces at the top if they are messy
# The previous script might have duplicated them or messed them up.
# We'll just ensure the top of the file is clean.

header = """
export interface Player {
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
}

export const membresData: { categories: Category[] } = {"""

# Find where data starts
if "export const membresData" in new_content:
    # Split and keep the part after the declaration
    parts = new_content.split("export const membresData: { categories: Category[] } = {")
    if len(parts) > 1:
        body = parts[1]
    else:
        # Try simpler split if type annotation was different
        parts = new_content.split("export const membresData")
        # Find the first {
        rest = parts[1]
        first_brace = rest.find('{')
        body = rest[first_brace+1:]

    final_content = header + body
else:
    # Should not happen if file is mostly intact
    final_content = new_content

# Write back
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Fixed file structure and updated data.")
