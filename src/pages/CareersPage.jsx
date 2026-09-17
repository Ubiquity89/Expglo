import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import { getJobs } from "../data/expgloStore";
import JobApplicationModal from "../components/Careers/JobApplicationModal";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    document.title = "Careers | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
    setJobs(getJobs());
  }, []);

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
            CAREERS AT EXPGLO
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Build Your Career With EXPGLO
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Join a mission-driven ecosystem solving real bottlenecks for founders,
            investors, and institutions across emerging venture markets.
          </motion.p>
        </div>
      </section>

      {/* WHY JOIN EXPGLO */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Why Join EXPGLO?
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We empower team members to act like venture founders with extreme
              ownership and real accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center font-black">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Mission-Driven Work
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Directly impact hundreds of early-stage startups and university
                entrepreneurs building national-scale tech.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900">
                High-Impact Network
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Work alongside top venture capital partners, angel syndicate leads,
                and serial exit founders daily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-gold flex items-center justify-center font-black">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Fast-Track Ownership
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero corporate bureaucracy. Take rapid decisions and own outcomes
                with institutional backing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Hybrid & Flexible
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern hybrid office hubs in Hyderabad and Bangalore with flexible
                remote collaboration setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-24 bg-white" id="positions">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
                ACTIVE OPPORTUNITIES
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">
                Open Positions & Opportunities
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-2 sm:mt-0">
              {jobs.length} Positions Available
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer(0.1)}
            className="space-y-4"
            id="careers-job-list"
          >
            {jobs.map((j) => (
              <motion.div
                key={j.id}
                variants={staggerItem}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-brand-green hover:shadow-xl transition duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-brand-green">
                      {j.department}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {j.location}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {j.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{j.title}</h3>
                  <p className="text-xs text-slate-600 max-w-xl">
                    {j.description}
                  </p>
                  <div className="text-[11px] text-slate-500 font-semibold">
                    Experience: {j.experience}
                  </div>
                </div>
                <div className="shrink-0">
                  <button
                    onClick={() => setSelectedJob(j)}
                    className="px-6 py-3 rounded-full text-xs font-bold bg-brand-green text-white hover:bg-brand-darkgreen transition shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PartnershipCTA />

      <JobApplicationModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </main>
  );
}
