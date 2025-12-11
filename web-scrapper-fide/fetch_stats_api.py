import requests
import json

fide_id = "1320815"
url = f"https://ratings.fide.com/a_data_stats.php?id1={fide_id}&id2=0"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Referer": f"https://ratings.fide.com/profile/{fide_id}/statistics",
    "X-Requested-With": "XMLHttpRequest"
}

print(f"Fetching {url}...")
response = requests.post(url, headers=headers) # It was $.post in the script

print(f"Status Code: {response.status_code}")
try:
    data = response.json()
    print(json.dumps(data, indent=2))
except json.JSONDecodeError:
    print("Response is not JSON:")
    print(response.text[:1000])
