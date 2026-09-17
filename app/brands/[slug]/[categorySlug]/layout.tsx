import { Metadata } from "next";
import { brands, categories } from "@/lib/data";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string; categorySlug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; categorySlug: string }>;
}): Promise<Metadata> {
  const { slug, categorySlug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  const category = categories.find(
    (c) => c.brand_id === brand?.id && c.slug === categorySlug
  );

  const brandName = brand ? brand.name : "Premium";
  const categoryName = category ? category.name : categorySlug;

  const title = `${brandName} ${categoryName} Tyres in Pakistan | Prices & Wholesale`;
  const description = `Shop authentic ${brandName} ${categoryName} tyres in Pakistan. Official warranty, high performance tread patterns, and nationwide dealer network via J. Rashid & Sons.`;

  return {
    title,
    description,
    keywords: [
      `${brandName} ${categoryName} tyres Pakistan`,
      `${brandName} ${categorySlug} tyres`,
      `${categoryName} tyre price Pakistan`,
      `${brandName} tyres Lahore`,
      `${brandName} tyres Karachi`,
    ],
    alternates: {
      canonical: `https://jrashid.com.pk/brands/${slug}/${categorySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://jrashid.com.pk/brands/${slug}/${categorySlug}`,
      images: [category?.image_url || brand?.logo_url || "/images/hero-bg.jpg"],
    },
  };
}

export default async function CategoryLayout({ children, params }: LayoutProps) {
  const { slug, categorySlug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  const category = categories.find(
    (c) => c.brand_id === brand?.id && c.slug === categorySlug
  );

  const breadcrumbJsonLd = brand && category
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://jrashid.com.pk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Brands",
            item: "https://jrashid.com.pk/brands",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: brand.name,
            item: `https://jrashid.com.pk/brands/${brand.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: category.name,
            item: `https://jrashid.com.pk/brands/${brand.slug}/${category.slug}`,
          },
        ],
      }
    : null;

  return (
    <>
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {children}
    </>
  );
}
