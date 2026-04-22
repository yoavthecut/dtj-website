"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { reveal } from "@/lib/motion";

const faqs = [
  {
    q: "What is our goal?",
    a: `Our goal is to serve as a global umbrella organization, providing a comprehensive "one-stop" support system for the conversion process. We cover administrative, procedural, and emotional aspects on a global scale, acting as a professional bridge between candidates, Jewish communities, and conversion programs.`,
  },
  {
    q: "Who is the organization's target audience?",
    a: "Our organization opens its doors to anyone seeking to bind their fate and life with that of the Jewish people. We support individuals and families from all backgrounds, origins, and countries who wish to undergo a meaningful conversion process. Whether you have Jewish roots (Zera Yisrael), are a partner of a Jewish person, or have simply found your home in Judaism, we are here to provide the most professional and supportive framework for your journey.",
  },
  {
    q: "What services do you provide?",
    a: null,
    services: [
      { label: "Strategic Consultation and Guidance", desc: "Personalized mapping of needs and selection of the conversion track best suited to the candidate." },
      { label: "Practical Preparation for the Rabbinical Court (Beit Din)", desc: "Focused guidance ahead of Beit Din appearances, including administrative highlights and simulations." },
      { label: "Global Interface Management", desc: "Facilitating direct contact with converting rabbis and conversion programs worldwide, based on the candidate's geographic location." },
      { label: "Establishing Community Affiliation", desc: "Creating functional connections with Jewish communities to foster practical integration." },
      { label: "Ongoing Support and Monitoring", desc: "Personal sessions to review progress and provide solutions for any obstacles encountered along the way." },
      { label: "Global Community", desc: "An international network organized by country, providing a professional space for consultation, shared personal experiences, and direct connections with peers at similar stages of the process." },
    ],
    cta: true,
  },
  {
    q: "Do you perform conversions?",
    a: "The organization operates as a consultative and supportive body; it is not a converting Rabbinical Court (Beit Din). Our role is to serve as a professional bridge, connecting candidates to the most recognized and appropriate conversion tracks while coordinating with authorized bodies worldwide according to each candidate's unique needs.",
  },
  {
    q: "Judaism is not a missionary religion; why do you help people convert?",
    a: "Correct — Judaism does not seek to convert others and does not initiate outreach to gain new members. However, when an individual chooses of their own free will to bind their fate and life with the Jewish people, we believe we have a moral and ethical duty to welcome them warmly. Our organization exists to ensure that those who have chosen this path do not walk it alone, providing professional, respectful, and accessible guidance that keeps the gates to the Jewish people open and inviting for those who wish to enter.",
  },
];

function AccordionItem({ item, index, open, onToggle }: {
  item: typeof faqs[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      variants={reveal}
      className="border-b border-gray-900 last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="font-serif text-lg sm:text-xl font-bold text-gray-900 group-hover:text-brand-purple transition-colors leading-snug">
          {item.q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${open ? "border-brand-gold bg-brand-gold text-white" : "border-gray-300 text-gray-400 group-hover:border-brand-purple group-hover:text-brand-purple"}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={open ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              {item.services ? (
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600">The organization centralizes the administrative and professional support necessary to successfully navigate the conversion process. Our services include:</p>

                  <ul className="flex flex-col gap-3">
                    {item.services.map((s) => (
                      <li key={s.label} className="flex gap-3">
                        <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-gold" />
                        <span>
                          <span className="font-semibold text-gray-900">{s.label}:</span>{" "}
                          {s.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {item.cta && (
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-brand-purple font-semibold text-sm hover:underline mt-1"
                    >
                      Check out our services
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              ) : (
                <p>{item.a}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Got questions?
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            Frequently Asked <span className="text-brand-gold">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg max-w-lg leading-relaxed"
          >
            Everything you need to know about who we are and how we can help you.
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section className="bg-[#BAE6FD] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0f0020] text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute -top-px left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6 pt-8"
        >
          <div className="w-px h-12 bg-brand-gold opacity-60 mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Still have questions?
          </h2>
          <p className="text-white/65 max-w-md leading-relaxed">
            We&apos;re here to help. Reach out directly or book a consultation with one of our advisors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-brand-gold hover:bg-yellow-400 text-white font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="border border-white/30 hover:border-brand-gold text-white font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all"
            >
              Book a Session
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
