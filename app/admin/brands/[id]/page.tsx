import BrandForm from "../BrandForm";
import { getBrandById } from "@/lib/localDb";
import { notFound } from "next/navigation";

export default async function EditBrandPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  if (id === "new") {
    return <BrandForm id="new" />;
  }

  const brand = getBrandById(Number(id));
  
  if (!brand) {
    notFound();
  }

  return <BrandForm id={id} initialData={brand} />;
}
