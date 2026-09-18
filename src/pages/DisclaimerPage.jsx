import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Disclaimer</h1>
        <p className="text-xs text-slate-500">EXPGLO BUSINESS PRIVATE LIMITED</p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6"
      >
        <p>
          The information contained on expglobusiness.com is intended solely for
          educational, ecosystem networking, and corporate overview purposes.
        </p>
        <p>
          Past startup performance, founder cohort traction, or mock term-sheet
          valuations are non-indicative of guaranteed commercial success. All
          investing in early-stage ventures carries inherent commercial risk.
        </p>
      </div>
    </section>

    {/* FOOTER (PRD Section16 - Dark green background, 5 Columns) */}
    </main>
  );
}
