const fs = require('fs');
const path = require('path');

function getHeader(activePage = 'home') {
  return 
  <!-- TOP NOTIFICATION / UTILITY BAR -->
  <aside class="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800 hidden md:block" data-purpose="top-utility-bar">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <div class="flex items-center space-x-6">
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path clip-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" fill-rule="evenodd"></path></svg>
          Nagla Padma Gwalior Road, Agra 282001, UP
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          info@expglobusiness.com
        </span>
        <span class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"></path></svg>
          +91 9258482377
        </span>
      </div>
      <div class="flex items-center space-x-4"><span class="text-slate-600">-</span>
        <a class="hover:text-white transition" href="https://www.linkedin.com/company/yms-group-of-it-solution/posts/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn">
  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.7h3.6V21H3.4V9.7Zm5.8 0h3.5v1.55h.05c.49-.92 1.69-1.9 3.48-1.9 3.72 0 4.4 2.45 4.4 5.64V21h-3.6v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.2V9.7Z" /></svg>
</a>
<a class="hover:text-white transition" href="https://www.facebook.com/profile.php?id=61586244133393" target="_blank" rel="noreferrer" aria-label="Facebook">
  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.5 22.5 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.5v3h2.8v8h3.4Z" /></svg>
</a>
<a class="hover:text-white transition" href="https://www.instagram.com/expglobusiness/" target="_blank" rel="noreferrer" aria-label="Instagram">
  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
</a>
      </div>
    </div>
  </aside>

  <!-- FLOATING HEADER / NAVBAR (STICKY) -->
  <header class="sticky top-0 z-50 pt-3 pb-3 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
    <div class="max-w-7xl mx-auto">
      <nav class="bg-white/95 rounded-full shadow-lg shadow-slate-200/50 border border-slate-100 px-5 py-3 flex items-center justify-between">
        <!-- Logo -->
        <a class="flex items-center gap-2 pl-2" href="index.html">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-darkgreen via-brand-green to-emerald-500 flex items-center justify-center text-brand-gold font-black text-xl shadow-md">
            E
          </div>
          <div class="flex flex-col">
            <span class="font-extrabold text-slate-900 tracking-tight text-base leading-none">EXPGLO</span>
            <span class="text-[9px] font-bold tracking-widest text-brand-green uppercase">BUSINESS</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
          <a class=" transition" href="index.html">Home</a>
          <a class=" transition" href="about.html">About</a>
          
          <!-- Dropdown menu -->
          <div class="relative group">
            <a href="businesses.html" class="flex items-center gap-1  transition py-1">
              <span>Our Businesses</span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-green transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>
            </a>
            <div class="absolute left-0 top-full pt-2 hidden group-hover:block w-60 z-50">
              <div class="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1">
                <a class="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition" href="fund.html">
                  <span class="block font-bold">EXPGLO Fund</span>
                  <span class="text-[10px] text-slate-400">Founder & Investor Syndicate</span>
                </a>
                <a class="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition" href="businesses.html#school">
                  <span class="block font-bold">EXPGLO Startup School</span>
                  <span class="text-[10px] text-slate-400">Mastery & Mentorship</span>
                </a>
                <a class="block px-4 py-2.5 text-xs font-semibold rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-brand-green transition" href="businesses.html#sutrasync">
                  <span class="block font-bold">SutraSync</span>
                  <span class="text-[10px] text-slate-400">Technology & Innovation</span>
                </a>
              </div>
            </div>
          </div>

          <a class=" transition" href="events.html">Events</a>
          <a class=" transition" href="news.html">News</a>
          <a class=" transition" href="careers.html">Careers</a>
          <a class=" transition" href="contact.html">Contact</a>
        </div>

        <!-- Right Pill CTA Button (EXPGLO FUND ->) -->
          <a class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-white bg-brand-green hover:bg-brand-darkgreen transition shadow-md shadow-emerald-700/20" href="https://expglofund.com/">
            <span>EXPGLO FUND</span>
            <svg class="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button id="mobile-menu-toggle" aria-label="Toggle navigation" class="lg:hidden p-2 rounded-full text-slate-600 hover:bg-slate-100">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
          </button>
        </div>
      </nav>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-menu-drawer" class="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden">
      <div class="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
        <div>
          <div class="flex items-center justify-between pb-6 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-brand-green text-brand-gold font-black flex items-center justify-center">E</div>
              <span class="font-extrabold text-slate-900">EXPGLO</span>
            </div>
            <button id="mobile-menu-close" class="p-2 text-slate-500 hover:text-slate-800">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <nav class="mt-6 flex flex-col space-y-4 text-sm font-bold text-slate-800">
            <a class="" href="index.html">Home</a>
            <a class="" href="about.html">About Us</a>
            <a class="" href="businesses.html">Our Businesses</a>
            <a class="pl-4 text-xs font-semibold text-brand-gold" href="fund.html"> EXPGLO FUND</a>
            <a class="pl-4 text-xs font-semibold text-blue-600" href="businesses.html#school"> EXPGLO STARTUP SCHOOL</a>
            <a class="pl-4 text-xs font-semibold text-indigo-600" href="businesses.html#sutrasync"> SUTRASYNC</a>
            <a class="" href="events.html">Events</a>
            <a class="" href="news.html">News & Updates</a>
            <a class="" href="careers.html">Careers</a>
            <a class="" href="contact.html">Contact Us</a></nav>
        </div>
        <div class="pt-6 border-t border-slate-100 space-y-3">
            <a class="block w-full text-center py-3 rounded-full text-xs font-bold text-white bg-brand-green" href="fund.html">EXPGLO FUND -></a>
            <p class="text-[11px] text-center text-slate-400">Copyright 2026 EXPGLO BUSINESS PRIVATE LIMITED</p>
        </div>
      </div>
    </div>
  </header>
  ;
}

