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
else:
    print("CSV file not found!")
    exit(1)

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

def inject_stats(match):
    block = match.group(0)
    
    code_m = re.search(r'codeFIDE:\s*"(\d+)"', block)
    if not code_m:
        return block
        
    fide_id = code_m.group(1)
    
    # Peel closing brace and comma
    original_block = block
    block = block.rstrip()
    suffix = ""
    if block.endswith(','):
        suffix = ","
        block = block[:-1].rstrip()
    
    if block.endswith('}') :
        block = block[:-1].rstrip()
    else:
        return original_block # Malformed block
        
    # Remove existing stats at the end
    stats_idx = block.rfind("stats: {")
    if stats_idx != -1:
        # Check if it's safe to remove (heuristic)
        # We assume stats is the last field.
        # We truncate to stats_idx
        block = block[:stats_idx].rstrip()
        if block.endswith(','):
            block = block[:-1].rstrip()

    if fide_id in stats_data:
        s = stats_data[fide_id]
        if s['white']['total'] > 0 or s['black']['total'] > 0:
            stats_str = f"""
          stats: {{
            white: {{ total: {s['white']['total']}, win: {s['white']['win']}, draw: {s['white']['draw']}, loss: {s['white']['loss']} }},
            black: {{ total: {s['black']['total']}, win: {s['black']['win']}, draw: {s['black']['draw']}, loss: {s['black']['loss']} }}
          }}"""
            
            return f"{block},\n{stats_str}\n        }}{{suffix}}"
            
    # No new stats, return block without stats (if we removed them)
    return f"{block}\n        }}{{suffix}}"

# Match player blocks
pattern = r'(^\s{{8}}{{)(.*?)(\n\s{{8}}}},?)'
new_content = re.sub(pattern, inject_stats, content, flags=re.DOTALL | re.MULTILINE)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated members.ts with stats.")