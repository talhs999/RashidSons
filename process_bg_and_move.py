from PIL import Image
import glob
import os
import shutil

source_dir = r"C:\Users\IQRA TRADERS\.gemini\antigravity-ide\brain\8e0a3f65-453d-45c6-bb72-8c79ef519091"
target_dir = r"C:\jrashid\public\images\tires"

def make_transparent(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        im = Image.open(input_path)
        im = im.convert("RGBA")
        datas = im.getdata()
        
        newData = []
        for item in datas:
            # White is 255, 255, 255
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        im.putdata(newData)
        im.save(output_path, "PNG")
        print(f"Saved {output_path} with transparent background.")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Map new images to the original names
mappings = {
    "goodyear_effigrip_perf2_notext_*.png": "goodyear_effigrip_perf2.png",
    "goodyear_eagle_sport2_notext_*.png": "goodyear_eagle_sport2.png",
    "goodyear_eagle_f1_asy5_notext_*.png": "goodyear_eagle_f1_asy5.png",
    "goodyear_eagle_f1_asy3_notext_*.png": "goodyear_eagle_f1_asy3.png",
    "goodyear_eagle_f1_asy2_notext_*.png": "goodyear_eagle_f1_asy2.png",
    "goodyear_effigrip_rft_notext_*.png": "goodyear_effigrip_rft.png"
}

for pattern, target_name in mappings.items():
    files = glob.glob(os.path.join(source_dir, pattern))
    if files:
        # Take the most recent one
        files.sort(key=os.path.getmtime, reverse=True)
        make_transparent(files[0], os.path.join(target_dir, target_name))
    else:
        print(f"Warning: No files found for pattern {pattern}")

# Also make the 7th image transparent since we couldn't regenerate it without text
files_7 = glob.glob(os.path.join(source_dir, "goodyear_eagle_f1_asy6_*.png"))
if files_7:
    files_7.sort(key=os.path.getmtime, reverse=True)
    # The first one might be the failed one if it left an empty file? No, failed means no file.
    make_transparent(files_7[0], os.path.join(target_dir, "goodyear_eagle_f1_asy6.png"))

