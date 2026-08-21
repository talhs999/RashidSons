import os
import glob
from PIL import Image
import numpy as np

tires_dir = r"public/images/tires"

yellow_files = [
    "yokohama_yokohama-adrive-aa01.png",
    "yokohama_yokohama-advan-a460.png",
    "yokohama_yokohama-advan-db-v552.png",
    "yokohama_yokohama-advan-db-v553.png",
    "yokohama_yokohama-bluearth-es-32.png",
    "yokohama_yokohama-geolandar-cv-g058.png"
]

def remove_yellow_background(input_path, output_path):
    print(f"Processing {os.path.basename(input_path)}...", flush=True)
    img = Image.open(input_path).convert("RGBA")
    arr = np.array(img)
    
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    
    # Yellow background mask: High Red (> 140), High Green (> 140), Low Blue (< 130)
    # Also check that Red and Green are reasonably close (yellow hue) and R+G >> B
    yellow_mask = (r > 130) & (g > 130) & (b < 140) & ((r.astype(int) + g.astype(int)) > (b.astype(int) * 2 + 60))
    
    # Also remove soft yellow anti-aliasing edges where green & red dominate blue
    yellow_edge_mask = (r > 100) & (g > 100) & (b < 150) & (r > b + 30) & (g > b + 30)
    
    combined_mask = yellow_mask | yellow_edge_mask
    
    # Set alpha of yellow pixels to 0
    arr[combined_mask, 3] = 0
    
    # Also clean up RGB for transparent pixels
    arr[arr[:, :, 3] == 0] = [0, 0, 0, 0]
    
    clean_img = Image.fromarray(arr)
    
    # Crop to non-transparent bounding box
    bbox = clean_img.getbbox()
    if bbox:
        clean_img = clean_img.crop(bbox)
        
    clean_img.save(output_path, "PNG")
    print(f"  [SUCCESS] Saved clean transparent PNG to {output_path}", flush=True)

print("--- REMOVING YELLOW BACKGROUND FROM ALL YOKOHAMA TYRE IMAGES ---")

for fname in yellow_files:
    fpath = os.path.join(tires_dir, fname)
    if os.path.exists(fpath):
        remove_yellow_background(fpath, fpath)
    else:
        print(f"  [WARNING] File not found: {fpath}", flush=True)

# Also check if any other tire PNG in public/images/tires has yellow background
for fpath in glob.glob(os.path.join(tires_dir, "*.png")):
    if os.path.basename(fpath) not in yellow_files:
        try:
            img = Image.open(fpath).convert("RGBA")
            arr = np.array(img)
            r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
            yellow_count = np.sum((r > 160) & (g > 160) & (b < 120))
            if yellow_count > 500:
                print(f"Additional yellow file detected: {fpath} ({yellow_count} yellow px)")
                remove_yellow_background(fpath, fpath)
        except Exception:
            pass

print("\n--- ALL YELLOW BACKGROUNDS SUCCESSFULLY REMOVED ---", flush=True)
