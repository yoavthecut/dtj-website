"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Calendar, Globe2, Heart, Megaphone } from "lucide-react";
import { reveal } from "@/lib/motion";

const services = [
  {
    icon: Users,
    title: "1:1 Consultations",
    desc: "Personal sessions in English, Hebrew, Portuguese, and Spanish.",
  },
  {
    icon: BookOpen,
    title: "Halachic Consultation",
    desc: "Answers rooted in Jewish law from our rabbinical advisor.",
  },
  {
    icon: Megaphone,
    title: "Hebrew Classes",
    desc: "Learn the language of the Jewish people, step by step.",
  },
  {
    icon: Calendar,
    title: "Weekly Webinars",
    desc: "Live sessions for our growing global community.",
  },
];

// ── Animated counter — counts up from 0 to target when the element scrolls into view ──
function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, count]);

  useEffect(() => rounded.on("change", (v) => setDisplay(v)), [rounded]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative bg-brand-purple text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_#9333EA_0%,_transparent_70%)] opacity-40" />
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
            About <span className="text-brand-gold">Destined to be a Jew</span>
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
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT THE ORGANIZATION ── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About the organization
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-12 leading-tight">
            Founded by Noa Amalia Arazi
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="flex flex-col gap-6 text-gray-700 leading-relaxed">
              <p>
                The organization was founded by <span className="font-semibold text-gray-900">Noa Amalia Arazi</span>, who was born in Israel to a Jewish Israeli father and a French Catholic mother who later converted through a Reform conversion. Because Noa did not have official Jewish status in Israel, she later chose to undergo an Orthodox conversion through the <span className="font-semibold text-gray-900">&apos;Nativ&apos; program</span> in the Israeli army — a program that facilitates conversion for IDF soldiers.
              </p>
              <p>
                Following the events of <span className="font-semibold text-gray-900">October 7</span>, Noa began sharing her personal conversion story on social media. The story quickly gained momentum, and through the many messages and questions she received, she realized that there is a significant need for accessible guidance and support for people seeking conversion outside of Israel — something that currently has very limited infrastructure.
              </p>
              <p>
                That realization became the foundation of <span className="font-semibold text-gray-900">Destined to be a Jew</span>.
              </p>
            </motion.div>

            {/* pull quote */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              className="bg-[#6B21A8] text-white rounded-3xl p-10 flex flex-col gap-6 shadow-lg">
              <div className="w-10 h-0.5 bg-brand-gold" />
              <p className="font-serif text-xl italic leading-relaxed text-white/90">
                &ldquo;We had the privilege to choose Judaism. There is no need for shame. We should be proud of it.&rdquo;
              </p>
              <p className="text-brand-gold text-xs font-semibold tracking-widest uppercase">— Noa Amalia Arazi</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="relative bg-gray-50 py-28 px-6 overflow-hidden">
        {/* wave top — pours from the white "About" section into the gray-50 panel */}
        <div className="absolute -top-px left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto pt-8">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
            What we do
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
            Everything you need,<br />
            <span className="text-brand-purple">in one place</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
            className="text-gray-500 text-center max-w-md mx-auto mb-16 text-sm leading-relaxed">
            From consultations to community — all in one place.
          </motion.p>

          {/* OUR REACH — animated stat cards */}
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-purple text-xs font-bold tracking-[0.25em] uppercase text-center mb-6">
            Our Reach
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
            {/* Journeys */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative bg-[#6B21A8] border border-purple-700/60 rounded-2xl p-8 flex flex-col items-center text-center gap-3 cursor-default overflow-hidden hover:border-brand-gold/60 transition-colors duration-300 shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,_rgba(245,158,11,0.18)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold relative z-10">
                <Heart className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <p className="font-serif text-6xl font-bold text-brand-gold leading-none relative z-10">
                <AnimatedNumber to={50} suffix="+" />
              </p>
              <p className="text-white font-semibold text-base relative z-10">Journeys begun</p>
              <p className="text-white/65 text-xs leading-relaxed relative z-10">Have already started their conversion with our guidance.</p>
            </motion.div>

            {/* Followers */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative bg-[#6B21A8] border border-purple-700/60 rounded-2xl p-8 flex flex-col items-center text-center gap-3 cursor-default overflow-hidden hover:border-brand-gold/60 transition-colors duration-300 shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,_rgba(245,158,11,0.18)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold relative z-10">
                <Users className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <p className="font-serif text-6xl font-bold text-brand-gold leading-none relative z-10">
                <AnimatedNumber to={16} suffix="K+" />
              </p>
              <p className="text-white font-semibold text-base relative z-10">Followers</p>
              <p className="text-white/65 text-xs leading-relaxed relative z-10">A growing global community on social media.</p>
            </motion.div>

            {/* WhatsApp Community — countries + languages */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative bg-[#6B21A8] border border-purple-700/60 rounded-2xl p-8 flex flex-col items-center text-center gap-3 cursor-default overflow-hidden hover:border-brand-gold/60 transition-colors duration-300 shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,_rgba(245,158,11,0.18)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold relative z-10">
                <Globe2 className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <div className="flex items-baseline gap-3 relative z-10">
                <span className="font-serif text-5xl font-bold text-brand-gold leading-none">
                  <AnimatedNumber to={20} suffix="+" />
                </span>
                <span className="text-white/40 text-2xl font-light">·</span>
                <span className="font-serif text-5xl font-bold text-brand-gold leading-none">
                  <AnimatedNumber to={10} suffix="+" />
                </span>
              </div>
              <p className="text-white font-semibold text-base relative z-10">Countries · Languages</p>
              <p className="text-white/65 text-xs leading-relaxed relative z-10">A WhatsApp community spanning the globe.</p>
            </motion.div>
          </div>

          {/* OUR SERVICES */}
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-purple text-xs font-bold tracking-[0.25em] uppercase text-center mb-6">
            Our Services
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div key={s.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative bg-white border-2 border-brand-purple/15 hover:border-brand-purple rounded-2xl p-6 flex flex-col gap-3 cursor-default transition-colors duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-purple/10 group-hover:bg-brand-purple group-hover:text-white flex items-center justify-center text-brand-purple transition-colors duration-300">
                  <s.icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* wave bottom — pours back into the white "In collaboration with" section */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── IN COLLABORATION WITH ── */}
      <section className="relative bg-white pb-16 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 border-t border-gray-100 pt-16">
          <div className="text-center">
            <p className="text-brand-purple text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-1">
              In collaboration with
            </p>
            <p className="font-serif text-base sm:text-lg font-semibold text-gray-900">
              Conference of European Rabbis (CER)
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rabigroup.jpg"
            alt="Conference of European Rabbis (CER)"
            className="rounded-lg shadow-sm h-20 sm:h-24 w-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* ── TEAM CTA ── */}
      <section className="bg-white py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl bg-[#6B21A8] text-white p-10 shadow-lg">
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
