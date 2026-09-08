import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 70+ Years Tyre Importer & Distributor Legacy",
  description:
    "Learn about J. Rashid & Sons — Pakistan's pioneer tyre importer since 1948. Official distributor of Yokohama, Goodyear, Falken, Sunwide, and Warrior tyres.",
  keywords: [
    "About J Rashid Sons",
    "history of tyre importer Pakistan",
    "Yokohama importer Pakistan",
    "Goodyear distributor Pakistan",
    "tyre company Lahore",
    "legacy tyre distributor",
  ],
  openGraph: {
    title: "About J. Rashid & Sons | 70+ Years Tyre Excellence in Pakistan",
    description:
      "Since 1948, J. Rashid & Sons has been Pakistan's pioneer in automotive tyres, importing world-class Japanese and global tyre brands.",
    url: "https://jrashid.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
