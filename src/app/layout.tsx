import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600", "700", "800"] });
const jakartaSansSerif = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-playfair", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dtbj.info"),
  title: "Destined to be a Jew",
  description: "Supporting converts to Judaism worldwide. Bringing Jewish souls back home.",
  openGraph: {
    title: "Destined to be a Jew",
    description: "Supporting converts to Judaism worldwide. Bringing Jewish souls back home.",
    url: "https://dtbj.info",
    siteName: "Destined to be a Jew",
    images: [
      {
        url: "/logo.png",
        width: 1563,
        height: 1563,
        alt: "Destined to be a Jew",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Destined to be a Jew",
    description: "Supporting converts to Judaism worldwide. Bringing Jewish souls back home.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} ${jakartaSansSerif.variable} font-sans antialiased flex flex-col min-h-screen`}>
        {/* Skip-to-content link for keyboard / screen-reader users (WCAG 2.4.1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brand-purple focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-gold"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />

        {/*
          UserWay accessibility widget — adjusts font size, contrast, link highlights,
          dyslexia-friendly fonts, etc. Replace `data-account` with your real account ID
          once you create one at https://userway.org (free tier available).
        */}
        <Script
          id="userway-widget"
          src="https://cdn.userway.org/widget.js"
          strategy="afterInteractive"
          data-account={process.env.NEXT_PUBLIC_USERWAY_ACCOUNT_ID ?? "YOUR_USERWAY_ACCOUNT_ID"}
        />
      </body>
    </html>
  );
}
