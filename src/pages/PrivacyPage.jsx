import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p className="text-xs text-slate-500">
          Effective Date: January 1, 2026 | EXPGLO BUSINESS PRIVATE LIMITED
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6"
      >
        <p>
          EXPGLO BUSINESS PRIVATE LIMITED ("EXPGLO", "we", "us", or "our")
          respects the privacy of our visitors and registered users. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your personal information when you visit our website
          (expglobusiness.com) or interact with our business units.
        </p>

        <h3 className="text-base font-bold text-slate-900">
          1. Information We Collect
        </h3>
        <p>
          We may collect personal identification information including your full
          name, email address, telephone number, company/organization
          affiliation, and career or pitch deck attachments when voluntarily
          provided via our online forms.
        </p>

        <h3 className="text-base font-bold text-slate-900">
          2. Use of Information
        </h3>
        <p>
          The information collected is used to respond to your inquiries,
          facilitate EXPGLO Startup School cohort admissions, coordinate syndicate
          investor introductions, and deliver corporate communications.
        </p>

        <h3 className="text-base font-bold text-slate-900">3. Data Security</h3>
        <p>
          We implement appropriate technical and administrative safeguards to
          protect your personal data against unauthorized access, loss, or
          misuse.
        </p>

        <h3 className="text-base font-bold text-slate-900">
          4. Contact Compliance
        </h3>
        <p>
          For inquiries regarding this privacy policy, contact:
          <strong>privacy@expglo.business</strong>
        </p>
      </div>
    </section>

    <!-- FOOTER (PRD Section16 - Dark green background, 5 Columns) -->
    </main>
  );
}
