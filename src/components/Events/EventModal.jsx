import React, { useState } from "react";
import Modal from "../Common/Modal";
import { useToast } from "../Common/Toast";

export default function EventModal({ event, isOpen, onClose }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "" });

  if (!event) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    showToast(
      "Registration Confirmed!",
      `You have been registered for "${event.title}". Pass details sent to your email.`,
      "success"
    );
    setFormData({ name: "", email: "" });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl">
      <div className="rounded-2xl overflow-hidden h-48 -mx-2 -mt-2 mb-4 relative">
        <img
          alt={event.title}
          className="w-full h-full object-cover"
          src={event.image}
        />
        <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-brand-green">
          {event.category}
        </span>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
          {event.title}
        </h2>
        <div className="text-xs text-slate-500 space-y-1">
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Time:</strong> {event.time}
          </p>
          <p>
            <strong>Venue:</strong> {event.venue}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
          About This Event
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed">
          {event.description}
        </p>
      </div>

      {event.speakers && event.speakers.length > 0 && (
        <div className="mt-4">
          <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
            Featured Speakers
          </h4>
          <div className="space-y-1.5">
            {event.speakers.map((s, idx) => (
              <div
                key={idx}
                className="text-xs font-semibold text-slate-800 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                {s}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="pt-5 border-t border-slate-100 mt-5">
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="text-xs px-3 py-2.5 rounded-xl border border-slate-200 outline-none w-full focus:border-brand-green"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="text-xs px-3 py-2.5 rounded-xl border border-slate-200 outline-none w-full focus:border-brand-green"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Confirm My Free Registration
          </button>
        </form>
      </div>
    </Modal>
  );
}
