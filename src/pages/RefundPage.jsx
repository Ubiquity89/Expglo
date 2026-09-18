import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RefundPage() {
  useEffect(() => {
    document.title = "Refund Policy | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Refund & Cancellation Policy
        </h1>
        <p className="text-xs text-slate-500">EXPGLO BUSINESS PRIVATE LIMITED</p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6"
      >
        <p>
          This policy applies to paid courses, workshop tickets, and accelerator
          cohort admissions offered by EXPGLO STARTUP SCHOOL or EXPGLO Events.
        </p>

        <h3 className="text-base font-bold text-slate-900">
          1. EXPGLO Startup School Tuition
        </h3>
        <p>
          Enrolled cohort candidates may request a full refund up to 7 calendar
          days prior to the official cohort orientation date. Once cohort
          sessions commence, fees are non-refundable.
        </p>

        <h3 className="text-base font-bold text-slate-900">
          2. Event & Workshop Passes
        </h3>
        <p>
          Registrations for summits and physical workshops may be transferred to
          a nominated peer up to 48 hours prior to the event commencement.
        </p>
      </div>
    </section>

    {/* FOOTER (PRD Section16 - Dark green background, 5 Columns) */}
    </main>
  );
}
