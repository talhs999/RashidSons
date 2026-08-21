import os
from PIL import Image

media_dir = r"C:\Users\dell\.gemini\antigravity-ide\brain\158f395c-9ebd-453b-8a2e-d20d3ffd9061\.user_uploaded"
img1_path = os.path.join(media_dir, "media_1787265261380.jpg")
img2_path = os.path.join(media_dir, "media_1787265266708.png")

out_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\tires"
os.makedirs(out_dir, exist_ok=True)

def process_and_save(in_path, out_path):
    img = Image.open(in_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # Remove white / light grey background
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    
    img.save(out_path, "PNG")
    print(f"Saved transparent cropped image to {out_path}")

# Process img1 -> falken-1.png
process_and_save(img1_path, os.path.join(out_dir, "falken-1.png"))

# Process img2 -> falken-2.png
process_and_save(img2_path, os.path.join(out_dir, "falken-2.png"))

# Duplicate img1 -> falken-3.png
process_and_save(img1_path, os.path.join(out_dir, "falken-3.png"))

# Also save falken_home.png for brand card display
process_and_save(img2_path, os.path.join(out_dir, "falken_home.png"))

print("Falken images processing complete!")
