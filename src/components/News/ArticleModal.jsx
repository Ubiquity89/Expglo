import React from "react";
import Modal from "../Common/Modal";

export default function ArticleModal({ article, isOpen, onClose }) {
  if (!article) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-2xl">
      <div className="rounded-2xl overflow-hidden h-64 -mx-2 -mt-2 mb-4 relative">
        <img
          alt={article.title}
          className="w-full h-full object-cover"
          src={article.image}
        />
        <span className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-brand-green">
          {article.category}
        </span>
      </div>
      <div className="space-y-2">
        <div className="text-xs text-slate-400">
          Published on {article.date} by {article.author}  {article.readTime}
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
          {article.title}
        </h2>
      </div>
      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4 pt-3 border-t border-slate-100 mt-3">
        <p className="font-semibold text-slate-900 text-sm">{article.excerpt}</p>
        <p>{article.content}</p>
      </div>
    </Modal>
  );
}
