import requests

url = "https://ratings.fide.com/profile/1320815/statistics"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
response = requests.get(url, headers=headers)

with open('web-scrapper-fide/stats_page.html', 'w', encoding='utf-8') as f:
    f.write(response.text)
print("Saved stats_page.html")
