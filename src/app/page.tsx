"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Users, ShieldX, Clock4, Banknote, CloudRain, BookOpen } from "lucide-react";
import Spline from "@splinetool/react-spline";
import { reveal } from "@/lib/motion";

const painPoints = [
  { title: "Family rejection", desc: "Many converts face disapproval or distance from their own families.", icon: Users },
  { title: "Community barriers", desc: "Finding a welcoming Jewish community can be harder than expected.", icon: ShieldX },
  { title: "A lengthy process", desc: "Orthodox conversion can take years and requires significant commitment.", icon: Clock4 },
  { title: "Financial cost", desc: "Courses, travel, and community fees can create real financial strain.", icon: Banknote },
  { title: "Emotional isolation", desc: "The spiritual journey can feel deeply lonely without the right support.", icon: CloudRain },
  { title: "Lack of information", desc: "The path forward is unclear — where to start, who to turn to, what to expect.", icon: BookOpen },
];

const stats = [
  { number: "50+", label: "Journeys guided" },
  { number: "16K+", label: "Global followers" },
  { number: "20", label: "Countries reached" },
  { number: "4", label: "Languages spoken" },
];

const testimonials = [
  { quote: "You're just excellent at what you do. Thank you so much for your time and support. You've made me very happy." },
  { quote: "Your tips and the way you've structured everything took it to a whole new level. I've been following you since the beginning and I'm so grateful." },
  { quote: "The best decision I made was to book an individual consultation with Noa. Not just going the extra mile, but 10 times over. I can't express how grateful I am." },
  { quote: "Noa Amalia Arazi is one of the most gorgeous souls you will ever meet! She is hands down the best for conversion troubleshooting — unbiased and looking out for your interest!" },
  { quote: "I always knew Judaism was my path, but finding the right way felt impossible. Booking a session with Noa was a turning point. Her warmth and practical advice helped me finally start my journey." },
  { quote: "Noa explained to me the options, avenues and challenges, and personally helped me link with a Rabbi in Singapore. I had been looking for help for some time and I am truly thankful." },
  { quote: "My life was on hold for three years due to bureaucracy. Just when I thought I was done, Noa appeared out of nowhere like an angel. Well on the road now." },
  { quote: "Thank you for everything, Noa. I learned a lot, and I am excited to begin this process." },
  { quote: "Noa has been a guiding light in my journey. Through her, I connected with incredible people and rabbis, leading me to a supportive community. Her wisdom inspires everyone around her." },
];

