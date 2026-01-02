import re

def parse_cve_schedule(schedule_text):
    events = []
    
    # Normalize the input text, handle tabs and multiple spaces
    schedule_text = re.sub(r'\t+', ' ', schedule_text)
    schedule_text = re.sub(r' +', ' ', schedule_text)

    rounds = re.split(r'\n\s*\n', schedule_text.strip())
    
    for round_block in rounds:
        lines = round_block.strip().split('\n')
        
        round_header = lines[0].strip()
        match = re.match(r'.*?Ronde (\d+)\s*-\s*([\d\.]+)', round_header)
        if not match:
            continue
        
        round_num = match.group(1)
        date_str = match.group(2)
        
        day, month, year = date_str.split('.')
        iso_date = f"{year}-{month}-{day}"
        
        for line in lines[1:]:
            line = line.strip()
            if not line:
                continue
            
            line = re.sub(r'^Groupe\s+[A-Z]\s*', '', line)
            line = re.sub(r'^[A-Z]\d+\s*', '', line)

            parts = re.split(r'\s+-\s+', line)
            if len(parts) != 2:
                continue

            team1_name = parts[0].strip()
            team2_name = parts[1].strip()

            if "Sion" not in team1_name and "Sion" not in team2_name:
                continue

            location = "Local du CE Sion" if "Sion" in team1_name else f"{team1_name} (à l'extérieur)"
            team1_slug = team1_name.lower().replace(' ', '-')
            event_id = f'cve-{iso_date}-{team1_slug}'
            
            event = {
                "id": event_id,
                "title": f'CVE Ronde {round_num}: {team1_name} - {team2_name}',
                "date": iso_date,
                "time": '20h00',
                "category": ['CVE'],
                "description": f'Championnat valaisan par équipes, Ronde {round_num}',
                "location": location,
                "link": '/competitions/cve',
            }
            events.append(event)
            
    return events

def format_event(event):
    lines = [
        "    {",
        f"      id: '{event['id']}',",
        f"      title: '{event['title']}',",
        f"      date: '{event['date']}',",
        f"      time: '{event['time']}',",
        f"      category: ['{event['category'][0]}'],",
        f"      description: '{event['description']}',",
        f"      location: '{event['location']}',",
        f"      link: '{event['link']}',",
        "    },"
    ]
    return "\n".join(lines)

# --- Main ---
user_input = """
2e tour - Ronde 4 - 16.01.2026				
Groupe E	E41	Sion 1	-	Sion 2
	E42	Sierre 1	-	Martigny 3
Groupe F	F41	Monthey	-	Montana 1
	F42	Martigny 1	-	Martigny 2
Groupe G	G41	Riddes 1	-	Montana 2
	G42	Bagnes	-	Sion 3
Groupe H	H41	Riddes 2	-	Martigny 4
	H42	CE Port-Valais	-	Sierre 2
						

2e tour - Ronde 5 - 27.02.2026				
Groupe E	E51	Sion 2	-	Sierre 1
	E52	Sion 1	-	Martigny 3
Groupe F	F51	Monthey	-	Martigny 1
	F52	Montana 1	-	Martigny 2
Groupe G	G51	Montana 2	-	Bagnes
	G52	Sion 3	-	Riddes 1
Groupe H	H51	CE Port-Valais	-	Riddes 2
	H52	Martigny 4	-	Sierre 2
						


3e tour - Ronde 6 - 20.03.2026				
Groupe E	E61	Sierre 1	-	Sion 1
	E62	Martigny 3	-	Sion 2
Groupe F	F61	Martigny 2	-	Monthey
	F62	Montana 1	-	Martigny 1
Groupe G	G61	Riddes 1	-	Bagnes
	G62	Sion 3	-	Montana 2
Groupe H	H61	Martigny 4	-	CE Port-Valais
	H62	Sierre 2	-	Riddes 2
"

new_events = parse_cve_schedule(user_input)
new_events_str = "\n".join([format_event(e) for e in new_events])
print("--- New events to be added ---")
print(new_events_str)

ts_path = 'chess-club-sion-v2/src/lib/data/programme.ts'

with open(ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find insertion point
insertion_marker = "export const programmeEvents: ProgrammeEvent[] = ["
inser tion_point = content.find(insertion_marker)
if insertion_point != -1:
    insertion_point += len(insertion_marker)
    new_content = content[:insertion_point] + "\n" + new_events_str + content[insertion_point:]
    
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"\n--- Successfully updated {ts_path} ---")
else:
    print("--- ERROR: Could not find insertion point in programme.ts ---")