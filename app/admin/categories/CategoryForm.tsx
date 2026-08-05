"use client";

import { useState, useTransition } from "react";
import { saveCategory } from "./actions";
import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";

export default function CategoryForm({ initialData, id, brands }: { initialData?: any; id: string; brands: any[] }) {
  const [isPending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState(initialData?.image_url || "");
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleFileUpload = async (file: File) => {
    try {
      setUploadingImage(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setImageUrl(data.url);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (err) {
      alert("Error uploading file");
    } finally {
      setUploadingImage(false);
    }
  };

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/categories" className="text-white/50 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            {id === "new" ? "Add New Category" : `Edit Category: ${initialData?.name}`}
          </h1>
          <p className="text-white/60">Provide the category details below.</p>
        </div>
      </div>

      <form 
        action={(formData) => {
          startTransition(() => {
            saveCategory(formData);
          });
        }} 
        className="bg-brand-black p-8 rounded-2xl border border-white/5 shadow-xl space-y-6"
      >
        <input type="hidden" name="id" value={id} />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Category Name</label>
            <input
              type="text"
              name="name"
              defaultValue={initialData?.name}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="e.g. Passenger Car Tyres"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Slug (URL friendly)</label>
            <input
              type="text"
              name="slug"
              defaultValue={initialData?.slug}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="e.g. passenger-car"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Brand</label>
          <select
            name="brand_id"
            defaultValue={initialData?.brand_id || ""}
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
          >
            <option value="" disabled>Select a brand</option>
            {brands.map((b: any) => (
              <option key={b.id} value={b.id} className="bg-brand-black text-white">
                {b.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Image */}
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Category Image (Optional)</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
              className="w-full text-xs text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-brand-yellow file:text-brand-black hover:file:bg-white file:cursor-pointer cursor-pointer"
            />
            {uploadingImage && <p className="text-xs text-brand-yellow">Uploading image...</p>}

            <input
              type="text"
              name="image_url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="/images/categories/image.png"
            />
          </div>
          {imageUrl && (
            <div className="mt-2 bg-brand-charcoal border border-white/10 p-3 rounded-lg flex items-center justify-center h-24 max-w-xs">
              <img src={imageUrl} alt="Category preview" className="max-h-20 object-contain" />
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-end">
          <button
            type="submit"
            disabled={isPending || uploadingImage}
            className="bg-brand-yellow text-brand-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
          >
            <Save size={20} />
            {isPending ? "Saving..." : "Save Category"}
          </button>
        </div>
      </form>
    </div>
  );
}
