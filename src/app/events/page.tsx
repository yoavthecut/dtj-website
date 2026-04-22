"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { reveal } from "@/lib/motion";

// ─────────────────────────────────────────────────────────────────
// TO ADD PHOTOS:
//   1. Drop image files into /public/events/<category-folder>/
//   2. Add the filename to the `photos` array below
//   3. To add a new event category, copy the object and fill in the details
// ─────────────────────────────────────────────────────────────────
const eventCategories = [
  {
    id: "launch",
    title: "Launch Event",
    date: "2026",
    description: "The official launch of Destined to be a Jew — bringing together our community, supporters, and partners for an evening of celebration and vision.",
    photos: [
      "/events/launch/CZ72_0125.JPG",
      "/events/launch/Z72_0027-8.jpg",
      "/events/launch/Z72_0083-36.jpg",
      "/events/launch/Z72_0155-58.jpg",
      "/events/launch/Z72_0186-71.jpg",
      "/events/launch/Z72_0187-72.jpg",
      "/events/launch/Z72_0200-77.jpg",
      "/events/launch/Z72_0330-164.jpg",
      "/events/launch/Z72_0336-170.jpg",
      "/events/launch/Z72_0401-214.jpg",
      "/events/launch/Z72_0433-238.jpg",
      "/events/launch/Z72_0435-239.jpg",
      "/events/launch/Z72_0454-246.jpg",
      "/events/launch/Z72_0531-292.jpg",
      "/events/launch/Z72_0656-380.jpg",
      "/events/launch/Z72_0670-391.jpg",
      "/events/launch/Z72_0712-408.jpg",
      "/events/launch/Z72_0725-421.jpg",
      "/events/launch/Z72_0840-490.jpg",
      "/events/launch/Z72_0864-507.jpg",
      "/events/launch/Z72_0910-534.jpg",
      "/events/launch/Z72_0926-548.jpg",
      "/events/launch/Z72_0965-571.jpg",
      "/events/launch/Z72_1045-610.jpg",
      "/events/launch/Z72_1067-628.jpg",
      "/events/launch/Z72_1071-631.jpg",
      "/events/launch/Z72_1111-664.jpg",
    ],
  },
];

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={src}
            alt="Event photo"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl object-contain max-h-[85vh]"
          />
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center font-bold text-lg hover:bg-brand-gold hover:text-white transition-colors shadow-lg"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function EventCategory({ category, index }: { category: typeof eventCategories[0]; index: number }) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={reveal}
      className="flex flex-col gap-8"
    >
      {/* Category header */}
      <div className="flex items-end justify-between border-b border-gray-200 pb-6">
        <div>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">
            {category.date}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            {category.title}
          </h2>
        </div>
        <span className="text-gray-400 text-sm font-medium shrink-0 ml-4">
          {category.photos.length} {category.photos.length === 1 ? "photo" : "photos"}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 leading-relaxed max-w-2xl">{category.description}</p>

      {/* Photo grid */}
      {category.photos.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {category.photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setLightboxSrc(src)}
            >
              <Image
                src={src}
                alt={`${category.title} — photo ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      ) : (
        /* Empty state — shown until photos are added */
        <div className="rounded-2xl border-2 border-dashed border-gray-200 py-20 flex flex-col items-center gap-4 text-center">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-500 font-medium">Photos coming soon</p>
            <p className="text-gray-400 text-sm mt-1">Drop images into <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">/public/events/launch/</code> to display them here</p>
          </div>
        </div>
      )}

      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </motion.div>
  );
}

export default function EventsPage() {
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
            Our moments
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            Our <span className="text-brand-gold">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg max-w-lg leading-relaxed"
          >
            A look back at the gatherings, celebrations, and milestones of our growing community.
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── EVENTS ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {eventCategories.map((category, i) => (
            <EventCategory key={category.id} category={category} index={i} />
          ))}
        </div>
      </section>

    </div>
  );
}
