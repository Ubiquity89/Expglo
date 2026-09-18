import React from "react";
import { Link } from "react-router-dom";

// Original page stylesheet: /assets/custom-1IrC05ha.css

export default function Businesses() {
  return (
    <>
      {/* TOP NOTIFICATION / UTILITY BAR */}
      <aside
        className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800 hidden md:block"
        data-purpose="top-utility-bar"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-brand-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  fillRule="evenodd"
                ></path>
              </svg>
              Nagla Padma Gwalior Road, Agra 282001, UP
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-brand-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              info@expglobusiness.com
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-brand-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"></path>
              </svg>
              +91 9258482377
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-600">|</span>
            <a
              className="hover:text-white transition animate-ready is-visible"
              href="https://www.linkedin.com/company/yms-group-of-it-solution/posts/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.7h3.6V21H3.4V9.7Zm5.8 0h3.5v1.55h.05c.49-.92 1.69-1.9 3.48-1.9 3.72 0 4.4 2.45 4.4 5.64V21h-3.6v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.2V9.7Z"></path>
              </svg>
            </a>
            <a
              className="hover:text-white transition animate-ready is-visible"
              href="https://www.facebook.com/profile.php?id=61586244133393"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7A22.5 22.5 0 0 0 13.23 4.87c-2.45 0-4.13 1.5-4.13 4.25V10H7.5v3h2.8v8h3.4Z"></path>
              </svg>
            </a>
            <a
              className="hover:text-white transition animate-ready is-visible"
              href="https://www.instagram.com/expglobusiness/"
              target="_blank"
              rel="noreferrer"
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
                <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                ></circle>
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* FLOATING HEADER / NAVBAR (STICKY) */}
      <header className="sticky top-0 z-50 pt-3 pb-3 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300 animate-ready is-visible">
        <div className="max-w-7xl mx-auto">
          <nav className="bg-white/95 rounded-full shadow-lg shadow-slate-200/50 border border-slate-100 px-5 py-3 flex items-center justify-between">
            <a className="flex items-center gap-2 pl-2" href="/">
              <img
                src="/assets/expglo-CKjIqF-x.jpeg"
                alt="EXPGLO Logo"
                className="h-14 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
              <a className="hover:text-brand-green transition" href="/">
                Home
              </a>
              <a className="hover:text-brand-green transition" href="/about">
                About
              </a>

              {/* Dropdown menu */}
              <div className="relative group">
                <a
                  className="flex items-center gap-1 text-brand-green font-bold transition py-1"
                  href="/businesses"
                >
                  <span>Our Businesses</span>
                  <svg
                    className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-green transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                    ></path>
                  </svg>
                </a>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <a
                      className="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition"
                      href="https://expglofund.com/"
                    >
                      <span className="block font-bold text-brand-green">
                        EXPGLO Fund
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Founder &amp; Investor Syndicate
                      </span>
                    </a>
                    <a
                      className="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition"
                      href="/businesses#school"
                    >
                      <span className="block font-bold text-blue-600">
                        EXPGLO SCHOOL
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Mastery &amp; Mentorship
                      </span>
                    </a>
                    <a
                      className="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition"
                      href="/businesses#sutrasync"
                    >
                      <span className="block font-bold text-amber-600">
                        SutraSync
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Technology &amp; Innovation
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <a className="hover:text-brand-green transition" href="/events">
                Events
              </a>
              <a className="hover:text-brand-green transition" href="/news">
                News
              </a>
              <a className="hover:text-brand-green transition" href="/careers">
                Careers
              </a>
              <a className="hover:text-brand-green transition" href="/contact">
                Contact
              </a>
            </div>

            {/* Right Pill CTA Button (EXPGLO FUND ->) */}
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-white bg-brand-green hover:bg-brand-darkgreen transition shadow-md"
                href="https://expglofund.com/"
              >
                <span>EXPGLO FUND</span>
                <svg
                  className="w-4 h-4 text-brand-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                id="mobile-menu-toggle"
                aria-label="Toggle navigation"
                className="lg:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          id="mobile-menu-drawer"
          className="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden"
        >
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-green text-brand-gold font-black flex items-center justify-center">
                    E
                  </div>
                  <span className="font-extrabold text-slate-900">EXPGLO</span>
                </div>
                <button
                  id="mobile-menu-close"
                  className="p-2 text-slate-500 hover:text-slate-800"
                  aria-label="Close navigation"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="mt-6 flex flex-col space-y-4 text-sm font-bold text-slate-800">
                <Link className="text-brand-green font-bold" to="/">
                  Home
                </Link>
                <Link className="hover:text-brand-green" to="/about">
                  About Us
                </Link>
                <Link className="hover:text-brand-green" to="/businesses">
                  Our Businesses
                </Link>
                <Link className="pl-4 text-xs font-semibold text-brand-gold" to="/fund">EXPGLO FUND</Link>
                <Link className="pl-4 text-xs font-semibold text-blue-600" to="/businesses#school">EXPGLO SCHOOL</Link>
                <Link className="pl-4 text-xs font-semibold text-indigo-600" to="/businesses#sutrasync">SUTRASYNC</Link>
                                <Link className="hover:text-brand-green" to="/events">Events</Link>
                <Link className="hover:text-brand-green" to="/news">News &amp; Updates</Link>
                                <Link className="hover:text-brand-green" to="/careers">Careers</Link>
                <Link className="hover:text-brand-green" to="/contact">Contact Us</Link>
              </nav>
            </div>
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                className="px-8 py-4 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition shadow-sm flex items-center gap-2"
                href="contact.html?type=partner"
              >
                <span>Partner With Us</span>
                <svg
                  className="w-4 h-4 text-brand-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
              <div className="hidden sm:flex items-center gap-3 pl-2">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-brand-green shadow-sm">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
                    DIRECT ENQUIRY
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    +91 9258482377
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Additional page content can be added below */}
    </>
  );
}
