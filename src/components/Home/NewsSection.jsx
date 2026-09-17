import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/animations";
import { getNews } from "../../data/expgloStore";
import ArticleModal from "../News/ArticleModal";

export default function NewsSection() {
  const newsItems = getNews().slice(0, 3);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section className="py-24 bg-white" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div className="space-y-2">
            <div className="text-xs font-extrabold tracking-widest text-brand-green uppercase">
              LATEST DISPATCHES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest Updates
            </h2>
            <p className="text-slate-600 text-sm">
              Company announcements, ecosystem partnerships, and program launches.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-green hover:text-brand-darkgreen transition mt-4 md:mt-0"
            to="/news"
          >
            <span>View All News </span>
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          id="home-news-container"
        >
          {newsItems.map((item) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition duration-300 flex flex-col justify-between"
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
                    <span></span>
                    <span>{item.author}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-green transition leading-snug">
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

      <ArticleModal
        article={selectedArticle}
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </section>
  );
}
