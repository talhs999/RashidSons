import json
import re

with open("database.json", "r", encoding="utf-8") as f:
    db = json.load(f)

yoko_products = [p for p in db["products"] if p["brand_id"] == 1]

# List of models scraped on jrashid.com
jrashid_matched = [
    "Yokohama ADVAN A460",
    "Yokohama A.drive AA01",
    "Yokohama BluEarth ES-32",
    "Yokohama ADVAN dB V552",
    "Yokohama ADVAN dB V553",
    "Yokohama Geolandar CV G058"
]

not_on_jrashid = [p for p in yoko_products if p["name"] not in jrashid_matched]

# Yokohama.ca models extracted from spring-rebate page
yokohama_ca_slugs = [
    "geolandar-at-4-g018",
    "geolandar-at-xd",
    "geolandar-cv-4s-g061",
    "geolandar-cv-g058",
    "geolandar-x-cv-g057",
    "avid-ascend-gt",
    "advan-apex", # V601
    "advan-fleva", # V701
    "advan-neova-ad09",
    "advan-sport-v107",
    "advan-sport-as",
    "advan-sport-ev-as",
    "geolandar-ht-g056",
    "geolandar-mt-g003",
    "geolandar-x-mt",
    "avid-ascend-lx",
    "parada-spec-x-pa02",
    "avid-touring-s"
]

found_on_yokohama_ca = []
not_found_anywhere = []

for p in not_on_jrashid:
    name_clean = p["name"].lower().replace("-", " ").replace("/", " ")
    
    # Check matching with yokohama_ca_slugs
    matched_ca = False
    if "v601" in name_clean or "apex" in name_clean:
        found_on_yokohama_ca.append((p["name"], "ADVAN Apex (V601)"))
        matched_ca = True
    elif "v701" in name_clean or "fleva" in name_clean:
        found_on_yokohama_ca.append((p["name"], "ADVAN Fleva (V701)"))
        matched_ca = True
    elif "v107" in name_clean:
        found_on_yokohama_ca.append((p["name"], "ADVAN Sport V107"))
        matched_ca = True
    elif "v105" in name_clean:
        found_on_yokohama_ca.append((p["name"], "ADVAN Sport (V105 / V107 lineage)"))
        matched_ca = True
    elif "g057" in name_clean or "x-cv" in name_clean:
        found_on_yokohama_ca.append((p["name"], "Geolandar X-CV (G057)"))
        matched_ca = True
    elif "g056" in name_clean or "h/t" in name_clean or "ht" in name_clean:
        found_on_yokohama_ca.append((p["name"], "Geolandar H/T (G056)"))
        matched_ca = True
    elif "g003" in name_clean or "m/t" in name_clean or "mt" in name_clean:
        found_on_yokohama_ca.append((p["name"], "Geolandar M/T (G003)"))
        matched_ca = True
    elif "pa02" in name_clean or "4x4 pa02" in name_clean:
        found_on_yokohama_ca.append((p["name"], "PARADA Spec-X (PA02)"))
        matched_ca = True
    elif "g018" in name_clean:
        found_on_yokohama_ca.append((p["name"], "Geolandar A/T4 (G018)"))
        matched_ca = True

    if not matched_ca:
        not_found_anywhere.append(p["name"])

print("==================================================")
print(f"MODELS FOUND ON YOKOHAMA.CA ({len(found_on_yokohama_ca)}):")
for local_name, ca_match in found_on_yokohama_ca:
    print(f" [FOUND ON YOKOHAMA.CA] {local_name}  -->  {ca_match}")

print(f"\nMODELS NOT FOUND ON EITHER SITE ({len(not_found_anywhere)}):")
for local_name in not_found_anywhere:
    print(f" [NOT FOUND ON EITHER SITE] {local_name}")
