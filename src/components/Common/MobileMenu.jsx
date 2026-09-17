import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose, currentPath }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isActive = (path) => {
    if (path === "/" && (currentPath === "" || currentPath === "/")) return true;
    return currentPath === path;
  };

  const getLinkClass = (path) => {
    return isActive(path)
      ? "text-brand-green font-bold"
      : "hover:text-brand-green";
  };

  return (
    <div
      id="mobile-menu-drawer"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xs h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
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
              onClick={onClose}
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
                />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-4 text-sm font-bold text-slate-800">
            <Link className={getLinkClass("/")} to="/" onClick={onClose}>
              Home
            </Link>
            <Link className={getLinkClass("/about")} to="/about" onClick={onClose}>
              About Us
            </Link>
            <Link
              className={getLinkClass("/businesses")}
              to="/businesses"
              onClick={onClose}
            >
              Our Businesses
            </Link>
            <Link
              className="pl-4 text-xs font-semibold text-brand-gold"
              to="/fund"
              onClick={onClose}
            >
               EXPGLO FUND
            </Link>
            <Link
              className="pl-4 text-xs font-semibold text-blue-600"
              to="/businesses#school"
              onClick={onClose}
            >
               EXPGLO STARTUP SCHOOL
            </Link>
            <Link
              className="pl-4 text-xs font-semibold text-indigo-600"
              to="/businesses#sutrasync"
              onClick={onClose}
            >
               SUTRASYNC
            </Link>
            <Link className={getLinkClass("/events")} to="/events" onClick={onClose}>
              Events
            </Link>
            <Link className={getLinkClass("/news")} to="/news" onClick={onClose}>
              News & Updates
            </Link>
            <Link
              className={getLinkClass("/careers")}
              to="/careers"
              onClick={onClose}
            >
              Careers
            </Link>
            <Link
              className={getLinkClass("/contact")}
              to="/contact"
              onClick={onClose}
            >
              Contact Us
            </Link>
            <Link
              className="text-xs font-semibold text-brand-gold pt-2"
              to="/admin"
              onClick={onClose}
            >
              Admin Dashboard
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-3">
          <Link
            className="w-full py-3 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition shadow-sm flex items-center justify-center gap-2"
            to="/contact?type=partner"
            onClick={onClose}
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
              />
            </svg>
          </Link>

          <a
            className="block w-full text-center py-3 rounded-full text-xs font-bold text-white bg-brand-green hover:bg-brand-darkgreen transition shadow-sm"
            href="https://expglofund.com/"
            target="_blank"
            rel="noreferrer"
          >
            EXPGLO FUND 
          </a>

          <div className="flex items-center gap-3 pl-2 pt-2">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-brand-green shrink-0 shadow-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
            </div>
            <div>
              <span className="block text-[9px] uppercase tracking-wider font-extrabold text-slate-400">
                DIRECT ENQUIRY
              </span>
              <span className="text-xs font-bold text-slate-900">
                +91 9258482377
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
