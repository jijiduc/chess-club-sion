import requests
from bs4 import BeautifulSoup
import csv
import time
import sys
import json
import re
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

def get_session():
    session = requests.Session()
    retry = Retry(connect=3, backoff_factor=0.5)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)
    return session

def parse_change(text):
    """
    Parses the cell text to extract the numeric change.
    Examples: "View 11.8", "No Games", "View -5.4", "View 0"
    """
    if not text:
        return 0.0
    
    # Clean text
    text = text.strip()
    if "No Games" in text:
        return 0.0
        
    # Remove "View"
    text = text.replace("View", "").strip()
    
    # Try to find a number
    # Match optional minus, digits, optional dot, digits
    match = re.search(r'(-?\d+(\.\d+)?)', text)
    if match:
        try:
            return float(match.group(1))
        except ValueError:
            return 0.0
    return 0.0

def get_player_history(session, fide_id):
    url = f"https://ratings.fide.com/a_calculations.phtml?event={fide_id}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Referer": f"https://ratings.fide.com/profile/{fide_id}/calculations",
        "X-Requested-With": "XMLHttpRequest"
    }
    
    history = []
    
    try:
        response = session.get(url, headers=headers, timeout=15)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            table = soup.find('table', class_='profile-table_calc')
            
            if table:
                tbody = table.find('tbody')
                rows = []
                if tbody:
                    rows = tbody.find_all('tr')
                else:
                    rows = table.find_all('tr')[1:] # Skip header if no tbody
                
                # Limit to last 24 months (to support 18-month graph)
                # The table seems to be sorted descending by date (newest first)
                for row in rows[:24]:
                    cols = row.find_all('td')
                    if len(cols) >= 4:
                        period = cols[0].get_text(strip=True)
                        std_text = cols[1].get_text(strip=True)
                        rapid_text = cols[2].get_text(strip=True)
                        blitz_text = cols[3].get_text(strip=True)
                        
                        history.append({
                            'period': period,
                            'std': parse_change(std_text),
                            'rapid': parse_change(rapid_text),
                            'blitz': parse_change(blitz_text)
                        })
    except Exception as e:
        print(f"\nError fetching history for {fide_id}: {e}")
        
    return history

def process_csv(input_file, output_file):
    print(f"Reading IDs from {input_file}...")
    
    ids = []
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            reader = csv.reader(f)
            rows = list(reader)
            start_idx = 0
            if rows and ("ID" in rows[0][0].upper() or "FIDE" in rows[0][0].upper()):
                start_idx = 1
                
            for row in rows[start_idx:]:
                if row:
                    ids.append(row[0].strip())
    except FileNotFoundError:
        print(f"File {input_file} not found.")
        return

    print(f"Found {len(ids)} players. Fetching history...")
    
    output_rows = [["FIDE ID", "HistoryJSON"]]
    
    session = get_session()
    
    for i, fide_id in enumerate(ids, 1):
        sys.stdout.write(f"\rProcessing {i}/{len(ids)}: {fide_id}")
        sys.stdout.flush()
        
        history = get_player_history(session, fide_id)
        history_json = json.dumps(history)
        
        output_rows.append([fide_id, history_json])
        
        time.sleep(1.5) # Be nice to server
        
    print("\nWriting results...")
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerows(output_rows)
    
    print(f"Done! Saved to {output_file}")

if __name__ == "__main__":
    process_csv("web-scrapper-fide/fide_ids.csv", "web-scrapper-fide/fide_history.csv")
