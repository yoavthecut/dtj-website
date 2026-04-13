"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { reveal } from "@/lib/motion";

const values = [
  { title: "Accessibility", desc: "Guidance that is available to anyone, regardless of location or background." },
  { title: "Respect", desc: "Every person's spiritual journey is treated with dignity and care." },
  { title: "Community", desc: "No one should navigate the path to Judaism alone." },
  { title: "Pride", desc: "Choosing Judaism is a privilege. We should be proud of it." },
  { title: "Knowledge", desc: "Clear, accurate information empowers people to move forward with confidence." },
];

const whatWeDo = [
  { label: "1:1 Consultation", desc: "Personal sessions in English, Hebrew, Portuguese, and Spanish." },
  { label: "50+ Journeys Guided", desc: "People who have started their conversion with our support." },
  { label: "16K+ Followers", desc: "A growing global community on social media." },
  { label: "WhatsApp Community", desc: "20 countries · 10 languages." },
  { label: "Halachic Consultation", desc: "Answers rooted in Jewish law from our rabbinical advisor." },
  { label: "Hebrew Classes", desc: "Learn the language of the Jewish people." },
  { label: "Weekly Webinars", desc: "Live sessions for our subscriber community." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-[#1e0336] text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_#6B21A8_0%,_transparent_70%)] opacity-50" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase"
          >
            Our story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            About <span className="italic text-brand-gold">Destined to be a Jew</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl leading-relaxed"
          >
            A nonprofit born from a personal story — and a universal need.
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="bg-[#BAE6FD] py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            The founder
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            Noa Amalia Arazi
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="flex flex-col gap-6 text-gray-700 leading-relaxed">
              <p>
                Noa was born in Israel to a Jewish Israeli father and a French Catholic mother who had converted through a Reform ceremony. Because Reform conversions were not officially recognized in Israel at the time, Noa did not hold official Jewish status under Israeli law.
              </p>
              <p>
                Determined to complete what she felt was her true identity, Noa underwent an Orthodox conversion through the <span className="font-semibold text-gray-900">Nativ program</span> — the only IDF-affiliated conversion course not run by the Chief Rabbinate — completing the process in 2022.
              </p>
              <p>
                Following the events of <span className="font-semibold text-gray-900">October 7, 2023</span>, Noa began sharing her conversion story on social media. The response was immediate and overwhelming. Thousands of messages flooded in from people around the world — all facing the same challenge: wanting to convert, but having no one to turn to.
              </p>
              <p>
                That realization became the foundation of Destined to be a Jew.
              </p>
            </motion.div>

            {/* pull quote */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              className="bg-[#1e0336] text-white rounded-3xl p-10 flex flex-col gap-6">
              <div className="w-10 h-0.5 bg-brand-gold" />
              <p className="font-serif text-xl italic leading-relaxed text-white/90">
                &ldquo;We had the privilege to choose Judaism. There is no need for shame. We should be proud of it.&rdquo;
              </p>
              <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase">— Noa Amalia Arazi</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="relative bg-[#0f0020] text-white py-28 px-6 overflow-hidden">
        <div className="absolute -top-px left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto pt-8">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Our vision
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold mb-8 leading-tight">
            A bridge between worlds
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
            className="text-white/75 text-lg leading-relaxed max-w-2xl mb-20">
            Our goal is to serve as a bridge between individuals seeking conversion and Jewish communities around the world — helping people navigate the process in a way that is respectful, supportive, and welcoming.
          </motion.p>

          <div className="flex flex-col">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal}
                className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr_2fr] items-center gap-4 sm:gap-8 py-7 border-b border-white/10 hover:border-brand-gold/40 hover:bg-white/5 transition-all cursor-default px-2 rounded-sm"
              >
                <span className="font-serif text-5xl font-bold text-white/15 group-hover:text-brand-gold/25 transition-colors leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                  {v.title}
                </h3>
                <p className="hidden sm:block text-white/75 text-sm leading-relaxed text-right">{v.desc}</p>
                <p className="col-span-2 sm:hidden text-white/70 text-sm leading-relaxed -mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="relative bg-[#BAE6FD] py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
            What we do
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
            Everything you need,<br />
            <span className="italic text-brand-purple">in one place</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
            className="text-gray-500 text-center max-w-md mx-auto mb-16 text-sm leading-relaxed">
            From consultations to community — all in one place.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDo.map((item, i) => (
              <motion.div key={item.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative bg-[#1e0336] border border-purple-900/60 rounded-2xl p-8 flex flex-col gap-4 cursor-default overflow-hidden hover:border-brand-gold/60 transition-colors duration-300 shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,_rgba(245,158,11,0.14)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                <span className="font-serif text-4xl font-bold text-white/10 group-hover:text-brand-gold/30 transition-colors duration-300 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300 leading-snug relative z-10">
                  {item.label}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ── TEAM CTA ── */}
      <section className="bg-[#BAE6FD] py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl bg-[#1e0336] text-white p-10">
          <div>
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">The people behind it</p>
            <h2 className="font-serif text-3xl font-bold leading-snug mb-2">Meet our team</h2>
            <p className="text-white/65 text-sm max-w-md">Consultants, educators, rabbinical advisors, and legal experts — all here to support your journey.</p>
          </div>
          <Link href="/team"
            className="shrink-0 bg-brand-gold hover:bg-yellow-400 text-white font-semibold px-9 py-4 rounded-full text-sm tracking-wide transition-all shadow-lg">
            Meet the Team
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
