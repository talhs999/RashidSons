"use client";

import { useState, useTransition } from "react";
import { saveProduct } from "./actions";
import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";

export default function ProductForm({ 
  initialData, 
  id, 
  brands, 
  categories 
}: { 
  initialData?: any; 
  id: string; 
  brands: any[]; 
  categories: any[];
}) {
  const [isPending, startTransition] = useTransition();
  const [selectedBrandId, setSelectedBrandId] = useState<number>(initialData?.brand_id || 0);
  const [imagesStr, setImagesStr] = useState(initialData?.images?.join(", ") || "");
  const [uploadingImage, setUploadingImage] = useState(false);

  const filteredCategories = selectedBrandId
    ? categories.filter((c: any) => c.brand_id === selectedBrandId)
    : categories;

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
        setImagesStr((prev: string) => prev ? `${prev}, ${data.url}` : data.url);
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
        <Link href="/admin/products" className="text-white/50 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            {id === "new" ? "Add New Product" : `Edit Product: ${initialData?.name}`}
          </h1>
          <p className="text-white/60">Provide the product details below.</p>
        </div>
      </div>

      <form 
        action={(formData) => {
          startTransition(() => {
            saveProduct(formData);
          });
        }} 
        className="bg-brand-black p-8 rounded-2xl border border-white/5 shadow-xl space-y-6"
      >
        <input type="hidden" name="id" value={id} />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              defaultValue={initialData?.name}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="e.g. Yokohama BluEarth AE51"
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
              placeholder="e.g. yokohama-bluearth-ae51"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Brand</label>
            <select
              name="brand_id"
              value={selectedBrandId || ""}
              onChange={(e) => setSelectedBrandId(Number(e.target.value))}
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
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
            <select
              name="category_id"
              defaultValue={initialData?.category_id || ""}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
            >
              <option value="" disabled>Select a category</option>
              {filteredCategories.map((c: any) => (
                <option key={c.id} value={c.id} className="bg-brand-black text-white">
                  {c.name}
                </option>
              ))}
            </select>
            {selectedBrandId > 0 && filteredCategories.length === 0 && (
              <p className="text-xs text-red-400 mt-1">No categories found for this brand. Create one first.</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Size</label>
            <input
              type="text"
              name="size"
              defaultValue={initialData?.size}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="e.g. 205/55R16"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Stock Status</label>
            <select
              name="stock_status"
              defaultValue={initialData?.stock_status || "in_stock"}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
            >
              <option value="in_stock" className="bg-brand-black text-white">In Stock</option>
              <option value="out_of_stock" className="bg-brand-black text-white">Out of Stock</option>
              <option value="on_order" className="bg-brand-black text-white">On Order</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={initialData?.description}
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
            placeholder="Write a detailed description about this product..."
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="featured"
            id="featured"
            defaultChecked={initialData?.featured}
            className="w-5 h-5 rounded bg-white/5 border-white/20 text-brand-yellow focus:ring-brand-yellow"
          />
          <label htmlFor="featured" className="text-sm font-medium text-white/70">
            Featured Product (shown in highlighted sections)
          </label>
        </div>

        {/* Product Images */}
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Product Images</label>
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
              name="images"
              value={imagesStr}
              onChange={(e) => setImagesStr(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="Comma-separated image URLs: /images/tire1.png, /images/tire2.png"
            />
          </div>
          {imagesStr && (
            <div className="mt-2 flex gap-3 flex-wrap">
              {imagesStr.split(",").map((img: string, idx: number) => (
                img.trim() && (
                  <div key={idx} className="bg-brand-charcoal border border-white/10 p-2 rounded-lg flex items-center justify-center h-20 w-20">
                    <img src={img.trim()} alt={`Preview ${idx + 1}`} className="max-h-16 max-w-16 object-contain" />
                  </div>
                )
              ))}
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
            {isPending ? "Saving..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
}
