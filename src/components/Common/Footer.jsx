import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-brand-darkgreen text-slate-300 pt-16 pb-12 border-t border-emerald-950"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-emerald-900/70">
          {/* Col 1: Company */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/images/expglo.jpeg"
                  alt="EXPGLO Business logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                EXPGLO BUSINESS
              </span>
            </div>
            <p className="text-xs text-emerald-100/70 leading-relaxed">
              EXPGLO BUSINESS PRIVATE LIMITED is the official parent brand
              platform building a high-performance entrepreneurial ecosystem.
            </p>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium pt-1">
              <li>
                <Link className="hover:text-brand-gold transition" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/about#vision"
                >
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/about#leadership"
                >
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/careers"
                >
                  Careers{" "}
                  <span className="bg-brand-gold text-slate-950 text-[9px] px-1.5 py-0.5 rounded-full font-bold ml-1">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Our Businesses */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">
              Our Businesses
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium">
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/businesses#fund"
                >
                  EXPGLO FUND
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/businesses#school"
                >
                  EXPGLO STARTUP SCHOOL
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/businesses#sutrasync"
                >
                  SUTRASYNC
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium">
              <li>
                <Link className="hover:text-brand-gold transition" to="/events">
                  Events
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold transition" to="/news">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold transition" to="/news">
                  Blogs & Research
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/businesses#partners"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/about#faqs"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">
              Legal
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium">
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold transition" to="/terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-brand-gold transition" to="/refund">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-brand-gold transition"
                  to="/disclaimer"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">
              Contact Details
            </h4>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              <strong className="text-white">Registered Office:</strong>
              <br />
              Nagla Padma Gwalior Road, Agra 282001, UP
            </p>
            <p className="text-xs text-emerald-100/80">
              <strong className="text-white">Email:</strong>{" "}
              info@expglobusiness.com
            </p>
            <p className="text-xs text-emerald-100/80">
              <strong className="text-white">Phone:</strong> +91 9258482377
            </p>
            <p className="text-xs text-emerald-100/80">
              <strong className="text-white">Website:</strong>{" "}
              expglobusiness.com
            </p>
            <div className="pt-2 flex items-center gap-4 text-brand-gold text-xs">
              <a
                href="https://www.linkedin.com/company/yms-group-of-it-solution/posts/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.7h3.6V21H3.4V9.7Zm5.8 0h3.5v1.55h.05c.49-.92 1.69-1.9 3.48-1.9 3.72 0 4.4 2.45 4.4 5.64V21h-3.6v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.2V9.7Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586244133393"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.5 22.5 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.5v3h2.8v8h3.4Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/expglobusiness/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
              <Link
                to="/admin"
                className="hover:text-white transition font-semibold"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <div>
            Copyright 2026 EXPGLO BUSINESS PRIVATE LIMITED. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>CIN Registered Entity</span>
            <span></span>
            <span>Ministry of Corporate Affairs, Govt of India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
