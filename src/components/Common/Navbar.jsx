import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  const isActive = (path) => {
    if (path === "/" && (currentPath === "" || currentPath === "/")) return true;
    return currentPath === path;
  };

  const getLinkClass = (path) => {
    return isActive(path)
      ? "text-brand-green font-bold transition"
      : "hover:text-brand-green transition";
  };

  return (
    <>
      <header className="sticky top-0 z-50 pt-3 pb-3 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <nav className="bg-white/95 rounded-full shadow-lg shadow-slate-200/50 border border-slate-100 px-5 py-3 flex items-center justify-between">
            <Link className="flex items-center gap-2 pl-2" to="/">
              <img
                src="/assets/images/expglo.jpeg"
                alt="EXPGLO Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
              <Link className={getLinkClass("/")} to="/">
                Home
              </Link>
              <Link className={getLinkClass("/about")} to="/about">
                About
              </Link>

              {/* Dropdown menu */}
              <div className="relative group">
                <Link
                  to="/businesses"
                  className={`flex items-center gap-1 py-1 ${
                    currentPath.startsWith("/businesses") || currentPath === "/fund"
                      ? "text-brand-green font-bold"
                      : "hover:text-brand-green"
                  } transition`}
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
                    />
                  </svg>
                </Link>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                    <a
                      className="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition"
                      href="https://www.expglofund.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="block font-bold text-brand-green">
                        EXPGLO Fund
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Founder & Investor Syndicate
                      </span>
                    </a>
                    <Link
                      className="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition"
                      to="/businesses#school"
                    >
                      <span className="block font-bold text-blue-600">
                        EXPGLO Startup School
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Mastery & Mentorship
                      </span>
                    </Link>
                    <Link
                      className="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition"
                      to="/businesses#sutrasync"
                    >
                      <span className="block font-bold text-indigo-600">
                        SutraSync
                      </span>
                      <span className="text-[10px] text-slate-400">
                        Technology & Innovation
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link className={getLinkClass("/events")} to="/events">
                Events
              </Link>
              <Link className={getLinkClass("/news")} to="/news">
                News
              </Link>
              <Link className={getLinkClass("/careers")} to="/careers">
                Careers
              </Link>
              <Link className={getLinkClass("/contact")} to="/contact">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {/* Right Pill CTA Button (EXPGLO FUND ->) */}
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-white bg-brand-green hover:bg-brand-darkgreen transition shadow-md shadow-emerald-700/20"
                href="https://expglofund.com/"
                target="_blank"
                rel="noreferrer"
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
                  />
                </svg>
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                id="mobile-menu-toggle"
                aria-label="Toggle navigation"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100"
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={currentPath}
      />
    </>
  );
}
