"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { reveal } from "@/lib/motion";

// ── Icons (solid fill) ────────────────────────────────────────────────────────

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

// Calendly URLs per service+language — swap "#placeholder" for real URLs
const CALENDLY: Record<string, Record<string, string>> = {
  consultation: {
    English:    "https://calendly.com/manager-dtj/30min",   // → manager@dtj.info's Calendly
    Spanish:    "https://calendly.com/melissa-elbaz-anthropo/30min",
    Portuguese: "#consultation-pt",   // → jacqueline.passy18@gmail.com's Calendly
  },
  emotional: {
    English:    "https://calendly.com/manager-dtj/30min",      // → manager@dtj.info's Calendly
    Portuguese: "#emotional-pt",      // → jacqueline.passy18@gmail.com's Calendly
  },
  // hebrew: {} — blank for now, card will show "Coming soon"
};

const services = [
  {
    id: "consultation",
    label: "1:1 Consultation",
    price: "$35",
    benefit: "Gain clarity, connection, and confidence on your journey to Judaism.",
    intro: "A deep dive session tailored to you. Meet with one of our experienced consultants who has personally lived the conversion process to:",
    bullets: [
      "Understand your unique conversion process.",
      "Find the right path for your specific needs.",
      "Confidently address all your questions.",
    ],
    detail: "45 min · All session details shared upon booking.",
    idealFor: "Those exploring Judaism or facing complex questions.",
    icon: ConsultationIcon,
  },
  {
    id: "emotional",
    label: "Emotional Support",
    price: "$35",
    benefit: "Find peace, strength, and perspective on a deeply personal path.",
    intro: "Conversion is as emotional as it is spiritual. Our consultants offer a safe, compassionate space to help you:",
    bullets: [
      "Process the weight of this life-changing decision.",
      "Reconnect with your purpose and motivation.",
      "Move forward with renewed strength and clarity.",
    ],
    detail: "45 min · All session details shared upon booking.",
    idealFor: "Those experiencing doubt, loneliness, or family tension.",
    icon: HeartIcon,
  },
  {
    id: "hebrew",
    label: "Hebrew Classes",
    price: "$35",
    benefit: "Connect with the language and soul of the Jewish people.",
    intro: "Hebrew is more than a language — it is the heartbeat of Jewish life. Our personalized classes help you:",
    bullets: [
      "Build practical reading and comprehension skills.",
      "Feel confident in prayers, texts, and community settings.",
      "Deepen your connection to Jewish identity and tradition.",
    ],
    detail: "45 min · All levels welcome.",
    idealFor: "Converts preparing for Beit Din or daily life in Israel.",
    icon: BookIcon,
  },
];

const steps = [
  { icon: ConsultationIcon, step: "01", title: "Choose your session", desc: "Browse our three session types and find the one that meets you where you are right now." },
  { icon: CalendarIcon,     step: "02", title: "Book a time",         desc: "Pick a date and language that work for you. We accommodate all time zones and schedules." },
  { icon: ArrowIcon,        step: "03", title: "Move forward",        desc: "Walk away with clarity, a clear next step, and the confidence to continue your journey." },
];

// ── Payment Modal ─────────────────────────────────────────────────────────────

interface ModalProps {
  service: typeof services[number];
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
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6">
          <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2">Complete your booking</p>
          <h3 className="font-serif text-2xl font-bold text-white leading-snug">{service.label}</h3>
          <p className="text-white/60 text-sm mt-1">{language} · 45 min session</p>
        </div>

        {/* Price */}
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
                setTimeout(() => {
                  window.open(calendlyUrl, "_blank", "noopener,noreferrer");
                  onClose();
                }, 1200);
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
  const [modal, setModal] = useState<{ service: typeof services[number]; language: string } | null>(null);

  function openModal(service: typeof services[number]) {
    const lang = selectedLang[service.id];
    if (!lang) return;
    setModal({ service, language: lang });
  }

