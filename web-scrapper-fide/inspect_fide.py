import requests
from bs4 import BeautifulSoup

url = "https://ratings.fide.com/profile/1320815"
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

games = soup.find_all('div', class_='profile-game')
for game in games:
    print(f"Classes: {game.get('class')}")
    ps = game.find_all('p')
    for p in ps:
        print(f"  p tag: {p.text.strip()}")
