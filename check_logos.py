import sys
import os
from PIL import Image, ImageChops

def trim(im):
    # Convert to RGBA
    im = im.convert("RGBA")
    # Get bounding box of non-transparent pixels
    bg = Image.new("RGBA", im.size, (255, 255, 255, 0))
    diff = ImageChops.difference(im, bg)
    diff = ImageChops.add(diff, diff, 2.0, -100)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def trim_white(im):
    # If the image has a white background instead of transparent
    im = im.convert("RGBA")
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255))
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def process(path):
    print(f"Processing {path}...")
    try:
        im = Image.open(path)
        print(f"Original size: {im.size}, Mode: {im.mode}")
        
        # Trim transparent pixels
        trimmed = trim(im)
        print(f"Trimmed size: {trimmed.size}")
        
        trimmed.save(path)
        print(f"Saved {path}")
    except Exception as e:
        print(f"Error processing {path}: {e}")

logos = [
    r"C:\jrashid\public\images\brands\falken-logo.png",
    r"C:\jrashid\public\images\brands\atlas-logo.png",
    r"C:\jrashid\public\images\brands\risen-logo.png"
]

for l in logos:
    process(l)
