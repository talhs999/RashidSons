file_path = r"c:\Users\dell\OneDrive\Desktop\rashid&sons\lib\data.ts"

with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

interfaces = """export interface Brand {
  id: number;
  name: string;
  slug: string;
  logo_url: string;
  logo_white_url?: string;
  banner_url?: string;
  banner_image?: string;
  tire_image?: string;
  slogan?: string;
  about?: {
    heading?: string;
    founder?: string;
    founded_year?: string;
    headquarters?: string;
    history?: string;
  };
  description: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  brand_id: number;
  image_url?: string;
}

export interface Product {
"""

if not text.startswith("export interface Brand"):
    # Strip any broken leading lines before export interface Dealer or export const brands
    idx = text.find("export interface Dealer")
    if idx != -1:
        new_text = interfaces + text[idx:]
    else:
        new_text = interfaces + text
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Fixed interfaces in lib/data.ts")
