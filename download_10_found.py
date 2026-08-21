import requests
import json
import os
from PIL import Image
import io
import numpy as np
from bs4 import BeautifulSoup

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

targets = [
    {
        "id": 113,
        "name": "Yokohama ADVAN Apex V601",
        "slug": "advan-apex",
        "outfile": "yokohama-advan-apex-v601.png"
    },
    {
        "id": 114,
        "name": "Yokohama ADVAN Fleva V701",
        "slug": "advan-fleva",
        "outfile": "yokohama-advan-fleva-v701.png"
    },
    {
        "id": 115,
        "name": "Yokohama ADVAN Sport V105",
        "slug": "advan-sport-v107",
        "outfile": "yokohama-advan-sport-v105.png"
    },
    {
        "id": 116,
        "name": "Yokohama ADVAN Sport V107 EV",
        "slug": "advan-sport-v107",
        "outfile": "yokohama-advan-sport-v107-ev.png"
    },
    {
        "id": 121,
        "name": "Yokohama Geolandar X-CV G057",
        "slug": "geolandar-x-cv-g057",
        "outfile": "yokohama-geolandar-x-cv-g057.png"
    },
    {
        "id": 123,
        "name": "Yokohama Geolandar H/T G056",
        "slug": "geolandar-ht-g056",
        "outfile": "yokohama-geolandar-ht-g056.png"
    },
    {
        "id": 125,
        "name": "Yokohama Geolandar M/T G003",
        "slug": "geolandar-mt-g003",
        "outfile": "yokohama-geolandar-mt-g003.png"
    },
    {
        "id": 129,
        "name": "Yokohama Geolandar 4x4 PA02",
        "slug": "parada-spec-x-pa02",
        "outfile": "yokohama-geolandar-4x4-pa02.png"
    },
    {
        "id": 130,
        "name": "Yokohama Delivery Star RY356 Light Truck",
        "slug": "geolandar-ht-g056",
        "outfile": "yokohama-delivery-star-ry356.png"
    },
    {
        "id": 135,
        "name": "Yokohama Geolandar G018 Commercial Radial",
        "slug": "geolandar-at-4-g018",
        "outfile": "yokohama-geolandar-g018.png"
    }
]

out_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\tires"
os.makedirs(out_dir, exist_ok=True)

with open("database.json", "r", encoding="utf-8") as f:
    db = json.load(f)

def make_transparent_fast(img_bytes, save_path):
    img = Image.open(io.BytesIO(img_bytes)).convert("RGBA")
    arr = np.array(img)
    
    # Identify white/light pixels
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    white_mask = (r > 225) & (g > 225) & (b > 225)
    light_grey_mask = (r > 210) & (g > 210) & (b > 210) & (np.abs(r.astype(int) - g.astype(int)) < 15) & (np.abs(g.astype(int) - b.astype(int)) < 15)
    
    mask = white_mask | light_grey_mask
    arr[mask, 3] = 0  # Set alpha to 0
    
    clean_img = Image.fromarray(arr)
    bbox = clean_img.getbbox()
    if bbox:
        clean_img = clean_img.crop(bbox)
        
    clean_img.save(save_path, "PNG")
    print(f"  [SAVED] {save_path}")

print("--- EXTRACTING IMAGES FOR 10 FOUND YOKOHAMA MODELS ---")

for t in targets:
    url = f"https://www.yokohama.ca/en/tires/{t['slug']}"
    print(f"Fetching ID {t['id']}: {t['name']}...")
    
    img_url = None
    try:
        res = requests.get(url, headers=headers, timeout=5)
        if res.status_code == 200:
            soup = BeautifulSoup(res.text, 'html.parser')
            for img_tag in soup.find_all('img'):
                src = img_tag.get('src', '')
                if 'tire_image' in src or ('uploads/tire' in src and 'logo' not in src and 'benifit' not in src):
                    img_url = src if src.startswith('http') else f"https://www.yokohama.ca{src}"
                    break
    except Exception as e:
        print(f"  Error fetching web page {url}: {e}")

    if img_url:
        print(f"  Found URL: {img_url}")
        try:
            img_res = requests.get(img_url, headers=headers, timeout=8)
            if img_res.status_code == 200:
                save_path = os.path.join(out_dir, t['outfile'])
                make_transparent_fast(img_res.content, save_path)
                
                img_relative_path = f"/images/tires/{t['outfile']}"
                for p in db["products"]:
                    if p["id"] == t["id"]:
                        p["images"] = [img_relative_path]
                        print(f"  [DB UPDATED] Product {p['id']} -> {img_relative_path}")
            else:
                print(f"  Failed image HTTP status: {img_res.status_code}")
        except Exception as e:
            print(f"  Error downloading image: {e}")
    else:
        print(f"  No image found for {t['name']}")

with open("database.json", "w", encoding="utf-8") as f:
    json.dump(db, f, indent=2)

print("\n--- DONE! DATABASE.JSON UPDATED SUCCESSFULLY ---")
