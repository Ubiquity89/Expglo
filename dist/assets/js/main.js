// Main EXPGLO Global Utilities and UI Handlers
document.addEventListener("DOMContentLoaded", () => {
  normalizeMobileMenu();
  initMobileMenu();
  initStatsCounter();
  initModals();
  initFlashMessages();
  initRevealAnimations();
});

function initRevealAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("no-motion");
    return;
  }

  const animatedTargets = document.querySelectorAll(
    "section, article, header, footer, nav, li, p, h1, h2, h3, h4, h5, h6, a, button, img, .card, [class*='card'], [class*='feature'], [class*='stat'], [class*='business'], [class*='news'], [class*='event'], [class*='team'], [class*='cta'], .glass-pill, .glass-card",
  );

  animatedTargets.forEach((element, index) => {
    if (
      element.closest("[data-no-animate]") ||
      element.closest(".no-animate")
    ) {
      return;
    }
    if (element.tagName === "SCRIPT" || element.tagName === "STYLE") {
      return;
    }
    if (!element.hasAttribute("data-animate")) {
      element.setAttribute("data-animate", "true");
    }
    element.style.transitionDelay = `${Math.min(index * 0.04, 0.35)}s`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-ready", "is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px",
    },
  );

  document.querySelectorAll("[data-animate]").forEach((element) => {
    observer.observe(element);
  });

  window.addEventListener(
    "scroll",
    () => {
      const header = document.querySelector("header");
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true },
  );

  const header = document.querySelector("header");
  if (header) {
    header.classList.add("is-scrolled");
    setTimeout(() => header.classList.remove("is-scrolled"), 150);
  }
}

function normalizeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu-drawer");
  if (!mobileMenu) return;

  mobileMenu.innerHTML = `
    <div class="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
      <div>
        <div class="flex items-center justify-between pb-6 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg bg-brand-green text-brand-gold font-black flex items-center justify-center">E</div>
            <span class="font-extrabold text-slate-900">EXPGLO</span>
          </div>
          <button id="mobile-menu-close" class="p-2 text-slate-500 hover:text-slate-800" aria-label="Close navigation">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav class="mt-6 flex flex-col space-y-4 text-sm font-bold text-slate-800">
          <a class="text-brand-green font-bold" href="index.html">Home</a>
          <a class="hover:text-brand-green" href="about.html">About Us</a>
          <a class="hover:text-brand-green" href="businesses.html">Our Businesses</a>
          <a class="pl-4 text-xs font-semibold text-brand-gold" href="fund.html">EXPGLO FUND</a>
          <a class="pl-4 text-xs font-semibold text-blue-600" href="businesses.html#school">EXPGLO STARTUP SCHOOL</a>
          <a class="pl-4 text-xs font-semibold text-indigo-600" href="businesses.html#sutrasync">SUTRASYNC</a>
          <a class="hover:text-brand-green" href="events.html">Events</a>
          <a class="hover:text-brand-green" href="news.html">News &amp; Updates</a>
          <a class="hover:text-brand-green" href="careers.html">Careers</a>
          <a class="hover:text-brand-green" href="contact.html">Contact Us</a></nav>
      </div>
      <div class="pt-6 border-t border-slate-100 space-y-3">
        <a class="px-8 py-4 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition shadow-sm flex items-center gap-2" href="contact.html?type=partner">
          <span>Partner With Us</span>
          <svg class="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
        <div class="hidden sm:flex items-center gap-3 pl-2">
          <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-brand-green shadow-sm">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z"></path>
            </svg>
          </div>
          <div>
            <span class="block text-[10px] uppercase tracking-wider font-extrabold text-slate-400">DIRECT ENQUIRY</span>
            <span class="text-sm font-bold text-slate-900">+91 9258482377</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Mobile Hamburger Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu-drawer");
  const closeBtn = document.getElementById("mobile-menu-close");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  }
}

// Animate numbers if on screen
function initStatsCounter() {
  const statElements = document.querySelectorAll("[data-counter]");
  if (!statElements.length) return;

  statElements.forEach((el) => {
    const target = parseInt(el.getAttribute("data-counter"), 10);
    if (isNaN(target)) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.innerText = target + "+";
        clearInterval(timer);
      } else {
        el.innerText = current + "+";
      }
    }, 30);
  });
}

// Global Modal Handlers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

function initModals() {
  document.querySelectorAll("[data-close-modal]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  // Close when clicking backdrop
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add("hidden");
        backdrop.classList.remove("flex");
        document.body.style.overflow = "auto";
      }
    });
  });
}

// Toast / Flash Notification
function showToast(title, message, type = "success") {
  let toastContainer = document.getElementById("expglo-toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "expglo-toast-container";
    toastContainer.className =
      "fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm pointer-events-none";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className =
    "pointer-events-auto p-4 rounded-2xl shadow-2xl border transition-all duration-300 transform translate-y-4 opacity-0 flex items-start gap-3.5";

  const iconSvg =
    type === "success"
      ? `<div class="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
       </div>`
      : `<div class="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
       </div>`;

  toast.innerHTML = `${iconSvg}
    <div class="flex-1">
      <h4 class="text-xs font-bold uppercase tracking-wider text-brand-gold"></h4>
      <p class="text-xs text-slate-200 mt-0.5 leading-relaxed"></p>
    </div>`;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

function initFlashMessages() {
  // Available globally
  window.showToast = showToast;
  window.openModal = openModal;
  window.closeModal = closeModal;
}
