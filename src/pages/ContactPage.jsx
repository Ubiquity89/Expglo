import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { useToast } from "../components/Common/Toast";
import { saveEnquiry } from "../data/expgloStore";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    enquiryType: "Business Partnership",
    message: "",
  });

  useEffect(() => {
    document.title = "Contact Us | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);

    const typeParam = searchParams.get("type");
    if (typeParam) {
      const lower = typeParam.toLowerCase();
      if (lower === "partner") {
        setFormData((prev) => ({ ...prev, enquiryType: "Business Partnership" }));
      } else if (lower === "founder" || lower === "startup") {
        setFormData((prev) => ({ ...prev, enquiryType: "Startup / Founder" }));
      } else if (lower === "investor") {
        setFormData((prev) => ({ ...prev, enquiryType: "Investor" }));
      } else if (lower === "labs" || lower === "school") {
        setFormData((prev) => ({ ...prev, enquiryType: "Business Partnership" }));
      }
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEnquiry({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization || "Independent",
      enquiryType: formData.enquiryType,
      message: formData.message,
    });

    showToast(
      "Enquiry Submitted!",
      "Thank you. Our team will get back to you shortly.",
      "success"
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      enquiryType: "Business Partnership",
      message: "",
    });
  };

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
            EXECUTIVE CONTACT DESK
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            Contact EXPGLO Business
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Connect with our executive desk for partnership enquiries, founder
            deal-room applications, institutional capital syndicates, or general
            queries.
          </motion.p>
        </div>
      </section>

      {/* CONTACT FORM & INFO GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-green">
                  DIRECT CHANNELS
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  Reach Our Executive Desk
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We look forward to collaborating with high-ambition founders,
                  institutional capital providers, and academic leadership.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-green flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Corporate Headquarters
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      Nagla Padma Gwalior Road, Agra 282001, UP
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      CIN Registered Corporate Platform
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Email Inquiries
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      info@expglobusiness.com
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      General: info@expglobusiness.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-gold flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Telephone Desk
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5">
                      +91 9258482377
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Monday to Friday: 9:00 AM - 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-200/80">
                <div className="border-b border-slate-100 pb-6 mb-6">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below and an ecosystem director will
                    respond within 24 hours.
                  </p>
                </div>

                <form
                  id="contact-enquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Vikram Chandra"
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="vikram@company.com"
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 9258482377"
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Organization / Startup Name
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        placeholder="e.g. Apex Tech Labs"
                        className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Enquiry Category *
                    </label>
                    <select
                      id="enquiry-type-select"
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) =>
                        setFormData({ ...formData, enquiryType: e.target.value })
                      }
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-brand-green bg-white"
                    >
                      <option value="Business Partnership">
                        Business Partnership
                      </option>
                      <option value="Startup / Founder">
                        Startup / Founder
                      </option>
                      <option value="Investor">Investor</option>
                      <option value="Media & Press">Media & Press</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please outline the nature of your interest, questions, or collaboration proposal..."
                      className="w-full text-xs p-4 rounded-xl border border-slate-200 outline-none focus:border-brand-green"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-extrabold text-white bg-brand-green hover:bg-brand-darkgreen transition shadow-lg shadow-emerald-800/20"
                  >
                    Submit Enquiry 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
