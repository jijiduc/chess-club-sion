import csv
import re
import os

# Paths
fide_elo_path = 'web-scrapper-fide/fide_elo.csv'
fide_stats_path = 'web-scrapper-fide/fide_stats.csv'
ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print("Starting comprehensive fix...")

# 1. Load Data
elo_data = {}
if os.path.exists(fide_elo_path):
    with open(fide_elo_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            elo_data[row['FIDE ID']] = {
                'std': int(row['Elo Standard']) if row['Elo Standard'].isdigit() else 0,
                'rapid': int(row['Elo Rapid']) if row['Elo Rapid'].isdigit() else 0,
                'blitz': int(row['Elo Blitz']) if row['Elo Blitz'].isdigit() else 0
            }

stats_data = {}
if os.path.exists(fide_stats_path):
    with open(fide_stats_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            stats_data[row['FIDE ID']] = {
                'white': {
                    'total': int(row['White Total']),
                    'win': int(row['White Win']),
                    'draw': int(row['White Draw']),
                    'loss': int(row['White Loss'])
                },
                'black': {
                    'total': int(row['Black Total']),
                    'win': int(row['Black Win']),
                    'draw': int(row['Black Draw']),
                    'loss': int(row['Black Loss'])
                }
            }

# 2. Read original file
with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# --- HEADER DEFINITIONS ---
player_interface_def = """export interface Player {
  nom: string
  prenom: string
  codeFIDE: string
  elo: number
  eloRapid?: number
  eloBlitz?: number
  federation: string
  note?: string
  category?: string
  stats?: {
    white: { total: number; win: number; draw: number; loss: number };
    black: { total: number; win: number; draw: number; loss: number };
  }
}"""

category_interface_def = """export interface Category {
  title: string
  players: Player[]
}"""

# 3. Extract the membresData object content
membres_data_match = re.search(r'export const membresData: \{ categories: Category\[\] \} = (\{.*\})\s*$', content, re.DOTALL)

if not membres_data_match:
    print("Error: Could not find 'export const membresData' block in the file.")
    exit(1)

membres_data_block = membres_data_match.group(1) # This is the { ... } content

# 4. Rebuild logic for player objects within this block
def robust_fix(match):
    block = match.group(0) # The matched player object from { to }
    
    # Extract immutable info
    nom_m = re.search(r'nom:\s*"([^"]+)"', block)
    prenom_m = re.search(r'prenom:\s*"([^"]+)"', block)
    code_m = re.search(r'codeFIDE:\s*"([^"]+)"', block)
    fed_m = re.search(r'federation:\s*"([^"]+)"', block)
    cat_m = re.search(r'category:\s*"([^"]+)"', block)
    note_m = re.search(r'note:\s*"([^"]+)"', block)
    
    if not (nom_m and prenom_m and code_m and fed_m):
        # This means the block itself is malformed or doesn't fit expected player structure
        print(f"Warning: Skipping malformed player block: {block[:100]}...")
        return block 
        
    nom = nom_m.group(1)
    prenom = prenom_m.group(1)
    code = code_m.group(1)
    fed = fed_m.group(1)
    
    # Get ELO
    elos = elo_data.get(code, {'std': 0, 'rapid': 0, 'blitz': 0})
    
    # Get Stats
    stats = stats_data.get(code)
    
    # Build String for a single player
    lines = [
        "        {", # Indentation for player object within category array
        f'          nom: "{nom}",',
        f'          prenom: "{prenom}",',
        f'          codeFIDE: "{code}",',
        f'          elo: {elos["std"]},',
        f'          eloRapid: {elos["rapid"]},',
        f'          eloBlitz: {elos["blitz"]},',
        f'          federation: "{fed}"'
    ]
    
    if cat_m:
        lines[-1] += "," # Add comma to previous line if adding more
        lines.append(f'          category: "{cat_m.group(1)}"')
    if note_m:
        lines[-1] += "," # Add comma to previous line if adding more
        lines.append(f'          note: "{note_m.group(1)}"')
        
    if stats and (stats['white']['total'] > 0 or stats['black']['total'] > 0):
        lines[-1] += "," # Add comma to previous line if adding more
        lines.append("          stats: {")
        lines.append(f"            white: {{ total: {stats['white']['total']}, win: {stats['white']['win']}, draw: {stats['white']['draw']}, loss: {stats['white']['loss']} }},")
        lines.append(f"            black: {{ total: {stats['black']['total']}, win: {stats['black']['win']}, draw: {stats['black']['draw']}, loss: {stats['black']['loss']} }}")
        lines.append("          }")
        
    lines.append("        }")
    return "\n".join(lines)

# Apply robust_fix only to the membres_data_block
# Pattern to match a player object (from '{' to '}')
# This assumes well-formed player objects within the block.
# Since the previous run corrupted it, the old regex won't work well.
# We need to match player blocks from `{` to `}`.
# This means we need to match from `nom:` until `}` or the end of the `players: [...]` array.
# The `membres_data_block` itself is valid JS structure in terms of nesting (category objects containing players arrays).

# To parse a structure like: `{ categories: [ { title: "...", players: [ { player1 }, { player2 } ] } ] }`
# I can try to find all player objects within `membres_data_block`.
# The regex `r'\{\s*nom:.*?\}(?=\s*(?:,|\s*\]))'` to find player objects.
# This pattern matches player objects as `{ ... }` followed by either `,` or `]` (end of array).
fixed_membres_data_block = re.sub(r'\{\s*nom:.*?\}(?=\s*(?:,|\s*\]))', robust_fix, membres_data_block, flags=re.DOTALL)

# Reconstruct the final content
final_content = f"{player_interface_def}\n\n{category_interface_def}\n\nexport const membresData: {{ categories: Category[] }} = {fixed_membres_data_block};"

# Write back
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("Comprehensive fix applied: members.ts regenerated with correct ELOs and stats.")