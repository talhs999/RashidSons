import { Metadata } from "next";
import BrandCard from "@/components/BrandCard";
import { brands } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Explore our premium tyre brands - Yokohama, Goodyear, Michelin, Blackarrow & Warrior. Official importer and distributor in Pakistan.",
};

export default function BrandsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-brand-black pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 relative z-10">
          <p className="text-xs text-brand-yellow uppercase tracking-[0.2em] font-semibold mb-3">
            Official Distributor
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Brands
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Explore the world&apos;s finest tyre brands, all available through
            J. Rashid &amp; Sons. Each brand delivers excellence in its own
            class.
          </p>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, i) => (
              <BrandCard
                key={brand.slug}
                name={brand.name}
                slug={brand.slug}
                logo={brand.logo_url}
                description={brand.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
