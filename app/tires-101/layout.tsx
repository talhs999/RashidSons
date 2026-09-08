import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tires 101 | Complete Tyre Buying & Maintenance Guide",
  description:
    "Master tire sizing, tread patterns, speed ratings, and maintenance tips for Pakistani road conditions with J. Rashid & Sons Tires 101 guide.",
  keywords: [
    "tyre sizing guide Pakistan",
    "how to read tyre size",
    "selecting right tyre Pakistan",
    "car tire maintenance guide",
    "3D alignment guide",
  ],
  openGraph: {
    title: "Tires 101 Guide | J. Rashid & Sons Pakistan",
    description:
      "Learn how to choose the right tyre, decode size markings, and optimize fuel efficiency.",
    url: "https://jrashid.com/tires-101",
  },
};

export default function Tires101Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
