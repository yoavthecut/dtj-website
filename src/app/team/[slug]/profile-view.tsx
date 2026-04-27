"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { reveal } from "@/lib/motion";
import { team, type TeamMember } from "@/lib/team";

export default function ProfileView({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ── PROFILE HEADER ── */}
      <section className="relative bg-brand-purple text-white pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,_#9333EA_0%,_transparent_70%)] opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <Link href="/team" className="absolute -top-4 left-0 inline-flex items-center gap-2 text-white/70 hover:text-brand-gold text-sm font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to team
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}
            className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-4 ring-brand-gold shadow-[0_0_40px_rgba(245,158,11,0.25)]"
          >
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="208px"
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
              {member.name}
            </h1>
            <p className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase">{member.title}</p>
            {member.role && (
              <p className="text-white/70 text-base">{member.role}</p>
            )}
          </motion.div>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {member.bio ? (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="flex flex-col gap-6 text-gray-700 text-lg leading-relaxed"
            >
              {member.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {member.bookable !== false && (
                  <Link href="/services"
                    className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-yellow-400 text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all shadow-[0_0_30px_rgba(245,158,11,0.25)]">
                    Book a 1:1 consultation
                  </Link>
                )}
                <Link href="/team"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all">
                  Meet the rest of the team
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
              className="flex flex-col items-center text-center gap-6"
            >
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                A full bio for {member.name} is coming soon.
              </p>
              <Link href="/team"
                className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all">
                Back to team
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── OTHER TEAM MEMBERS ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-purple text-xs font-bold tracking-[0.2em] uppercase text-center mb-3">More of the team</p>
          <h2 className="font-serif text-3xl font-bold text-gray-900 text-center mb-12">Meet our other consultants</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 justify-items-center">
            {team.filter((m) => m.slug !== member.slug).slice(0, 5).map((m) => (
              <Link key={m.slug} href={`/team/${m.slug}`} className="group flex flex-col items-center text-center gap-3 cursor-pointer">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-transparent group-hover:ring-brand-gold transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-serif text-sm font-bold text-gray-900 group-hover:text-brand-purple transition-colors leading-tight">{m.name}</h3>
                  <p className="text-brand-purple text-xs font-semibold">{m.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
