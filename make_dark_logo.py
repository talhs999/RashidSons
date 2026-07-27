import sys
from PIL import Image

def process_logo():
    input_path = r"c:\Users\IQRA TRADERS\OneDrive\Desktop\J Rashid & Sons\jrashid-nextjs\warrior logo (1).webp"
    output_path = r"C:\jrashid\public\images\brands\warrior-perfect.png"
    
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # If the pixel is mostly white/yellow/transparent, make it transparent
            # Otherwise, make it solid black.
            # To make it "darker" (thicker), we should include more pixels.
            r, g, b, a = item
            
            # If a is 0 or close to 0, it's transparent
            if a < 50:
                newData.append((255, 255, 255, 0))
                continue
                
            # If it's a light color (background), make it transparent
            if r > 180 and g > 180 and b > 180: # white-ish
                newData.append((255, 255, 255, 0))
            elif r > 200 and g > 200 and b < 100: # yellow-ish
                newData.append((255, 255, 255, 0))
            else:
                # It's part of the text or outline, make it SOLID black!
                newData.append((0, 0, 0, 255))

        img.putdata(newData)
        
        # Let's also add a small stroke/dilate effect to make it "darker" (thicker) if needed, 
        # but just making all anti-aliased pixels solid black will thicken it significantly.
        img.save(output_path, "PNG")
        print("Successfully created darkened transparent logo.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo()
