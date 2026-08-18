from PIL import Image
import os
import glob

brain_dir = r"C:\Users\dell\.gemini\antigravity-ide\brain\08c1da8d-0817-466f-8073-b9b714277d48"
target_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\tires"

def make_transparent(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}...")
    try:
        im = Image.open(input_path).convert("RGBA")
        datas = im.getdata()
        
        newData = []
        for item in datas:
            # Check for near white pixels
            if item[0] > 235 and item[1] > 235 and item[2] > 235:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        im.putdata(newData)
        im.save(output_path, "PNG")
        print(f"Successfully saved {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process specific generated images
image_mappings = {
    "yokohama_bluearth_es32_*.jpg": "yokohama-bluearth-es32.png",
    "yokohama_advan_db_v552_*.jpg": "yokohama-advan-db-v552.png",
    "yokohama_geolandar_g015_*.jpg": "yokohama-geolandar-g015.png",
    "yokohama_geolandar_g003_*.jpg": "yokohama-geolandar-g003.png",
}

for pattern, out_name in image_mappings.items():
    matches = glob.glob(os.path.join(brain_dir, pattern))
    if matches:
        out_path = os.path.join(target_dir, out_name)
        make_transparent(matches[0], out_path)
    else:
        print(f"No match for {pattern}")
