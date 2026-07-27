from PIL import Image

im = Image.open(r"C:\jrashid\public\images\brands\risen-logo.png")
im = im.convert("RGBA")
datas = im.getdata()

# Let's count colors
colors = {}
for item in datas:
    if item not in colors:
        colors[item] = 0
    colors[item] += 1

# Print top 5 colors
sorted_colors = sorted(colors.items(), key=lambda x: x[1], reverse=True)[:5]
print("Top colors in original Risen logo:")
for c in sorted_colors:
    print(c)
