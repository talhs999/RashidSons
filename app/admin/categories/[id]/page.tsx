import { getCategoryById, getBrands } from "@/lib/localDb";
import CategoryForm from "../CategoryForm";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const brands = getBrands();

  if (id === "new") {
    return <CategoryForm id="new" brands={brands} />;
  }

  const category = getCategoryById(Number(id));
  if (!category) {
    notFound();
  }

  return <CategoryForm initialData={category} id={id} brands={brands} />;
}
