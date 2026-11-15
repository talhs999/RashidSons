"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import LanguageSelector, { translatePage } from "./LanguageSelector";

export default function FloatingLanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Auto-translate when navigating to a new page
  useEffect(() => {
    const savedLang = localStorage.getItem("jrs-lang");
    if (savedLang && savedLang !== "en") {
      // Small delay to let the new page render its content first
      const timer = setTimeout(() => {
        translatePage(savedLang);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Select Language"
        className="fixed bottom-5 left-5 z-50 bg-brand-yellow text-brand-black p-3.5 rounded-full shadow-2xl hover:scale-110 hover:shadow-brand-yellow/50 transition-all duration-300 flex items-center justify-center group"
      >
        <Globe size={24} className="group-hover:rotate-12 transition-transform duration-300" />
      </button>

      <LanguageSelector isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
