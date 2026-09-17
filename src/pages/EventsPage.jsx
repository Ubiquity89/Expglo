import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import { getEvents } from "../data/expgloStore";
import EventModal from "../components/Events/EventModal";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function EventsPage() {
  const [allEvents, setAllEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    document.title =
      "Ecosystem Events & Summits | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
    setAllEvents(getEvents());
  }, []);

  const categories = [
    { id: "all", label: "All Events" },
    { id: "Startup", label: "Pitch & Startups" },
    { id: "Education", label: "Webinars & Academic" },
    { id: "Hackathon", label: "Hackathons" },
    { id: "Investor", label: "Investor Roundtables" },
    { id: "Workshop", label: "Workshops" },
  ];

  const filteredEvents =
    activeFilter === "all"
      ? allEvents
      : allEvents.filter((ev) => ev.category === activeFilter);

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
            FLAGSHIP EVENTS & SUMMITS
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Ecosystem Events & Summits
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Founder pitching sessions, university hackathons, angel syndicates,
            and executive closed-door venture roundtables.
          </motion.p>
        </div>
      </section>

      {/* FILTER BAR & EVENTS LIST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Categories */}
          <div
            id="event-filters"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition filter-btn ${
                  activeFilter === cat.id
                    ? "bg-brand-green text-white shadow-md shadow-emerald-700/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.map((ev) => (
              <motion.div
                key={ev.id}
                variants={staggerItem}
                className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/80 hover:border-brand-green hover:shadow-xl transition duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      src={ev.image}
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-brand-green shadow-sm">
                      {ev.category}
                    </span>
                    <span className="absolute top-4 right-4 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-brand-gold">
                      {ev.date}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span>{ev.venue.split(",")[0]}</span>
                      <span>|</span>
                      <span>{ev.time.split("(")[0]}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-brand-green transition">
                      {ev.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {ev.description}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedEvent(ev)}
                    className="w-full py-2.5 rounded-full text-xs font-bold bg-brand-green text-white hover:bg-brand-darkgreen transition shadow-sm"
                  >
                    View Details & Register
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PartnershipCTA />

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </main>
  );
}
