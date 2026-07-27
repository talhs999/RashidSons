"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminOrLogin = pathname.startsWith("/admin") || pathname === "/login";

  return (
    <>
      {!isAdminOrLogin && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isAdminOrLogin && <Footer />}
    </>
  );
}
