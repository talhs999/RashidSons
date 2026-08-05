"use client";

import { useState, useTransition } from "react";
import { saveBrand } from "./actions";
import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";

export default function BrandForm({ initialData, id }: { initialData?: any; id: string }) {
  const [isPending, startTransition] = useTransition();
  const [logoUrl, setLogoUrl] = useState(initialData?.logo_url || "");
  const [logoWhiteUrl, setLogoWhiteUrl] = useState(initialData?.logo_white_url || "");
  const [tireImageUrl, setTireImageUrl] = useState(initialData?.tire_image || "");
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingWhiteLogo, setUploadingWhiteLogo] = useState(false);
  const [uploadingTireImage, setUploadingTireImage] = useState(false);

  const handleFileUpload = async (file: File, setUrlCallback: (url: string) => void, setUploading: (b: boolean) => void) => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        setUrlCallback(data.url);
      } else {
        alert(data.error || "Upload failed");
      }
    } catch (err) {
      alert("Error uploading file");
    } finally {
      setUploading(false);
    }
  };

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
          <p className="text-white/60">Provide the brand details, slogans, and logos below.</p>
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
          <label className="block text-sm font-medium text-white/70 mb-2">Slogan / Headline (Displays in Official Distributor section)</label>
          <input
            type="text"
            name="slogan"
            defaultValue={initialData?.slogan}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
            placeholder="e.g. THE DEFINITION OF ALL-SEASON PERFORMANCE"
          />
        </div>

        {/* LOGO URL + FILE UPLOAD */}
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Logo (Default / Dark text)</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0], setLogoUrl, setUploadingLogo);
                }
              }}
              className="w-full text-xs text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-brand-yellow file:text-brand-black hover:file:bg-white file:cursor-pointer cursor-pointer"
            />
            {uploadingLogo && <p className="text-xs text-brand-yellow">Uploading logo file...</p>}

            <input
              type="text"
              name="logo_url"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="/images/brands/logo.png"
            />
          </div>
          {logoUrl && (
            <div className="mt-2 bg-brand-yellow p-3 rounded-lg flex items-center justify-center h-20 max-w-xs">
              <img src={logoUrl} alt="Logo preview" className="max-h-12 object-contain" />
            </div>
          )}
        </div>

        {/* WHITE LOGO URL + FILE UPLOAD */}
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">White Logo (For Official Distributor section & dark backgrounds)</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0], setLogoWhiteUrl, setUploadingWhiteLogo);
                }
              }}
              className="w-full text-xs text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-brand-yellow file:text-brand-black hover:file:bg-white file:cursor-pointer cursor-pointer"
            />
            {uploadingWhiteLogo && <p className="text-xs text-brand-yellow">Uploading white logo file...</p>}

            <input
              type="text"
              name="logo_white_url"
              value={logoWhiteUrl}
              onChange={(e) => setLogoWhiteUrl(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="/images/brands/logo-white.png"
            />
          </div>
          {logoWhiteUrl && (
            <div className="mt-2 bg-black border border-white/10 p-3 rounded-lg flex items-center justify-center h-20 max-w-xs">
              <img src={logoWhiteUrl} alt="White logo preview" className="max-h-12 object-contain" />
            </div>
          )}
        </div>

        {/* TIRE IMAGE FOR HOMEPAGE CARD */}
        <div>
          <label className="block text-sm font-medium text-white/70 mb-2">Tire Image (Shown on homepage brand card)</label>
          <div className="space-y-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileUpload(e.target.files[0], setTireImageUrl, setUploadingTireImage);
                }
              }}
              className="w-full text-xs text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-brand-yellow file:text-brand-black hover:file:bg-white file:cursor-pointer cursor-pointer"
            />
            {uploadingTireImage && <p className="text-xs text-brand-yellow">Uploading tire image...</p>}

            <input
              type="text"
              name="tire_image"
              value={tireImageUrl}
              onChange={(e) => setTireImageUrl(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow transition-colors"
              placeholder="/images/tires/tire.png"
            />
          </div>
          {tireImageUrl && (
            <div className="mt-2 bg-brand-charcoal border border-white/10 p-3 rounded-lg flex items-center justify-center h-24 max-w-xs">
              <img src={tireImageUrl} alt="Tire preview" className="max-h-20 object-contain" />
            </div>
          )}
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
            disabled={isPending || uploadingLogo || uploadingWhiteLogo || uploadingTireImage}
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
