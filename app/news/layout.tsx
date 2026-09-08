import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Tyre Industry Articles | Automotive Insights Pakistan",
  description:
    "Stay updated with automotive news, tyre safety tips, motorsport achievements, and new tyre brand launches in Pakistan by J. Rashid & Sons.",
  keywords: [
    "tyre news Pakistan",
    "automotive news Pakistan",
    "tyre safety tips",
    "Yokohama motorsport news",
    "car maintenance guide Pakistan",
  ],
  openGraph: {
    title: "News & Automotive Insights | J. Rashid & Sons Pakistan",
    description:
      "Read official updates, technical tyre articles, and maintenance guides from J. Rashid & Sons.",
    url: "https://jrashid.com/news",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
