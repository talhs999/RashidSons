import sys
import os
from PIL import Image
import colorsys

images = [
    ("sizing-1-red.jpg", "sizing-1.jpg"),
    ("sizing-2-red.jpg", "sizing-2.jpg"),
    ("sizing-3-red.jpg", "sizing-3.jpg"),
    ("sizing-4-red.jpg", "sizing-4.jpg"),
    ("sizing-5-red.jpg", "sizing-5.jpg")
]

base_dir = r"C:\jrashid\public\images"

for in_name, out_name in images:
    img_path = os.path.join(base_dir, in_name)
    out_path = os.path.join(base_dir, out_name)
    
    try:
        if not os.path.exists(img_path):
            continue
            
        img = Image.open(img_path).convert("RGBA")
        pixels = img.load()
        width, height = img.size

        for y in range(height):
            for x in range(width):
                r, g, b, a = pixels[x, y]
                if a == 0:
                    continue
                h, s, v = colorsys.rgb_to_hsv(r/255.0, g/255.0, b/255.0)
                
                # Red hue is near 0 or 1.
                if (h > 0.85 or h < 0.15) and s > 0.3 and v > 0.3:
                    # Change hue to brand yellow (approx 0.13)
                    h = 0.13
                    s = min(1.0, s * 1.2)
                    
                    nr, ng, nb = colorsys.hsv_to_rgb(h, s, v)
                    pixels[x, y] = (int(nr * 255), int(ng * 255), int(nb * 255), a)
                    
        img = img.convert("RGB")
        img.save(out_path)
        print("Recolored and saved:", out_name)
    except Exception as e:
        print("Error on", in_name, ":", e)
