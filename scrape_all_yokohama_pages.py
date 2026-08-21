import requests
from bs4 import BeautifulSoup
import re
import json

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

urls = [
    "https://jrashid.com/brand/yokohama/",
    "https://jrashid.com/product-category/yokohma-tyres/",
    "https://jrashid.com/?s=yokohama&post_type=product"
]

all_scraped = {}

for u in urls:
    print(f"Checking URL: {u}")
    page = 1
    while True:
        target_url = f"{u}page/{page}/" if page > 1 and "s=" not in u else (f"{u}&paged={page}" if page > 1 else u)
        res = requests.get(target_url, headers=headers)
        if res.status_code != 200:
            break
        soup = BeautifulSoup(res.text, 'html.parser')
        items = soup.find_all('div', class_=re.compile(r'product'))
        if not items:
            break
            
        added = 0
        for item in items:
            title_tag = item.find(['h2', 'h3', 'h4', 'h5'], class_=re.compile(r'title|heading|woocommerce-loop-product__title'))
            img_tag = item.find('img')
            link_tag = item.find('a', href=re.compile(r'/product/'))
            
            if title_tag and img_tag:
                title = title_tag.get_text(strip=True)
                img_src = img_tag.get('data-src') or img_tag.get('src') or img_tag.get('data-lazy-src')
                # get original full resolution image if available in data-srcset or src
                srcset = img_tag.get('data-srcset') or img_tag.get('srcset')
                full_img = img_src
                if srcset:
                    # extract largest image URL from srcset
                    parts = [p.strip().split(' ') for p in srcset.split(',') if p.strip()]
                    if parts:
                        # get part with max width or last
                        full_img = parts[-1][0]
                        
                if title and full_img and title not in all_scraped:
                    all_scraped[title] = {
                        "title": title,
                        "img_url": full_img,
                        "link": link_tag['href'] if link_tag else ""
                    }
                    added += 1
        print(f"Page {page}: found {added} new products.")
        if added == 0 or page > 5:
            break
        page += 1

print(f"\nTotal unique Yokohama products across all jrashid.com pages: {len(all_scraped)}")
with open("scraped_all_yokohama.json", "w", encoding="utf-8") as f:
    json.dump(all_scraped, f, indent=2)
