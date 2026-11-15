import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tyre Sizing Information | How to Read Tyre Sidewall Markings",
  description:
    "Decode tyre width, aspect ratio, rim diameter, load index, and speed rating markings easily. Official tyre sizing guide by J. Rashid & Sons Pakistan.",
  keywords: [
    "tyre sizing guide Pakistan",
    "how to read tyre size",
    "tyre sidewall markings explained",
    "speed rating load index chart",
    "J Rashid Sons sizing guide",
  ],
  alternates: {
    canonical: "https://jrashid.com.pk/tires-101/sizing-information",
  },
  openGraph: {
    title: "Tyre Sizing Information | J. Rashid & Sons Pakistan",
    description:
      "Understand every number and letter on your tyre sidewall before buying replacement tyres in Pakistan.",
    url: "https://jrashid.com.pk/tires-101/sizing-information",
  },
};

export default function SizingInformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
