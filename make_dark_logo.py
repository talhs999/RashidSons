import sys
from PIL import Image

def process_logo(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            r, g, b, a = item
            if a > 0:
                newData.append((0, 0, 0, a)) # Make it black, keep alpha
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully created solid black transparent logo for {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_logo(sys.argv[1], sys.argv[2])
