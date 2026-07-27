import sys
from PIL import Image

def rotate_image(image_path):
    try:
        img = Image.open(image_path)
        # The user's screenshot shows the top of the head pointing LEFT.
        # This means we need to rotate 90 degrees CLOCKWISE.
        # In PIL, rotate(Angle) rotates counter-clockwise. 
        # So rotate(-90) or rotate(270) is clockwise.
        img = img.rotate(270, expand=True)
        img.save(image_path)
        print(f"Successfully rotated {image_path} clockwise")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        rotate_image(sys.argv[1])
