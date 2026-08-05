"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Tags, Grid3X3, Package, Settings, LogOut, Disc, Award } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Brands", href: "/admin/brands", icon: Tags },
    { name: "Certified Partners", href: "/admin/partners", icon: Award },
    { name: "Categories", href: "/admin/categories", icon: Grid3X3 },
    { name: "Tire Families", href: "/admin/families", icon: Disc },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-brand-charcoal flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-black border-r border-white/5 flex flex-col">
        <div className="p-6">
          <Link href="/" className="block">
            <Image
              src="/images/logo.png"
              alt="J. Rashid & Sons"
              width={200}
              height={70}
              className="w-auto h-12 object-contain"
            />
          </Link>
          <p className="text-[10px] text-white/40 mt-3 uppercase tracking-widest font-semibold">Admin Panel</p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-brand-yellow text-brand-black font-bold"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-brand-charcoal">
        <div className="p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
