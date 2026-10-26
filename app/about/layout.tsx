import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 70+ Years Tyre Importer & Distributor Legacy",
  description:
    "Learn about J. Rashid & Sons, Pakistan's pioneer tyre importer since 1948, from its first shop at Neela Gumbad, Lahore to its main branch at Circular Road, Badami Bagh, Lahore. Official distributor of Yokohama, Goodyear, Falken, Sunwide, and Warrior tyres.",
  keywords: [
    "About J Rashid Sons",
    "history of tyre importer Pakistan",
    "Yokohama importer Pakistan",
    "Goodyear distributor Pakistan",
    "tyre company Lahore",
    "tyre shop Badami Bagh Lahore",
    "tyre shop Neela Gumbad Lahore",
    "best tyre shop Lahore",
    "legacy tyre distributor",
  ],
  alternates: {
    canonical: "https://jrashid.com.pk/about",
  },
  openGraph: {
    title: "About J. Rashid & Sons | 70+ Years Tyre Excellence in Pakistan",
    description:
      "Since 1948, J. Rashid & Sons has been Pakistan's pioneer in automotive tyres, importing world-class Japanese and global tyre brands.",
    url: "https://jrashid.com.pk/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
