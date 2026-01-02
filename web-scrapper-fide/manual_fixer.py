import re

# This is a one-off script to fix the members.ts file from a corrupted state.

ts_path = 'chess-club-sion-v2/src/lib/data/members.ts'
print(f"--- Starting cleanup of {ts_path} ---")

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# This function will be called for each player object
def clean_player_block(match):
    block = match.group(0)
    
    # Remove history: [...] 
    # This is relatively safe as history is a flat array of objects
    block = re.sub(r'history:\s*\[.*?\]\s*,', '', block, flags=re.DOTALL)
    
    # Remove stats: { ... }
    # This is the tricky one. We'll find the start of the stats block and remove it.
    # We can't use simple regex due to nesting. We'll find the start and count braces.
    
    stats_start_index = block.find("stats: {")
    if stats_start_index != -1:
        
        # Find the start of the stats object itself
        brace_start_index = block.find("{ ", stats_start_index)
        if brace_start_index != -1:
            
            brace_count = 1
            current_pos = brace_start_index + 1
            
            while brace_count > 0 and current_pos < len(block):
                if block[current_pos] == '{':
                    brace_count += 1
                elif block[current_pos] == '}':
                    brace_count -= 1
                current_pos += 1
            
            # If we found the matching brace
            if brace_count == 0:
                # The stats block is from stats_start_index to current_pos
                stats_block = block[stats_start_index:current_pos]
                
                # We need to also remove a potential preceding or trailing comma
                # Let's just remove the whole thing
                block = block.replace(stats_block, '')
                # And clean up potential leftover comma
                block = re.sub(r',\s*,', ',', block) # double commas
                block = re.sub(r'(,\s*\n\s*\})', r'\1', block) # comma before closing brace

    return block

# Use the robust regex to find each player block
pattern = r'(^\s{8}\{\n.*?\n\s{8}\},?)'
cleaned_content = re.sub(pattern, clean_player_block, content, flags=re.DOTALL | re.MULTILINE)

# Final cleanup of double commas that might be left
cleaned_content = re.sub(r',\s*,', ',', cleaned_content)
cleaned_content = re.sub(r',\s*(\n\s*\})', r'\1', cleaned_content)


print(f"--- Writing cleaned content back to {ts_path} ---")
with open(ts_path, 'w', encoding='utf-8') as f:
    f.write(cleaned_content)

print("--- Cleanup complete ---")
