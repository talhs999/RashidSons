import os
from PIL import Image

media_dir = r"C:\Users\IQRA TRADERS\.gemini\antigravity-ide\brain\8e0a3f65-453d-45c6-bb72-8c79ef519091"
images = [
    "media__1785350008945.jpg",
    "media__1785350020322.jpg",
    "media__1785350029716.jpg"
]

output_names = [
    "goodyear-1.png",
    "goodyear-2.png",
    "goodyear-3.png"
]

out_dir = r"C:\jrashid\public\images\tires"
os.makedirs(out_dir, exist_ok=True)

for in_name, out_name in zip(images, output_names):
    input_path = os.path.join(media_dir, in_name)
    output_path = os.path.join(out_dir, out_name)
    
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # White background removal
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Processed and saved to {output_path}")
