import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import { getNews } from "../data/expgloStore";
import ArticleModal from "../components/News/ArticleModal";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function NewsPage() {
  const [allNews, setAllNews] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    document.title = "News & Insights | EXPGLO BUSINESS PRIVATE LIMITED";
    window.scrollTo(0, 0);
    setAllNews(getNews());
  }, []);

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "Funding", label: "Funding & Deals" },
    { id: "Startup", label: "Founder Stories" },
    { id: "Education", label: "Academics & Cohorts" },
    { id: "Technology", label: "AI & Tech" },
  ];

  const filteredNews = allNews.filter((item) => {
    const matchesCat =
      activeCategory === "all" || item.category === activeCategory;
    const matchesQuery =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const featured = allNews.find((n) => n.featured) || allNews[0];

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
            DISPATCHES & THOUGHT LEADERSHIP
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
          >
            News & Insights
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto"
          >
            The latest corporate press releases, syndicate updates, portfolio
            milestones, and venture research from EXPGLO.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* SEARCH & FILTER CONTROLS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-8">
            <div className="flex flex-wrap gap-2" id="news-categories">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition border ${
                    activeCategory === cat.id
                      ? "bg-brand-green text-white border-brand-green shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-100 border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <input
                type="text"
                id="news-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & press..."
                className="w-full text-xs pl-9 pr-4 py-2.5 rounded-full border border-slate-200 outline-none focus:border-brand-green bg-slate-50"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* FEATURED STORY BANNER */}
          {featured && activeCategory === "all" && !searchQuery && (
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl mb-12">
              <div className="lg:col-span-6 h-72 lg:h-auto overflow-hidden">
                <img
                  alt={featured.title}
                  className="w-full h-full object-cover"
                  src={featured.image}
                />
              </div>
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-brand-gold text-slate-950 text-[10px] font-black uppercase tracking-wider">
                    FEATURED STORY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                    {featured.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <span>
                    By {featured.author}  {featured.readTime}
                  </span>
                  <button
                    onClick={() => setSelectedArticle(featured)}
                    className="font-bold text-brand-gold hover:text-white transition"
                  >
                    Read Full Story 
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NEWS GRID */}
          <motion.div
            layout
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            id="news-grid"
          >
            {filteredNews.map((item) => (
              <motion.article
                key={item.id}
                variants={staggerItem}
                className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/80 hover:shadow-xl transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      src={item.image}
                    />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-brand-green shadow-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                      <span>{item.date}</span>
                      <span>|</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-brand-green transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedArticle(item)}
                    className="text-xs font-bold text-brand-darkgreen group-hover:text-brand-green transition inline-flex items-center gap-1"
                  >
                    Read Article 
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <PartnershipCTA />

      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </main>
  );
}
