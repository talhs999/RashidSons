import sys
from PIL import Image

def process_image():
    input_path = r"C:\jrashid\public\images\founder_final.jpeg"
    output_path = r"C:\jrashid\public\images\founder_final.jpeg"
    
    try:
        img = Image.open(input_path)
        # Rotate 180 degrees (2 times 90)
        img = img.rotate(180, expand=True)
        img.save(output_path, "JPEG")
        print("Successfully rotated founder image.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    process_image()
