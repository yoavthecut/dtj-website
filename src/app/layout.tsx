import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600", "700", "800"] });
const jakartaSansSerif = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-playfair", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Destined to be a Jew",
  description: "Supporting converts to Judaism worldwide. Bringing Jewish souls back home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} ${jakartaSansSerif.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
