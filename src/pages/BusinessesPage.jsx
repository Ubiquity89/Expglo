import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function BusinessesPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Our Businesses | EXPGLO BUSINESS PRIVATE LIMITED";
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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
            EXPGLO BUSINESS ECOSYSTEM
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Our Businesses
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto"
          >
            An interconnected portfolio of dedicated ventures driving founder
            education, institutional funding syndication, and high-velocity
            engineering.
          </motion.p>
        </div>
      </section>

      {/* BUSINESS UNITS LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Unit 1: EXPGLO FUND */}
          <div
            className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            id="fund"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase">
                Founder x Investor Ecosystem
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                EXPGLO FUND
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A specialized platform designed to help founders pitch their startups,
                connect directly with angel networks and venture capital firms, and
                close structured seed to growth funding rounds.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-brand-green font-bold"></span> Curated Startup Pitching Rounds
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-brand-green font-bold"></span> Direct Investor Syndicate Access
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-brand-green font-bold"></span> Institutional Seed to Series A Capital
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-brand-green font-bold"></span> Founder-Investor 1-on-1 Deal Rooms
                </div>
              </div>
              <div className="pt-4 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-brand-green hover:bg-brand-darkgreen transition shadow-md"
                  href="https://expglofund.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Explore EXPGLO FUND </span>
                </a>
                <Link
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition shadow-sm"
                  to="/fund"
                >
                  <span>View Fund Overview</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  alt="EXPGLO Fund Syndicate"
                  className="w-full h-72 object-cover"
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>
          </div>

          {/* Unit 2: EXPGLO STARTUP SCHOOL */}
          <div
            className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            id="school"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase">
                Turning Ideas Into Opportunities.
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                EXPGLO STARTUP SCHOOL
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The flagship educational and accelerator division of EXPGLO
                Business. Designed to train founders, researchers, and university
                innovators through rigorous cohorts, customer validation sprints,
                and investor readiness drills.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-blue-600 font-bold"></span> Startup
                  Fundamentals
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-blue-600 font-bold"></span> GTM &
                  Business Development
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-blue-600 font-bold"></span> Direct Unicorn
                  Mentorship
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-blue-600 font-bold"></span> Live Pitch
                  Preparation
                </div>
              </div>
              <div className="pt-4">
                <Link
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-md"
                  to="/contact?type=school"
                >
                  <span>View School Programs & Admissions </span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  alt="Startup School Sessions"
                  className="w-full h-72 object-cover"
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>
          </div>

          {/* Unit 3: SUTRASYNC */}
          <div
            className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            id="sutrasync"
          >
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-extrabold uppercase">
                TECHNOLOGY & INNOVATION
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">SutraSync</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our specialized technology studio providing high-velocity MVP
                engineering, cloud architecture blueprints, and agentic AI tools
                to rapidly validate venture ideas without expensive technical
                missteps.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-amber-600 font-bold"></span> 30-Day MVP
                  Engineering
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-amber-600 font-bold"></span> Agentic AI &
                  LLM Integrations
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-amber-600 font-bold"></span> Scalable Cloud
                  & DevSecOps
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="text-amber-600 font-bold"></span> CTO-as-a-Service
                  Advisory
                </div>
              </div>
              <div className="pt-4">
                <Link
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-brand-gold hover:text-slate-950 transition shadow-md"
                  to="/contact?type=labs"
                >
                  <span>Explore SutraSync </span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  alt="SutraSync Technology and Innovation"
                  className="w-full h-72 object-cover"
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnershipCTA />
    </main>
  );
}
