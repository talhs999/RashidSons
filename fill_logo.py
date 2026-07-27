import sys
from PIL import Image

def process_logo():
    input_path = r"C:\jrashid\public\images\partners\warrior-clean.png"
    output_path = r"C:\jrashid\public\images\brands\warrior-black-filled.png"
    
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            r, g, b, a = item
            
            # If pixel is already transparent, keep it transparent
            if a < 50:
                newData.append((255, 255, 255, 0))
                continue
                
            # The original logo has a blue background and white text.
            # Let's remove any bluish pixels (where blue is dominant)
            if b > r and b > g:
                newData.append((255, 255, 255, 0)) # Make blue background transparent
            else:
                # Anything else (white text, grey outlines) becomes solid black
                newData.append((0, 0, 0, 255))

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Successfully created filled black logo.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo()
