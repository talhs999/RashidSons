import sys
from PIL import Image
import colorsys

img_path = r"C:\Users\IQRA TRADERS\OneDrive\Desktop\J Rashid & Sons\jrashid-nextjs\public\images\tire-dimensions.jpg"
out_path = r"C:\Users\IQRA TRADERS\OneDrive\Desktop\J Rashid & Sons\jrashid-nextjs\public\images\tire-dimensions-yellow.jpg"

try:
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
                # Change hue to brand yellow
                h = 0.13
                s = min(1.0, s * 1.2)
                
                nr, ng, nb = colorsys.hsv_to_rgb(h, s, v)
                pixels[x, y] = (int(nr * 255), int(ng * 255), int(nb * 255), a)
                
    img = img.convert("RGB")
    img.save(out_path)
    print("Recoloring complete. Image saved to", out_path)
except Exception as e:
    print("Error:", e)
