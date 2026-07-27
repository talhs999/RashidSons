"use client";

import { saveBrand } from "./actions";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useTransition } from "react";

export default function BrandForm({ initialData, id }: { initialData?: any; id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/brands" className="text-white/50 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            {id === "new" ? "Add New Brand" : `Edit Brand: ${initialData?.name}`}
          </h1>
          <p className="text-white/60">Provide the brand details and logos below.</p>
        </div>
      </div>

      <form 
        action={(formData) => {
          startTransition(() => {
            saveBrand(formData);
          });
        }} 
        className="bg-brand-black p-8 rounded-2xl border border-white/5 shadow-xl space-y-6"
      >
        <input type="hidden" name="id" value={id} />

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Brand Name</label>
            <input
              type="text"
              name="name"
              defaultValue={initialData?.name}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="e.g. Yokohama"
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
              placeholder="e.g. yokohama"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Logo URL (Default / Dark text)</label>
          <input
            type="text"
            name="logo_url"
            defaultValue={initialData?.logo_url}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
            placeholder="/images/brands/logo.png"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">White Logo URL (For dark backgrounds)</label>
          <input
            type="text"
            name="logo_white_url"
            defaultValue={initialData?.logo_white_url}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
            placeholder="/images/brands/logo-white.png"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={initialData?.description}
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
            placeholder="Write a short description about this brand..."
          />
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-end">
          <button
            type="submit"
            disabled={isPending}
            className="bg-brand-yellow text-brand-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
          >
            <Save size={20} />
            {isPending ? "Saving..." : "Save Brand"}
          </button>
        </div>
      </form>
    </div>
  );
}
