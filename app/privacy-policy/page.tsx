import { Metadata } from "next";
import {
  ShieldCheck,
  Eye,
  Database,
  Share2,
  Lock,
  UserCheck,
  PhoneCall,
  MapPin,
  Mail,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | J. Rashid & Sons",
  description: "Privacy Policy and data collection practices for J. Rashid & Sons.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      icon: Database,
      content: (
        <>
          <p className="mb-3">
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a contact form, subscribe to a newsletter, or interact with other activities, services, features, or resources we make available on our Site.
          </p>
          <p>
            Users may be asked for, as appropriate, name, email address, phone number, and city. We will collect personal identification information from Users only if they voluntarily submit such information to us.
          </p>
        </>
      ),
    },
    {
      title: "2. How We Use Collected Information",
      icon: Eye,
      content: (
        <>
          <p className="mb-2">J. Rashid & Sons may collect and use Users&apos; personal information for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
            <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
            <li><strong>To send periodic emails or messages:</strong> We may use the email address or phone number to respond to inquiries, questions, and/or other requests.</li>
          </ul>
        </>
      ),
    },
    {
      title: "3. How We Protect Your Information",
      icon: Lock,
      content: (
        <p>
          We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
        </p>
      ),
    },
    {
      title: "4. Sharing Your Personal Information",
      icon: Share2,
      content: (
        <p>
          We do not sell, trade, or rent Users&apos; personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
        </p>
      ),
    },
    {
      title: "5. Your Rights",
      icon: UserCheck,
      content: (
        <p>
          You have the right to request access to the personal data we hold about you. You also have the right to request that we correct any inaccuracies in your personal data, or that we delete your personal data entirely, subject to certain exceptions required by law.
        </p>
      ),
    },
    {
      title: "6. Changes to This Privacy Policy",
      icon: FileText,
      content: (
        <p>
          J. Rashid & Sons has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
        </p>
      ),
    },
    {
      title: "7. Your Acceptance of These Terms",
      icon: ShieldCheck,
      content: (
        <p>
          By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
        </p>
      ),
    },
  ];

  return (
    <div className="bg-cream min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-brand-black pt-32 pb-24 px-4 relative overflow-hidden border-b-[6px] border-brand-yellow">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded bg-white/10 border border-white/20 text-xs text-brand-yellow uppercase tracking-[0.2em] font-bold mb-6 backdrop-blur-sm">
            Legal Information
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight mb-4 drop-shadow-lg">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-lg font-medium">
            Last Updated: July 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 lg:px-8 -mt-8 relative z-20 pb-24 space-y-6">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 lg:p-10 shadow-xl shadow-black/5 border border-black/5 border-l-4 border-l-brand-yellow hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-start gap-4 lg:gap-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-brand-yellow-dark" size={28} />
                </div>
                <div>
                  <h2 className="text-xl lg:text-2xl font-heading font-extrabold uppercase text-brand-black mb-4 tracking-tight">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {section.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Contact Us Card */}
        <div className="bg-brand-black rounded-2xl p-6 lg:p-10 shadow-2xl border border-brand-yellow/30 mt-12">
          <h2 className="text-2xl lg:text-3xl font-heading font-extrabold uppercase text-brand-yellow mb-6 tracking-tight text-center">
            8. Contact Us
          </h2>
          <p className="text-white/70 text-center mb-8">
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <MapPin className="text-brand-yellow mx-auto mb-3" size={24} />
              <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Main Branch</h3>
              <p className="text-white/60 text-xs leading-relaxed">Circular Rd, Badami Bagh<br/>Qadimi Shehr, Lahore</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <PhoneCall className="text-brand-yellow mx-auto mb-3" size={24} />
              <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Phone</h3>
              <a href="tel:+923004058489" className="text-white/60 text-xs hover:text-white transition-colors">+92 300 4058489</a>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <Mail className="text-brand-yellow mx-auto mb-3" size={24} />
              <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Email</h3>
              <a href="mailto:yousuf.jamal@jrashid.com" className="text-white/60 text-xs hover:text-white transition-colors">yousuf.jamal@jrashid.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
