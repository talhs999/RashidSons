"use server";

import { createCategory, updateCategory, deleteCategory } from "@/lib/localDb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveCategory(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const brand_id = Number(formData.get("brand_id"));
  const image_url = formData.get("image_url") as string;

  const data: any = {
    name,
    slug,
    brand_id,
  };

  if (image_url) {
    data.image_url = image_url;
  }

  if (id && id !== "new") {
    updateCategory(Number(id), data);
  } else {
    createCategory(data);
  }

  revalidatePath("/");
  revalidatePath("/brands");
  revalidatePath("/admin/categories");
  redirect("/admin/categories");
}

export async function removeCategory(id: number) {
  deleteCategory(id);
  revalidatePath("/");
  revalidatePath("/brands");
  revalidatePath("/admin/categories");
}
