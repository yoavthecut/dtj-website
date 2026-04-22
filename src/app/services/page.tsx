"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { reveal } from "@/lib/motion";

// ── Icons ─────────────────────────────────────────────────────────────────────

function ConsultationIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────

const CALENDLY: Record<string, Record<string, string>> = {
  consultation: {
    English:    "https://calendly.com/manager-dtj/30min",
    Spanish:    "https://calendly.com/melissa-elbaz-anthropo/30min",
    Portuguese: "#consultation-pt",
  },
  emotional: {
    English: "https://calendly.com/manager-dtj/30min",
  },
};

const HEBREW_TRIAL_URL = "#hebrew-trial"; // Replace with odeliaarazi70@gmail.com Calendly URL

const steps = [
  {
    icon: ConsultationIcon,
    step: "01",
    title: "Choose your session",
    desc: "Browse our session types and find the one that meets you where you are right now.",
  },
  {
    icon: CalendarIcon,
    step: "02",
    title: "Book a time",
    desc: "Pick a date that works for you. The calendar displays times in your local timezone automatically.",
    note: "Times shown in your local timezone",
  },
  {
    icon: ArrowIcon,
    step: "03",
    title: "Move forward",
    desc: "Receive a link for an online video call with one of our consultants and begin your journey back home.",
  },
];

const testimonials = [
  { quote: "You're just excellent at what you do. Thank you so much for your time and support. You've made me very happy." },
  { quote: "Dear Noa, I've been following you more or less since the beginning, and although I'd already started reading into the process before I came across your account, your tips and the way you've structured everything took it to a whole new level." },
  { quote: "The best decision I made was to book an individual consultation with Noa. It gave us the chance to talk through my personal circumstances and background, and you really helped me work out the way forward that suits me best. I honestly can't express how grateful I am for the care and attention you've shown — not just going the extra mile, but 10 times over." },
  { quote: "Noa Amalia Arazi is one of the most gorgeous souls you will ever meet! If you have any conversion-related questions whatsoever, you MUST speak with her asap! She is hands down the best for conversion troubleshooting, unbiased, and looking out for your interest!" },
  { quote: "I always knew Judaism was my path, but finding the right way to begin felt impossible. Booking a session with Noa was a turning point. Her warmth, experience, and practical advice helped me find the right contacts and finally start my journey. I'm so grateful, not only for her guidance, but also for the beautiful connection I now have in Jerusalem." },
  { quote: "Noa explained to me the options, avenues and challenges, and personally helped me link with a Rabbi in Singapore. I had been looking for help for some time, and I am truly thankful for her guidance and help." },
  { quote: "My life was on hold for three years due to bureaucracy. Just when I thought I was done, Noa appeared out of nowhere like an angel. Thank you very much Noa for all your help and guidance. Well on the road now." },
  { quote: "Thank you for everything, Noa. I learned a lot, and I am excited to begin this process." },
  { quote: "Noa has been a guiding light in my journey. Through her, I connected with incredible people and rabbis, leading me to a supportive community. Her friendly personality and wisdom inspire everyone around her." },
];

// ── Payment Modal ─────────────────────────────────────────────────────────────

interface ModalService {
  id: string;
  label: string;
}

interface ModalProps {
  service: ModalService;
  language: string;
  onClose: () => void;
}

