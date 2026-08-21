import os
from PIL import Image

media_dir = r"C:\Users\dell\.gemini\antigravity-ide\brain\158f395c-9ebd-453b-8a2e-d20d3ffd9061\.user_uploaded"
img_path = os.path.join(media_dir, "media_1787265796332.jpg")

out_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\tires"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(img_path).convert("RGBA")
datas = img.getdata()

newData = []
for item in datas:
    # Remove white background
    if item[0] > 235 and item[1] > 235 and item[2] > 235:
        newData.append((255, 255, 255, 0))
    else:
        newData.append(item)
        
img.putdata(newData)

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Save to goodyear_home.png and goodyear_effigrip_perf2.png
target_path1 = os.path.join(out_dir, "goodyear_home.png")
target_path2 = os.path.join(out_dir, "goodyear_effigrip_perf2.png")

img.save(target_path1, "PNG")
img.save(target_path2, "PNG")

print("Processed and saved Goodyear home tyre image to:", target_path1)
