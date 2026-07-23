"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Search,
} from "lucide-react";
import { useState } from "react";

const socials = [
  { 
    name: "Facebook", 
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
    href: "https://facebook.com/jrashidandsons" 
  },
  { 
    name: "Instagram", 
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>, 
    href: "https://instagram.com/jrashidandsons" 
  },
  { 
    name: "LinkedIn", 
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>, 
    href: "https://linkedin.com/company/jrashidandsons" 
  },
  { 
    name: "YouTube", 
    icon: (props: any) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>, 
    href: "https://youtube.com/@jrashidandsons" 
  },
];

export default function Footer() {
  const [zip, setZip] = useState("");

  return (
    <footer className="bg-brand-black text-white">
      {/* Find a Dealer CTA Band (Red) */}
      <div className="bg-brand-yellow relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-4">
              <MapPin size={40} className="text-black flex-shrink-0" />
              <h2 className="text-3xl lg:text-4xl font-heading font-extrabold uppercase tracking-tighter text-black">
                Find a Dealer near you
              </h2>
            </div>
            
            <div className="w-full max-w-xl relative">
              <input
                type="text"
                placeholder="Enter City, State or Zip Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-transparent border-b-2 border-black/50 text-black placeholder:text-black pb-3 text-xl focus:outline-none focus:border-black transition-colors"
              />
              <Link href={`/dealers?search=${zip}`} className="absolute right-0 top-1 text-black hover:text-black/70 transition-colors">
                <Search size={28} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16 border-b border-white/10 pb-8">
          <div className="flex-shrink-0">
             <Image
                src="/images/logo.png"
                alt="J. Rashid & Sons"
                width={400}
                height={150}
                className="h-20 md:h-24 w-auto object-contain"
              />
          </div>
          
          <div className="flex items-center gap-6">
            <span className="font-heading font-bold uppercase tracking-wider text-sm">Follow Us</span>
            <div className="flex gap-6">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-yellow hover:text-white transition-colors"
                    aria-label={s.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
             <h3 className="font-heading font-bold uppercase text-white tracking-widest text-xs mb-6">Company Info</h3>
             <ul className="space-y-4">
               <li><Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">About Us</Link></li>
               <li><Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Contact Us</Link></li>
               <li><Link href="/dealers" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Dealer Locator</Link></li>
             </ul>
          </div>
          <div>
             <h3 className="font-heading font-bold uppercase text-white tracking-widest text-xs mb-6">Tire Families</h3>
             <ul className="space-y-4">
               <li><Link href="/brands/yokohama" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Yokohama</Link></li>
               <li><Link href="/brands/goodyear" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Goodyear</Link></li>
               <li><Link href="/brands/michelin" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Michelin</Link></li>
             </ul>
          </div>
          <div>
             <h3 className="font-heading font-bold uppercase text-white tracking-widest text-xs mb-6">Quick Links</h3>
             <ul className="space-y-4">
               <li><Link href="/brands" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Tire Finder</Link></li>
               <li><Link href="#" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Promotions</Link></li>
               <li><Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wider font-bold">Our Branches</Link></li>
             </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest font-bold">
          <p>&copy; {new Date().getFullYear()} J. RASHID & SONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
