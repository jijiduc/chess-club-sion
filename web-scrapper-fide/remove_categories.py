import re

ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print(f"Removing 'category' from player objects in {ts_path}...")

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We want to remove lines like: `category: "Senioren",` or `category: "U-20"`
# But we need to be careful not to remove the Interface definition `category?: string`
# The interface is at the top. The data is in `export const membresData`.

# Strategy:
# 1. Separate interface part and data part.
# 2. Apply regex removal on data part only.

if "export const membresData" in content:
    parts = content.split("export const membresData")
    header = parts[0]
    data_part = "export const membresData" + parts[1]
    
    # Regex to remove category line in the data object
    # Matches `category: "...",` with optional trailing comma and whitespace
    # We look for `category:` followed by string literal.
    
    new_data_part = re.sub(r'^\s*category:\s*"[^"]+",?\s*$', '', data_part, flags=re.MULTILINE)
    
    # Reassemble
    final_content = header + new_data_part
    
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(final_content)
    
    print("Successfully removed categories.")
else:
    print("Could not find membresData block.")
