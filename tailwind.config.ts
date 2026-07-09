import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Wipe defaults — no Tailwind gray/blue/etc. Only our tokens.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      bg: "var(--bg)",
      surface: "var(--surface)",
      primary: "var(--primary)",
      accent1: "var(--accent-1)",
      accent2: "var(--accent-2)",
      accent3: "var(--accent-3)",
      text: "var(--text)",
      muted: "var(--muted)",
    },
    extend: {
      fontFamily: {
        display: ["Clash Display", "var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
      },
      borderRadius: {
        chunk: "1.75rem",
      },
      boxShadow: {
        chunk: "0 10px 0 -2px rgba(0,0,0,0.08), 0 20px 40px -10px rgba(0,0,0,0.15)",
        pop: "6px 6px 0 0 var(--primary)",
        popSm: "3px 3px 0 0 var(--primary)",
        glow: "0 0 80px 0 var(--accent-1)",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.05)" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        wobble: "wobble 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
