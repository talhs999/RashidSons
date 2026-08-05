import { getCategories, getBrands } from "@/lib/localDb";
import Link from "next/link";
import { Plus, Edit } from "lucide-react";
import DeleteCategoryButton from "./DeleteCategoryButton";

export const dynamic = "force-dynamic";

export default function CategoriesPage() {
  const categories = getCategories();
  const brands = getBrands();

  const getBrandName = (brandId: number) => {
    const brand = brands.find((b: any) => b.id === brandId);
    return brand ? brand.name : "Unknown";
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Categories</h1>
          <p className="text-white/60">Manage tyre categories for each brand.</p>
        </div>
        <Link 
          href="/admin/categories/new" 
          className="bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-colors"
        >
          <Plus size={20} />
          Add Category
        </Link>
      </div>

      <div className="bg-brand-black border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <table className="w-full text-left text-white/80">
          <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/50">
            <tr>
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Category Name</th>
              <th className="px-6 py-4">Slug</th>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {categories.map((category: any) => (
              <tr key={category.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 font-mono text-sm">{category.id}</td>
                <td className="px-6 py-4">
                  <div className="font-bold text-white text-base">{category.name}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-white/5 px-2 py-1 rounded font-mono">{category.slug}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs bg-brand-yellow/20 text-brand-yellow px-2 py-1 rounded font-semibold">
                    {getBrandName(category.brand_id)}
                  </span>
                </td>
                <td className="px-6 py-4 text-right flex items-center justify-end gap-3 pt-6">
                  <Link 
                    href={`/admin/categories/${category.id}`} 
                    className="px-3 py-1.5 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border border-blue-500/30"
                  >
                    <Edit size={14} />
                    Edit
                  </Link>
                  <DeleteCategoryButton id={category.id} />
                </td>
              </tr>
            ))}
            {categories.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-white/50">
                  No categories found. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
