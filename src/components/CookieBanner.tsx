"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e0336] border-t border-brand-gold/20 px-6 py-5 shadow-2xl"
        >
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-white/75 text-sm leading-relaxed flex-1 text-center sm:text-left">
              We use cookies to improve your experience on our site. By continuing, you agree to our{" "}
              <Link href="/privacy" className="text-brand-gold hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2.5 rounded-full border border-white/20 text-white/60 text-sm font-medium hover:border-white/40 hover:text-white/80 transition-all"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-6 py-2.5 rounded-full bg-brand-gold hover:bg-yellow-400 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
