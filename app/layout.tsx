import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jrashid.com"),
  title: {
    default: "J. Rashid & Sons | Official Importer of Yokohama, Goodyear & Premium Tyres in Pakistan",
    template: "%s | J. Rashid & Sons",
  },
  description:
    "Official importer and distributor of Yokohama, Goodyear, Falken, Sunwide, Warrior, Atlas & Risen tyres in Pakistan. 70+ years of trust, 200+ wholesale dealers nationwide. 3D alignment & balancing.",
  keywords: [
    "Yokohama tyres Pakistan",
    "Goodyear tyres Pakistan",
    "Falken tyres Pakistan",
    "Sunwide tyres Pakistan",
    "Warrior tyres Pakistan",
    "Atlas tyres Pakistan",
    "Risen tyres Pakistan",
    "Michelin tyres Pakistan",
    "J Rashid Sons",
    "tyre shop Lahore",
    "tyre dealer Karachi",
    "tyre shop Islamabad",
    "tyre shop Faisal Town Lahore",
    "tyre shop Anarkali Lahore",
    "tyre shop Rahim Yar Khan",
    "tyre shop Depalpur Okara",
    "wholesale tyre dealers Pakistan",
    "official tyre importer Pakistan",
    "car tyres price Pakistan",
    "SUV 4x4 tyres Pakistan",
    "commercial truck tyres Pakistan",
    "3D wheel alignment Lahore",
    "wheel balancing service Pakistan",
  ],
  openGraph: {
    title: "J. Rashid & Sons | Official Importer of Yokohama, Goodyear & Premium Tyres in Pakistan",
    description:
      "Official importer of Yokohama, Goodyear, Falken & Sunwide tyres. 70+ years of trust & 200+ wholesale dealers across Pakistan.",
    url: "https://jrashid.com",
    siteName: "J. Rashid & Sons",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "J. Rashid & Sons Official Importer of Premium Tyres in Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J. Rashid & Sons | Official Importer of Yokohama & Goodyear Tyres in Pakistan",
    description: "Official importer and nationwide distributor of Yokohama, Goodyear, Falken & Sunwide tyres in Pakistan since 1948.",
    images: ["/images/hero-bg.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoPartsStore",
      "@id": "https://jrashid.com/#store",
      "name": "J. Rashid & Sons",
      "url": "https://jrashid.com",
      "telephone": "+923071777510",
      "email": "jrashidandsons786@gmail.com",
      "priceRange": "$$",
      "image": "https://jrashid.com/images/logo.png",
      "description": "Official importer and distributor of Yokohama, Goodyear, Falken, Sunwide, Warrior & Atlas tyres in Pakistan.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Circular Rd, Badami Bagh, Qadimi Shehr",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "postalCode": "54000",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.5830",
        "longitude": "74.3160"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://jrashid.com/#organization",
      "name": "J. Rashid & Sons",
      "url": "https://jrashid.com",
      "logo": "https://jrashid.com/images/logo.png",
      "foundingDate": "1948",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61591938635324",
        "https://www.instagram.com/jrashidandsonspvtltd"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <NextTopLoader color="#ffc107" showSpinner={false} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
