"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { reveal } from "@/lib/motion";
import { urlFor, type GuideDetail } from "@/lib/sanity";

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-3xl font-bold text-gray-900 mt-10 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-2xl font-bold text-gray-900 mt-8 mb-3 leading-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-gold pl-6 my-8 italic text-gray-600 text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-700">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-purple underline underline-offset-2 hover:text-brand-purple-dark transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const url = urlFor(value.asset).width(900).fit("max").url();
      return (
        <figure className="my-10">
          <Image
            src={url}
            alt={value.alt ?? ""}
            width={900}
            height={500}
            className="w-full rounded-xl object-cover"
          />
          {value.alt && (
            <figcaption className="text-center text-xs text-gray-400 mt-2 italic">
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function GuidePostClient({ guide }: { guide: GuideDetail }) {
  const formattedDate = guide.publishedAt
    ? new Date(guide.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const coverImageUrl = guide.mainImage?.asset
    ? urlFor(guide.mainImage.asset).width(1200).height(630).fit("crop").url()
    : null;

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-brand-purple text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_#9333EA_0%,_transparent_70%)] opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          {guide.category && (
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
              className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase"
            >
              {guide.category}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {guide.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-white/60 text-sm"
          >
            <span>{guide.author}</span>
            {formattedDate && (
              <>
                <span className="text-white/30">&middot;</span>
                <span>{formattedDate}</span>
              </>
            )}
          </motion.div>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">

          {coverImageUrl && (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="mb-12 rounded-2xl overflow-hidden shadow-md"
            >
              <Image
                src={coverImageUrl}
                alt={guide.mainImage?.alt ?? guide.title}
                width={1200}
                height={630}
                className="w-full h-auto object-cover"
                priority
              />
            </motion.div>
          )}

          {guide.excerpt && (
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              className="text-gray-600 text-lg leading-relaxed mb-10 font-medium border-l-4 border-brand-gold pl-5"
            >
              {guide.excerpt}
            </motion.p>
          )}

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
          >
            {guide.body && (
              <PortableText value={guide.body} components={portableTextComponents} />
            )}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={reveal}
            className="mt-16 pt-8 border-t border-gray-100"
          >
            <a
              href="/articles"
              className="text-brand-purple font-semibold text-sm hover:underline flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Articles
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
