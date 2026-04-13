"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

const sections = [
  {
    title: "1. Subscription Overview",
    content: (
      <>
        <p>The Monthly Webinar Subscription provides users with exclusive access to:</p>
        <ul>
          <li><strong>Weekly Live Webinars:</strong> Interactive sessions led by our educators.</li>
          <li><strong>VOD Library:</strong> On-demand access to our full archive of past webinar recordings.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Billing and Auto-Renewal",
    content: (
      <ul>
        <li><strong>Monthly Fee:</strong> The subscription cost is $12 per month.</li>
        <li><strong>Payment Method:</strong> Payments are processed securely via PayPal.</li>
        <li><strong>Automatic Renewal:</strong> To ensure uninterrupted access, your subscription will automatically renew each month on the same calendar day as your initial purchase (the &quot;Billing Date&quot;).</li>
      </ul>
    ),
  },
  {
    title: "3. Cancellation Policy",
    content: (
      <>
        <p>You have full control over your subscription and may cancel at any time:</p>
        <ul>
          <li><strong>How to Cancel:</strong> Cancellations can be managed directly through your Account Settings on our website.</li>
          <li><strong>Effective Date of Cancellation:</strong> Upon cancellation, your access to the live webinars and the VOD library will remain active until the end of your current billing cycle. No further charges will be applied after cancellation.</li>
          <li><strong>Access Revocation:</strong> Once the current billing period expires, your access to all subscription-only content will be automatically revoked.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. No-Refund Policy",
    content: (
      <ul>
        <li><strong>Past Payments:</strong> All subscription fees are non-refundable. We do not provide pro-rated refunds or credits for partially used monthly billing periods.</li>
        <li><strong>Trial Periods:</strong> Unless explicitly stated otherwise, all subscriptions begin with a full monthly charge.</li>
      </ul>
    ),
  },
  {
    title: "5. Changes to the Webinar Schedule",
    content: (
      <>
        <p>Destined to be a Jew is committed to providing consistent, high-quality weekly live sessions. However, the organization reserves the right to make adjustments to the webinar schedule under the following conditions:</p>
        <ul>
          <li><strong>Rescheduling &amp; Cancellations:</strong> We reserve the right to reschedule, cancel, or change the speaker/topic of any live webinar due to technical difficulties, illness, Israeli public holidays, or unforeseen circumstances.</li>
          <li><strong>Notification:</strong> In the event of a significant change or cancellation of a live session, we will notify subscribers via email as early as possible.</li>
          <li><strong>No Pro-rated Refunds:</strong> The monthly subscription fee grants access to the entire VOD Library as well as the live sessions. The cancellation or rescheduling of an individual live webinar does not entitle the subscriber to a partial or full refund of the monthly fee.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Price Changes",
    content: (
      <p>
        We reserve the right to adjust the monthly subscription fee. In the event of a price change, all active
        subscribers will be notified via email at least 30 days in advance. Continued use of the subscription after
        the price change constitutes acceptance of the new rate.
      </p>
    ),
  },
  {
    title: "7. Contact Support",
    content: (
      <p>
        If you experience any technical issues with your subscription or need assistance with cancellation, please
        contact our support team at:{" "}
        <a href="mailto:manager@dtj.info" className="text-brand-purple font-semibold hover:underline">
          manager@dtj.info
        </a>
      </p>
    ),
  },
];

export default function SubscriptionPolicyPage() {
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
            Subscription <span className="italic text-brand-gold">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-sm"
          >
            Effective Date: March 17, 2026 &nbsp;&middot;&nbsp; Organization: Destined to be a Jew (ע&quot;ר 580820942)
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
            By enrolling in our Monthly Webinar Subscription, you agree to the following terms and conditions.
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
