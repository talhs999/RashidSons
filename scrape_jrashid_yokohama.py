import requests
import re
from bs4 import BeautifulSoup
import json
import os

url = "https://jrashid.com/brand/yokohama/"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

all_products = {}

def scrape_page(page_url):
    print(f"Scraping {page_url}...")
    resp = requests.get(page_url, headers=headers)
    if resp.status_code != 200:
        print(f"Failed to fetch {page_url}, status: {resp.status_code}")
        return []
    
    soup = BeautifulSoup(resp.text, 'html.parser')
    
    # Find all product containers
    # woocommerce products often have class "product"
    items = soup.find_all('div', class_=re.compile(r'product'))
    found = 0
    for item in items:
        # Get title/heading
        title_tag = item.find(['h2', 'h3', 'h4', 'h5'], class_=re.compile(r'title|heading|woocommerce-loop-product__title'))
        img_tag = item.find('img')
        link_tag = item.find('a', href=re.compile(r'/product/'))
        
        if title_tag and img_tag:
            title = title_tag.get_text(strip=True)
            # Get image src or data-src or data-srcset
            img_src = img_tag.get('data-src') or img_tag.get('src')
            if img_src and 'data:image' in img_src:
                img_src = img_tag.get('data-src') or img_tag.get('data-lazy-src') or img_tag.get('src')
            
            link = link_tag['href'] if link_tag else ""
            if title and img_src:
                all_products[title] = {
                    "title": title,
                    "img_src": img_src,
                    "link": link
                }
                found += 1
    print(f"Found {found} products on this page.")
    
    # Check for next page
    next_link = soup.find('a', class_=re.compile(r'next'))
    if next_link and next_link.get('href') and next_link['href'] != page_url:
        return next_link['href']
    return None

current_url = url
visited = set()
while current_url and current_url not in visited:
    visited.add(current_url)
    next_url = scrape_page(current_url)
    if next_url == current_url:
        break
    current_url = next_url

print(f"\nTotal unique products scraped from jrashid.com: {len(all_products)}")
for t, p in all_products.items():
    print(f"- {t} => {p['img_src']}")

with open("scraped_yokohama.json", "w", encoding="utf-8") as f:
    json.dump(all_products, f, indent=2)
