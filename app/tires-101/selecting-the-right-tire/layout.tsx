import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selecting the Right Tyre | Complete Buying Guide Pakistan",
  description:
    "How to choose the best car, SUV, 4x4, or commercial tyre for Pakistani roads, weather, and driving style. Expert guide by J. Rashid & Sons.",
  keywords: [
    "selecting right tyre Pakistan",
    "best car tyres for Pakistani roads",
    "all season vs performance tyres",
    "SUV 4x4 tyre buying guide",
    "J Rashid Sons tyre guide",
  ],
  alternates: {
    canonical: "https://jrashid.com.pk/tires-101/selecting-the-right-tire",
  },
  openGraph: {
    title: "Selecting the Right Tyre | J. Rashid & Sons Pakistan",
    description:
      "Match tread patterns, vehicle requirements, and climate conditions to pick the safest tyres for Pakistan.",
    url: "https://jrashid.com.pk/tires-101/selecting-the-right-tire",
  },
};

export default function SelectingRightTireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
