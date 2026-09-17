import { Metadata } from "next";
import { brands } from "@/lib/data";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  if (!brand) {
    return {
      title: "Brand | J. Rashid & Sons",
    };
  }

  const title = `${brand.name} Tyres Pakistan | Official Importer & Warranty`;
  const description = `Official importer and distributor of authentic ${brand.name} tyres in Pakistan. Explore passenger, SUV 4x4, and commercial tyre ranges with nationwide wholesale dealers and warranty.`;

  return {
    title,
    description,
    keywords: [
      `${brand.name} tyres Pakistan`,
      `${brand.name} tyre price Pakistan`,
      `buy ${brand.name} tyres Lahore`,
      `${brand.name} authorized dealer Karachi`,
      `${brand.name} distributor Islamabad`,
      `genuine ${brand.name} tyres`,
    ],
    alternates: {
      canonical: `https://jrashid.com.pk/brands/${brand.slug}`,
    },
    openGraph: {
      title: `${brand.name} Tyres Pakistan | J. Rashid & Sons`,
      description,
      url: `https://jrashid.com.pk/brands/${brand.slug}`,
      images: [brand.banner_image || brand.logo_url],
    },
    twitter: {
      card: "summary_large_image",
      title: `${brand.name} Tyres Pakistan | J. Rashid & Sons`,
      description,
      images: [brand.banner_image || brand.logo_url],
    },
  };
}

export default async function BrandLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);

  const breadcrumbJsonLd = brand
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
