import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CounterItem({ target, suffix = "+", label, icon, gold = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200; // ms
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const step = Math.ceil(target / totalSteps) || 1;

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div ref={ref} className="pt-4 md:pt-0 md:px-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-gold flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <span
          className={`text-3xl sm:text-4xl font-black ${
            gold ? "text-brand-gold" : "text-white"
          } tracking-tight`}
        >
          {inView ? count : 0}
          {suffix}
        </span>
        <p className="text-xs font-bold text-emerald-100 uppercase tracking-wider mt-0.5">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function BusinessStatsBar() {
  return (
    <section
      id="business-stats"
      className="relative -mt-8 z-30 px-4 sm:px-6 lg:px-8"
      data-purpose="business-stats"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-darkgreen rounded-3xl shadow-2xl border border-emerald-800/80 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-800/60 text-white">
          <CounterItem
            target={100}
            suffix="+"
            label="Startups Empowered"
            gold={true}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            }
          />

          <CounterItem
            target={50}
            suffix="+"
            label="Investors Onboard"
            gold={false}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
          />

          <CounterItem
            target={30}
            suffix="+"
            label="Events Conducted"
            gold={true}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            }
          />

          <CounterItem
            target={10}
            suffix="+"
            label="Strategic Partners"
            gold={false}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
