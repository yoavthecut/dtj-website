"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

const notes = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Tax-Deductible",
    desc: "Contributions are tax-deductible in most countries worldwide (not currently in Israel).",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Automated Receipts",
    desc: "A digital receipt is automatically sent to your email immediately after your contribution.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    label: "Need Help?",
    desc: "For questions about your donation, reach out at manager@dtj.info",
  },
];

export default function DonatePage() {
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
            Make a difference
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            Be a Partner in Their{" "}
            <span className="text-brand-gold">Journey Home</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg max-w-lg leading-relaxed"
          >
            Every soul returning to the Jewish people is a milestone for all of us.
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── CONTENT + FORM ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3">Support our mission</p>
              <h2 className="font-serif text-4xl font-bold text-gray-900 leading-tight mb-6">
                Join us in strengthening the future of the Jewish people.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Your support allows us to bridge the gaps, simplify the bureaucracy, and ensure that no one has to walk this path alone.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Every contribution — large or small — helps us provide accessible guidance, emotional support, and community to people on their conversion journey around the world.
              </p>
            </div>

            {/* Notes */}
            <div className="flex flex-col gap-5">
              {notes.map((note) => (
                <div key={note.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center shrink-0 text-brand-purple mt-0.5">
                    {note.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">{note.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{note.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — israelgives iframe */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={reveal}
            className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <iframe
              src="https://secured.israelgives.org/pay/makedonation?MakeDonation=1&AmutaGovId=580820942"
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="auto"
              title="Donate to Destined to be a Jew"
              className="w-full"
            />
          </motion.div>

        </div>
      </section>

    </div>
  );
}
