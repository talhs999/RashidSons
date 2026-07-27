from PIL import Image

def make_transparent(path):
    print(f"Processing {path}...")
    im = Image.open(path)
    im = im.convert("RGBA")
    datas = im.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is white (or very close to white), make it transparent
        # White is 255, 255, 255
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    im.putdata(newData)
    im.save(path, "PNG")
    print(f"Saved {path} with transparent background.")

make_transparent(r"C:\jrashid\public\images\brands\risen-logo.png")
