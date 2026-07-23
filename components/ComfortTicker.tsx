"use client";

export default function ComfortTicker() {
  return (
    <div className="bg-brand-black border-y border-white/10 overflow-hidden py-3">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Double array for infinite scroll effect */}
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="flex items-center mx-8">
            <h2 className="text-xl md:text-2xl font-heading font-extrabold text-white tracking-widest uppercase">
              A NEW LEVEL OF COMFORT TESTED FOR YOUR SAFETY
            </h2>
            <div className="mx-8 h-2 w-2 rounded-full bg-brand-yellow" />
          </div>
        ))}
      </div>
    </div>
  );
}
