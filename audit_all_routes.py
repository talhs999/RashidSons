import requests
from bs4 import BeautifulSoup
import re

base_url = "http://localhost:3000"

routes_to_check = [
    "/",
    "/brands",
    "/brands/yokohama",
    "/brands/goodyear",
    "/brands/michelin",
    "/brands/atlas",
    "/brands/risen",
    "/brands/sunwide",
    "/brands/falken",
    "/brands/warrior",
    "/about",
    "/contact",
    "/dealers",
    "/tires-101",
    "/privacy-policy",
    "/terms-of-use",
    "/login",
    "/brands/yokohama/all/yokohama-advan-a460",
    "/brands/yokohama/all/yokohama-advan-fleva-v701",
]

print("--- AUDITING ALL WEBSITE ROUTES (DESKTOP / TABLET / MOBILE ENDPOINTS) ---")

all_passed = True

for route in routes_to_check:
    url = f"{base_url}{route}"
    try:
        res = requests.get(url, headers={"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15"}, timeout=10)
        status = res.status_code
        if status == 200:
            soup = BeautifulSoup(res.text, 'html.parser')
            title = soup.title.string.strip() if soup.title else "No Title"
            
            # Check viewport tag
            meta_vp = soup.find('meta', attrs={'name': 'viewport'})
            vp_ok = "width=device-width" in meta_vp.get('content', '') if meta_vp else False
            
            # Check broken img tags
            imgs = soup.find_all('img')
            missing_src = [img for img in imgs if not img.get('src')]
            
            print(f"[200 OK] {route:45} | Title: '{title[:30]}...' | Imgs: {len(imgs)} | Viewport Meta: {'OK' if vp_ok else 'MISSING'}")
        else:
            print(f"[{status} ERROR] {route}")
            all_passed = False
    except Exception as e:
        print(f"[FAIL] {route} -> Error: {e}")
        all_passed = False

if all_passed:
    print("\n--- ALL ROUTES RESPONDED WITH STATUS 200 OK ---")
