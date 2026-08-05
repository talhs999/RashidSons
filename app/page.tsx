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

import { getBrands, getPartnersSettings } from "@/lib/localDb";

export default function HomePage() {
  const brands = getBrands();
  const partnersSettings = getPartnersSettings();

  return (
    <>
      <HeroVideo />
      <ComfortTicker />
      <CertifiedPartners heading={partnersSettings?.heading} partners={partnersSettings?.partners} />
      <TireFamilies brands={brands} />
      <AboutUsTeaser />
      <BrandsShowcase brands={brands} />
      <TireCarousel />
      <FeaturedCategories />
      <FeaturedNews />
      <SplitCTA />
    </>
  );
}
