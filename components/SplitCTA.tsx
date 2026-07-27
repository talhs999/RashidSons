"use client";

import Link from "next/link";
import Image from "next/image";

export default function SplitCTA() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[500px]">
      {/* Left Side - Have a problem */}
      <div className="relative flex-1 flex items-center justify-center p-12 min-h-[400px] group overflow-hidden">
        {/* Background */}
        <Image
          src="/images/hero-bg.jpg" // Using placeholder image, user can replace
          alt="Contact Us"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-black/70 group-hover:bg-brand-black/60 transition-colors duration-500" />
        
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden lg:flex">
          <Link href="https://www.facebook.com/profile.php?id=61591938635324" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black hover:bg-brand-yellow transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </Link>
          <Link href="https://www.instagram.com/jrashidandsonspvtltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black hover:bg-brand-yellow transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </Link>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <p className="text-brand-yellow font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-white uppercase tracking-tighter mb-8">
            HAVE A PROBLEM?
          </h2>
          <Link href="/contact" className="btn-skew-outline-white">
            <span>CONTACT US</span>
          </Link>
        </div>
      </div>

      {/* Right Side - Wholesale Dealers */}
      <div className="relative flex-1 flex items-center justify-center p-12 min-h-[400px] group overflow-hidden">
        {/* Background */}
        <Image
          src="/images/citroen-suv.png"
          alt="Wholesale Dealers"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80 group-hover:bg-brand-charcoal/70 transition-colors duration-500" />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-lg mx-auto">
          <p className="text-brand-yellow font-heading font-bold uppercase tracking-[0.2em] text-sm mb-4">
            ALL OVER PAKISTAN
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-white uppercase tracking-tighter mb-8">
            OUR TRUSTWORTHY
          </h2>
          <Link href="/dealers" className="btn-skew-outline-white">
            <span>WHOLESALE DEALERS</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
