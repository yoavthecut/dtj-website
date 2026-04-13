"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const JPOST_URL =
  "https://www.jpost.com/judaism/article-800567?fbclid=IwZXh0bgNhZW0CMTEAAR0bCwdn6Zxar7WyYwO__KqMXVIuxsFQs-O397aYk3L5uTHxVRnrhw3aAJo_aem_AZtAzFJWftlWTwUiQCR1lrKjhsjkJNf6bo0v9C_npyFrfSxuGt5h7KN3ATbG-HFBhzPotDajMXAe25NSOMxNxivR";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="rounded-full border-2 border-brand-gold p-0.5">
              <Image
                src="/logo.png"
                alt="Destined to be a Jew"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <span className="font-bold text-brand-purple text-sm leading-tight hidden sm:block">
              Destined to be a Jew
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-brand-purple transition-colors py-5">
                About
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-100">
                  <Link
                    href="/about"
                    className="block px-4 py-2 hover:bg-purple-50 hover:text-brand-purple transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/team"
                    className="block px-4 py-2 hover:bg-purple-50 hover:text-brand-purple transition-colors"
                  >
                    Our Team
                  </Link>
                  <a
                    href={JPOST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-purple-50 hover:text-brand-purple transition-colors"
                  >
                    In the Media
                  </a>
                </div>
              )}
            </div>

            <Link href="/services" className="hover:text-brand-purple transition-colors">
              Services
            </Link>
            <Link href="/guides" className="hover:text-brand-purple transition-colors">
              Guides
            </Link>
            <Link href="/faq" className="hover:text-brand-purple transition-colors">
              FAQ
            </Link>
            <Link href="/events" className="hover:text-brand-purple transition-colors">
              Events
            </Link>
            <Link href="/contact" className="hover:text-brand-purple transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/donate"
              className="bg-brand-gold hover:bg-brand-gold/90 text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/signup"
              className="border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
            >
              Sign Up
            </Link>
            <Link
              href="/signin"
              className="text-brand-purple hover:underline font-medium text-sm"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-brand-purple"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-gray-700">
          <p className="text-xs text-gray-400 uppercase tracking-wider">About</p>
          <Link href="/about" className="pl-2 hover:text-brand-purple" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>
          <Link href="/team" className="pl-2 hover:text-brand-purple" onClick={() => setMobileOpen(false)}>
            Our Team
          </Link>
          <a
            href={JPOST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-2 hover:text-brand-purple"
            onClick={() => setMobileOpen(false)}
          >
            In the Media
          </a>
          <Link href="/services" className="hover:text-brand-purple" onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          <Link href="/guides" className="hover:text-brand-purple" onClick={() => setMobileOpen(false)}>
            Guides
          </Link>
          <Link href="/faq" className="hover:text-brand-purple" onClick={() => setMobileOpen(false)}>
            FAQ
          </Link>
          <Link href="/events" className="hover:text-brand-purple" onClick={() => setMobileOpen(false)}>
            Events
          </Link>
          <Link href="/contact" className="hover:text-brand-purple" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <div className="flex gap-3 pt-2 border-t border-gray-100">
            <Link
              href="/donate"
              className="bg-brand-gold text-white font-semibold px-4 py-2 rounded-full text-sm flex-1 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Donate
            </Link>
            <Link
              href="/signup"
              className="border border-brand-purple text-brand-purple font-semibold px-4 py-2 rounded-full text-sm flex-1 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/signin"
              className="text-brand-purple font-medium text-sm self-center"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
