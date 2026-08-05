"use server";

import { updatePartnersHeading, addPartner, updatePartner, deletePartner } from "@/lib/localDb";
import { revalidatePath } from "next/cache";

export async function saveHeadingAction(formData: FormData) {
  const heading = formData.get("heading") as string;
  if (heading !== null) {
    updatePartnersHeading(heading);
    revalidatePath("/");
    revalidatePath("/admin/partners");
  }
}

export async function addPartnerAction(formData: FormData) {
  const name = formData.get("name") as string;
  const logo_url = formData.get("logo_url") as string;

  if (name && logo_url) {
    addPartner({ name, logo_url });
    revalidatePath("/");
    revalidatePath("/admin/partners");
  }
}

export async function updatePartnerAction(formData: FormData) {
  const idStr = formData.get("id") as string;
  const name = formData.get("name") as string;
  const logo_url = formData.get("logo_url") as string;

  if (idStr && name && logo_url) {
    const id = parseInt(idStr, 10);
    updatePartner(id, { name, logo_url });
    revalidatePath("/");
    revalidatePath("/admin/partners");
  }
}

export async function deletePartnerAction(id: number) {
  deletePartner(id);
  revalidatePath("/");
  revalidatePath("/admin/partners");
}