  return (
    <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "PLACEHOLDER" }}>
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
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl font-bold leading-tight text-center"
            >
              Personalized guidance,{" "}
              <span className="italic text-brand-gold">every step of the way</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/70 text-lg max-w-xl leading-relaxed"
            >
              One-on-one sessions with consultants who have lived the journey — available in four languages, wherever you are in the world.
            </motion.p>
          </div>

          <div className="absolute -bottom-px left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
            </svg>
          </div>
        </section>

        {/* ── SERVICE CARDS ── */}
        <section className="bg-[#BAE6FD] py-28 px-6">
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
              className="text-gray-600 text-center max-w-md mx-auto mb-16 text-sm leading-relaxed">
              All sessions are $35, conducted by experienced consultants who understand your journey firsthand.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc, i) => {
                const availableLangs = Object.keys(CALENDLY[svc.id] ?? {});
                const hasLangs = availableLangs.length > 0;
                const chosenLang = selectedLang[svc.id];
                const canBook = hasLangs && !!chosenLang;

                return (
                  <motion.div key={svc.id}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal}
                    whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                    className="group relative bg-[#1e0336] border border-purple-900/60 rounded-2xl p-8 flex flex-col gap-4 overflow-hidden hover:border-brand-gold/60 transition-colors duration-300 shadow-lg"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,_rgba(245,158,11,0.14)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-brand-gold/15 group-hover:bg-brand-gold/25 flex items-center justify-center transition-all duration-300 text-brand-gold shadow-[0_0_14px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_22px_rgba(245,158,11,0.3)]">
                      <svc.icon />
                    </div>

                    {/* Title + price */}
                    <div className="relative z-10 flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-300 leading-snug">
                        {svc.label}
                      </h3>
                      <span className="shrink-0 bg-brand-gold/20 text-brand-gold text-xs font-bold px-2.5 py-1 rounded-full border border-brand-gold/30">
                        {svc.price}
                      </span>
                    </div>

                    {/* Benefit */}
                    <p className="text-white font-semibold text-sm leading-snug relative z-10">{svc.benefit}</p>

                    {/* Intro + bullets */}
                    <div className="relative z-10 flex flex-col gap-2">
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">{svc.intro}</p>
                      <ul className="flex flex-col gap-1.5 mt-1">
                        {svc.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                            <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detail */}
                    <p className="text-white/30 text-xs relative z-10">{svc.detail}</p>

                    {/* Ideal for */}
                    <p className="text-xs relative z-10">
                      <span className="text-white/40">Ideal for: </span>
                      <span className="text-brand-gold/80 font-medium">{svc.idealFor}</span>
                    </p>

                    {/* Language selector or Coming Soon */}
                    <div className="relative z-10 mt-auto flex flex-col gap-3">
                      {hasLangs ? (
                        <>
                          <p className="text-white/40 text-xs uppercase tracking-wider">Select language</p>
                          <div className="flex flex-wrap gap-2">
                            {availableLangs.map((lang) => (
                              <button
                                key={lang}
                                onClick={() => setSelectedLang((prev) => ({ ...prev, [svc.id]: lang }))}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                                  chosenLang === lang
                                    ? "bg-brand-gold border-brand-gold text-white shadow-md"
                                    : "bg-white/8 border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                                }`}
                              >
                                {lang}
                              </button>
                            ))}
                          </div>
                          <button
                            onClick={() => openModal(svc)}
                            disabled={!canBook}
                            className={`inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-full text-sm tracking-wide transition-all self-start ${
                              canBook
                                ? "bg-brand-gold hover:bg-yellow-400 text-white hover:-translate-y-0.5 shadow-md hover:shadow-lg cursor-pointer"
                                : "bg-white/10 text-white/30 cursor-not-allowed"
                            }`}
                          >
                            Book a Session
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </button>
                        </>
                      ) : (
                        <span className="text-white/30 text-xs font-semibold tracking-widest uppercase">Coming soon</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — horizontal timeline ── */}
        <section className="relative bg-[#0f0020] text-white py-28 px-6 overflow-hidden">
          <div className="absolute -top-px left-0 right-0 rotate-180">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
            </svg>
          </div>

          <div className="max-w-5xl mx-auto pt-8">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
              Your journey, made simple
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
              className="font-serif text-4xl sm:text-5xl font-bold mb-16 leading-tight text-center">
              How it works
            </motion.h2>

            <div className="relative">
              {/* Dashed connecting line (desktop) */}
              <div className="hidden sm:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px z-0">
                <div className="w-full h-full border-t-2 border-dashed border-brand-gold/25" />
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6">
                {steps.map((step, i) => (
                  <motion.div key={step.title}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={reveal}
                    className="flex flex-col items-center text-center gap-5"
                  >
                    <div className="relative shrink-0 z-10">
                      <div className="w-20 h-20 rounded-full border-2 border-brand-gold/50 bg-[#0f0020] flex items-center justify-center text-brand-gold">
                        <step.icon />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-gold text-white text-xs font-bold flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                    </div>

                    {/* Mobile arrow */}
                    {i < steps.length - 1 && (
                      <div className="sm:hidden text-brand-gold/30">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                      </div>
                    )}

                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif text-xl font-bold text-white">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-px left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 0L60 12C120 24 240 48 360 56C480 64 600 56 720 48C840 40 960 32 1080 36C1200 40 1320 56 1380 64L1440 72V80H0Z" fill="#BAE6FD" />
            </svg>
          </div>
        </section>

        {/* ── TESTIMONIAL ── */}
        <section className="bg-[#BAE6FD] py-20 px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5"
          >
            <div className="w-10 h-0.5 bg-brand-gold/50" />
            <p className="font-serif text-3xl sm:text-4xl italic text-gray-800 leading-relaxed">
              &ldquo;This consultation gave me the exact clarity and confidence I needed to move forward.&rdquo;
            </p>
            <p className="text-gray-500 text-sm tracking-widest uppercase font-semibold">— Community Member</p>
            <div className="w-10 h-0.5 bg-brand-gold/50" />
          </motion.div>
        </section>

        {/* ── CTA STRIP ── */}
        <section className="bg-[#BAE6FD] py-20 px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl bg-[#1e0336] text-white p-10">
            <div>
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">Ready to begin?</p>
              <h2 className="font-serif text-3xl font-bold leading-snug mb-2">Start your journey today</h2>
              <p className="text-white/65 text-sm max-w-md">Have a question before booking? Reach out and we&apos;ll help you find the right session.</p>
            </div>
            <Link href="/contact"
              className="shrink-0 bg-brand-gold hover:bg-yellow-400 text-white font-semibold px-9 py-4 rounded-full text-sm tracking-wide transition-all shadow-lg">
              Contact Us
            </Link>
          </motion.div>
        </section>

      </div>

      {/* ── PAYMENT MODAL ── */}
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
