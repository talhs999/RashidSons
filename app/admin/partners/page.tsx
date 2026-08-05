import { getPartnersSettings } from "@/lib/localDb";
import PartnersClient from "./PartnersClient";

export default function PartnersAdminPage() {
  const partnersData = getPartnersSettings();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Certified Partners Banner</h1>
        <p className="text-white/60">
          Manage the yellow Certified Partners banner section on the home page. Update section heading text or add, edit, and delete partner logos.
        </p>
      </div>

      <PartnersClient initialData={partnersData} />
    </div>
  );
}
