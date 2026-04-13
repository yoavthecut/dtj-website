"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";
import { getAllGuides, urlFor, type GuideCard } from "@/lib/sanity";

function GuideCardItem({ guide, index }: { guide: GuideCard; index: number }) {
  const imageUrl = guide.mainImage
    ? urlFor(guide.mainImage.asset).width(600).height(340).fit("crop").url()
    : null;

  const formattedDate = guide.publishedAt
    ? new Date(guide.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={reveal}
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/guides/${guide.slug.current}`} className="block overflow-hidden aspect-[16/9]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={guide.mainImage?.alt ?? guide.title}
            width={600}
            height={340}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-purple/10 to-brand-gold/10 flex items-center justify-center">
            <span className="text-brand-purple/30 text-5xl font-serif font-bold">DTJ</span>
          </div>
        )}
      </Link>

      <div className="flex flex-col flex-1 p-6 gap-3">
        {guide.category && (
          <span className="self-start text-xs font-semibold tracking-[0.15em] uppercase text-brand-purple bg-purple-50 px-3 py-1 rounded-full">
            {guide.category}
          </span>
        )}

        <Link href={`/guides/${guide.slug.current}`}>
          <h2 className="font-serif text-xl font-bold text-gray-900 leading-snug group-hover:text-brand-purple transition-colors line-clamp-2">
            {guide.title}
          </h2>
        </Link>

        {guide.excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
            {guide.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
          <span className="text-xs text-gray-400 font-medium">{guide.author}</span>
          {formattedDate && (
            <span className="text-xs text-gray-400">{formattedDate}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0}
      variants={reveal}
      className="col-span-full flex flex-col items-center gap-6 py-24 text-center"
    >
      <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center">
        <svg className="w-8 h-8 text-brand-purple/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>
      <div>
        <p className="font-serif text-2xl font-bold text-gray-900">Guides Coming Soon</p>
        <p className="text-gray-500 text-sm mt-2 max-w-sm">
          We are preparing in-depth guides on conversion, Hebrew language, and Jewish life. Check back soon.
        </p>
      </div>
    </motion.div>
  );
}

export default function GuidesPage() {
  const [guides, setGuides] = useState<GuideCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllGuides().then((data) => {
      setGuides(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-[#1e0336] text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_#6B21A8_0%,_transparent_70%)] opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase"
          >
            Knowledge Base
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            Our <span className="italic text-brand-gold">Guides</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg max-w-lg leading-relaxed"
          >
            In-depth resources on conversion, Hebrew language, Jewish law, and life in Israel — free for everyone.
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="bg-[#BAE6FD] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-2xl bg-gray-100 animate-pulse h-80" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.length === 0 ? (
                <EmptyState />
              ) : (
                guides.map((guide, i) => (
                  <GuideCardItem key={guide._id} guide={guide} index={i} />
                ))
              )}
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
