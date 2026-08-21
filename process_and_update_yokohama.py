import json
import os
import requests
from PIL import Image
import io
import re

# Load database.json
with open("database.json", "r", encoding="utf-8") as f:
    db = json.load(f)

# Load scraped products
with open("scraped_all_yokohama.json", "r", encoding="utf-8") as f:
    scraped = json.load(f)

yoko_products = [p for p in db["products"] if p["brand_id"] == 1]

out_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\tires"
os.makedirs(out_dir, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

# Helper to normalize model/name for matching
def normalize(name):
    name = name.lower()
    name = re.sub(r'\b(yokohama|tyre|tyres|r13|r15|r16|r17|r18|r19|\d+-\d+-r\d+|\d+/\d+r\d+)\b', '', name)
    name = re.sub(r'[^a-z0-9]', '', name)
    return name

print("--- MATCHING & PROCESSING YOKOHAMA TYRES FROM JRASHID.COM ---")

updated_local_products = []
not_found_local_products = []

scraped_items = []
for title, data in scraped.items():
    scraped_items.append({
        "original_title": title,
        "norm": normalize(title),
        "img_url": data["img_url"]
    })

for local_p in yoko_products:
    local_norm = normalize(local_p["name"])
    
    # Try to find match in scraped_items
    match = None
    for item in scraped_items:
        if item["norm"] in local_norm or local_norm in item["norm"]:
            match = item
            break
        for key_tok in ["v552", "v553", "es32", "a460", "adrive", "g058"]:
            if key_tok in local_norm and key_tok in item["norm"]:
                match = item
                break
        if match:
            break

    if match:
        img_url = match["img_url"]
        print(f"\n[MATCH FOUND] Local: '{local_p['name']}' <==> Website: '{match['original_title']}'")
        print(f"Downloading: {img_url}")
        res = requests.get(img_url, headers=headers)
        if res.status_code == 200:
            try:
                img = Image.open(io.BytesIO(res.content)).convert("RGBA")
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
                
                img_filename = f"yokohama_{local_p['slug']}.png"
                img_save_path = os.path.join(out_dir, img_filename)
                img.save(img_save_path, "PNG")
                
                local_p["images"] = [f"/images/tires/{img_filename}"]
                updated_local_products.append(local_p["name"])
                print(f"-> Saved clean transparent image to /images/tires/{img_filename}")
            except Exception as e:
                print(f"Failed to process image: {e}")
                not_found_local_products.append(local_p["name"])
        else:
            print(f"Failed download status: {res.status_code}")
            not_found_local_products.append(local_p["name"])
    else:
        not_found_local_products.append(local_p["name"])

# Save updated database.json
with open("database.json", "w", encoding="utf-8") as f:
    json.dump(db, f, indent=2)

print("\n==========================================")
print(f"UPDATED LOCAL PRODUCTS ({len(updated_local_products)}):")
for name in updated_local_products:
    print(f" [UPDATED] {name}")

print(f"\nLOCAL PRODUCTS NOT FOUND ON JRASHID.COM ({len(not_found_local_products)}):")
for name in not_found_local_products:
    print(f" [NOT FOUND] {name}")
