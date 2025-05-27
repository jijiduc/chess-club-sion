#!/usr/bin/env python3
"""
Alternative script to fetch Round 4 data from Swiss Chess Federation
Uses only built-in libraries (no BeautifulSoup4 required)
"""

import urllib.request
import re
import json
import html.parser
import csv
import os
from datetime import datetime

class ChessDataParser(html.parser.HTMLParser):
    """Custom HTML parser for chess tournament data"""
    
    def __init__(self):
        super().__init__()
        self.in_table = False
        self.in_row = False
        self.in_cell = False
        self.current_table = []
        self.current_row = []
        self.current_cell = ""
        self.tables = []
        self.in_h2 = False
        self.in_h3 = False
        self.h2_texts = []
        self.h3_texts = []
        self.current_h2 = ""
        self.current_h3 = ""
        
    def handle_starttag(self, tag, attrs):
        if tag == "table":
            attr_dict = dict(attrs)
            if "class" in attr_dict and "resulttable" in attr_dict["class"]:
                self.in_table = True
                self.current_table = []
        elif tag == "tr" and self.in_table:
            self.in_row = True
            self.current_row = []
        elif tag == "td" and self.in_row:
            self.in_cell = True
            self.current_cell = ""
        elif tag == "h2":
            self.in_h2 = True
            self.current_h2 = ""
        elif tag == "h3":
            self.in_h3 = True
            self.current_h3 = ""
            
    def handle_endtag(self, tag):
        if tag == "table" and self.in_table:
            self.in_table = False
            if self.current_table:
                self.tables.append(self.current_table)
        elif tag == "tr" and self.in_row:
            self.in_row = False
            if self.current_row:
                self.current_table.append(self.current_row)
        elif tag == "td" and self.in_cell:
            self.in_cell = False
            self.current_row.append(self.current_cell.strip())
        elif tag == "h2" and self.in_h2:
            self.in_h2 = False
            if self.current_h2:
                self.h2_texts.append(self.current_h2.strip())
        elif tag == "h3" and self.in_h3:
            self.in_h3 = False
            if self.current_h3:
                self.h3_texts.append(self.current_h3.strip())
                
    def handle_data(self, data):
        if self.in_cell:
            self.current_cell += data
        elif self.in_h2:
            self.current_h2 += data
        elif self.in_h3:
            self.current_h3 += data

