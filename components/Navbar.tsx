"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, MapPin, Search } from "lucide-react";
import SearchDrawer from "./SearchDrawer";

const mainNav = [
  { name: "Brands", href: "/brands" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Dealers", href: "/dealers" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchDrawerOpen, setIsSearchDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-brand-black/90 backdrop-blur-md shadow-lg py-2" : "bg-gradient-to-b from-brand-black/80 to-transparent pt-4 pb-2"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex-shrink-0 transition-transform hover:scale-105 mr-8 bg-transparent">
              <Image
                src="/images/logo.png"
                alt="J. Rashid & Sons"
                width={350}
                height={120}
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'}`}
                priority
              />
            </Link>

            {/* Desktop Main Nav */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {mainNav.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`font-heading font-bold uppercase tracking-wider text-sm transition-colors ${
                        isActive ? "text-brand-yellow" : "text-white hover:text-brand-yellow"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {/* Underline effect */}
                    <div className={`absolute -bottom-2 left-0 h-0.5 bg-brand-yellow transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </div>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden lg:flex items-center gap-6">
               <button 
                 onClick={() => setIsSearchDrawerOpen(true)}
                 className="text-white hover:text-brand-yellow transition-colors relative z-10"
               >
                  <Search size={20} />
               </button>
               <Link href="/dealers" className="btn-skew-yellow text-sm px-6 py-2">
                  <span>OUR DEALERS</span>
               </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10 p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {mainNav.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-heading font-bold uppercase text-white hover:text-brand-yellow"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Search Button */}
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsSearchDrawerOpen(true);
              }}
              className="text-2xl font-heading font-bold uppercase text-brand-yellow flex items-center gap-2"
            >
              <Search size={24} /> SEARCH
            </button>
          </nav>
          
          <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-4">
             <Link
                href="/dealers"
                className="btn-skew-yellow flex justify-center w-full"
                onClick={() => setIsOpen(false)}
             >
                <span className="flex items-center gap-2"><MapPin size={18} /> Find a Dealer</span>
             </Link>
          </div>
        </div>
      </div>

      {/* Slide-out Search Drawer */}
      <SearchDrawer 
        isOpen={isSearchDrawerOpen} 
        onClose={() => setIsSearchDrawerOpen(false)} 
      />
    </>
  );
}
