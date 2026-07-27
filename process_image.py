import sys
from PIL import Image, ImageOps

def fix_image(image_path):
    try:
        img = Image.open(image_path)
        # Fix EXIF orientation
        img = ImageOps.exif_transpose(img)
        
        # If it's still wider than it is tall, the user might mean a hard 90 degree rotation
        # because portrait photos are usually taller than they are wide.
        if img.width > img.height:
            # Rotate it to portrait (assuming 90 degrees counter-clockwise or clockwise, usually CCW)
            # We'll just rotate it 90 degrees CCW
            img = img.rotate(270, expand=True)
            
        img.save(image_path)
        print(f"Successfully processed {image_path}")
    except Exception as e:
        print(f"Error processing {image_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        fix_image(sys.argv[1])
