import requests
from bs4 import BeautifulSoup

url = "https://ratings.fide.com/profile/1320815/statistics"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

# Print all text content to see what we can find
print(soup.get_text()[:2000])

# Look for scripts that might contain data
scripts = soup.find_all('script')
for i, script in enumerate(scripts):
    if script.string and ("data:" in script.string or "series:" in script.string):
        print(f"\n--- Script {i} ---")
        print(script.string[:500])
