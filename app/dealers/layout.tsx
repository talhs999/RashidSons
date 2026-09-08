import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Dealers Locator | Authorized Tyre Shops Pakistan",
  description:
    "Find authorized wholesale tyre dealers and retail shops for Yokohama, Goodyear, Falken & Sunwide tyres across Lahore, Karachi, Islamabad, Multan, Peshawar & Rahim Yar Khan.",
  keywords: [
    "tyre dealer locator Pakistan",
    "wholesale tyre dealers Lahore",
    "Yokohama dealer Karachi",
    "Goodyear dealer Islamabad",
    "tyre shop Rahim Yar Khan",
    "tyre shop Depalpur Okara",
    "authorized tyre dealers Pakistan",
  ],
  openGraph: {
    title: "Wholesale Dealers Locator | J. Rashid & Sons Pakistan",
    description:
      "Locate over 200+ authorized wholesale tyre dealers across Pakistan for Yokohama, Goodyear, Falken, and Sunwide tyres.",
    url: "https://jrashid.com/dealers",
  },
};

export default function DealersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
