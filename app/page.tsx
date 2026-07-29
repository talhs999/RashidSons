import HeroVideo from "@/components/HeroVideo";
import ComfortTicker from "@/components/ComfortTicker";
import FeaturedCategories from "@/components/FeaturedCategories";
import TireFamilies from "@/components/TireFamilies";
import BrandStrip from "@/components/BrandStrip";
import TireCarousel from "@/components/TireCarousel";
import CertifiedPartners from "@/components/CertifiedPartners";
import BrandsShowcase from "@/components/BrandsShowcase";
import AboutUsTeaser from "@/components/AboutUsTeaser";
import FeaturedNews from "@/components/FeaturedNews";
import SplitCTA from "@/components/SplitCTA";
import FloatingLanguageToggle from "@/components/FloatingLanguageToggle";

import { getBrands } from "@/lib/localDb";

export default function HomePage() {
  const brands = getBrands();

  return (
    <>
      <FloatingLanguageToggle />
      <HeroVideo />
      <ComfortTicker />
      <CertifiedPartners brands={brands} />
      <TireFamilies />
      <AboutUsTeaser />
      <BrandsShowcase brands={brands} />
      <TireCarousel />
      <FeaturedCategories />
      <FeaturedNews />
      <SplitCTA />
    </>
  );
}
