import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/animations";

export default function WhyExpGloSection() {
  const pillars = [
    {
      num: "01",
      title: "Build",
      desc: "Technology-driven platforms and business solutions built for commercial sustainability.",
      bg: "bg-emerald-50",
      text: "text-brand-green"
    },
    {
      num: "02",
      title: "Educate",
      desc: "Practical entrepreneurship and business education taught by verified unicorn operators.",
      bg: "bg-blue-50",
      text: "text-blue-600"
    },
    {
      num: "03",
      title: "Connect",
      desc: "Connecting founders, active investors, mentors and institutional professionals globally.",
      bg: "bg-amber-50",
      text: "text-brand-gold"
    },
    {
      num: "04",
      title: "Empower",
      desc: "Helping early-stage entrepreneurs transform raw concepts into resilient commercial businesses.",
      bg: "bg-purple-50",
      text: "text-purple-600"
    },
    {
      num: "05",
      title: "Grow",
      desc: "Creating high-yield opportunities for sustainable corporate and enterprise business growth.",
      bg: "bg-emerald-50",
      text: "text-brand-green"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative" data-purpose="why-expglo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="text-xs font-extrabold tracking-widest text-brand-gold uppercase">
            EXPGLO PILLARS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why EXPGLO?
          </h2>
          <p className="text-slate-600 text-sm">
            Five foundational pillars that define our unified venture ecosystem.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.num}
              variants={staggerItem}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-left space-y-3"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${p.bg} ${p.text} font-extrabold text-lg flex items-center justify-center`}
              >
                {p.num}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
