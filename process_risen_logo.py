from PIL import Image
import os

input_path = r"C:\Users\dell\.gemini\antigravity-ide\brain\08c1da8d-0817-466f-8073-b9b714277d48\.user_uploaded\media_1787005450139.jpg"
target_dir = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\public\images\brands"

img = Image.open(input_path).convert("RGBA")
width, height = img.size

# 1. Create White Logo (for dark background)
white_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
white_pixels = white_img.load()
src_pixels = img.load()

for y in range(height):
    for x in range(width):
        r, g, b, a = src_pixels[x, y]
        # Calculate brightness
        brightness = (r + g + b) / 3.0
        if brightness > 50:
            # Alpha proportional to brightness
            alpha = int(min(255, brightness * 1.2))
            white_pixels[x, y] = (255, 255, 255, alpha)
        else:
            white_pixels[x, y] = (0, 0, 0, 0)

white_out_path = os.path.join(target_dir, "risen-logo-white.png")
white_img.save(white_out_path, "PNG")
print(f"Saved {white_out_path}")

# 2. Create Dark Logo (for light background)
dark_img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
dark_pixels = dark_img.load()

for y in range(height):
    for x in range(width):
        r, g, b, a = src_pixels[x, y]
        brightness = (r + g + b) / 3.0
        if brightness > 50:
            alpha = int(min(255, brightness * 1.2))
            dark_pixels[x, y] = (15, 23, 42, alpha) # sleek dark navy/black
        else:
            dark_pixels[x, y] = (0, 0, 0, 0)

dark_out_path = os.path.join(target_dir, "risen-logo.png")
dark_img.save(dark_out_path, "PNG")
print(f"Saved {dark_out_path}")
