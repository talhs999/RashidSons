from PIL import Image

def check(path):
    print(f"Checking {path}")
    im = Image.open(path)
    im = im.convert("RGBA")
    w, h = im.size
    print(f"Size: {w}x{h}")
    
    # Get bounding box of non-transparent pixels
    bg = Image.new("RGBA", im.size, (0,0,0,0))
    from PIL import ImageChops
    diff = ImageChops.difference(im, bg)
    bbox = diff.getbbox()
    print(f"Non-transparent BBox: {bbox}")
    
    if bbox:
        cropped = im.crop(bbox)
        print(f"Cropped size: {cropped.size}")
    
check(r"C:\jrashid\public\images\brands\risen-logo.png")
check(r"C:\jrashid\public\images\brands\risen-logo-white.png")
