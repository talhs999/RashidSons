"use client";

import { X, Globe, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LanguageSelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const globalLanguages = [
  { code: "en", abbr: "US", label: "English", flag: "us" },
  { code: "es", abbr: "ES", label: "Español", flag: "es" },
  { code: "pt", abbr: "BR", label: "Português", flag: "br" },
  { code: "ar", abbr: "SA", label: "العربية", flag: "sa" },
  { code: "fr", abbr: "FR", label: "Français", flag: "fr" },
  { code: "ja", abbr: "JP", label: "日本語", flag: "jp" },
  { code: "ko", abbr: "KR", label: "한국어", flag: "kr" },
];

const naLanguages = [
  { code: "es", abbr: "MX", label: "Español", flag: "mx" },
  { code: "pt", abbr: "BR", label: "Português", flag: "br" },
  { code: "fr", abbr: "CA", label: "Français", flag: "ca" },
  { code: "en", abbr: "US", label: "English", flag: "us" },
];

const flagUrl = (code: string) => `https://hatscripts.github.io/circle-flags/flags/${code}.svg`;

// Store original text so we can revert
const originalTexts = new Map<Node, string>();
let currentLang = "en";

function getTextNodes(root: Node): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      // Skip script, style, noscript, textarea, input, and already-translating elements
      if (["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "CODE", "PRE"].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }
      // Skip empty or whitespace-only text
      if (!node.textContent || !node.textContent.trim()) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) {
    nodes.push(n as Text);
  }
  return nodes;
}

async function translateTexts(texts: string[], targetLang: string): Promise<string[]> {
  // Batch into chunks of max 50 texts or 5000 chars
  const results: string[] = [];
  const batchSize = 30;

  for (let i = 0; i < texts.length; i += batchSize) {
    const batch = texts.slice(i, i + batchSize);
    const query = batch.map((t) => `q=${encodeURIComponent(t)}`).join("&");
    
    try {
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/t?client=gtx&sl=en&tl=${targetLang}&${query}`
      );
      const data = await res.json();
      
      if (Array.isArray(data)) {
        if (batch.length === 1) {
          // Single item returns differently
          results.push(typeof data[0] === "string" ? data[0] : data[0]?.[0] || batch[0]);
        } else {
          for (let j = 0; j < batch.length; j++) {
            const item = data[j];
            results.push(typeof item === "string" ? item : item?.[0] || batch[j]);
          }
        }
      } else {
        results.push(...batch);
      }
    } catch {
      // On error, keep originals
      results.push(...batch);
    }
  }
  
  return results;
}

export function getCurrentLang() {
  return currentLang;
}

export async function translatePage(targetLang: string): Promise<void> {
  // If going back to English, restore originals
  if (targetLang === "en") {
    originalTexts.forEach((original, node) => {
      node.textContent = original;
    });
    originalTexts.clear();
    currentLang = "en";
    localStorage.removeItem("jrs-lang");
    return;
  }

  // If already translated, restore first
  if (currentLang !== "en") {
    originalTexts.forEach((original, node) => {
      node.textContent = original;
    });
    originalTexts.clear();
  }

  const textNodes = getTextNodes(document.body);
  const textsToTranslate: string[] = [];
  const nodesToUpdate: Text[] = [];

  for (const node of textNodes) {
    const text = node.textContent?.trim();
    if (text && text.length > 0) {
      // Save original
      if (!originalTexts.has(node)) {
        originalTexts.set(node, node.textContent || "");
      }
      textsToTranslate.push(text);
      nodesToUpdate.push(node);
    }
  }

  if (textsToTranslate.length === 0) return;

  const translated = await translateTexts(textsToTranslate, targetLang);

  for (let i = 0; i < nodesToUpdate.length; i++) {
    const node = nodesToUpdate[i];
    const original = node.textContent || "";
    const trimmed = original.trim();
    // Preserve leading/trailing whitespace
    const leading = original.substring(0, original.indexOf(trimmed));
    const trailing = original.substring(original.indexOf(trimmed) + trimmed.length);
    node.textContent = leading + (translated[i] || trimmed) + trailing;
  }

  currentLang = targetLang;
  localStorage.setItem("jrs-lang", targetLang);
}

export default function LanguageSelector({ isOpen, onClose }: LanguageSelectorProps) {
  const [isTranslating, setIsTranslating] = useState(false);
  const [activeLang, setActiveLang] = useState("en");

  const handleTranslate = async (langCode: string) => {
    setIsTranslating(true);
    setActiveLang(langCode);
    try {
      await translatePage(langCode);
    } catch (e) {
      console.error("Translation failed:", e);
    }
    setIsTranslating(false);
    onClose();
  };

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

            {/* Translating overlay */}
            {isTranslating && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center gap-3">
                <Loader2 className="w-8 h-8 animate-spin text-brand-yellow" />
                <span className="text-lg font-semibold text-brand-black">Translating...</span>
              </div>
            )}

            {/* Content */}
            <div className="p-8 md:p-12 space-y-12 max-h-[75vh] overflow-y-auto">
              {/* Global Site */}
              <div>
                <h3 className="text-xl font-extrabold mb-6 font-heading text-brand-black border-l-4 border-brand-yellow pl-3 uppercase tracking-wider">
                  Global Site
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                  {globalLanguages.map((lang, idx) => (
                    <button
                      key={`global-${lang.code}-${idx}`}
                      onClick={() => handleTranslate(lang.code)}
                      className={`text-left transition-all duration-300 hover:translate-x-2 transform flex items-center gap-3 group ${
                        activeLang === lang.code
                          ? "text-brand-black font-bold"
                          : "text-brand-gray hover:text-brand-black"
                      }`}
                    >
                      <img src={flagUrl(lang.flag)} alt={lang.abbr} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                      <span className="text-xs font-semibold tracking-widest text-brand-black/60 group-hover:text-brand-black">{lang.abbr}</span>
                      <span className="text-base group-hover:font-bold">{lang.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* North America Site */}
              <div>
                <h3 className="text-xl font-extrabold mb-6 font-heading text-brand-black border-l-4 border-brand-yellow pl-3 uppercase tracking-wider">
                  North America Site
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
                  {naLanguages.map((lang, idx) => (
                    <button
                      key={`na-${lang.code}-${idx}`}
                      onClick={() => handleTranslate(lang.code)}
                      className={`text-left transition-all duration-300 hover:translate-x-2 transform flex items-center gap-3 group ${
                        activeLang === lang.code
                          ? "text-brand-black font-bold"
                          : "text-brand-gray hover:text-brand-black"
                      }`}
                    >
                      <img src={flagUrl(lang.flag)} alt={lang.abbr} className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                      <span className="text-xs font-semibold tracking-widest text-brand-black/60 group-hover:text-brand-black">{lang.abbr}</span>
                      <span className="text-base group-hover:font-bold">{lang.label}</span>
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