function PaymentModal({ service, language, onClose }: ModalProps) {
  const [paid, setPaid] = useState(false);
  const calendlyUrl = CALENDLY[service.id]?.[language] ?? "#";

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative bg-[#1e0336] border border-purple-900/60 rounded-2xl p-8 w-full max-w-md shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors" aria-label="Close">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="mb-6">
          <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">Complete your booking</p>
          <h3 className="font-serif text-2xl font-bold text-white leading-snug">{service.label}</h3>
          <p className="text-white/60 text-sm mt-1">{language} · 45 min session</p>
        </div>
        <div className="flex items-center justify-between bg-white/5 rounded-xl px-5 py-4 mb-6 border border-white/10">
          <span className="text-white/70 text-sm">Session fee</span>
          <span className="text-brand-gold font-bold text-xl">$35.00</span>
        </div>
        {!paid ? (
          <>
            <p className="text-white/50 text-xs text-center mb-4">Pay securely with PayPal. You will be redirected to Calendly to pick your time immediately after.</p>
            <PayPalButtons
              style={{ layout: "vertical", color: "gold", shape: "pill", label: "pay" }}
              createOrder={(_data, actions) =>
                actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [{ amount: { currency_code: "USD", value: "35.00" }, description: `${service.label} – ${language}` }],
                })
              }
              onApprove={async (_data, actions) => {
                await actions.order?.capture();
                setPaid(true);
                setTimeout(() => { window.open(calendlyUrl, "_blank", "noopener,noreferrer"); onClose(); }, 1200);
              }}
              onError={() => alert("Payment failed. Please try again or contact us at manager@dtj.info.")}
            />
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-white font-semibold mb-1">Payment received!</p>
            <p className="text-white/60 text-sm">Redirecting you to Calendly to book your session…</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [selectedLang, setSelectedLang] = useState<Record<string, string>>({});
  const [modal, setModal] = useState<{ service: ModalService; language: string } | null>(null);

  function openModal(id: string, label: string) {
    const lang = selectedLang[id];
    if (!lang) return;
    setModal({ service: { id, label }, language: lang });
  }

  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "PLACEHOLDER" }}>
      <div className="flex flex-col overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative bg-[#6B21A8] text-white py-32 px-6 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          <div className="absolute -bottom-px left-0 right-0 z-10">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
              className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl font-bold leading-tight text-center"
            >
              Personalized guidance,{" "}
              <span className="text-brand-gold">every step of the way</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/70 text-lg max-w-xl leading-relaxed"
            >
              One-on-one sessions with consultants who have lived the journey — available in multiple languages, wherever you are in the world.
            </motion.p>
          </div>
        </section>

        {/* ── SERVICE CARDS ── */}
        <section className="relative bg-white py-24 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
              What we offer
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-4 leading-tight">
              Choose your session
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
              className="text-gray-500 text-center max-w-md mx-auto mb-16 text-sm leading-relaxed">
              Browse our session types and find the one that meets you where you are right now.
            </motion.p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* ── Box 1: 1:1 Consultation ── */}
              {(() => {
                const id = "consultation";
                const label = "1:1 Consultation";
                const langs = Object.keys(CALENDLY[id]);
                const chosen = selectedLang[id];
                return (
                  <motion.div key={id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
                    className="bg-white border-2 border-[#6B21A8] rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#6B21A8]/10 flex items-center justify-center text-[#6B21A8]">
                      <ConsultationIcon />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug">{label}</h3>
                      <span className="shrink-0 bg-[#6B21A8] text-white text-xs font-bold px-3 py-1 rounded-full">$35</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">45 min</p>
                    <p className="text-gray-700 text-sm font-semibold">Want to begin the conversion process but don&apos;t know where to start?</p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "A step-by-step explanation of the conversion process",
                        "Budget planning for the conversion journey",
                        "An overview of the different recognitions by the Israeli Rabbinate and the Israeli Ministry of Interior",
                        "Exploring options for conversion in Israel",
                        "Connecting you with a Jewish community, rabbi, or conversion program if needed and if possible",
                      ].map((b) => (
                        <li key={b} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                          <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-gray-100">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Schedule here — select language</p>
                      <div className="flex flex-wrap gap-2">
                        {langs.map((lang) => (
                          <button key={lang} onClick={() => setSelectedLang((p) => ({ ...p, [id]: lang }))}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                              chosen === lang ? "bg-[#6B21A8] border-[#6B21A8] text-white" : "border-gray-300 text-gray-600 hover:border-[#6B21A8] hover:text-[#6B21A8]"
                            }`}>
                            {lang}
                          </button>
                        ))}
                      </div>
                      <button onClick={() => openModal(id, label)} disabled={!chosen}
                        className={`inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full text-sm tracking-wide transition-all self-start ${
                          chosen ? "bg-[#6B21A8] hover:bg-[#4C1D95] text-white shadow-md cursor-pointer" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}>
                        Book a Session
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                );
              })()}

              {/* ── Box 2: Emotional Support ── */}
              {(() => {
                const id = "emotional";
                const label = "Emotional Support";
                const langs = Object.keys(CALENDLY[id]);
                const chosen = selectedLang[id];
                return (
                  <motion.div key={id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
                    className="bg-white border-2 border-[#6B21A8] rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-[#6B21A8]/10 flex items-center justify-center text-[#6B21A8]">
                      <HeartIcon />
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug">{label}</h3>
                      <span className="shrink-0 bg-[#6B21A8] text-white text-xs font-bold px-3 py-1 rounded-full">$35</span>
                    </div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">45 min</p>
                    <p className="text-gray-700 text-sm font-semibold">A safe, non-judgmental space to discuss the personal and emotional aspects of conversion:</p>
                    <ul className="flex flex-col gap-2">
                      {[
                        "Guidance on sensitive topics: Family dynamics, community integration, and lifestyle changes.",
                        "Personal insights: Sessions are led by an instructor who has successfully navigated the conversion process.",
                        "Unbiased support: Ask the questions you might feel uncomfortable asking elsewhere.",
                      ].map((b) => (
                        <li key={b} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                          <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-gray-100">
                      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Schedule here — select language</p>
                      <div className="flex flex-wrap gap-2">
                        {langs.map((lang) => (
                          <button key={lang} onClick={() => setSelectedLang((p) => ({ ...p, [id]: lang }))}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                              chosen === lang ? "bg-[#6B21A8] border-[#6B21A8] text-white" : "border-gray-300 text-gray-600 hover:border-[#6B21A8] hover:text-[#6B21A8]"
                            }`}>
                            {lang}
                          </button>
                        ))}
                      </div>
                      <button onClick={() => openModal(id, label)} disabled={!chosen}
                        className={`inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full text-sm tracking-wide transition-all self-start ${
                          chosen ? "bg-[#6B21A8] hover:bg-[#4C1D95] text-white shadow-md cursor-pointer" : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}>
                        Book a Session
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                );
              })()}

              {/* ── Box 3: Hebrew Classes ── */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={reveal}
                className="bg-white border-2 border-[#6B21A8] rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#6B21A8]/10 flex items-center justify-center text-[#6B21A8]">
                  <BookIcon />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug">Hebrew Classes</h3>
                  <span className="shrink-0 bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">Beginner</span>
                </div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">45 min · Beginner Level</p>
                <p className="text-gray-700 text-sm font-semibold">Our beginner program is designed to take you from the very first steps of the Aleph-Bet to a confident understanding of Hebrew basics, specifically tailored for the conversion journey.</p>
                <p className="text-gray-600 text-sm font-semibold">What you will gain:</p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Reading & Writing: Mastering the Aleph-Bet and achieving reading fluency with Nikud (vowels).",
                    "Core Grammar: Understanding essential sentence structures, gender (M/F), and plurals.",
                    "Liturgical Hebrew: Gaining familiarity with prayer structures and key vocabulary used in the Siddur.",
                    "Confidence: Developing the skills needed to participate actively in Jewish life and community.",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
                      <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#6B21A8]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 pt-2">
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Pricing</p>
                  {[
                    { label: "Trial lesson (30 min)", price: "$18" },
                    { label: "Single lesson", price: "$40" },
                    { label: "8 lessons", price: "$305" },
                    { label: "12 lessons", price: "$420" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between text-sm border-b border-gray-100 pb-1.5">
                      <span className="text-gray-600">{row.label}</span>
                      <span className="font-bold text-gray-900">{row.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a href={HEBREW_TRIAL_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#fb7109] hover:bg-[#e86508] text-white font-semibold px-5 py-3 rounded-full text-sm tracking-wide transition-all shadow-md">
                    Book your trial lesson here
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
          <div className="absolute -bottom-px left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#6B21A8" />
            </svg>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="relative bg-[#6B21A8] text-white py-24 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
              Your journey, made simple
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              className="font-serif text-4xl sm:text-5xl font-bold mb-16 leading-tight text-center">
              How it works
            </motion.h2>

            <div className="relative">
              <div className="hidden sm:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px z-0">
                <div className="w-full h-full border-t-2 border-dashed border-brand-gold/25" />
              </div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
                {steps.map((step, i) => (
                  <motion.div key={step.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal}
                    className="flex flex-col items-center text-center gap-5">
                    <div className="relative shrink-0 z-10">
                      <div className="w-20 h-20 rounded-full border-2 border-brand-gold/50 bg-[#6B21A8] flex items-center justify-center text-brand-gold">
                        <step.icon />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-gold text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="sm:hidden text-brand-gold/30">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif text-xl font-bold text-white">{step.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                      {step.note && (
                        <p className="text-brand-gold text-xs font-semibold mt-1">{step.note}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -bottom-px left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* ── TESTIMONIALS CAROUSEL ── */}
        <section className="relative bg-white pt-8 pb-36 px-0 overflow-hidden">
          <style>{`
            @keyframes marquee-services {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-services-track {
              animation: marquee-services 55s linear infinite;
            }
          `}</style>
          <div className="max-w-6xl mx-auto px-6 mb-12">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase text-center mb-3">
              What people say
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 text-center">
              Stories that <span className="text-brand-gold">inspire us</span>
            </motion.h2>
          </div>
          <div
            className="overflow-hidden"
            onMouseEnter={e => (e.currentTarget.querySelector<HTMLElement>('.marquee-services-track')!.style.animationPlayState = 'paused')}
            onMouseLeave={e => (e.currentTarget.querySelector<HTMLElement>('.marquee-services-track')!.style.animationPlayState = 'running')}
          >
            <div className="marquee-services-track flex gap-5 w-max px-5">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="w-80 shrink-0 bg-white border border-gray-200 hover:border-[#6B21A8]/40 rounded-2xl p-7 flex flex-col gap-4 transition-colors duration-300 shadow-sm">
                  <span className="text-brand-gold text-3xl font-serif leading-none">&ldquo;</span>
                  <p className="text-gray-700 text-sm leading-relaxed">{t.quote}</p>
                  <span className="text-brand-gold text-3xl font-serif leading-none self-end">&rdquo;</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-px left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#fb7109" />
            </svg>
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <section className="bg-[#fb7109] py-20 px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Ready to begin?</p>
              <h2 className="font-serif text-3xl font-bold leading-snug mb-2 text-white">Start your journey today</h2>
              <p className="text-white/80 text-sm max-w-md">Have a question before booking? Reach out and we&apos;ll help you find the right session.</p>
            </div>
            <Link href="/contact"
              className="shrink-0 bg-white hover:bg-gray-50 text-[#fb7109] font-semibold px-9 py-4 rounded-full text-sm tracking-wide transition-all shadow-lg">
              Contact Us
            </Link>
          </motion.div>
        </section>

      </div>

      {modal && (
        <PaymentModal
          service={modal.service}
          language={modal.language}
          onClose={() => setModal(null)}
        />
      )}
    </PayPalScriptProvider>
  );
}
