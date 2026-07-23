import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: {
    default: "J. Rashid & Sons | Pakistan's Trusted Tyre Partner Since 1948",
    template: "%s | J. Rashid & Sons",
  },
  description:
    "Official importer and distributor of Yokohama, Goodyear, Michelin, Blackarrow & Warrior tyres in Pakistan. 70+ years of excellence. 6 branches nationwide.",
  keywords: [
    "tyres Pakistan",
    "Yokohama Pakistan",
    "Goodyear Pakistan",
    "Michelin Pakistan",
    "J Rashid Sons",
    "tyre dealer Lahore",
    "tyre importer Pakistan",
  ],
  openGraph: {
    default: "J. Rashid & Sons | Pakistan's Trusted Tyre Partner Since 1948",
    description:
      "Official importer of Yokohama, Goodyear, Michelin tyres. 70+ years of trust.",
    url: "https://jrashid.com",
    siteName: "J. Rashid & Sons",
    locale: "en_PK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <NextTopLoader color="#ffc107" showSpinner={false} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
