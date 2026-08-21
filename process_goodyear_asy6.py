import os
from PIL import Image, ImageFilter

media_dir = r"C:\Users\dell\.gemini\antigravity-ide\brain\158f395c-9ebd-453b-8a2e-d20d3ffd9061\.user_uploaded"
img_path = os.path.join(media_dir, "media_1787267406069.png")

out_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\tires"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(img_path).convert("RGBA")
width, height = img.size

# Convert background to transparent
datas = img.getdata()
newData = []

for item in datas:
    r, g, b, a = item
    # Light background pixels (whites, light greys, card background)
    if r > 190 and g > 190 and b > 190:
        newData.append((255, 255, 255, 0))
    elif r > 175 and g > 175 and b > 175 and abs(r - g) < 10 and abs(g - b) < 10:
        newData.append((255, 255, 255, 0))
    else:
        newData.append((r, g, b, a))

img.putdata(newData)

# Bounding box crop
bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

# Flip horizontally to match left-side card orientation (tread left, rim right)
img_flipped = img.transpose(Image.FLIP_LEFT_RIGHT)

target_path = os.path.join(out_dir, "goodyear_eagle_f1_asy6.png")
img_flipped.save(target_path, "PNG")

print("Processed, background removed, flipped and saved Goodyear Eagle F1 Asymmetric 6 image to:", target_path)
