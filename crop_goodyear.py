import os
from PIL import Image

tires_dir = r"C:\jrashid\public\images\tires"
goodyear_images = [
    "goodyear-1.png",
    "goodyear-2.png",
    "goodyear-3.png"
]

for img_name in goodyear_images:
    path = os.path.join(tires_dir, img_name)
    if os.path.exists(path):
        img = Image.open(path)
        # getbbox returns the bounding box of the non-zero regions in the image
        bbox = img.getbbox()
        if bbox:
            # Crop the image to the bounding box
            cropped_img = img.crop(bbox)
            cropped_img.save(path)
            print(f"Cropped and saved {img_name}")
        else:
            print(f"Could not find bounding box for {img_name}")
    else:
        print(f"File not found: {path}")
