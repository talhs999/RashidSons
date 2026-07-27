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
            # Check if pixel is dark (black text)
            if item[0] < 100 and item[1] < 100 and item[2] < 100:
                newData.append((0, 0, 0, 255)) # Keep black text
            else:
                newData.append((255, 255, 255, 0)) # Make everything else (yellow background) fully transparent

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Successfully created perfect transparent logo.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo()
