import { getProducts, getBrands, getCategories } from "@/lib/localDb";
import Link from "next/link";
import { Plus, Edit } from "lucide-react";
import DeleteProductButton from "./DeleteProductButton";

export const dynamic = "force-dynamic";

export default function ProductsPage() {
  const products = getProducts();
  const brands = getBrands();
  const categories = getCategories();

  const getBrandName = (brandId: number) => {
    const brand = brands.find((b: any) => b.id === brandId);
    return brand ? brand.name : "Unknown";
  };

  const getCategoryName = (categoryId: number) => {
    const cat = categories.find((c: any) => c.id === categoryId);
    return cat ? cat.name : "Unknown";
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
          <p className="text-white/60">Manage all tyre products.</p>
        </div>
        <Link 
          href="/admin/products/new" 
          className="bg-brand-yellow text-brand-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-white transition-colors"
        >
          <Plus size={20} />
          Add Product
        </Link>
      </div>

      <div className="bg-brand-black border border-white/5 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-white/80">
            <thead className="bg-white/5 text-xs uppercase tracking-wider text-white/50">
              <tr>
                <th className="px-4 py-4">ID</th>
                <th className="px-4 py-4">Image</th>
                <th className="px-4 py-4">Product Name</th>
                <th className="px-4 py-4">Brand</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Size</th>
                <th className="px-4 py-4">Stock</th>
                <th className="px-4 py-4">Featured</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {products.map((product: any) => (
                <tr key={product.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-4 py-4 font-mono text-sm">{product.id}</td>
                  <td className="px-4 py-4">
                    {product.images && product.images[0] ? (
                      <img src={product.images[0]} alt={product.name} className="h-10 w-10 object-contain rounded" />
                    ) : (
                      <div className="h-10 w-10 bg-white/5 rounded flex items-center justify-center text-[10px] text-white/30">No img</div>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-bold text-white text-sm">{product.name}</div>
                    <div className="text-[11px] text-white/40 truncate max-w-[200px]">{product.description}</div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs bg-brand-yellow/20 text-brand-yellow px-2 py-1 rounded font-semibold">
                      {getBrandName(product.brand_id)}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/60">
                      {getCategoryName(product.category_id)}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-mono">{product.size || "—"}</td>
                  <td className="px-4 py-4">
                    <span className={`text-xs px-2 py-1 rounded font-semibold ${
                      product.stock_status === "in_stock" 
                        ? "bg-green-500/20 text-green-300" 
                        : product.stock_status === "out_of_stock"
                        ? "bg-red-500/20 text-red-300"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}>
                      {product.stock_status === "in_stock" ? "In Stock" : product.stock_status === "out_of_stock" ? "Out" : "On Order"}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    {product.featured ? (
                      <span className="text-brand-yellow text-xs font-bold">★ Yes</span>
                    ) : (
                      <span className="text-white/30 text-xs">No</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        href={`/admin/products/${product.id}`} 
                        className="px-3 py-1.5 bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border border-blue-500/30"
                      >
                        <Edit size={14} />
                        Edit
                      </Link>
                      <DeleteProductButton id={product.id} />
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-6 py-8 text-center text-white/50">
                    No products found. Add one to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
