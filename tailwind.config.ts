import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          purple: "#6B21A8",     // deep violet — primary brand color
          "purple-dark": "#4C1D95",
          "purple-light": "#A855F7",
          blue: "#7DD3FC",       // light blue
          "blue-soft": "#E0F2FE",
          sky: "#BAE6FD",        // soft sky blue
          gold: "#F59E0B",       // gold/yellow accents
          "gold-light": "#FDE68A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
