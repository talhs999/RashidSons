"use client";

import { X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const globalLanguages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
];

const naLanguages = [
  { code: "es-na", label: "Español" },
  { code: "pt-na", label: "Português" },
  { code: "fr-na", label: "Français" },
  { code: "en-na", label: "English" },
];

export default function LanguageSelector({ isOpen, onClose }: LanguageSelectorProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white text-brand-black shadow-2xl z-[101] rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-black/10 bg-gray-50">
              <div className="flex items-center gap-3">
                <Globe className="text-brand-yellow w-7 h-7" />
                <h2 className="text-xl font-bold uppercase tracking-wider font-heading">
                  Select Region & Language
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-brand-gray hover:text-brand-black"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 space-y-12 max-h-[75vh] overflow-y-auto">
              {/* Global Site */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 font-heading text-brand-black border-l-4 border-brand-yellow pl-4">
                  Global Site
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                  {globalLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={onClose}
                      className="text-left text-brand-gray hover:text-brand-black hover:font-bold transition-all duration-300 hover:translate-x-2 transform flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* North America Site */}
              <div>
                <h3 className="text-2xl font-extrabold mb-8 font-heading text-brand-black border-l-4 border-brand-yellow pl-4">
                  North America Site
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                  {naLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={onClose}
                      className="text-left text-brand-gray hover:text-brand-black hover:font-bold transition-all duration-300 hover:translate-x-2 transform flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
