import sys
from PIL import Image

def process_logo(input_path, output_path):
    
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            r, g, b, a = item
            
            # If the pixel is not transparent (i.e. it is the black text)
            if a > 0:
                newData.append((255, 255, 255, a)) # Make it white, keep alpha
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Successfully created solid white transparent logo.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo(sys.argv[1], sys.argv[2])