def fetch_tournament_data(url):
    """Fetch and parse tournament data from URL"""
    print(f"🔍 Fetching data from: {url}")
    
    try:
        # Fetch HTML content
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        with urllib.request.urlopen(req) as response:
            html_content = response.read().decode('utf-8')
        
        print("✅ HTML fetched successfully")
        
        # Parse HTML
        parser = ChessDataParser()
        parser.feed(html_content)
        
        # Extract tournament data
        tournament_data = {
            "league": "",
            "round": "4",  # We know it's round 4
            "rankings": [],
            "matches": [],
            "date": datetime.now().strftime("%Y-%m-%d")
        }
        
        # Extract league from H2 tags
        if parser.h2_texts:
            tournament_data["league"] = parser.h2_texts[0]
            print(f"League: {tournament_data['league']}")
        
        # Extract round from H3 tags
        for h3 in parser.h3_texts:
            if "Ronde" in h3:
                round_match = re.search(r'\d+', h3)
                if round_match:
                    tournament_data["round"] = round_match.group()
                    print(f"Round: {tournament_data['round']}")
                break
        
        # Process tables
        print(f"Found {len(parser.tables)} tables")
        
        # Find rankings table (contains "Rang")
        for table in parser.tables:
            if table and len(table) > 0:
                header_row = table[0]
                if any("Rang" in cell for cell in header_row):
                    print("Found rankings table")
                    for row in table[1:]:  # Skip header
                        if len(row) >= 4:
                            tournament_data["rankings"].append({
                                "rank": row[0].rstrip('.'),
                                "team": row[1],
                                "matchPoints": row[2],
                                "gamePoints": row[3]
                            })
                    break
        
        # Find matches table (small table with scores)
        for table in parser.tables:
            if table and 4 <= len(table) <= 8:
                has_scores = any("-" in str(row) and ":" in str(row) for row in table)
                has_rang = any("Rang" in str(cell) for row in table for cell in row)
                
                if has_scores and not has_rang:
                    print("Found matches table")
                    for row in table:
                        if len(row) >= 6:
                            home_team = row[0]
                            away_team = row[2]
                            score_home = row[3]
                            score_away = row[5]
                            
                            if home_team and away_team and row[1] == "-" and row[4] == ":":
                                tournament_data["matches"].append({
                                    "homeTeam": home_team,
                                    "awayTeam": away_team,
                                    "score": f"{score_home}-{score_away}",
                                    "boards": []
                                })
                    break
        
        print(f"Extracted {len(tournament_data['rankings'])} rankings")
        print(f"Extracted {len(tournament_data['matches'])} matches")
        
        # Extract individual board results
        # These are typically in tables after the match results
        board_tables_start = False
        board_table_index = 0
        
        for i, table in enumerate(parser.tables):
            # Look for tables after the matches
            if board_tables_start and board_table_index < len(tournament_data["matches"]):
                if len(table) > 2:  # Board tables have multiple rows
                    match = tournament_data["matches"][board_table_index]
                    
                    for row_idx, row in enumerate(table):
                        if row_idx <= 1:  # Skip header rows
                            continue
                        
                        if len(row) >= 6:
                            # Extract player names and ratings
                            home_text = row[0]
                            away_text = row[2]
                            
                            # Parse names and ratings
                            home_match = re.search(r'(.*?)\s*\((\d+)\)', home_text)
                            away_match = re.search(r'(.*?)\s*\((\d+)\)', away_text)
                            
                            home_player = home_match.group(1).strip() if home_match else home_text
                            home_rating = home_match.group(2) if home_match else ""
                            
                            away_player = away_match.group(1).strip() if away_match else away_text
                            away_rating = away_match.group(2) if away_match else ""
                            
                            # Extract result
                            result = f"{row[3]}-{row[5]}"
                            
                            match["boards"].append({
                                "homePlayer": home_player,
                                "homeRating": home_rating,
                                "result": result,
                                "awayPlayer": away_player,
                                "awayRating": away_rating
                            })
                    
                    board_table_index += 1
            
            # Check if we've reached the board results section
            if not board_tables_start:
                # Board tables usually come after match results
                if tournament_data["matches"] and i > 1:
                    board_tables_start = True
        
        return tournament_data
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return None

def convert_to_js_format(tournament_data):
    """Convert tournament data to JavaScript format like round1.js"""
    if not tournament_data:
        return None
    
    js_content = f"""export default {{
    matches: [
      // 1ère ligue
"""
    
    # Add matches for 1ère ligue (Sion 1)
    match_id = 1
    for i, match in enumerate(tournament_data["matches"]):
        if "Sion 1" in match["homeTeam"] or "Sion 1" in match["awayTeam"]:
            js_content += f"""      {{
        id: {match_id},
        roundId: {tournament_data["round"]},
        homeTeamId: 0, // TODO: Map team names to IDs
        awayTeamId: 0, // TODO: Map team names to IDs
        score: "{match["score"]}"
      }},
"""
            match_id += 1
    
    js_content += """      
      // 3ème ligue
"""
    
    # Add matches for 3ème ligue (Sion 2)
    for i, match in enumerate(tournament_data["matches"]):
        if "Sion 2" in match["homeTeam"] or "Sion 2" in match["awayTeam"]:
            js_content += f"""      {{
        id: {match_id},
        roundId: {tournament_data["round"]},
        homeTeamId: 0, // TODO: Map team names to IDs
        awayTeamId: 0, // TODO: Map team names to IDs
        score: "{match["score"]}"
      }},
"""
            match_id += 1
    
    js_content += """    ],
    
    boards: [
"""
    
    # Add board results
    for match_idx, match in enumerate(tournament_data["matches"]):
        if match["boards"]:
            js_content += f"""      // Match {match_idx + 1}: {match["homeTeam"]} vs {match["awayTeam"]}
"""
            for board_idx, board in enumerate(match["boards"]):
                js_content += f"""      {{
        matchId: {match_idx + 1},
        boardNumber: {board_idx + 1},
        homePlayer: "{board["homePlayer"]}",
        homeRating: {board["homeRating"] or "null"},
        result: "{board["result"]}",
        awayPlayer: "{board["awayPlayer"]}",
        awayRating: {board["awayRating"] or "null"}
      }},
"""
    
    js_content += """    ],
    
    rankings: {
      1: [ // 1ère ligue
"""
    
    # Add rankings
    for ranking in tournament_data["rankings"]:
        js_content += f"""        {{ rank: {ranking["rank"]}, teamId: 0, matchPoints: {ranking["matchPoints"]}, gamePoints: "{ranking["gamePoints"]}" }},
"""
    
    js_content += """      ],
      2: [ // 3ème ligue
        // TODO: Add 3ème ligue rankings
      ]
    }
  };"""
    
    return js_content

