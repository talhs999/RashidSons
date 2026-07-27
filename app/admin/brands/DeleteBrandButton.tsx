"use client";

import { removeBrand } from "./actions";
import { Trash2 } from "lucide-react";
import { useTransition } from "react";

export default function DeleteBrandButton({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this brand?")) {
          startTransition(() => {
            removeBrand(id);
          });
        }
      }}
      disabled={isPending}
      className="p-2 bg-red-500/10 text-red-400 rounded hover:bg-red-500/20 transition-colors disabled:opacity-50"
    >
      <Trash2 size={16} />
    </button>
  );
}
