// EXPGLO Corporate Ecosystem Store - ES Module Version
const isBrowser = typeof window !== 'undefined';
const storage = {
  getItem: (key) => isBrowser ? localStorage.getItem(key) : null,
  setItem: (key, val) => { if (isBrowser) localStorage.setItem(key, val); }
};
// EXPGLO Business Corporate Ecosystem - Shared Data & State Store
export const EXPGLO_STORE = {
  getStats: function () {
    return {
      startups: "500+",
      investors: "200+",
      events: "50+",
      partners: "10+",
    };
  },

  getBusinessUnits: function () {
    return [
      {
        id: "fund",
        name: "EXPGLO FUND",
        category: "Founder x Investor Ecosystem",
        tagline: "Intelligent Capital Allocation & Investor Syndicate",
        description:
          "A specialized platform designed to help founders pitch their startups, connect directly with angel networks and venture capital firms, and close structured seed to growth funding rounds.",
        color: "emerald",
        badge: "Institutional Syndicate",
        services: [
          "Curated Startup Pitching Rounds",
          "Direct Investor Syndicate Access",
          "Institutional Seed to Series A Capital",
          "Founder-Investor 1-on-1 Deal Rooms",
          "Term Sheet & Valuation Advisory",
        ],
        ctaText: "Explore EXPGLO FUND ",
        link: "/fund",
        externalUrl: "https://fund.expglobusiness.com",
      },
      {
        id: "school",
        name: "EXPGLO STARTUP SCHOOL",
        category: "From Ideas to Scalable Ventures",
        tagline: "Learn. Build. Launch. Scale.",
        description:
          "A comprehensive startup learning, validation, and venture development platform designed for aspiring entrepreneurs, university researchers, student founders, and early-stage startup teams.",
        color: "blue",
        badge: "Education & Academy",
        services: [
          "Zero-to-One Startup Fundamentals",
          "Product Validation & MVP Sprints",
          "Go-to-Market & Digital Sales Mastery",
          "Investor Pitch Deck Crafting",
          "Direct Mentorship from Unicorn Operators",
        ],
        ctaText: "Explore EXPGLO Startup School ",
        link: "/businesses#school",
      },
      {
        id: "labs",
        name: "Venture Catalyst Labs",
        category: "Engineering & Architecture",
        tagline: "Rapid MVP & AI Infrastructure Sprint",
        description:
          "Technical venture builder equipping portfolio startups with high-velocity product engineering, cloud infrastructure architecture, and AI integrations to reach rapid product-market fit.",
        color: "amber",
        badge: "Tech & Architecture",
        services: [
          "Rapid MVP Prototyping in 30 Days",
          "Scalable Cloud & DevSecOps Architecture",
          "Generative AI & Agentic Integration",
          "Technical Due Diligence Support",
          "CTO-as-a-Service Advisory",
        ],
        ctaText: "Explore Catalyst Labs ",
        link: "/businesses#sutrasync",
      },
      {
        id: "sutrasync",
        name: "SutraSync",
        category: "Technology & Innovation",
        tagline: "Transforming Ideas Into Digital Products",
        description:
          "A technology venture building digital products through modern engineering, creative design, AI automation, and intelligent growth solutions.",
        color: "indigo",
        badge: "Technology & Innovation",
        services: [
          "Custom Web & App Solutions",
          "AI & Automation",
          "UI/UX Design",
          "Digital Growth Solutions",
        ],
        ctaText: "Explore SutraSync ",
        link: "/businesses#sutrasync",
      },
    ];
  },

  getPrograms: function () {
    return [
      {
        id: "prog-1",
        title: "Startup Fundamentals & Ideation",
        duration: "4 Weeks",
        mode: "Hybrid / Live Virtual",
        level: "Beginner / Aspiring Founders",
        description:
          "Deconstruct your vision, identify real customer pain points, perform market validation, and formulate viable unit economics.",
        modules: [
          "Problem-Solution Fit",
          "Customer Discovery Interviews",
          "Lean Canvas Modeling",
          "Early Validation Metrics",
        ],
      },
      {
        id: "prog-2",
        title: "Business Development & GTM Strategy",
        duration: "6 Weeks",
        mode: "Cohort-based Online",
        level: "Early-Stage Teams",
        description:
          "Build an unstoppable Go-to-Market playbook, establish scalable customer acquisition channels, and structure B2B/B2C sales funnels.",
        modules: [
          "B2B Enterprise Pipeline",
          "Inbound Funnel Architecture",
          "Pricing Strategies & Packaging",
          "Strategic Channel Partnerships",
        ],
      },
      {
        id: "prog-3",
        title: "Product Architecture & MVP Engineering",
        duration: "8 Weeks",
        mode: "Intensive Lab + Mentorship",
        level: "Technical & Non-Tech Founders",
        description:
          "Collaborate with senior technical architects to scope, design, and ship your minimal viable product using modern full-stack frameworks and AI tooling.",
        modules: [
          "System Architecture",
          "No-code vs Custom Code Evaluation",
          "AI Tooling Integration",
          "Security & Cloud Deployment",
        ],
      },
      {
        id: "prog-4",
        title: "Pitching Mastery & Investor Readiness",
        duration: "3 Weeks",
        mode: "In-Person / Executive Cohort",
        level: "Fundraising Founders",
        description:
          "Master the art of storytelling, financial modeling, valuation justification, and handling rigorous VC interrogation during pitch rounds.",
        modules: [
          "10-Slide Pitch Deck Framework",
          "Financial Projection Modeling",
          "Cap Table Management",
          "Live Mock Term Sheet Defense",
        ],
      },
      {
        id: "prog-5",
        title: "Digital Marketing & Viral Growth",
        duration: "4 Weeks",
        mode: "Online Interactive",
        level: "Founders & Marketing Leads",
        description:
          "Learn organic growth loops, programmatic SEO, high-conversion ad funnels, and retention-driven lifecycle communication.",
        modules: [
          "Growth Loop Architecture",
          "Performance Marketing Hacks",
          "Brand Narrative & PR",
          "Retention & Churn Reduction",
        ],
      },
      {
        id: "prog-6",
        title: "Fundraising & Institutional Capital Access",
        duration: "5 Weeks",
        mode: "Exclusive Syndicate Fast-Track",
        level: "Growth Stage Startups",
        description:
          "Direct connection with EXPGLO Fund mentors, term sheet negotiation strategies, legal due diligence compliance, and investor relationship management.",
        modules: [
          "VC Fund Economics",
          "Term Sheet Nuances (SAFE vs SHA)",
          "Data Room Preparation",
          "Pitching to Active Angel Syndicates",
        ],
      },
    ];
  },

  getEvents: function () {
    const defaultEvents = [
      {
        id: "ev-1",
        title: "Hyderabad Startup Pitch Summit 2025",
        category: "Startup",
        type: "Workshop & Live Pitch",
        status: "upcoming",
        date: "May 24, 2025",
        day: "24",
        month: "May",
        time: "09:30 AM - 04:30 PM IST",
        venue: "T-Hub Phase 2, Knowledge City, Hyderabad",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        description:
          "A premier gathering of top venture capitalists, angel networks, and 25 hand-picked early-stage startups presenting disruptive enterprise software and deeptech solutions.",
        speakers: [
          "Shiv Kumar (Founder & CEO, EXPGLO)",
          "Rajesh Varma (Managing Partner, Deccan Angels)",
          "Dr. Ananya Reddy (Director, Venture Acceleration)",
        ],
      },
      {
        id: "ev-2",
        title: "Campus to Capital: College Founder Series",
        category: "Education",
        type: "Webinar",
        status: "upcoming",
        date: "June 05, 2025",
        day: "05",
        month: "Jun",
        time: "05:00 PM - 07:00 PM IST",
        venue: "Interactive Zoom & YouTube Live",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
        description:
          "Transforming university student research projects and academic thesis innovations into commercially viable, funded corporate spinouts.",
        speakers: [
          "Suresh Pillai (Head of Academic Alliances, EXPGLO)",
          "Neha Sharma (Founder, CampusAI Labs)",
        ],
      },
      {
        id: "ev-3",
        title: "AI Venture Prototype Hackathon 2025",
        category: "Hackathon",
        type: "48-Hour Nonstop Hack",
        status: "upcoming",
        date: "June 18-20, 2025",
        day: "18",
        month: "Jun",
        time: "48 Hours Non-stop (Starts 10:00 AM)",
        venue: "EXPGLO Innovation Campus, Bangalore",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        description:
          "A 48-hour collaborative engineering sprint where builders leverage generative agents to create real businesses with a ,000 seed grant prize pool.",
        speakers: [
          "Karthik Mohan (VP Engineering, Catalyst Labs)",
          "Pooja Hegde (Principal Architect, Google Cloud)",
        ],
      },
      {
        id: "ev-4",
        title: "Institutional Angel Investor Masterclass",
        category: "Investor",
        type: "Closed Roundtable",
        status: "upcoming",
        date: "July 08, 2025",
        day: "08",
        month: "Jul",
        time: "02:00 PM - 06:00 PM IST",
        venue: "ITC Kohenur, Hitec City, Hyderabad",
        image:
          "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
        description:
          "Executive session for HNIs and Family Office trustees analyzing early-stage cap tables, governance metrics, and portfolio diversification.",
        speakers: [
          "Shiv Kumar (CEO, EXPGLO)",
          "Vikramaditya Rao (Senior Partner, Prime Capital)",
        ],
      },
      {
        id: "ev-5",
        title: "SaaS Go-To-Market Bootcamp Spring",
        category: "Workshop",
        type: "Hands-on Cohort",
        status: "ongoing",
        date: "Current Session",
        day: "Now",
        month: "Active",
        time: "Weekly Cohort Sessions",
        venue: "EXPGLO Virtual Studio",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        description:
          "120 founders actively executing product pricing overhauls, programmatic SEO distribution, and enterprise outbound sequences.",
        speakers: [
          "Arun Krishnan (GTM Lead)",
          "Divya Nambiar (Product Growth Specialist)",
        ],
      },
    ];

    const saved = storage.getItem("expglo_events");
    if (!saved) {
      storage.setItem("expglo_events", JSON.stringify(defaultEvents));
      return defaultEvents;
    }
    return JSON.parse(saved);
  },

  getNews: function () {
    const defaultNews = [
      {
        id: "news-1",
        title:
          "EXPGLO expands its entrepreneurial ecosystem with cross-border syndication",
        category: "Funding",
        date: "May 12, 2025",
        author: "EXPGLO Admin",
        readTime: "4 min read",
        featured: true,
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        excerpt:
          "Bridging Indian seed innovators with regional capital allocators across Singapore, Dubai, and Silicon Valley to catalyze global venture scaling.",
        content:
          "EXPGLO Business Private Limited has officially announced the launch of its dedicated cross-border investor syndicate. The multi-region platform connects early-stage enterprise founders in Hyderabad, Bengaluru, and NCR with active institutional venture partners in Singapore and the United Arab Emirates. According to Shiv Kumar, Founder & CEO of EXPGLO Business, 'The greatest challenge confronting emerging founders today is not simply the generation of ideas, but achieving frictionless cross-border capital flow and operational scalability. EXPGLO is engineered specifically to eliminate these hurdles.'",
      },
      {
        id: "news-2",
        title:
          "New 10-week mentorship curriculum launched for technical founders",
        category: "Startup",
        date: "April 28, 2025",
        author: "Team EXPGLO",
        readTime: "3 min read",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        excerpt:
          "EXPGLO Startup School unveils a structured 10-week curriculum focused squarely on product traction, customer discovery, and live pitch readiness.",
        content:
          "Designed by seasoned venture builders and unicorn operators, the newly unveiled 10-week cohort is targeted towards technical developers and engineers who are stepping into the role of venture CEOs. Students and early founders will receive weekly masterclasses on customer development, unit economics modeling, cap-table governance, and rapid prototype validation.",
      },
      {
        id: "news-3",
        title: "EXPGLO Startup School partners with premier technical universities",
        category: "Education",
        date: "April 14, 2025",
        author: "Academic Relations",
        readTime: "5 min read",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        excerpt:
          "Empowering university researchers and engineering students to commercialize breakthrough patent work into sustainable corporate ventures.",
        content:
          "Under an ambitious new academic syndicate agreement, EXPGLO Business is partnering with five leading engineering colleges and university incubation cells across Telangana, Karnataka, and Maharashtra. The initiative bridges academic research with market opportunities, providing campus founders with grants, legal entity incorporation support, and direct investor showcase slots.",
      },
      {
        id: "news-4",
        title:
          "Venture Catalyst Labs introduces AI architecture accelerators for portfolio startups",
        category: "Technology",
        date: "March 22, 2025",
        author: "Engineering Desk",
        readTime: "4 min read",
        featured: false,
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        excerpt:
          "Proprietary agentic frameworks and scalable microservices templates allow startups to deploy functional AI applications in record time.",
        content:
          "Venture Catalyst Labs has rolled out an enterprise suite of battle-tested starter blueprints and cloud infrastructure architectures for portfolio companies. By eliminating boilerplate engineering, participating teams have decreased their time-to-market by over 60%.",
      },
    ];

    const saved = storage.getItem("expglo_news");
    if (!saved) {
      storage.setItem("expglo_news", JSON.stringify(defaultNews));
      return defaultNews;
    }
    return JSON.parse(saved);
  },

  getJobs: function () {
    return [
      {
        id: "job-1",
        title: "Venture Director - Early Stage Cohorts",
        department: "EXPGLO Startup School",
        location: "Hyderabad, India (Hybrid)",
        type: "Full Time",
        experience: "5-8 Years",
        description:
          "Lead the selection, curriculum execution, and mentorship orchestration for our quarterly founder cohorts.",
        requirements: [
          "Prior experience at an accelerator, VC fund, or high-growth startup",
          "Deep network within the Indian startup landscape",
          "Strong presentation and cohort facilitation skills",
        ],
      },
      {
        id: "job-2",
        title: "Senior Lead Architect (Full Stack & AI)",
        department: "Venture Catalyst Labs",
        location: "Bengaluru / Hyderabad (Hybrid)",
        type: "Full Time",
        experience: "6+ Years",
        description:
          "Architect and build production-grade web applications, generative AI workflows, and cloud backends for incubation portfolio companies.",
        requirements: [
          "Proficiency in TypeScript, Node.js, Python, PostgreSQL, and Modern Cloud",
          "Hands-on experience with LLM APIs, vector stores, and system design",
          "Entrepreneurial mindset with speed-of-execution ethos",
        ],
      },
      {
        id: "job-3",
        title: "Investor Relations & Deal Flow Associate",
        department: "EXPGLO FUND",
        location: "Hyderabad / Remote",
        type: "Full Time",
        experience: "2-4 Years",
        description:
          "Screen startup pitch submissions, perform financial modeling and due diligence, and coordinate investor syndicate meetings.",
        requirements: [
          "Background in Investment Banking, VC/PE, or corporate strategy",
          "Exceptional financial analysis and quantitative modeling skills",
          "Articulate communication and client stakeholder management",
        ],
      },
      {
        id: "job-4",
        title: "Campus Ecosystem & Community Lead",
        department: "Academic Partnerships",
        location: "Hyderabad, India",
        type: "Full Time",
        experience: "1-3 Years",
        description:
          "Drive university engagement, student founder clubs, campus hackathons, and youth entrepreneurship initiatives.",
        requirements: [
          "High energy community builder",
          "Experience running campus ambassador programs or collegiate tech festivals",
          "Passion for youth entrepreneurship",
        ],
      },
      {
        id: "job-5",
        title: "Venture Builder Intern (Summer Cohort)",
        department: "Corporate Incubation",
        location: "Hyderabad, India",
        type: "Internship (6 Months)",
        experience: "Students / Fresh Graduates",
        description:
          "Work directly alongside the Founder & CEO and portfolio executives on market research, growth experiments, and event management.",
        requirements: [
          "Demonstrated curiosity and passion for startups",
          "Strong writing and research skills",
          "Availability for full-time 6-month internship",
        ],
      },
    ];
  },

  // Contact / Enquiry Store
  saveEnquiry: function (enquiryData) {
    const enquiries = JSON.parse(
      storage.getItem("expglo_enquiries") || "[]",
    );
    const newEntry = {
      id: "ENQ-" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: "New",
      ...enquiryData,
    };
    enquiries.unshift(newEntry);
    storage.setItem("expglo_enquiries", JSON.stringify(enquiries));
    return newEntry;
  },

  getEnquiries: function () {
    return JSON.parse(storage.getItem("expglo_enquiries") || "[]");
  },

  updateEnquiryStatus: function (id, newStatus) {
    const enquiries = this.getEnquiries();
    const updated = enquiries.map((e) =>
      e.id === id ? { ...e, status: newStatus } : e,
    );
    storage.setItem("expglo_enquiries", JSON.stringify(updated));
    return updated;
  },

  // Career Application Store
  saveApplication: function (applicationData) {
    const applications = JSON.parse(
      storage.getItem("expglo_applications") || "[]",
    );
    const newApp = {
      id: "APP-" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: "New",
      ...applicationData,
    };
    applications.unshift(newApp);
    storage.setItem("expglo_applications", JSON.stringify(applications));
    return newApp;
  },

  getApplications: function () {
    return JSON.parse(storage.getItem("expglo_applications") || "[]");
  },

  // School Registrations
  saveEnrollment: function (enrollmentData) {
    const enrollments = JSON.parse(
      storage.getItem("expglo_enrollments") || "[]",
    );
    const newEnroll = {
      id: "SCH-" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toISOString(),
      status: "Registered",
      ...enrollmentData,
    };
    enrollments.unshift(newEnroll);
    storage.setItem("expglo_enrollments", JSON.stringify(enrollments));
    return newEnroll;
  },
};

