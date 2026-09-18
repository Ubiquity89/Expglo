import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../../utils/animations";

export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeIn}
            className="lg:col-span-6 relative"
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.img
                alt="EXPGLO Innovation Campus"
                className="w-full h-[480px] object-cover"
                src="https://imgs.search.brave.com/pl9J17glkPfP-e26Enw_QT8_5zdO7X8jZZnC31bY9Ow/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtcGhvdG8v/dGVhbXdvcmstbWVl/dGluZy13aXRoLWJ1/c2luZXNzLXBlb3Bs/ZV8yMy0yMTQ4ODI1/OTQyLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </motion.div>
            <div className="absolute -bottom-8 -left-4 sm:left-6 bg-brand-darkgreen text-white p-6 rounded-3xl shadow-xl border-4 border-white max-w-xs">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-brand-gold">05+</span>
                <div className="text-xs font-bold leading-tight uppercase tracking-wider">
                  Years of Venture
                  <br />
                  Excellence & Growth
                </div>
              </div>
              <p className="text-[11px] text-emerald-200 mt-2">
                Nurturing sustainable startups from initial blueprint to
                institutional funding.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="lg:col-span-6 space-y-6 pt-6 lg:pt-0"
          >
            <div className="text-xs font-extrabold tracking-widest text-brand-green uppercase">
              ABOUT EXPGLO BUSINESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Building an Ecosystem for the Next Generation of Entrepreneurs.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              EXPGLO Business Private Limited is the parent corporate brand
              platform engineered to fuel high-conviction ventures. We bridge
              the critical divide between ambitious founders, seasoned unicorn
              operators, and accredited global capital allocators.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  <strong>Who EXPGLO is:</strong> A multi-unit parent venture
                  holding and growth entity.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  <strong>What the company does:</strong> Seed capital
                  syndicates, EXPGLO Startup School cohorts, MVP engineering, and
                  founder summits.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  <strong>Why the company exists:</strong> To accelerate
                  venture success rates and build world-class tech enterprises.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  <strong>Its entrepreneurial ecosystem:</strong> Active
                  collaboration across founders, universities, angel syndicates,
                  and corporate partners.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-brand-green transition shadow-lg shadow-slate-900/20"
                to="/about"
              >
                <span>Know More About Us </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
