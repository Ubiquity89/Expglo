import React from "react";
import { Link } from "react-router-dom";

export default function TopUtilityBar() {
  return (
    <aside
      className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800 hidden md:block"
      data-purpose="top-utility-bar"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-brand-gold shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                clipRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                fillRule="evenodd"
              />
            </svg>
            Nagla Padma Gwalior Road, Agra 282001, UP
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-brand-gold shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            info@expglobusiness.com
          </span>
          <span className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-brand-gold shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
            </svg>
            +91 9258482377
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-white transition"
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
              <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.7h3.6V21H3.4V9.7Zm5.8 0h3.5v1.55h.05c.49-.92 1.69-1.9 3.48-1.9 3.72 0 4.4 2.45 4.4 5.64V21h-3.6v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.2V9.7Z" />
            </svg>
          </a>
          <a
            className="hover:text-white transition"
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
              <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.5 22.5 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.5v3h2.8v8h3.4Z" />
            </svg>
          </a>
          <a
            className="hover:text-white transition"
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
          <span className="text-slate-600"></span>

        </div>
      </div>
    </aside>
  );
}
