import csv
import re
import os

csv_path = 'web-scrapper-fide/fide_stats.csv'
ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print(f"Injecting stats into {ts_path} using data from {csv_path}...")

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

# Read TS file
with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Interface
# The previous attempt failed because I didn't define `interface_replacement` in the script!
# My apologies. Let's define it properly.

interface_replacement = """export interface Player {
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

# Use a regex to find and replace the interface.
# We look for "export interface Player" followed by { ... }
content = re.sub(
    r'export interface Player\s*\{[^}]+\}', 
    interface_replacement, 
    content, 
    count=1
)

# 2. Inject Data
def inject_stats(match):
    block = match.group(0)
    
    code_m = re.search(r'codeFIDE:\s*"(\d+)"', block)
    if not code_m:
        return block
        
    fide_id = code_m.group(1)
    
    if fide_id in stats_data:
        s = stats_data[fide_id]
        if s['white']['total'] > 0 or s['black']['total'] > 0:
            stats_str = f"""
          stats: {{
            white: {{ total: {s['white']['total']}, win: {s['white']['win']}, draw: {s['white']['draw']}, loss: {s['white']['loss']} }},
            black: {{ total: {s['black']['total']}, win: {s['black']['win']}, draw: {s['black']['draw']}, loss: {s['black']['loss']} }}
          }},"""
            
            # Remove trailing brace and whitespace
            block_content = block.rstrip().rstrip('}')
            # Add comma if not present
            if not block_content.strip().endswith(','):
                block_content += ","
            
            # Add stats
            block_content += stats_str + "\n        }"
            return block_content

    return block

# Match player objects
pattern = r'\{\s*nom:[^}]+\}'
new_content = re.sub(pattern, inject_stats, content, flags=re.DOTALL)

# Write back
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated members.ts with stats.")