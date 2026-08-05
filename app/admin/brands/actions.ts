"use server";

import { createBrand, updateBrand, deleteBrand } from "@/lib/localDb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveBrand(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;
  const logo_url = formData.get("logo_url") as string;
  const logo_white_url = formData.get("logo_white_url") as string;
  const tire_image = formData.get("tire_image") as string;
  const slogan = formData.get("slogan") as string;
  const description = formData.get("description") as string;

  const data = {
    name,
    slug,
    logo_url,
    logo_white_url,
    tire_image,
    slogan,
    description,
  };

  if (id && id !== "new") {
    updateBrand(Number(id), data);
  } else {
    createBrand(data);
  }

  revalidatePath("/");
  revalidatePath("/brands");
  revalidatePath("/admin/brands");
  redirect("/admin/brands");
}

export async function removeBrand(id: number) {
  deleteBrand(id);
  revalidatePath("/");
  revalidatePath("/brands");
  revalidatePath("/admin/brands");
}
