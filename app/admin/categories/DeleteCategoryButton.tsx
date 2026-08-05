"use client";

import { removeCategory } from "./actions";
import { Trash2 } from "lucide-react";

export default function DeleteCategoryButton({ id }: { id: number }) {
  return (
    <button
      onClick={async () => {
        if (confirm("Are you sure you want to delete this category? All products in this category may become orphaned.")) {
          await removeCategory(id);
          window.location.reload();
        }
      }}
      className="px-3 py-1.5 bg-red-500/20 text-red-300 hover:bg-red-500/30 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 border border-red-500/30"
    >
      <Trash2 size={14} />
      Delete
    </button>
  );
}
