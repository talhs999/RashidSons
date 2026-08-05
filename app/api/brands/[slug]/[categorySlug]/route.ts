import { NextResponse } from "next/server";
import { getBrandBySlug, getCategoryBySlug, getProductsByCategoryId } from "@/lib/localDb";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; categorySlug: string }> }
) {
  const { slug, categorySlug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return NextResponse.json({ error: "Brand not found" }, { status: 404 });
  }

  const category = getCategoryBySlug(categorySlug);

  if (!category || category.brand_id !== brand.id) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  const products = getProductsByCategoryId(category.id);

  return NextResponse.json({ brand, category, products });
}
