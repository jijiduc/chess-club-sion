import requests
import csv
import time
import sys
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def get_session():
    session = requests.Session()
    retry = Retry(connect=3, backoff_factor=0.5)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session

def get_player_stats(session, fide_id):
    """
    Fetches the game statistics for a player from FIDE.
    """
    url = f"https://ratings.fide.com/a_data_stats.php?id1={fide_id}&id2=0"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Referer": f"https://ratings.fide.com/profile/{fide_id}/statistics",
        "X-Requested-With": "XMLHttpRequest",
        "Origin": "https://ratings.fide.com",
        "Host": "ratings.fide.com"
    }
    
    default_stats = {
        "white_total": 0, "white_win": 0, "white_draw": 0, "white_loss": 0,
        "black_total": 0, "black_win": 0, "black_draw": 0, "black_loss": 0
    }

    try:
        response = session.post(url, headers=headers, timeout=15)
        if response.status_code == 200:
            data = response.json()
            if data and isinstance(data, list) and len(data) > 0:
                stats = data[0]
                
                # Helper to safely get int
                def get_int(key):
                    val = stats.get(key, "0")
                    return int(val) if val.isdigit() else 0

                w_total = get_int("white_total")
                w_win = get_int("white_win_num")
                w_draw = get_int("white_draw_num")
                w_loss = w_total - w_win - w_draw
                
                b_total = get_int("black_total")
                b_win = get_int("black_win_num")
                b_draw = get_int("black_draw_num")
                b_loss = b_total - b_win - b_draw
                
                return {
                    "white_total": w_total,
                    "white_win": w_win,
                    "white_draw": w_draw,
                    "white_loss": w_loss,
                    "black_total": b_total,
                    "black_win": b_win,
                    "black_draw": b_draw,
                    "black_loss": b_loss
                }
    except Exception as e:
        print(f"\nError fetching stats for {fide_id}: {e}")
    
    return default_stats

def process_csv(input_file, output_file):
    print(f"Reading IDs from {input_file}...")
    
    ids = []
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        rows = list(reader)
        # Check header
        start_idx = 0
        if rows and ("ID" in rows[0][0].upper() or "FIDE" in rows[0][0].upper()):
            start_idx = 1
            
        for row in rows[start_idx:]:
            if row:
                ids.append(row[0].strip())

    print(f"Found {len(ids)} players. Fetching stats...")
    
    output_rows = [["FIDE ID", 
                    "White Total", "White Win", "White Draw", "White Loss",
                    "Black Total", "Black Win", "Black Draw", "Black Loss"]]
    
    session = get_session()
    
    for i, fide_id in enumerate(ids, 1):
        sys.stdout.write(f"\rProcessing {i}/{len(ids)}: {fide_id}")
        sys.stdout.flush()
        
        stats = get_player_stats(session, fide_id)
        
        output_rows.append([
            fide_id,
            stats["white_total"], stats["white_win"], stats["white_draw"], stats["white_loss"],
            stats["black_total"], stats["black_win"], stats["black_draw"], stats["black_loss"]
        ])
        
        time.sleep(3) # Increased sleep
        
    print("\nWriting results...")
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerows(output_rows)
    
    print(f"Done! Saved to {output_file}")

if __name__ == "__main__":
    process_csv("web-scrapper-fide/fide_ids.csv", "web-scrapper-fide/fide_stats.csv")