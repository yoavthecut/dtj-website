"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

const sections = [
  {
    title: "1. General Use & User Accounts",
    content: (
      <p>
        To access specific features, such as our Monthly Webinar Subscription, you must create a user account.
        You are responsible for maintaining the confidentiality of your account credentials.
      </p>
    ),
  },
  {
    title: "2. Services, Payments & Pricing",
    content: (
      <ul>
        <li><strong>1:1 Consultations &amp; Support:</strong> 45-minute video sessions ($35).</li>
        <li><strong>Hebrew Classes:</strong> 45-minute instructional sessions. Pricing varies based on the selected lesson package. Complete details are available on the dedicated Lesson Booking page.</li>
        <li><strong>Monthly Webinar Subscription:</strong> A recurring $12/month subscription (via PayPal) providing access to live weekly webinars and our VOD library.</li>
        <li><strong>Donations:</strong> Voluntary charitable contributions. Tax-deductibility is subject to your local jurisdiction&apos;s laws (typically tax-deductible globally, excluding Israel).</li>
      </ul>
    ),
  },
  {
    title: "3. Booking, Refund & Cancellation Policy",
    content: (
      <>
        <p><strong>Scheduling:</strong> Both 1:1 Consultations and Hebrew Classes must be scheduled at least 48 hours in advance.</p>
        <p><strong>Cancellations &amp; Refunds:</strong> A full refund is available for sessions cancelled with at least 48 hours&apos; notice. Any cancellation submitted less than 48 hours in advance, or a failure to appear for a scheduled session, shall result in the forfeiture of the session fee.</p>
        <p><strong>Subscriptions:</strong> Webinar subscriptions can be canceled at any time, but past payments are non-refundable. Access is revoked upon the end of the current billing cycle.</p>
      </>
    ),
  },
  {
    title: "4. Legal Disclaimer (Limitation of Liability)",
    content: (
      <>
        <p>Destined to be a Jew provides educational and emotional support. We do not guarantee:</p>
        <ul>
          <li>Successful completion of a conversion process.</li>
          <li>Recognition or approval of the conversion by any Rabbinical Court (Beit Din), the Chief Rabbinate of Israel, the Israeli Ministry of Interior, or any other official body.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Privacy, Data Protection & Security (Amendment No. 13)",
    content: (
      <>
        <p>In compliance with the Israeli Protection of Privacy Law (Amendment No. 13):</p>
        <ul>
          <li><strong>Informed Consent:</strong> By using our services, you provide informed consent for the collection of personal and sensitive information regarding your spiritual journey.</li>
          <li><strong>Security Standards:</strong> We employ rigorous administrative and technological security measures to protect your data.</li>
          <li><strong>Data Rights:</strong> You maintain the right to review, correct, or request the deletion of your personal information.</li>
          <li><strong>Incident Notification:</strong> We adhere to mandatory reporting requirements for serious data security incidents.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Intellectual Property",
    content: (
      <p>
        All website content, including webinar recordings, VOD library materials, and written guides, is the exclusive
        property of Destined to be a Jew. Unauthorized distribution or recording is prohibited.
      </p>
    ),
  },
  {
    title: "7. Governing Law",
    content: (
      <p>
        These Terms are governed by the laws of the State of Israel. Any legal disputes shall be settled exclusively
        in the competent courts of Jerusalem, Israel.
      </p>
    ),
  },
];

export default function TermsPage() {
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
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
          >
            Terms of <span className="text-brand-gold">Service</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-sm flex flex-col gap-1"
          >
            <span>Effective Date: March 17, 2026</span>
            <span>Organization: Destined to be a Jew (ע&quot;ר 580820942)</span>
            <span>Contact: manager@dtj.info</span>
          </motion.div>
        </div>

        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 32C840 40 960 48 1080 44C1200 40 1320 24 1380 16L1440 8V80H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={reveal}
            className="text-gray-500 leading-relaxed mb-12"
          >
            Welcome to Destined to be a Jew. By accessing our website and utilizing our services, you agree to
            comply with and be bound by the following Terms of Service.
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
