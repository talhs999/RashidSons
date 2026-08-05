import { NextResponse } from "next/server";
import { getBrandBySlug, getCategoriesByBrandId, getProductsByBrandId } from "@/lib/localDb";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return NextResponse.json({ error: "Brand not found" }, { status: 404 });
  }

  const categories = getCategoriesByBrandId(brand.id);
  const products = getProductsByBrandId(brand.id);

  return NextResponse.json({ brand, categories, products });
}
