import json
import re

with open("database.json", "r", encoding="utf-8") as f:
    db = json.load(f)

yoko_products = [p for p in db["products"] if p["brand_id"] == 1]

print(f"Total Yokohama products in database.json: {len(yoko_products)}")
print("List of local Yokohama products:")
for p in yoko_products:
    print(f"ID: {p['id']}, Name: '{p['name']}', Images: {p.get('images')}")
