import requests
from bs4 import BeautifulSoup
import json
import os
from PIL import Image
import io

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

# Slugs on yokohama.ca and corresponding local product names
ca_mappings = [
    ("advan-apex", "Yokohama ADVAN Apex V601", "yokohama_yokohama-advan-apex-v601.png"),
    ("advan-fleva", "Yokohama ADVAN Fleva V701", "yokohama_yokohama-advan-fleva-v701.png"),
    ("advan-sport-v107", "Yokohama ADVAN Sport V107 EV", "yokohama_yokohama-advan-sport-v107-ev.png"),
    ("advan-sport-v107", "Yokohama ADVAN Sport V105", "yokohama_yokohama-advan-sport-v105.png"),
    ("geolandar-x-cv-g057", "Yokohama Geolandar X-CV G057", "yokohama_yokohama-geolandar-x-cv-g057.png"),
    ("geolandar-ht-g056", "Yokohama Geolandar H/T G056", "yokohama_yokohama-geolandar-h-t-g056.png"),
    ("geolandar-mt-g003", "Yokohama Geolandar M/T G003", "yokohama_yokohama-geolandar-m-t-g003.png"),
    ("parada-spec-x-pa02", "Yokohama Geolandar 4x4 PA02", "yokohama_yokohama-geolandar-4x4-pa02.png"),
    ("geolandar-at-4-g018", "Yokohama Geolandar G018 Commercial Radial", "yokohama_yokohama-geolandar-g018-commercial-radial.png")
]

out_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\tires"

with open("database.json", "r", encoding="utf-8") as f:
    db = json.load(f)

for ca_slug, local_name, target_filename in ca_mappings:
    url = f"https://www.yokohama.ca/en/tires/{ca_slug}"
    print(f"\nFetching {url} for '{local_name}'...")
    res = requests.get(url, headers=headers)
    if res.status_code == 200:
        soup = BeautifulSoup(res.text, 'html.parser')
        # Find product image tag
        img_tag = soup.find('img', src=lambda s: s and ('tire' in s.lower() or 'products' in s.lower() or 'media' in s.lower() or 'assets' in s.lower()))
        if not img_tag:
            img_tag = soup.find('img')
            
        if img_tag:
            src = img_tag.get('src')
            if not src.startswith('http'):
                src = f"https://www.yokohama.ca{src}"
            print(f"Found image: {src}")
            img_res = requests.get(src, headers=headers)
            if img_res.status_code == 200:
                try:
                    img = Image.open(io.BytesIO(img_res.content)).convert("RGBA")
                    datas = img.getdata()
                    new_data = []
                    for pixel in datas:
                        r, g, b, a = pixel
                        if r > 225 and g > 225 and b > 225:
                            new_data.append((255, 255, 255, 0))
                        elif r > 210 and g > 210 and b > 210 and abs(r - g) < 15 and abs(g - b) < 15:
                            new_data.append((255, 255, 255, 0))
                        else:
                            new_data.append((r, g, b, a))
                    img.putdata(new_data)
                    bbox = img.getbbox()
                    if bbox:
                        img = img.crop(bbox)
                    
                    save_path = os.path.join(out_dir, target_filename)
                    img.save(save_path, "PNG")
                    print(f"Saved transparent image to /images/tires/{target_filename}")
                    
                    # Update database.json
                    for p in db["products"]:
                        if p["name"] == local_name:
                            p["images"] = [f"/images/tires/{target_filename}"]
                except Exception as e:
                    print(f"Error processing image: {e}")

with open("database.json", "w", encoding="utf-8") as f:
    json.dump(db, f, indent=2)

print("\nDatabase updated successfully with Yokohama.ca product images!")
