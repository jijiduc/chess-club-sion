import csv
import re
import os

csv_path = 'web-scrapper-fide/fide_stats.csv'
ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print(f"Correctly injecting stats into {ts_path} using data from {csv_path}...")

# Load CSV data
stats_data = {}
if os.path.exists(csv_path):
    with open(csv_path, 'r', encoding='utf-8') as f:
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
    print(f"Loaded {len(stats_data)} records from CSV.")
else:
    print("CSV file not found!")
    exit(1)

# First, restore the file to a clean state without duplicate stats injections
# We can run fix_members_ts.py first to clean up the mess!
# But fix_members_ts.py depends on fide_elo.csv.
# Let's assume fide_elo.csv is good.

# Instead of running the script via shell, let's just implement a clean regeneration here.
# We'll read the original file, extract the players (ignoring current stats), and rewrite them.

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Helper to extract basic player info
def clean_player_block(match):
    block = match.group(0)
    
    # Extract immutable info
    nom_m = re.search(r'nom:\s*"([^"]+)"', block)
    prenom_m = re.search(r'prenom:\s*"([^"]+)"', block)
    code_m = re.search(r'codeFIDE:\s*"([^"]+)"', block)
    elo_m = re.search(r'elo:\s*(\d+)', block)
    elo_r_m = re.search(r'eloRapid:\s*(\d+)', block)
    elo_b_m = re.search(r'eloBlitz:\s*(\d+)', block)
    fed_m = re.search(r'federation:\s*"([^"]+)"', block)
    cat_m = re.search(r'category:\s*"([^"]+)"', block)
    note_m = re.search(r'note:\s*"([^"]+)"', block) 
    
    if not (nom_m and prenom_m and code_m and fed_m):
        return block 
        
    nom = nom_m.group(1)
    prenom = prenom_m.group(1)
    code = code_m.group(1)
    fed = fed_m.group(1)
    elo = elo_m.group(1) if elo_m else "0"
    elo_r = elo_r_m.group(1) if elo_r_m else "0"
    elo_b = elo_b_m.group(1) if elo_b_m else "0"
    
    # Start building new block
    lines = [
        "        {",
        f'          nom: "{nom}",',
        f'          prenom: "{prenom}",',
        f'          codeFIDE: "{code}",',
        f'          elo: {elo},',
        f'          eloRapid: {elo_r},',
        f'          eloBlitz: {elo_b},',
        f'          federation: "{fed}"'
    ]
    
    if cat_m:
        lines[-1] += ","
        lines.append(f'          category: "{cat_m.group(1)}"')
        
    if note_m:
        lines[-1] += ","
        lines.append(f'          note: "{note_m.group(1)}"')
        
    # Inject Stats HERE
    if code in stats_data:
        s = stats_data[code]
        if s['white']['total'] > 0 or s['black']['total'] > 0:
            lines[-1] += ","
            lines.append("          stats: {")
            lines.append(f"            white: {{ total: {s['white']['total']}, win: {s['white']['win']}, draw: {s['white']['draw']}, loss: {s['white']['loss']} }},")
            lines.append(f"            black: {{ total: {s['black']['total']}, win: {s['black']['win']}, draw: {s['black']['draw']}, loss: {s['black']['loss']} }}")
            lines.append("          }")

    lines.append("        }")
    
    return "\n".join(lines)

# Replace all player blocks
# We need a regex that captures the whole messy block from { to }
# Since the file is messed up with multiple }, we need to be careful.
# The previous injection messed up by adding stats before }, but `block` included `}`.
# The best way to clean up is to match from `nom:` until the next `nom:` or end of array?
# Or just match `{` ... `}` if balanced?
# The current file has syntax errors like `},` then `},` then `},`.
# This regex is hard.

# Alternative strategy:
# Use `fix_members_ts.py` logic (which reconstructs from scratch using CSV) BUT include stats injection in it.
# This is safer.

# So I will rewrite this script to be `fix_and_inject.py` that does EVERYTHING from CSVs.

# ... content continues in next write_file call ...
