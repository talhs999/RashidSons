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
  metadataBase: new URL("https://jrashid.com.pk"),
  alternates: {
    canonical: "https://jrashid.com.pk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default: "J. Rashid & Sons | Yokohama & Goodyear Tyres in Lahore, Pakistan | Official Importer",
    template: "%s | J. Rashid & Sons",
  },
  description:
    "Official importer of Yokohama, Goodyear, Falken & Sunwide tyres in Pakistan. Genuine tyres, wholesale prices and 3D alignment at our Lahore Badami Bagh branch. 70+ years of trust, 200+ dealers nationwide.",
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
    "best tyre shop Lahore",
    "Yokohama dealer Lahore",
    "Goodyear dealer Lahore",
    "tyre shop Badami Bagh Lahore",
    "tyre shop Neela Gumbad Lahore",
    "tyre shop Anarkali Lahore",
    "wholesale tyres Lahore",
    "tyre price Lahore",
    "genuine imported tyres Pakistan",
    "3D alignment Badami Bagh Lahore",
  ],
  openGraph: {
    title: "J. Rashid & Sons | Official Importer of Yokohama, Goodyear & Premium Tyres in Pakistan",
    description:
      "Official importer of Yokohama, Goodyear, Falken & Sunwide tyres in Lahore, Pakistan. Genuine tyres, wholesale prices and 3D alignment at Badami Bagh, Lahore.",
    url: "https://jrashid.com.pk",
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
      "@id": "https://jrashid.com.pk/#store",
      "name": "J. Rashid & Sons",
      "url": "https://jrashid.com.pk",
      "telephone": "+923071777510",
      "email": "jrashidandsons786@gmail.com",
      "priceRange": "$$",
      "areaServed": [
        { "@type": "City", "name": "Lahore" },
        { "@type": "State", "name": "Punjab" },
        { "@type": "Country", "name": "Pakistan" }
      ],
      "hasMap": "https://maps.app.goo.gl/UjLVkSDqg5ZG8Quy9",
      "image": "https://jrashid.com.pk/images/logo.png",
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
      "@id": "https://jrashid.com.pk/#organization",
      "name": "J. Rashid & Sons",
      "url": "https://jrashid.com.pk",
      "logo": "https://jrashid.com.pk/images/logo.png",
      "foundingDate": "1948",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61591938635324",
        "https://www.instagram.com/jrashidandsonspvtltd"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://jrashid.com.pk/#website",
      "url": "https://jrashid.com.pk",
      "name": "J. Rashid & Sons"
    },
    {
      "@type": "FAQPage",
      "@id": "https://jrashid.com.pk/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is the best tyre shop in Lahore for genuine Yokohama tyres?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "J. Rashid & Sons main branch is at Circular Road, Badami Bagh, Lahore, near Anarkali and Neela Gumbad. As the official importer of Yokohama tyres in Pakistan, it sells genuine imported tyres with warranty."
          }
        },
        {
          "@type": "Question",
          "name": "Are J. Rashid & Sons tyres genuine and imported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. J. Rashid & Sons is the official importer and distributor of Yokohama, Goodyear, Falken, Sunwide, Warrior and Atlas tyres in Pakistan, with over 70 years of trust since 1948."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer wholesale tyre prices in Pakistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. J. Rashid & Sons supplies more than 200 wholesale dealers across Pakistan, including Lahore, Karachi, Islamabad, Rawalpindi and Multan."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer 3D wheel alignment and balancing in Lahore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. 3D wheel alignment and balancing services are available at the Lahore branch, helping tyres last longer and improving safety and handling."
          }
        }
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
