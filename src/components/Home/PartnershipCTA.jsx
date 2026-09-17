import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleIn } from "../../utils/animations";

export default function PartnershipCTA() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/50"
      data-purpose="partnership-cta"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={scaleIn}
          className="bg-gradient-to-r from-amber-400 via-brand-gold to-yellow-500 rounded-[2.5rem] p-8 sm:p-14 lg:p-16 text-slate-950 shadow-2xl relative overflow-hidden border border-amber-300"
        >
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-slate-900 text-brand-gold text-xs font-extrabold uppercase tracking-widest">
              JOIN OUR ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-slate-950">
              Let's Build the Future Together.
            </h2>
            <p className="text-slate-900/90 text-base sm:text-lg font-medium leading-relaxed">
              Join EXPGLO in building a stronger entrepreneurial ecosystem through
              partnerships, innovation and collaboration. Whether you are an
              institution, college, mentor, or investor - let's connect.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                className="px-8 py-4 rounded-full text-sm font-extrabold text-white bg-slate-950 hover:bg-slate-900 transition shadow-xl"
                to="/contact?type=partner"
              >
                Partner With Us 
              </Link>
              <Link
                className="px-8 py-4 rounded-full text-sm font-extrabold text-slate-950 bg-white hover:bg-slate-50 border border-amber-600/30 transition shadow-md"
                to="/contact"
              >
                Contact Us 
              </Link>
            </div>
          </div>

          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full border-[20px] border-white/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
