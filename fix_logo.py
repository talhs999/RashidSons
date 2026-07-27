import sys
from PIL import Image

def make_transparent(input_path, output_path):
    try:
        # Open image and convert to RGBA
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # The yellow in the image is probably close to (255, 232, 0)
            # Text is black (0, 0, 0)
            # Anything that is yellowish (high R, high G) becomes transparent
            r, g, b, a = item
            # If it's mostly yellow (Red and Green are dominant and high, Blue is lower)
            if r > 100 and g > 100 and b < 150:
                newData.append((255, 255, 255, 0)) # Fully transparent
            else:
                # Keep the original pixel (it's the black text)
                newData.append((0, 0, 0, 255)) # Force to solid black for the text

        img.putdata(newData)
        # Save as PNG to guarantee transparency is supported without WEBP weirdness
        img.save(output_path, "PNG")
        print(f"Successfully created transparent PNG at {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 2:
        make_transparent(sys.argv[1], sys.argv[2])
