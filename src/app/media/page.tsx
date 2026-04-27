"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { reveal } from "@/lib/motion";
import { getAllMediaArticles, urlFor, type MediaArticleCard } from "@/lib/sanity";

function ArticleCard({ article, index }: { article: MediaArticleCard; index: number }) {
  const imageUrl = article.mainImage?.asset
    ? urlFor(article.mainImage.asset).width(720).height(405).fit("crop").url()
    : null;

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={reveal}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-purple/40 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-b from-brand-purple/10 to-brand-gold/10">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={article.mainImage?.alt ?? article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-brand-purple/30 text-5xl font-serif font-bold">DTJ</span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 gap-3">
        <p className="text-brand-purple text-xs font-bold tracking-[0.2em] uppercase">{article.outlet}</p>
        <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug group-hover:text-brand-purple transition-colors line-clamp-3">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
            {article.excerpt}
          </p>
        )}
        <div className="pt-3 border-t border-gray-100 mt-auto flex items-center justify-between gap-2">
          {formattedDate ? (
            <span className="text-xs text-gray-400">{formattedDate}</span>
          ) : <span />}
          <span className="inline-flex items-center gap-1.5 text-brand-gold text-sm font-semibold">
            Read article
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-6 py-24 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center">
        <svg className="w-8 h-8 text-brand-purple/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      </div>
      <div>
        <p className="font-serif text-2xl font-bold text-gray-900">More coverage coming soon</p>
        <p className="text-gray-500 text-sm mt-2 max-w-sm">
          We&apos;re collecting press features and interviews. Check back shortly.
        </p>
      </div>
    </motion.div>
  );
}

export default function MediaPage() {
  const [articles, setArticles] = useState<MediaArticleCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllMediaArticles()
      .then((data) => setArticles(data ?? []))
      .catch(() => setArticles([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-brand-purple text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_#9333EA_0%,_transparent_70%)] opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase"
          >
            Press Coverage
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            In the <span className="text-brand-gold">Media</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg max-w-lg leading-relaxed"
          >
            Stories and features about Destined to be a Jew and our founder Noa Amalia Arazi.
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-2xl bg-gray-200 animate-pulse h-80" />
              ))}
            </div>
          ) : articles.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                <ArticleCard key={article._id} article={article} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
