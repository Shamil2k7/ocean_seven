import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Ocean Seven Seafood Trading Company",
  description: "Privacy policy regarding commercial data and inquiry confidentiality for Ocean Seven Seafood Trading Company in Jeddah, Saudi Arabia.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-surface text-charcoal min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-ocean hover:text-navy font-semibold mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        <div className="bg-white p-7 sm:p-10 rounded-xs border border-border space-y-5">
          <div className="border-b border-border pb-3">
            <span className="text-[11px] uppercase tracking-wider text-ocean font-semibold block mb-0.5">
              Data Confidentiality
            </span>
            <h1 className="font-heading font-semibold text-2xl sm:text-3xl text-charcoal">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted mt-0.5">
              Ocean Seven Seafood Trading Company • Jeddah, Kingdom of Saudi Arabia
            </p>
          </div>

          <section className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed font-normal">
            <h2 className="font-heading font-semibold text-base text-charcoal">1. Information Collection</h2>
            <p>
              We collect commercial inquiry details submitted through our website forms, including contact name, business entity name, corporate email address, contact telephone number, and requested seafood categories or volumes.
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">2. Purpose of Processing</h2>
            <p>
              Your submitted data is used solely to respond to commercial sourcing requests, prepare formal wholesale quotations, and facilitate trading communications. We do not sell or transfer contact information to third parties.
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">3. Commercial Confidentiality</h2>
            <p>
              Client specifications, customized cuts, target pricing, and order volumes are maintained with strict commercial confidentiality.
            </p>

            <h2 className="font-heading font-semibold text-base text-charcoal">4. Data Inquiries</h2>
            <p>
              For any questions regarding your inquiry records, please reach out directly through our contact form.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
