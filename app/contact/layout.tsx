import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tyre Inquiries, Quotes & Support",
  description:
    "Get in touch with J. Rashid & Sons for authentic tyre quotes, dealership inquiries, 3D alignment assistance, and corporate fleet solutions in Pakistan.",
  keywords: [
    "contact J Rashid Sons",
    "tyre quote Pakistan",
    "tyre helpline Lahore",
    "Yokohama customer support Pakistan",
    "dealership application J Rashid",
  ],
  openGraph: {
    title: "Contact J. Rashid & Sons | Tyre Support & Wholesale Quotes",
    description:
      "Have questions or need a tyre quotation? Contact Pakistan's premier official importer and distributor network.",
    url: "https://jrashid.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
