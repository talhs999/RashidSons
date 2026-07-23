from PIL import Image

def process_logo(img_path, out_path):
    img = Image.open(img_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    for item in data:
        # If the pixel is very bright (near-white), make it transparent
        if item[0] > 220 and item[1] > 220 and item[2] > 220:
            new_data.append((255, 255, 255, 0))
        else:
            # If the pixel is very dark (black/dark gray text), make it white
            if item[0] < 120 and item[1] < 120 and item[2] < 120:
                new_data.append((255, 255, 255, item[3]))
            else:
                # Keep other colors (like yellow)
                new_data.append(item)

    img.putdata(new_data)
    img.save(out_path, "PNG")
    print("Logo processed successfully!")

process_logo("C:/jrashid/public/images/logo.png", "C:/jrashid/public/images/logo_transparent.png")
