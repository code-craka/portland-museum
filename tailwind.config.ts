import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-karla)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        cream: "#F5F0E8",
        "cream-dark": "#EDE6D8",
        charcoal: "#1C1C1C",
        "charcoal-light": "#2E2E2E",
        rust: "#8B4A2F",
        "rust-light": "#A85A3A",
        sage: "#5C7A5A",
        navy: "#2C3E5C",
        gold: "#C9A96E",
        "gold-light": "#D9BA8E",
        stone: "#7A7060",
        "stone-light": "#9A9080",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};

export default config;
