"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { reveal } from "@/lib/motion";

const team = [
  {
    name: "Noa Amalia Arazi",
    title: "CEO & Founder",
    role: "English & Hebrew-Speaking Consultant",
    photo: "/team/noa-amalia-arazi.jpg",
  },
  {
    name: "Rabbi Yonatan Goldshmidt",
    title: "Halachic Consultant",
    role: null,
    photo: "/team/rabbi-goldshmidt.jpg",
  },
  {
    name: "Odelia Avnery",
    title: "Hebrew Teacher",
    role: null,
    photo: "/team/odelia-avnery.jpg",
  },
  {
    name: "Melissa Elbaz",
    title: "Spanish-Speaking Consultant",
    role: null,
    photo: "/team/melissa-elbaz.jpg",
  },
  {
    name: "Jacqueline Passy",
    title: "Portuguese-Speaking Consultant",
    role: null,
    photo: "/team/jacqueline-passy.jpg",
  },
  {
    name: "Nechama Ovadia",
    title: "Immigration Attorney",
    role: null,
    photo: "/team/nechama-ovadia.jpg",
  },
  {
    name: "Irena Rosenberg",
    title: "Immigration Attorney",
    role: null,
    photo: "/team/irena-rosenberg.jpg",
  },
];

function Placeholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="w-full aspect-square bg-gradient-to-br from-brand-purple to-[#1e0336] flex items-center justify-center rounded-2xl">
      <span className="font-serif text-4xl font-bold text-white/40">{initials}</span>
    </div>
  );
}

export default function TeamPage() {
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
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ── TEAM GRID ── */}
      <section className="bg-[#BAE6FD] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={reveal}
                className="group flex flex-col gap-4"
              >
                {/* photo */}
                <div className="overflow-hidden rounded-2xl">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Placeholder name={member.name} />
                  )}
                </div>

                {/* info */}
                <div className="flex flex-col gap-1 pt-1">
                  <div className="w-8 h-0.5 bg-brand-gold group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-serif text-xl font-bold text-gray-900 mt-3">{member.name}</h3>
                  <p className="text-brand-purple text-sm font-semibold">{member.title}</p>
                  {member.role && (
                    <p className="text-gray-400 text-sm">{member.role}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN CTA ── */}
      <section className="relative bg-[#0f0020] text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute -top-px left-0 right-0 rotate-180">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
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
