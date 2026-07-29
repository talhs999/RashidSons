"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

export default function FloatingLanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-brand-yellow text-brand-black p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-brand-yellow/50 transition-all duration-300 flex items-center justify-center group"
      >
        <Globe size={28} className="group-hover:rotate-12 transition-transform duration-300" />
      </button>

      <LanguageSelector isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
