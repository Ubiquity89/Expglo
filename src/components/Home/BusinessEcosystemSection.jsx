import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/animations";

export default function BusinessEcosystemSection() {
  return (
    <section className="py-24 bg-white relative" id="businesses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
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
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Business Card 01: EXPGLO FUND */}
          <motion.div
            variants={staggerItem}
            className="group bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-emerald-300 transition duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-brand-green flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition duration-300">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-brand-gold bg-amber-50 px-2 py-0.5 rounded-full mb-1">
                  Founder x Investor Ecosystem
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-green transition">
                  EXPGLO FUND
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                A platform designed to help founders present their startups,
                connect with investors and explore funding opportunities.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5"> Startup Pitching</li>
                <li className="flex items-center gap-1.5"> Investor Network</li>
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
              <Link
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-darkgreen group-hover:text-brand-green transition"
                to="/businesses#fund"
              >
                <span>Explore EXPGLO FUND </span>
              </Link>
            </div>
          </motion.div>

          {/* Business Card 02: EXPGLO STARTUP SCHOOL */}
          <motion.div
            variants={staggerItem}
            className="group bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-blue-300 transition duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mb-1">
                  Turning Ideas Into Opportunities.
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition">
                  EXPGLO STARTUP SCHOOL
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                A startup learning and development platform designed for
                aspiring entrepreneurs, students and founders.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5"> Startup Education</li>
                <li className="flex items-center gap-1.5">
                   Business Fundamentals
                </li>
                <li className="flex items-center gap-1.5">
                   Mentorship & Practical Programs
                </li>
                <li className="flex items-center gap-1.5"> Pitch Preparation</li>
                <li className="flex items-center gap-1.5"> Fundraising Support</li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6">
              <Link
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 group-hover:text-blue-600 transition"
                to="/businesses#school"
              >
                <span>Explore EXPGLO Startup School </span>
              </Link>
            </div>
          </motion.div>

          {/* Business Card 03: SutraSync */}
          <motion.div
            variants={staggerItem}
            className="group bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-indigo-300 transition duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full mb-1">
                  Technology & Innovation
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                  SutraSync Technologies
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Transforming ideas into scalable digital products with modern
                technology, creative design, and intelligent solutions.
              </p>
              <ul className="text-xs text-slate-500 space-y-1.5 pt-2">
                <li className="flex items-center gap-1.5">
                   Custom Web & App Solutions
                </li>
                <li className="flex items-center gap-1.5"> AI & Automation</li>
                <li className="flex items-center gap-1.5"> UI/UX Design</li>
                <li className="flex items-center gap-1.5">
                   Digital Growth Solutions
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6">
              <Link
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 group-hover:text-indigo-600 transition"
                to="/businesses#sutrasync"
              >
                <span>Explore Sutrasync Technologies </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
