import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | J. Rashid & Sons",
  description: "Terms and conditions for using the J. Rashid & Sons website.",
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 font-sans text-brand-black">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-500 font-medium">Last Updated: July 2026</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">1. Acceptance of Terms</h2>
            <p className="mb-3">
              By accessing and using the J. Rashid & Sons website (the "Site"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
            <p>
              Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">2. Description of Service</h2>
            <p>
              J. Rashid & Sons is an official importer and distributor network for various global tyre brands in Pakistan. The Site provides information about our company, the brands we represent, product details, and a directory to locate our authorized wholesale and retail dealers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">3. Product Information and Accuracy</h2>
            <p className="mb-3">
              We strive to ensure that all information on the Site regarding tyre specifications, brand details, and dealer locations is accurate, complete, and current. However, we do not warrant that product descriptions or other content of this site is completely accurate, reliable, current, or error-free.
            </p>
            <p>
              Tyre specifications and availability are subject to change without notice. Please contact our main branch or authorized dealers for the most accurate and up-to-date information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">4. Intellectual Property</h2>
            <p>
              The Site and its original content, features, and functionality are owned by J. Rashid & Sons and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. This includes, but is not limited to, our logos, brand names, and website design. The logos of our partner brands (Yokohama, Goodyear, Warrior, Atlas Tyre, Risen, Falken) are the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall J. Rashid & Sons, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for damages, direct or consequential, resulting from your use of the Site, and you agree to defend, indemnify and hold us harmless from any claims, losses, liability costs and expenses, including but not limited to attorney's fees, arising from your violation of any third-party's rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">6. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-heading font-bold uppercase text-brand-black mb-4">8. Contact Us</h2>
            <p className="mb-3">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By visiting our main branch: Circular Rd, Badami Bagh, Qadimi Shehr, Lahore</li>
              <li>By phone number: +92 300 4058489</li>
              <li>By email: yousuf.jamal@jrashid.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
