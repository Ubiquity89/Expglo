import React, { useState } from "react";
import Modal from "../Common/Modal";
import { useToast } from "../Common/Toast";
import { saveApplication } from "../../data/expgloStore";

export default function JobApplicationModal({ job, isOpen, onClose }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    coverMessage: "",
  });

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    saveApplication({
      position: job.title,
      department: job.department,
      ...formData,
    });
    onClose();
    showToast(
      "Application Received!",
      `Thank you for applying for ${job.title}. Our talent acquisition team will review your profile.`,
      "success"
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      coverMessage: "",
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      <div className="border-b border-slate-100 pb-4 mb-4">
        <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-green bg-emerald-50 px-2 py-0.5 rounded-full">
          {job.department}
        </span>
        <h2 className="text-xl font-extrabold text-slate-900 mt-1">
          Apply for {job.title}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {job.location}  {job.type}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Rahul Sharma"
            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="rahul@domain.com"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="+91 9258482377"
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            LinkedIn / Portfolio URL
          </label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) =>
              setFormData({ ...formData, linkedin: e.target.value })
            }
            placeholder="https://linkedin.com/in/username"
            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Why are you interested in this role?
          </label>
          <textarea
            rows="3"
            value={formData.coverMessage}
            onChange={(e) =>
              setFormData({ ...formData, coverMessage: e.target.value })
            }
            placeholder="Tell us briefly about your background and motivation..."
            className="w-full text-xs p-3 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full text-xs font-bold bg-brand-green text-white hover:bg-brand-darkgreen transition shadow-md"
        >
          Submit Candidacy
        </button>
      </form>
    </Modal>
  );
}
