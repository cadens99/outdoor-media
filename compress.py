from PIL import Image
import os

# Settings
INPUT_DIR = './public/images'  # Change if needed
OUTPUT_DIR = './public/images_compressed'
MAX_WIDTH = 1200  # Resize wide images to this width
QUALITY = 85  # Compression level (85 is good for WebP)

os.makedirs(OUTPUT_DIR, exist_ok=True)

for filename in os.listdir(INPUT_DIR):
    if not filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        continue

    input_path = os.path.join(INPUT_DIR, filename)
    output_path = os.path.join(OUTPUT_DIR, os.path.splitext(filename)[0] + '.webp')

    with Image.open(input_path) as img:
        # Resize if too wide
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            new_size = (MAX_WIDTH, int(img.height * ratio))
            img = img.resize(new_size, Image.Resampling.LANCZOS)

        # Convert to RGB (if needed)
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")

        img.save(output_path, 'webp', quality=QUALITY, method=6)

print("✅ All images optimized and saved to", OUTPUT_DIR)
