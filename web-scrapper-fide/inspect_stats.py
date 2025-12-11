import requests
from bs4 import BeautifulSoup

url = "https://ratings.fide.com/profile/1320815/statistics"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

# Find tables or divs that might contain the stats
# Looking for "Total games" or "White" / "Black"
print("Searching for 'Total games'...")
total_games_section = soup.find(string="Total games")
if total_games_section:
    print("Found 'Total games' string.")
    parent = total_games_section.find_parent('div') or total_games_section.find_parent('table')
    if parent:
        print(parent.prettify()[:1000])
else:
    print("'Total games' not found.")

print("\nSearching for 'White' and 'Black'...")
white_elements = soup.find_all(string="White")
for el in white_elements:
    parent = el.find_parent('div') or el.find_parent('tr')
    if parent:
        print(f"Parent of 'White': {parent.prettify()[:500]}")