def save_to_csv(data, base_filename):
    """Save tournament data to CSV files"""
    if not data:
        return False, []
    
    try:
        generated_files = []
        
        # Info file
        info_path = f"{base_filename}_info.csv"
        with open(info_path, 'w', encoding='utf-8', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['league', 'round', 'date'])
            writer.writerow([data.get('league', ''), data.get('round', ''), data.get('date', '')])
        generated_files.append(info_path)
        
        # Rankings file
        rankings_path = f"{base_filename}_rankings.csv"
        with open(rankings_path, 'w', encoding='utf-8', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['rank', 'team', 'matchPoints', 'gamePoints'])
            for rank in data.get('rankings', []):
                writer.writerow([
                    rank.get('rank', ''),
                    rank.get('team', ''),
                    rank.get('matchPoints', ''),
                    rank.get('gamePoints', '')
                ])
        generated_files.append(rankings_path)
        
        # Matches file
        matches_path = f"{base_filename}_matches.csv"
        with open(matches_path, 'w', encoding='utf-8', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['matchId', 'homeTeam', 'awayTeam', 'score'])
            for i, match in enumerate(data.get('matches', [])):
                writer.writerow([
                    i+1,
                    match.get('homeTeam', ''),
                    match.get('awayTeam', ''),
                    match.get('score', '')
                ])
        generated_files.append(matches_path)
        
        # Boards file
        boards_path = f"{base_filename}_boards.csv"
        with open(boards_path, 'w', encoding='utf-8', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['matchId', 'boardNumber', 'homePlayer', 'homeRating', 'result', 'awayPlayer', 'awayRating'])
            for match_id, match in enumerate(data.get('matches', [])):
                for board_num, board in enumerate(match.get('boards', [])):
                    writer.writerow([
                        match_id+1,
                        board_num+1,
                        board.get('homePlayer', ''),
                        board.get('homeRating', ''),
                        board.get('result', ''),
                        board.get('awayPlayer', ''),
                        board.get('awayRating', '')
                    ])
        generated_files.append(boards_path)
        
        return True, generated_files
        
    except Exception as e:
        print(f"❌ Error saving CSV: {str(e)}")
        # Clean up partial files
        for file in generated_files:
            try:
                os.remove(file)
            except:
                pass
        return False, []

def main():
    """Main function"""
    print("🏆 Chess Tournament Data Fetcher (No BeautifulSoup4) 🏆")
    print("-----------------------------------------------")
    
    # Read URL from file
    try:
        with open('url_sion2_round4.txt', 'r') as f:
            url = f.read().strip()
        print(f"📌 Using URL from url_sion2_round4.txt: {url}")
    except:
        try:
            with open('url_round4.txt', 'r') as f:
                url = f.read().strip()
            print(f"📌 Using URL from url_round4.txt: {url}")
        except:
            try:
                with open('url.txt', 'r') as f:
                    url = f.read().strip()
                print(f"📌 Using URL from url.txt: {url}")
            except:
                url = input("📌 Enter tournament URL: ")
    
    # Fetch data
    tournament_data = fetch_tournament_data(url)
    
    if tournament_data:
        print(f"\n✅ Data fetched successfully!")
        print(f"League: {tournament_data['league']}")
        print(f"Round: {tournament_data['round']}")
        print(f"Rankings: {len(tournament_data['rankings'])} teams")
        print(f"Matches: {len(tournament_data['matches'])}")
        
        # Save to CSV
        print("\n💾 Saving to CSV files...")
        success, files = save_to_csv(tournament_data, f"round{tournament_data['round']}_data")
        
        if success:
            print("✅ CSV files created:")
            for file in files:
                print(f"  - {file}")
        
        # Save to JS format
        print("\n💾 Saving to JavaScript format...")
        js_content = convert_to_js_format(tournament_data)
        if js_content:
            js_filename = f"round{tournament_data['round']}.js"
            with open(js_filename, 'w', encoding='utf-8') as f:
                f.write(js_content)
            print(f"✅ JavaScript file created: {js_filename}")
        
        print("\n✨ Done! ✨")
    else:
        print("❌ Failed to fetch data")

if __name__ == "__main__":
    main()