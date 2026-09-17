import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/animations";
import { getEvents } from "../../data/expgloStore";
import EventModal from "../Events/EventModal";

export default function EventsSection() {
  const events = getEvents().slice(0, 3);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-20 bg-slate-900 text-white relative" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <div className="text-xs font-extrabold tracking-widest text-brand-gold uppercase mb-2">
              UPCOMING & RECENT
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              EXPGLO Events
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Startup events, college webinars, hackathons, and investor
              roundtables.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-gold hover:text-white mt-4 md:mt-0 transition"
            to="/events"
          >
            <span>View All Events</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          id="home-events-container"
        >
          {events.map((ev) => (
            <motion.div
              key={ev.id}
              variants={staggerItem}
              className="rounded-3xl overflow-hidden bg-slate-800/80 border border-slate-700/80 hover:border-brand-gold transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
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
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-brand-gold transition">
                    {ev.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
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

      <EventModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}
