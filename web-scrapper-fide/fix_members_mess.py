import re

ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'

print(f"Cleaning {ts_path}...")
with open(ts_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    stripped = line.strip()
    
    # Remove lines that are just commas or empty (except intentional empty lines if any)
    # We want to keep the structure but remove the artifact lines
    if stripped == ',' or stripped == ',,':
        continue
        
    # If the line is just whitespace, we can keep it or drop it, but let's be careful.
    # The artifacts looked like:
    #           ,
    # So strict check on stripped == ',' is good.
    
    new_lines.append(line)

content = "".join(new_lines)

# Extra safety: Remove double commas in the middle of lines if any (unlikely here)
# content = content.replace(",,", ",") 

with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned members.ts")