import { Metadata } from "next";
import { branches, dealers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Wholesale Dealers Locator | Authorized Tyre Shops Pakistan",
  description:
    "Find authorized wholesale tyre dealers and retail shops for Yokohama, Goodyear, Falken & Sunwide tyres across Lahore, Karachi, Islamabad, Rawalpindi, Multan, Peshawar & Rahim Yar Khan.",
  keywords: [
    "tyre dealer locator Pakistan",
    "wholesale tyre dealers Lahore",
    "Yokohama dealer Karachi",
    "Goodyear dealer Islamabad",
    "Anees Tyre Islamabad",
    "Yokohama dealer Rawalpindi",
    "tyre shop Rawalpindi Cantt",
    "tyre shop Rahim Yar Khan",
    "tyre shop Depalpur Okara",
    "authorized tyre dealers Pakistan",
    "best tyre shop Lahore",
    "Yokohama dealer Lahore",
    "Goodyear dealer Lahore",
    "tyre shop Badami Bagh Lahore",
  ],
  alternates: {
    canonical: "https://jrashid.com.pk/dealers",
  },
  openGraph: {
    title: "Wholesale Dealers Locator | J. Rashid & Sons Pakistan",
    description:
      "Locate over 200+ authorized wholesale tyre dealers across Pakistan for Yokohama, Goodyear, Falken, and Sunwide tyres.",
    url: "https://jrashid.com.pk/dealers",
  },
};

const dealersJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "J. Rashid & Sons Authorized Tyre Dealers & Branches in Pakistan",
  "url": "https://jrashid.com.pk/dealers",
  "numberOfItems": branches.length + dealers.length,
  "itemListElement": [
    ...branches.map((branch, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "AutoPartsStore",
        "name": `J. Rashid & Sons - ${branch.name}`,
        "telephone": branch.phone,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": branch.address,
          "addressLocality": branch.city,
          "addressCountry": "PK",
        },
        "parentOrganization": {
          "@id": "https://jrashid.com.pk/#organization",
        },
      },
    })),
    ...dealers.map((dealer, index) => ({
      "@type": "ListItem",
      "position": branches.length + index + 1,
      "item": {
        "@type": "AutoPartsStore",
        "name": dealer.name,
        "telephone": dealer.phone.split("/")[0].trim(),
        "address": {
          "@type": "PostalAddress",
          "streetAddress": dealer.address,
          "addressLocality": dealer.city,
          "addressRegion": dealer.region,
          "addressCountry": "PK",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": dealer.lat,
          "longitude": dealer.lng,
        },
      },
    })),
  ],
};

export default function DealersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dealersJsonLd) }}
      />
      {children}
    </>
  );
}
