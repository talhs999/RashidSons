import { getProductById, getBrands, getCategories } from "@/lib/localDb";
import ProductForm from "../ProductForm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const brands = getBrands();
  const categories = getCategories();

  if (id === "new") {
    return <ProductForm id="new" brands={brands} categories={categories} />;
  }

  const product = getProductById(Number(id));
  if (!product) {
    notFound();
  }

  return <ProductForm initialData={product} id={id} brands={brands} categories={categories} />;
}
