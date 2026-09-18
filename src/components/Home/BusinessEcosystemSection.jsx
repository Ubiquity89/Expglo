import React from "react";

const BusinessEcosystemSection = () => {
  return (
    <>
      {/* BUSINESS ECOSYSTEM (PRD Section10) */}
      <section className="py-24 bg-white relative" id="businesses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs font-extrabold tracking-widest text-brand-green uppercase">
              OUR BUSINESS ECOSYSTEM
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Business Ecosystem
            </h2>

            <p className="text-slate-600 text-sm sm:text-base">
              Multiple initiatives. One vision - empowering entrepreneurs and
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Card 01: EXPGLO FUND */}
            <div className="group business-card business-card-fund bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="business-card-heading flex items-center gap-4">
                  <div className="business-icon w-16 h-16 shrink-0 rounded-2xl bg-emerald-100 text-brand-green flex items-center justify-center">
                    <img
                      className="h-14 w-14 object-contain"
                      src="assets/images/expglofund.png"
                      alt="EXPGLO Fund logo"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-brand-gold bg-amber-50 px-2 py-0.5 rounded-full mb-1">
                      Founder x Investor Ecosystem
                    </span>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-green transition">
                      EXPGLO FUND
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  A platform designed to help founders present their startups,
                  connect with investors and explore funding opportunities.
                </p>

                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li className="flex items-center gap-1.5">
                    Startup Pitching
                  </li>
                  <li className="flex items-center gap-1.5">
                    Investor Network
                  </li>
                  <li className="flex items-center gap-1.5">
                    Funding Opportunities
                  </li>
                  <li className="flex items-center gap-1.5">
                    Founder-Investor Meetings
                  </li>
                  <li className="flex items-center gap-1.5">
                    Business Connections
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6">
                <a
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-darkgreen group-hover:text-brand-green transition"
                  href="https://expglofund.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Explore EXPGLO FUND{" "}
                    <span className="business-arrow" aria-hidden="true"></span>
                  </span>
                </a>
              </div>
            </div>

            {/* Business Card 02: EXPGLO STARTUP SCHOOL */}
            <div className="group business-card business-card-school bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="business-card-heading flex items-center gap-4">
                  <div className="business-icon w-16 h-16 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <img
                      className="h-14 w-14 object-contain"
                      src="assets/images/expglo school.png"
                      alt="EXPGLO Startup School logo"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-1">
                      Turning Ideas Into Opportunities.
                    </span>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition">
                      EXPGLO STARTUP SCHOOL
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  A startup learning and development platform designed for
                  aspiring entrepreneurs, students and founders.
                </p>

                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li className="flex items-center gap-1.5">
                    Startup Education
                  </li>
                  <li className="flex items-center gap-1.5">
                    Business Fundamentals
                  </li>
                  <li className="flex items-center gap-1.5">
                    Mentorship & Practical Programs
                  </li>
                  <li className="flex items-center gap-1.5">
                    Pitch Preparation
                  </li>
                  <li className="flex items-center gap-1.5">
                    Fundraising Support
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6">
                <a
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 group-hover:text-blue-600 transition"
                  href="businesses.html#school"
                >
                  <span>
                    Explore EXPGLO Startup School{" "}
                    <span className="business-arrow" aria-hidden="true"></span>
                  </span>
                </a>
              </div>
            </div>

            {/* Business Card 04: Global Syndicate */}
            <div className="group business-card business-card-sutrasync bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="business-card-heading flex items-center gap-4">
                  <div className="business-icon w-16 h-16 shrink-0 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <img
                      className="h-14 w-14 object-contain"
                      src="assets/images/sutrasync.png"
                      alt="SutraSync logo"
                    />
                  </div>

                  <div className="min-w-0">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full mb-1">
                      Technology & Innovation
                    </span>

                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                      SutraSync Technologies
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Transforming ideas into scalable digital products with modern
                  technology, creative design, and intelligent solutions.
                </p>

                <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                  <li className="flex items-center gap-1.5">
                    Custom Web & App Solutions
                  </li>
                  <li className="flex items-center gap-1.5">AI & Automation</li>
                  <li className="flex items-center gap-1.5">UI/UX Design</li>
                  <li className="flex items-center gap-1.5">
                    Digital Growth Solutions
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6">
                <a
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition"
                  href="https://sutrasync.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    Explore Sutrasync Technologies{" "}
                    <span className="business-arrow" aria-hidden="true"></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default BusinessEcosystemSection;
