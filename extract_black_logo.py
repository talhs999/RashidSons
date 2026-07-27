import sys
from PIL import Image

def process_logo():
    input_path = r"C:\jrashid\public\images\brands\warrior-uploaded.webp"
    output_path = r"C:\jrashid\public\images\brands\warrior-final-black.png"
    
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            r, g, b, a = item
            
            # The background is yellow, text is black.
            # Convert to grayscale brightness to easily separate dark from light.
            brightness = (r + g + b) / 3
            
            # 180 is a generous threshold to ensure we catch all anti-aliased edge pixels
            # and turn them into solid black, keeping the text thick and bold.
            if brightness < 180:
                newData.append((0, 0, 0, 255)) # Solid Black
            else:
                newData.append((255, 255, 255, 0)) # Fully Transparent

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Successfully created thick solid black transparent logo.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo()
