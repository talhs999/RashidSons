import { NextResponse } from "next/server";
import { getBrandBySlug, getCategoryBySlug, getProductBySlug } from "@/lib/localDb";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; categorySlug: string; productSlug: string }> }
) {
  const { slug, categorySlug, productSlug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return NextResponse.json({ error: "Brand not found" }, { status: 404 });
  }

  const category = getCategoryBySlug(categorySlug, brand.id);

  if (!category || category.brand_id !== brand.id) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  const product = getProductBySlug(productSlug);

  if (!product || product.category_id !== category.id) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ brand, category, product });
}
