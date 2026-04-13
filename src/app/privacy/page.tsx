"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>We collect information that you voluntarily provide to us when registering for services, including:</p>
        <ul>
          <li><strong>Personal Identification:</strong> Name, email address, and contact details.</li>
          <li><strong>Sensitive Information:</strong> Details regarding your religious background, spiritual journey, and conversion process, shared during 1:1 consultations or support sessions.</li>
          <li><strong>Payment Data:</strong> Transaction details processed via secure third-party providers (PayPal). We do not store your full credit card information on our servers.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>Your data is used strictly for the following purposes:</p>
        <ul>
          <li>To provide and manage your consultations, Hebrew classes, and webinar subscriptions.</li>
          <li>To personalize your educational experience and provide emotional support.</li>
          <li>To send administrative updates, receipts, and (with your consent) newsletters.</li>
          <li>To comply with legal and regulatory requirements under Israeli law.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Data Security & Protection (Amendment No. 13)",
    content: (
      <>
        <p>In accordance with Amendment No. 13 of the Israeli Protection of Privacy Law, we implement rigorous security standards:</p>
        <ul>
          <li><strong>Security Measures:</strong> We use advanced physical, administrative, and technical safeguards to prevent unauthorized access, disclosure, or destruction of your data.</li>
          <li><strong>Breach Notification:</strong> In the event of a &quot;Serious Security Incident&quot; as defined by Israeli law, we are committed to notifying the Privacy Protection Authority and affected users as required.</li>
          <li><strong>Confidentiality:</strong> All consultants and staff members are bound by strict confidentiality agreements regarding your personal and religious information.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Third-Party Services",
    content: (
      <p>
        We use trusted third-party platforms (such as PayPal for payments and Zoom/Google Meet for classes).
        While these providers adhere to high international security standards (GDPR/CCPA), we encourage you
        to review their respective privacy policies.
      </p>
    ),
  },
  {
    title: "5. Your Rights",
    content: (
      <>
        <p>Under Israeli law, you have the following rights:</p>
        <ul>
          <li><strong>Right of Review:</strong> You may request to view the personal data we hold about you.</li>
          <li><strong>Right to Correction/Deletion:</strong> You may request that we correct or delete any inaccurate or outdated information.</li>
          <li><strong>Withdrawal of Consent:</strong> You may withdraw your consent for data processing at any time, though this may limit our ability to provide certain services.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. International Data Transfers",
    content: (
      <p>
        As we serve a global community, your information may be stored or processed outside of Israel.
        We ensure that such transfers are conducted via secure channels that provide a level of protection
        consistent with Israeli privacy regulations.
      </p>
    ),
  },
  {
    title: "7. Cookies",
    content: (
      <p>
        Our website uses cookies to enhance your browsing experience and analyze site traffic.
        You can manage your cookie preferences through your browser settings.
      </p>
    ),
  },
  {
    title: "8. Contact Us",
    content: (
      <>
        <p>For any questions regarding your privacy, or to exercise your rights, please contact our Data Protection Lead at:</p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:manager@dtj.info" className="text-brand-purple font-semibold hover:underline">
            manager@dtj.info
          </a>
        </p>
        <p><strong>Address:</strong> Jerusalem, Israel</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
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
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            Privacy <span className="italic text-brand-gold">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-sm"
          >
            Effective Date: March 17, 2026 &nbsp;&middot;&nbsp; Organization: Destined to be a Jew (ע&quot;ר 580820942) &nbsp;&middot;&nbsp; Contact: manager@dtj.info
          </motion.p>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#BAE6FD" />
          </svg>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-[#BAE6FD] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-gray-500 leading-relaxed mb-12"
          >
            At Destined to be a Jew, we respect your privacy and are committed to protecting the personal information
            you share with us. This policy outlines how we collect, use, and safeguard your data in compliance with
            the Israeli Protection of Privacy Law (including Amendment No. 13).
          </motion.p>

          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} variants={reveal}
                className="flex flex-col gap-3"
              >
                <h2 className="font-serif text-xl font-bold text-gray-900">{section.title}</h2>
                <div className="text-gray-500 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-gray-700">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
