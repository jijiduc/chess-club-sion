import csv
import re
import os
import json

history_csv_path = 'web-scrapper-fide/fide_history.csv'
ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print(f"Injecting history into {ts_path}...")

# Load History Data
history_data = {}
if os.path.exists(history_csv_path):
    with open(history_csv_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        try:
            headers = next(reader) # Skip header
            for row in reader:
                if len(row) >= 2:
                    fide_id = row[0]
                    try:
                        history_json = json.loads(row[1])
                        history_data[fide_id] = history_json
                    except:
                        print(f"Error parsing JSON for {fide_id}")
        except StopIteration:
            pass
else:
    print("History CSV not found!")
    exit(1)

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Interface (Idempotent)
if 'history?:' not in content:
    content = content.replace(
        'category?: string',
        'category?: string\n  history?: { period: string; std: number; rapid: number; blitz: number }[]'
    )

# 2. Clean existing history (Double check, though fix_members_mess.py should have handled it)
# We remove any `history: [...],` block.
content = re.sub(r'history:\s*\[.*?\]', '', content, flags=re.DOTALL)

# 3. Inject Data
def inject_callback(match):
    # Match is codeFIDE: "ID",
    full_match = match.group(0) # codeFIDE: "ID",
    fide_id = match.group(2) # ID
    
    if fide_id in history_data:
        hist = history_data[fide_id]
        hist_str = json.dumps(hist)
        # We append history WITH a comma, because we know other fields (elo, etc) follow.
        return f'codeFIDE: "{fide_id}",\n          history: {hist_str},'
    
    return full_match

# Match codeFIDE: "ID", (expecting comma)
# We use a robust regex that allows whitespace
new_content = re.sub(r'(codeFIDE:\s*"(\d+)",)', inject_callback, content)

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done.")