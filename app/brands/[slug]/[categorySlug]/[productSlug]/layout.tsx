import { Metadata } from "next";
import { brands, categories, products } from "@/lib/data";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string; categorySlug: string; productSlug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; categorySlug: string; productSlug: string }>;
}): Promise<Metadata> {
  const { slug, categorySlug, productSlug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  const category = categories.find(
    (c) => c.brand_id === brand?.id && c.slug === categorySlug
  );
  const product = products.find(
    (p) => p.brand_id === brand?.id && p.slug === productSlug
  );

  if (!product) {
    return {
      title: "Tyre Product | J. Rashid & Sons",
    };
  }

  const brandName = brand ? brand.name : "Official";
  const categoryName = category ? category.name : "";
  const title = `${product.name} - ${brandName} Tyre in Pakistan | J. Rashid & Sons`;
  const description = `${product.description} Available through J. Rashid & Sons official wholesale dealer network across Pakistan with warranty.`;

  const productImage = product.images?.[0] || brand?.logo_url || "/images/hero-bg.jpg";

  return {
    title,
    description,
    keywords: [
      `${product.name} Pakistan`,
      `${product.name} price Pakistan`,
      `${brandName} ${product.name}`,
      `${product.name} Lahore`,
      `${product.name} Karachi`,
      `${categoryName} tyre Pakistan`,
      "official tyre importer Pakistan",
    ],
    alternates: {
      canonical: `https://jrashid.com.pk/brands/${slug}/${categorySlug}/${productSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://jrashid.com.pk/brands/${slug}/${categorySlug}/${productSlug}`,
      images: [productImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [productImage],
    },
  };
}

export default async function ProductLayout({ children, params }: LayoutProps) {
  const { slug, categorySlug, productSlug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  const category = categories.find(
    (c) => c.brand_id === brand?.id && c.slug === categorySlug
  );
  const product = products.find(
    (p) => p.brand_id === brand?.id && p.slug === productSlug
  );

  const productUrl = `https://jrashid.com.pk/brands/${slug}/${categorySlug}/${productSlug}`;
  const productImage = product?.images?.[0]
    ? product.images[0].startsWith("http")
      ? product.images[0]
      : `https://jrashid.com.pk${product.images[0]}`
    : "https://jrashid.com.pk/images/logo.png";

  const productJsonLd = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: productImage,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: brand?.name || "Official Importer",
        },
        offers: {
          "@type": "Offer",
          url: productUrl,
          priceCurrency: "PKR",
          price: product.price || undefined,
          availability:
            product.stock_status === "in_stock"
              ? "https://schema.org/InStock"
              : product.stock_status === "on_order"
              ? "https://schema.org/PreOrder"
              : "https://schema.org/OutOfStock",
          seller: {
            "@type": "Organization",
            name: "J. Rashid & Sons",
            url: "https://jrashid.com.pk",
          },
        },
      }
    : null;

  const breadcrumbJsonLd =
    brand && category && product
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
            {
              "@type": "ListItem",
              position: 5,
              name: product.name,
              item: productUrl,
            },
          ],
        }
      : null;

  return (
    <>
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      )}
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
