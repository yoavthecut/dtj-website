"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { reveal } from "@/lib/motion";
import { team } from "@/lib/team";

export default function TeamPage() {
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
            The people behind it
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            Our <span className="text-brand-gold">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg max-w-lg leading-relaxed"
          >
            Consultants, educators, rabbinical advisors, and legal experts — all dedicated to supporting your journey.
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 justify-items-center">
            {team.map((member, i) => (
              <motion.div
                key={member.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={reveal}
                className="group flex flex-col items-center text-center w-full max-w-[200px]"
              >
                <Link href={`/team/${member.slug}`} className="flex flex-col items-center gap-4 cursor-pointer">
                  {/* circular photo */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-brand-gold transition-all duration-300 shadow-md group-hover:shadow-xl">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* info */}
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-brand-purple transition-colors leading-snug">{member.name}</h3>
                    <p className="text-brand-purple text-sm font-semibold">{member.title}</p>
                    {member.role && (
                      <p className="text-gray-400 text-xs">{member.role}</p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="relative bg-gradient-to-b from-[#6B21A8] via-[#581c87] to-[#3b0764] text-white py-24 px-6 text-center overflow-hidden">
        {/* atmospheric glow — soft warm highlight at top, deep shadow at bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,_rgba(168,85,247,0.35)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1e0336]/40 to-transparent pointer-events-none" />
        <div className="absolute -top-px left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
          className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6 pt-8">
          <div className="w-px h-12 bg-brand-gold opacity-60 mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to begin your journey?
          </h2>
          <p className="text-white/65 max-w-md leading-relaxed">
            Book a 1:1 consultation with one of our advisors and take the first step with confidence.
          </p>
          <a href="/services"
            className="bg-brand-gold hover:bg-yellow-400 text-white font-semibold px-10 py-4 rounded-full text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            Book a Consultation
          </a>
        </motion.div>
      </section>

    </div>
  );
}
