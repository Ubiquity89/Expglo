import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function FundPage() {
  useEffect(() => {
    document.title = "EXPGLO FUND | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Curated Startup Pitching Rounds",
      desc: "Vetted early-stage founders present high-conviction ventures directly to active angel networks and fund managers.",
      icon: "",
    },
    {
      title: "Direct Investor Syndicate Access",
      desc: "Streamlined syndicate SPVs connecting angel investors and family offices with verified enterprise deals.",
      icon: "",
    },
    {
      title: "Institutional Seed to Series A Capital",
      desc: "Co-investment partnerships and structured capital allocation for high-velocity software, AI, and hardware ventures.",
      icon: "",
    },
    {
      title: "Founder-Investor 1-on-1 Deal Rooms",
      desc: "Private diligence deal rooms equipped with cap tables, metrics validation, and confidential financial rooms.",
      icon: "",
    },
    {
      title: "Term Sheet & Valuation Advisory",
      desc: "Expert guidance on SAFE notes, convertible debt, governance terms, and shareholder rights agreements.",
      icon: "",
    },
    {
      title: "Cross-Border Capital Networks",
      desc: "Bridging Indian founders with global venture partners in Singapore, Dubai, and Silicon Valley corridors.",
      icon: "",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs font-extrabold uppercase tracking-widest text-brand-gold"
          >
            FOUNDER x INVESTOR SYNDICATE
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            EXPGLO FUND
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Intelligent Capital Allocation & Investor Syndicate. Connecting
            ambitious seed-stage innovators with accredited angel networks and
            institutional venture funds.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <a
              href="https://expglofund.com/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-brand-green hover:bg-brand-darkgreen transition shadow-lg shadow-emerald-900/30"
            >
              Visit Official Platform (expglofund.com) 
            </a>
            <Link
              to="/contact?type=founder"
              className="px-8 py-3.5 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-sm"
            >
              Apply to Pitch Your Startup
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CORE HIGHLIGHTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
                INSTITUTIONAL SYNDICATE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Empowering High-Growth Founders with Smart Capital
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                EXPGLO FUND is designed to remove the friction from early-stage
                fundraising. Rather than cold pitches and prolonged silence, we
                bring verified deal rooms, curated syndicate cohorts, and
                institutional governance directly to founders.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <span className="text-brand-green font-bold"></span> Direct 1-on-1 pitch presentations to decision-makers
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <span className="text-brand-green font-bold"></span> Fast-track term sheet discussions and diligence facilitation
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <span className="text-brand-green font-bold"></span> Post-investment operational guidance and board advisory
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  alt="EXPGLO Fund Deal Room"
                  className="w-full h-80 object-cover"
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>
          </div>

          {/* FEATURES GRID */}
          <div className="space-y-8 pt-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Syndicate Features & Capabilities
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                A complete ecosystem engineered for both institutional investors
                and scaling startup founders.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer(0.1)}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-brand-green hover:shadow-xl transition duration-300 space-y-3"
                >
                  <div className="text-2xl">{f.icon}</div>
                  <h4 className="text-lg font-bold text-slate-900">{f.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <PartnershipCTA />
    </main>
  );
}