const services = [
  { title: "1:1 Consultation", desc: "Personal sessions in English, Hebrew, Portuguese, and Spanish." },
  { title: "Halachic Guidance", desc: "Expert answers rooted in Jewish law from our rabbinical advisor." },
  { title: "Hebrew Classes", desc: "Connect with the language of the Jewish people." },
  { title: "Weekly Webinars", desc: "Live sessions exclusive to our subscriber community." },
  { title: "WhatsApp Community", desc: "20 countries, 10 languages, one shared journey." },
  { title: "Free Guides", desc: "A growing library of resources for every stage of conversion." },
];

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [contactStatus, setContactStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    setNewsletterStatus("loading");
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: newsletterEmail }) });
      setNewsletterStatus(res.ok ? "success" : "error");
    } catch { setNewsletterStatus("error"); }
  }

  async function handleContact(e: React.FormEvent) {
    e.preventDefault();
    setContactStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contactForm) });
      setContactStatus(res.ok ? "success" : "error");
    } catch { setContactStatus("error"); }
  }

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ══════════════════════════════
          HERO — full viewport, dark purple
      ══════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#1e0336] overflow-hidden">
        {/* Spline 3D background */}
        <div className="absolute inset-0 pointer-events-none scale-125">
          <Spline scene="https://prod.spline.design/pWeoU-DIzEd1eM-7/scene.splinecode" />
        </div>
        {/* layered glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,_#6B21A8_0%,_transparent_70%)] opacity-60" />
        {/* gold top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />


        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1 }}
            className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]"
          >
            Supporting converts to Judaism worldwide
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight text-center"
          >
            <span className="block">Bringing Jewish souls</span>
            <span className="block text-brand-gold">back home</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 text-lg sm:text-xl max-w-lg leading-relaxed"
          >
            Converting to Judaism doesn&apos;t have to be a difficult and lonely process.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/services" className="bg-brand-gold hover:bg-yellow-400 text-white font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)]">
              Start Your Journey
            </Link>
            <Link href="/donate" className="border border-white/30 hover:border-white/70 text-white font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all backdrop-blur-sm bg-white/5">
              Support Us
            </Link>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-px h-8 bg-gradient-to-b from-purple-400 to-transparent" />
        </motion.div>

        {/* wave bottom */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          STATS BAR
      ══════════════════════════════ */}
      <section className="bg-[#BAE6FD] pt-4 pb-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal} className="flex flex-col items-center gap-1">
              <span className="font-serif text-4xl font-bold text-brand-purple">{s.number}</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════
          PAIN POINTS
      ══════════════════════════════ */}
      <section className="relative bg-[#3b0764] text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_#6B21A8_0%,_transparent_70%)] opacity-50" />
        {/* wave top */}
        <div className="absolute -top-px left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
            The reality of conversion
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold text-center mb-4 leading-tight">
            The path is rarely simple
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
            className="text-white/75 text-center max-w-xl mx-auto mb-20 text-lg">
            People who choose Judaism often face the same obstacles — alone.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((p, i) => (
              <motion.div key={p.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                className="group relative bg-white/8 backdrop-blur-sm border border-white/10 hover:border-brand-gold/40 rounded-2xl p-8 flex flex-col gap-4 cursor-default overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,_rgba(245,158,11,0.10)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* icon */}
                <div className="w-11 h-11 rounded-xl bg-brand-gold/15 flex items-center justify-center group-hover:bg-brand-gold/25 transition-colors duration-300">
                  <p.icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300 leading-snug relative z-10">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-300">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* pivot */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="mt-24 max-w-2xl mx-auto text-center">
            <div className="w-px h-16 bg-brand-gold mx-auto mb-10 opacity-60" />
            <h3 className="font-serif text-3xl sm:text-4xl font-bold italic mb-6">
              And that&apos;s why we&apos;re here.
            </h3>
            <p className="text-white/75 text-lg leading-relaxed mb-10">
              Destined to be a Jew was founded to help anyone who wishes to convert to Judaism
              outside the borders of the State of Israel.
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 text-brand-gold font-semibold text-sm tracking-wide hover:gap-4 transition-all">
              Learn more about us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* wave bottom */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          SERVICES — card grid
      ══════════════════════════════ */}
      <section className="relative bg-[#BAE6FD] py-28 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
            What we offer
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
            Everything you need,<br />
            <span className="italic text-brand-purple">in one place</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
            className="text-gray-500 text-center max-w-md mx-auto mb-16 text-sm leading-relaxed">
            From your first question to your final step — we&apos;re with you every part of the way.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div key={s.title}
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
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-300">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#1e0336" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          VERSE — full dark, centered
      ══════════════════════════════ */}
      <section className="relative bg-[#1e0336] pt-0 pb-28 px-6 text-white text-center overflow-hidden -mt-px">
        {/* decorative glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_#6B21A8_0%,_transparent_70%)] opacity-40" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brand-gold opacity-50" />
            <span className="text-brand-gold text-3xl font-serif">&ldquo;</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brand-gold opacity-50" />
          </div>
          <p className="font-serif text-xl sm:text-2xl leading-relaxed italic text-white/90 mb-8">
            If a stranger resides with you in your land, you shall not mistreat him.
            Like a native of your own shall be for you the stranger that resides with you.
            And you shall love him as yourself, since you were strangers in the land of Egypt:
            I am the Lord your God.
          </p>
          <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">Leviticus 19:33–34</p>
        </motion.div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          GUIDES CTA — split layout
      ══════════════════════════════ */}
      <section className="bg-[#BAE6FD] py-20 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-10 border border-sky-200 rounded-3xl p-10 bg-white/60 shadow-sm">
          <div className="max-w-md">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">Free resources</p>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3 leading-snug">
              All the information you need for conversion
            </h2>
            <p className="text-gray-500 text-sm">Written by our team — available to everyone, for free.</p>
          </div>
          <Link href="/guides" className="shrink-0 bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-9 py-4 rounded-full text-sm tracking-wide transition-all shadow-lg hover:shadow-brand-purple/30">
            Browse Guides
          </Link>
        </motion.div>
      </section>

      {/* ══════════════════════════════
          TESTIMONIALS — auto-scroll marquee
      ══════════════════════════════ */}
      <section className="relative bg-[#1e0336] py-24 px-0 overflow-hidden">
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 50s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* wave top */}
        <div className="absolute -top-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V0H0Z" fill="#BAE6FD" />
          </svg>
        </div>

        <div className="relative z-10 pt-4">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase text-center mb-3 px-6">
            What people say
          </motion.p>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="font-serif text-4xl sm:text-5xl font-bold text-white text-center mb-14 px-6">
            Stories that <span className="italic text-brand-gold">inspire us</span>
          </motion.h2>

          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-5 w-max">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-80 shrink-0 bg-white/8 backdrop-blur-sm border border-white/10 hover:border-brand-gold/40 rounded-2xl p-7 flex flex-col gap-4 transition-colors duration-300"
                >
                  <span className="text-brand-gold text-3xl font-serif leading-none">&ldquo;</span>
                  <p className="text-white/80 text-sm leading-relaxed">{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* wave bottom */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L480 20L960 40L1440 0V60H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          WHATSAPP + DONATE — side by side
      ══════════════════════════════ */}
      <section className="bg-[#BAE6FD] pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* WhatsApp */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="bg-[#0f0020] text-white rounded-3xl p-10 flex flex-col gap-6">
            <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">Community</p>
            <h3 className="font-serif text-2xl font-bold leading-snug">
              Join a global community of people just like you
            </h3>
            <p className="text-white/65 text-sm">20 countries · 10 languages · one shared journey.</p>
            <a href="https://chat.whatsapp.com/HPhHBNdkzE5Fq4lg4Xe809" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-7 py-3 rounded-full text-sm w-fit transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join the Group
            </a>
          </motion.div>

          {/* Donate */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="bg-brand-gold text-white rounded-3xl p-10 flex flex-col gap-6">
            <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Make an impact</p>
            <h3 className="font-serif text-2xl font-bold leading-snug">
              Support our mission
            </h3>
            <p className="text-white/80 text-sm">Your donation helps us provide free guidance to converts around the world.</p>
            <Link href="/donate"
              className="inline-flex items-center gap-2 bg-white text-brand-gold hover:bg-yellow-50 font-semibold px-7 py-3 rounded-full text-sm w-fit transition-colors">
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════
          NEWSLETTER
      ══════════════════════════════ */}
      <section className="relative bg-[#1e0336] pt-20 pb-24 px-6 text-white overflow-hidden">
        <div className="absolute -top-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V0H0Z" fill="#BAE6FD" />
          </svg>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="relative z-10 max-w-xl mx-auto text-center flex flex-col gap-6 pt-0">
          <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">Stay connected</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">Join our newsletter</h2>
          <p className="text-white/65">Guides, webinar invites, and community updates — delivered to your inbox.</p>
          {newsletterStatus === "success" ? (
            <p className="text-green-400 font-semibold">You&apos;re subscribed. Welcome to the community.</p>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 w-full">
              <input type="email" required placeholder="Your email address" value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-sm text-white placeholder-purple-400 outline-none focus:border-brand-gold transition-colors" />
              <button type="submit" disabled={newsletterStatus === "loading"}
                className="bg-brand-gold hover:bg-yellow-400 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-colors disabled:opacity-60">
                {newsletterStatus === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
          {newsletterStatus === "error" && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
        </motion.div>
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════
          CONTACT
      ══════════════════════════════ */}
      <section className="bg-[#BAE6FD] py-28 px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="max-w-2xl mx-auto">
          <p className="text-center text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">Get in touch</p>
          <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-2 leading-tight">
            Want to speak with us<br />
            <span className="italic text-brand-purple">directly?</span>
          </h2>
          <p className="text-gray-400 text-center mb-14 text-sm">We&apos;d love to hear from you.</p>

          {contactStatus === "success" ? (
            <p className="text-center text-green-600 font-semibold text-lg">Message sent. We&apos;ll get back to you within 48 hours.</p>
          ) : (
            <form onSubmit={handleContact} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" required placeholder="Your name" value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="flex-1 border-b-2 border-gray-400 focus:border-brand-purple pb-3 text-sm font-semibold outline-none transition-colors bg-transparent placeholder-gray-500" />
                <input type="email" required placeholder="Your email" value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="flex-1 border-b-2 border-gray-400 focus:border-brand-purple pb-3 text-sm font-semibold outline-none transition-colors bg-transparent placeholder-gray-500" />
              </div>
              <input type="text" placeholder="Subject" value={contactForm.subject}
                onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                className="border-b-2 border-gray-400 focus:border-brand-purple pb-3 text-sm font-semibold outline-none transition-colors bg-transparent placeholder-gray-500" />
              <textarea required rows={5} placeholder="Your message" value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="border-b-2 border-gray-400 focus:border-brand-purple pb-3 text-sm font-semibold outline-none transition-colors bg-transparent placeholder-gray-500 resize-none" />
              <div className="flex justify-center mt-6">
                <button type="submit" disabled={contactStatus === "loading"}
                  className="bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all disabled:opacity-60 shadow-lg hover:shadow-brand-purple/30">
                  {contactStatus === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {contactStatus === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
            </form>
          )}
        </motion.div>
      </section>

    </div>
  );
}