// Seed sample enquiries if empty
if (!storage.getItem("expglo_enquiries")) {
  storage.setItem(
    "expglo_enquiries",
    JSON.stringify([
      {
        id: "ENQ-839102",
        fullName: "Aditya Roy",
        email: "aditya@fintechflux.io",
        phone: "+91 9258482377",
        organization: "FintechFlux Labs",
        enquiryType: "Startup / Founder",
        message:
          "We have built an automated cross-border treasury API for GCC-India trade corridors and are raising our seed round. Looking to pitch to EXPGLO Fund.",
        status: "New",
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      },
      {
        id: "ENQ-491023",
        fullName: "Priya Sundaram",
        email: "priya.sundaram@apexcap.com",
        phone: "+91 9258482377",
        organization: "Apex Capital Angels",
        enquiryType: "Investor",
        message:
          "We manage an angel network of 40 tech founders and would like to co-invest and participate in upcoming EXPGLO deal syndicates.",
        status: "In Progress",
        createdAt: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "ENQ-291840",
        fullName: "Dr. K. Ramaswamy",
        email: "dean.incubations@vtech.edu",
        phone: "+91 9258482377",
        organization: "V-Tech Institute of Technology",
        enquiryType: "Business Partnership",
        message:
          "Interested in setting up an EXPGLO Startup School chapter on our college campus for over 3,000 engineering students.",
        status: "Contacted",
        createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
      },
    ]),
  );
}



export default EXPGLO_STORE;

export const getStats = () => EXPGLO_STORE.getStats();
export const getBusinessUnits = () => EXPGLO_STORE.getBusinessUnits();
export const getPrograms = () => EXPGLO_STORE.getPrograms();
export const getEvents = () => EXPGLO_STORE.getEvents();
export const getNews = () => EXPGLO_STORE.getNews();
export const getJobs = () => EXPGLO_STORE.getJobs();
export const getEnquiries = () => EXPGLO_STORE.getEnquiries();
export const saveEnquiry = (data) => EXPGLO_STORE.saveEnquiry(data);
export const updateEnquiryStatus = (id, status) => EXPGLO_STORE.updateEnquiryStatus(id, status);
export const getApplications = () => EXPGLO_STORE.getApplications();
export const saveApplication = (data) => EXPGLO_STORE.saveApplication(data);
export const saveEnrollment = (data) => EXPGLO_STORE.saveEnrollment(data);
