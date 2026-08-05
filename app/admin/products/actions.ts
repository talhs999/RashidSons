"use server";

import { createProduct, updateProduct, deleteProduct } from "@/lib/localDb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveProduct(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const brand_id = Number(formData.get("brand_id"));
  const category_id = Number(formData.get("category_id"));
  const size = formData.get("size") as string;
  const description = formData.get("description") as string;
  const stock_status = formData.get("stock_status") as string;
  const featured = formData.get("featured") === "on";
  const images_str = formData.get("images") as string;

  const images = images_str
    ? images_str.split(",").map((s) => s.trim()).filter(Boolean)
    : [];

  const data: any = {
    name,
    slug,
    brand_id,
    category_id,
    size: size || undefined,
    description,
    stock_status: stock_status || "in_stock",
    featured,
    images,
  };

  if (id && id !== "new") {
    updateProduct(Number(id), data);
  } else {
    createProduct(data);
  }

  revalidatePath("/");
  revalidatePath("/brands");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function removeProduct(id: number) {
  deleteProduct(id);
  revalidatePath("/");
  revalidatePath("/brands");
  revalidatePath("/admin/products");
}
