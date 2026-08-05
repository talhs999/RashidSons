import { getBrands } from "@/lib/localDb";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import DeleteBrandButton from "./DeleteBrandButton";

export const dynamic = "force-dynamic";

export default function BrandsPage() {
  const brands = getBrands();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Brands</h1>
          <p className="text-white/60">Manage all tyre brands shown on the website.</p>
        </div>
        <Link 
          href="/admin/brands/new" 
          className="bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-colors"
        >
          <Plus size={20} />
          Add Brand
        </Link>
      </div>

      <div className="bg-brand-black border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-white/80">
          <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/50">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Logo</th>
              <th className="px-6 py-4">Brand Name & Slogan</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {brands.map((brand: any) => (
              <tr key={brand.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-mono text-sm">{brand.id}</td>
                <td className="px-6 py-4">
                  <img src={brand.logo_white_url || brand.logo_url} alt={brand.name} className="h-8 max-w-[120px] object-contain" />
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-white text-base">{brand.name}</div>
                  <div className="text-xs text-brand-yellow mt-0.5 font-medium">{brand.slogan || "No slogan set"}</div>
                  <div className="text-[11px] text-white/40 truncate max-w-md mt-0.5">{brand.description}</div>
                </td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-3 pt-6">
                  <Link 
                    href={`/admin/brands/${brand.id}`} 
                    className="px-3 py-1.5 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border border-blue-500/30"
                  >
                    <Edit size={14} />
                    Edit Wording & Details
                  </Link>
                  <DeleteBrandButton id={brand.id} />
                </td>
              </tr>
            ))}
            {brands.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-white/50">
                  No brands found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
