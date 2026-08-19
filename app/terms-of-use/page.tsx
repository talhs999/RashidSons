import { Metadata } from "next";
import {
  Shield,
  Settings,
  Info,
  Copyright,
  Scale,
  AlertTriangle,
  FileText,
  PhoneCall,
  MapPin,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | J. Rashid & Sons",
  description: "Terms and conditions for using the J. Rashid & Sons website.",
};

export default function TermsOfUsePage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      icon: Shield,
      content: (
        <>
          <p className="mb-3">
            By accessing and using the J. Rashid & Sons website (the &quot;Site&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
          <p>
            Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </>
      ),
    },
    {
      title: "2. Description of Service",
      icon: Settings,
      content: (
        <p>
          J. Rashid & Sons is an official importer and distributor network for various global tyre brands in Pakistan. The Site provides information about our company, the brands we represent, product details, and a directory to locate our authorized wholesale and retail dealers.
        </p>
      ),
    },
    {
      title: "3. Product Information and Accuracy",
      icon: Info,
      content: (
        <>
          <p className="mb-3">
            We strive to ensure that all information on the Site regarding tyre specifications, brand details, and dealer locations is accurate, complete, and current. However, we do not warrant that product descriptions or other content of this site is completely accurate, reliable, current, or error-free.
          </p>
          <p>
            Tyre specifications and availability are subject to change without notice. Please contact our main branch or authorized dealers for the most accurate and up-to-date information.
          </p>
        </>
      ),
    },
    {
      title: "4. Intellectual Property",
      icon: Copyright,
      content: (
        <p>
          The Site and its original content, features, and functionality are owned by J. Rashid & Sons and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. This includes, but is not limited to, our logos, brand names, and website design. The logos of our partner brands (Yokohama, Goodyear, Warrior, Atlas Tyre, Risen, Falken, Sunwide) are the property of their respective owners.
        </p>
      ),
    },
    {
      title: "5. Limitation of Liability",
      icon: AlertTriangle,
      content: (
        <p>
          In no event shall J. Rashid & Sons, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for damages, direct or consequential, resulting from your use of the Site, and you agree to defend, indemnify and hold us harmless from any claims, losses, liability costs and expenses, including but not limited to attorney&apos;s fees, arising from your violation of any third-party&apos;s rights.
        </p>
      ),
    },
    {
      title: "6. Governing Law",
      icon: Scale,
      content: (
        <p>
          These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
        </p>
      ),
    },
    {
      title: "7. Changes to Terms",
      icon: FileText,
      content: (
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
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
            Terms of Use
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
            If you have any questions about these Terms, please contact us through the following channels:
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
              <a href="tel:+923071777510" className="text-white/60 text-xs hover:text-white transition-colors">+92 307 1777510</a>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
              <Mail className="text-brand-yellow mx-auto mb-3" size={24} />
              <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Email</h3>
              <a href="mailto:jrashidandsons786@gmail.com" className="text-white/60 text-xs hover:text-white transition-colors">jrashidandsons786@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
