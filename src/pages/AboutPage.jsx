import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Page Header Hero */}
    <section
      className="py-16 lg:py-20 bg-gradient-to-r from-emerald-50/70 via-sky-50/40 to-amber-50/40 border-b border-slate-100"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4"
      >
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-brand-darkgreen text-xs font-bold uppercase tracking-wider"
        >
          <span></span> ABOUT EXPGLO
        </div>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          Who We Are & What Drives Us
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          EXPGLO Business Private Limited is dedicated to creating sustainable
          enterprise value by bridging visionary innovators with institutional
          capital and execution frameworks.
        </p>
      </div>
    </section>

    {/* Section 1 & 2: Who We Are & Our Story */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <span
              className="text-xs font-extrabold tracking-widest text-brand-green uppercase"
              >WHO WE ARE</span
            >
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              An Integrated Corporate Ecosystem Built for Modern Founders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              EXPGLO Business Private Limited was established to address a
              persistent failure point in global entrepreneurship: the
              disconnect between raw technological capability, institutional
              funding, and structured corporate development.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Unlike fragmented accelerators or traditional incubators, EXPGLO
              operates as a cohesive ecosystem. We combine a specialized angel
              syndicate fund, a high-rigor founder academy, engineering
              prototyping labs, and university pipeline channels into one
              unified platform.
            </p>
            <div
              className="p-6 bg-emerald-50/80 rounded-2xl border border-emerald-200"
            >
              <h4 className="font-bold text-brand-darkgreen text-base mb-1">
                Our Corporate Motto
              </h4>
              <p className="text-brand-green text-sm font-semibold">
                "Building Businesses. Empowering Entrepreneurs. Creating
                Opportunities."
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="lg:col-span-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.img
                alt="EXPGLO Campus Experience"
                className="w-full h-[440px] object-cover"
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Section 3 & 4: Vision & Mission */}
    <section className="py-20 bg-slate-50" id="vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div
            className="bg-white rounded-3xl p-10 border border-slate-100 shadow-md space-y-4"
          >
            <div
              className="w-14 h-14 rounded-2xl bg-amber-100 text-brand-gold flex items-center justify-center font-black"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                ></path>
              </svg>
            </div>
            <span
              className="text-xs font-extrabold uppercase tracking-widest text-brand-gold"
            ></span>
            <h3 className="text-2xl font-extrabold text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To become the preeminent global venture ecosystem, cultivating
              sustainable enterprises that solve critical real-world challenges
              while democratizing access to capital, knowledge, and high-impact
              technology networks.
            </p>
          </div>

          {/* Mission */}
          <div
            className="bg-white rounded-3xl p-10 border border-slate-100 shadow-md space-y-4"
          >
            <div
              className="w-14 h-14 rounded-2xl bg-emerald-100 text-brand-green flex items-center justify-center font-black"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <span
              className="text-xs font-extrabold uppercase tracking-widest text-brand-green"
            ></span>
            <h3 className="text-2xl font-extrabold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To empower 1,000+ high-conviction startups by 2030 through
              institutional investor syndication, experiential curriculum, elite
              operational mentorship, and rapid technology enablement.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 5: Core Values */}
    <section className="py-24 bg-white" id="values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div
            className="text-xs font-extrabold tracking-widest text-brand-green uppercase"
          ></div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Our Core Values
          </h2>
          <p className="text-slate-600 text-sm">
            The 6 immutable principles governing every business unit within
            EXPGLO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-xl transition duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-extrabold"
            >
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">Innovation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Challenging orthodox business models through technological
              leverage, agentic AI architecture, and creative market solutions.
            </p>
          </div>
          <div
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-xl transition duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-emerald-100 text-brand-green flex items-center justify-center font-extrabold"
            >
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">Integrity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unwavering transparency in deal syndicate terms, valuation
              governance, cap table advisory, and investor relations.
            </p>
          </div>
          <div
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-xl transition duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-amber-100 text-brand-gold flex items-center justify-center font-extrabold"
            >
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">Entrepreneurship</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Championing the relentless spirit of builders who take
              high-conviction risks to build enterprise and community value.
            </p>
          </div>
          <div
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-xl transition duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-extrabold"
            >
              04
            </div>
            <h3 className="text-lg font-bold text-slate-900">Collaboration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fostering deep multilateral synergy between founders,
              universities, corporate enterprises, and angel syndicates.
            </p>
          </div>
          <div
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-xl transition duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-emerald-100 text-brand-darkgreen flex items-center justify-center font-extrabold"
            >
              05
            </div>
            <h3 className="text-lg font-bold text-slate-900">Growth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focusing ruthlessly on real commercial validation, customer
              acquisition loops, revenue unit economics, and capital efficiency.
            </p>
          </div>
          <div
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-3 hover:bg-white hover:shadow-xl transition duration-300"
          >
            <div
              className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-extrabold"
            >
              06
            </div>
            <h3 className="text-lg font-bold text-slate-900">Impact</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Creating durable employment, intellectual property, and
              transformative societal advancement across every venture
              touchpoint.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 7: Our Ecosystem Architecture */}
    <section className="py-24 bg-white" id="ecosystem">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12"
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <span
            className="text-xs font-extrabold tracking-widest text-brand-green uppercase"
          ></span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            The EXPGLO Dual-Engine Architecture
          </h2>
          <p className="text-slate-600 text-sm">
            How EXPGLO FUND and EXPGLO STARTUP SCHOOL function seamlessly under parent
            governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div
            className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-200 space-y-4"
          >
            <div className="flex items-center justify-between">
              <span
                className="px-3 py-1 bg-emerald-200 text-brand-darkgreen font-bold text-xs rounded-full"
                >Capital Engine</span
              >
              <span className="text-xs text-slate-400 font-mono">Unit 01</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">EXPGLO FUND</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Operates as the capital distribution and investor relationship
              engine. Manages deal rooms, investor syndicate roadshows, term
              sheet negotiations, and co-investment syndication with regional
              VCs.
            </p>
            <a
              href="fund.html"
              className="inline-flex items-center text-xs font-bold text-brand-green hover:underline"
              >Learn more about EXPGLO Fund</a
            >
          </div>

          <div
            className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200 space-y-4"
          >
            <div className="flex items-center justify-between">
              <span
                className="px-3 py-1 bg-blue-200 text-blue-800 font-bold text-xs rounded-full"
                >Academy Engine</span
              >
              <span className="text-xs text-slate-400 font-mono">Unit 02</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">EXPGLO STARTUP SCHOOL</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Operates as the founder enablement engine. Provides structured
              cohort-based curricula, validation frameworks, prototype
              engineering advisory, and direct founder masterclasses from
              inception to seed readiness.
            </p>
            <a
              href="businesses.html#school"
              className="inline-flex items-center text-xs font-bold text-blue-700 hover:underline"
              >Learn more about EXPGLO Startup School</a
            >
          </div>
        </div>
      </div>
    </section>

    {/* FOOTER (PRD Section16 - Dark green background, 5 Columns) */}
      <PartnershipCTA />
    </main>
  );
}