function getFooter() {
  return 
  <!-- FOOTER (PRD Section16 - Dark green background, 5 Columns) -->
  <footer class="bg-brand-darkgreen text-slate-300 pt-16 pb-12 border-t border-emerald-950" data-purpose="site-footer">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-emerald-900/70">
        <!-- Col 1: Company -->
        <div class="lg:col-span-3 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-white flex items-center justify-center overflow-hidden"><img src="assets/images/expglo.jpeg" alt="EXPGLO Business logo" class="h-full w-full object-contain" /></div>
            <span class="font-extrabold text-white text-lg tracking-tight">EXPGLO BUSINESS</span>
          </div>
          <p class="text-xs text-emerald-100/70 leading-relaxed">
            EXPGLO BUSINESS PRIVATE LIMITED is the official parent brand platform building a high-performance entrepreneurial ecosystem.
          </p>
          <ul class="space-y-2 text-xs text-emerald-100/90 font-medium pt-1">
            <li><a class="hover:text-brand-gold transition" href="about.html">About Us</a></li>
            <li><a class="hover:text-brand-gold transition" href="about.html#vision">Vision & Mission</a></li>
            <li><a class="hover:text-brand-gold transition" href="about.html#leadership">Leadership Team</a></li>
            <li><a class="hover:text-brand-gold transition" href="careers.html">Careers <span class="bg-brand-gold text-slate-950 text-[9px] px-1.5 py-0.5 rounded-full font-bold ml-1">Hiring</span></a></li>
            <li><a class="hover:text-brand-gold transition" href="contact.html">Contact Us</a></li>
          </ul>
        </div>

        <!-- Col 2: Our Businesses -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">Our Businesses</h4>
          <ul class="space-y-2 text-xs text-emerald-100/90 font-medium">
            <li><a class="hover:text-brand-gold transition" href="businesses.html#fund">EXPGLO FUND</a></li>
            <li><a class="hover:text-brand-gold transition" href="businesses.html#school">EXPGLO STARTUP SCHOOL</a></li>
            <li><a class="hover:text-brand-gold transition" href="businesses.html#sutrasync">SUTRASYNC</a></li>
          </ul>
        </div>

        <!-- Col 3: Resources -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">Resources</h4>
          <ul class="space-y-2 text-xs text-emerald-100/90 font-medium">
            <li><a class="hover:text-brand-gold transition" href="events.html">Events</a></li>
            <li><a class="hover:text-brand-gold transition" href="news.html">News & Updates</a></li>
            <li><a class="hover:text-brand-gold transition" href="news.html">Blogs & Research</a></li>
            <li><a class="hover:text-brand-gold transition" href="businesses.html#partners">Partners</a></li>
            <li><a class="hover:text-brand-gold transition" href="about.html#faqs">FAQs</a></li>
          </ul>
        </div>

        <!-- Col 4: Legal -->
        <div class="lg:col-span-2 space-y-4">
          <h4 class="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">Legal</h4>
          <ul class="space-y-2 text-xs text-emerald-100/90 font-medium">
            <li><a class="hover:text-brand-gold transition" href="privacy.html">Privacy Policy</a></li>
            <li><a class="hover:text-brand-gold transition" href="terms.html">Terms & Conditions</a></li>
            <li><a class="hover:text-brand-gold transition" href="refund.html">Refund Policy</a></li>
            <li><a class="hover:text-brand-gold transition" href="disclaimer.html">Disclaimer</a></li>
          </ul>
        </div>

        <!-- Col 5: Contact -->
        <div class="lg:col-span-3 space-y-3">
          <h4 class="text-xs font-extrabold text-white uppercase tracking-wider text-brand-gold">Contact Details</h4>
          <p class="text-xs text-emerald-100/80 leading-relaxed">
            <strong class="text-white">Registered Office:</strong><br/>
            Nagla Padma Gwalior Road, Agra 282001, UP
          </p>
          <p class="text-xs text-emerald-100/80">
            <strong class="text-white">Email:</strong> info@expglobusiness.com
          </p>
          <p class="text-xs text-emerald-100/80">
            <strong class="text-white">Phone:</strong> +91 9258482377
          </p>
          <p class="text-xs text-emerald-100/80">
            <strong class="text-white">Website:</strong> expglobusiness.com
          </p>
          <div class="pt-2 flex items-center space-x-3 text-brand-gold">
            <a class="hover:text-white transition" href="https://www.linkedin.com/company/yms-group-of-it-solution/posts/?viewAsMember=true" target="_blank" rel="noreferrer" aria-label="LinkedIn">
  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.7h3.6V21H3.4V9.7Zm5.8 0h3.5v1.55h.05c.49-.92 1.69-1.9 3.48-1.9 3.72 0 4.4 2.45 4.4 5.64V21h-3.6v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.2V9.7Z" /></svg>
</a>
<a class="hover:text-white transition" href="https://www.facebook.com/profile.php?id=61586244133393" target="_blank" rel="noreferrer" aria-label="Facebook">
  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46h1.7V4a22.5 22.5 0 0 0-2.47-.13c-2.45 0-4.13 1.5-4.13 4.25V10H7.5v3h2.8v8h3.4Z" /></svg>
</a>
<a class="hover:text-white transition" href="https://www.instagram.com/expglobusiness/" target="_blank" rel="noreferrer" aria-label="Instagram">
  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
</a>
            <span>-</span></div>
        </div>
      </div>

      <!-- Copyright Notice -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
        <div>
          Copyright 2026 EXPGLO BUSINESS PRIVATE LIMITED. All Rights Reserved.
        </div>
        <div class="flex items-center space-x-4">
          <span>CIN Registered Entity</span>
          <span>-</span>
          <span>Ministry of Corporate Affairs</span>
        </div>
      </div>
    </div>
  </footer>
  ;
}

function getHead(title, description) {
  return 
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title> | EXPGLO BUSINESS PRIVATE LIMITED</title>
  <meta name="description" content=""/>
  <meta name="keywords" content="EXPGLO Business, EXPGLO Business Private Limited, Startup ecosystem, Startup platform, Entrepreneurship, Startup education, Founder investor platform, Startup funding opportunities"/>
  
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
  
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            brand: {
              green: '#1E5E3A',
              darkgreen: '#144329',
              gold: '#D4A017',
              accent: '#2563EB',
              softblue: '#EBF4FE',
              softmint: '#F0FDF4',
            }
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="assets/css/custom.css"/>
  ;
}

module.exports = { getHeader, getFooter, getHead };


