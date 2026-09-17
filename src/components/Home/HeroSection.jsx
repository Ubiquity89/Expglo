import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../../utils/animations";

export default function HeroSection() {
  const scrollToExplore = () => {
    const el = document.getElementById("business-stats");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-screen min-h-[calc(100vh-110px)] lg:min-h-[calc(100vh-120px)] overflow-hidden flex items-center"
      style={{
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      {/* FULL SCREEN OFFICE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/office.png"
          alt="EXPGLO Business headquarters"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* MORE FADED OFFICE IMAGE */}
        <div className="absolute inset-0 bg-white/45" />

        {/* SOFT SIDE FADE */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,.38) 0%, rgba(255,255,255,.16) 38%, rgba(255,255,255,.22) 100%)",
          }}
        />
      </div>

      {/* SUBTLE DECORATIVE RINGS */}
      <div className="pointer-events-none absolute -left-48 -top-48 z-[1] w-[620px] h-[620px] rounded-full border border-emerald-200/40" />
      <div className="pointer-events-none absolute -right-56 -bottom-56 z-[1] w-[760px] h-[760px] rounded-full border border-emerald-200/35" />

      {/* WHITE FADED BACKDROP ONLY BEHIND TEXT */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-[1250px] h-[78%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,.92) 0%, rgba(255,255,255,.82) 34%, rgba(255,255,255,.58) 55%, rgba(255,255,255,0) 78%)",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* COMPANY LABEL */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-extrabold uppercase tracking-[0.28em] text-brand-green mb-5"
          >
            <span className="w-10 h-px bg-emerald-400" />
            EXPGLO BUSINESS PRIVATE LIMITED
            <span className="w-10 h-px bg-emerald-400" />
          </motion.div>

          {/* MAIN HEADLINE */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-extrabold tracking-[-0.05em] leading-[0.98] text-slate-900 text-4xl sm:text-5xl md:text-6xl lg:text-[76px]"
          >
            <span className="block">Building Businesses.</span>
            <span className="block text-brand-green mt-2">
              Empowering Entrepreneurs.
            </span>
            <span className="block mt-2">Creating Opportunities.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="max-w-4xl mx-auto mt-7 sm:mt-8 text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed"
          >
            EXPGLO Business Private Limited is building a powerful ecosystem
            that supports startups, entrepreneurs and businesses through
            funding, education, technology and growth opportunities.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-9"
          >
            {/* EXPLORE */}
            <Link
              to="/businesses"
              className="group inline-flex items-center justify-center gap-3 min-w-[220px] px-7 py-3.5 rounded-full text-sm font-bold text-white bg-brand-green hover:bg-brand-darkgreen transition-all duration-300 shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5"
            >
              <span>Explore Our Businesses</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            {/* PARTNER */}
            <Link
              to="/contact?type=partner"
              className="group inline-flex items-center justify-center gap-3 min-w-[220px] px-7 py-3.5 rounded-full text-sm font-bold text-slate-900 bg-white/90 hover:bg-white border border-slate-300/80 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <span>Partner With Us</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="mt-12 sm:mt-14 flex flex-col items-center text-slate-500 cursor-pointer"
            onClick={scrollToExplore}
          >
            <div className="w-5 h-8 rounded-full border-2 border-slate-400/80 flex items-start justify-center p-1.5">
              <span className="w-1 h-2 rounded-full bg-slate-500 animate-bounce" />
            </div>
            <span className="mt-2 text-[11px] font-medium tracking-wide">
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
