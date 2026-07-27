import sys
from PIL import Image

def remove_yellow_background(image_path, output_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # item is (R, G, B, A)
            # Yellow is high R, high G, low B. 
            # Let's say if R > 200, G > 200, B < 150, we make it transparent.
            # The warrior logo has a bright yellow background.
            r, g, b, a = item
            if r > 150 and g > 150 and b < 100:
                newData.append((255, 255, 255, 0)) # transparent
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "WEBP")
        print(f"Successfully removed yellow background from {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 2:
        remove_yellow_background(sys.argv[1], sys.argv[2])
