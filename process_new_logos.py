import sys
import shutil
import os
from PIL import Image

def process_logo(src, dest, dest_white):
    try:
        # Copy original logo
        shutil.copy2(src, dest)
        print(f"Copied {os.path.basename(src)} to {dest}")

        # Create white variant
        img = Image.open(dest).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            r, g, b, a = item
            # If pixel is not transparent, make it white
            if a > 0:
                newData.append((255, 255, 255, a))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(dest_white, "PNG")
        print(f"Generated white variant: {os.path.basename(dest_white)}")
    except Exception as e:
        print(f"Error processing {src}: {e}")

if __name__ == "__main__":
    logos = [
        {
            "src": r"c:\Users\IQRA TRADERS\OneDrive\Desktop\J Rashid & Sons\Falken-Logo.png",
            "dest": r"C:\jrashid\public\images\brands\falken-logo.png",
            "dest_white": r"C:\jrashid\public\images\brands\falken-logo-white.png"
        },
        {
            "src": r"c:\Users\IQRA TRADERS\OneDrive\Desktop\J Rashid & Sons\atlas tyre logo.png",
            "dest": r"C:\jrashid\public\images\brands\atlas-logo.png",
            "dest_white": r"C:\jrashid\public\images\brands\atlas-logo-white.png"
        },
        {
            "src": r"c:\Users\IQRA TRADERS\OneDrive\Desktop\J Rashid & Sons\risen logo.png",
            "dest": r"C:\jrashid\public\images\brands\risen-logo.png",
            "dest_white": r"C:\jrashid\public\images\brands\risen-logo-white.png"
        }
    ]
    
    for logo in logos:
        process_logo(logo["src"], logo["dest"], logo["dest_white"])
