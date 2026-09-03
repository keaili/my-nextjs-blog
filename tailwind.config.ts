import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        // Neobrutalism colors
        "neo-yellow": "#FFF133",
        "neo-pink": "#FF90E8",
        "neo-blue": "#7DF9FF",
        "neo-green": "#00FF66",
        "neo-red": "#FF6058",
        "neo-black": "#000000",
        "neo-white": "#FFFFFF",
        "neo-bg": "#F8F8F8",
        // Dark editorial bento colors
        "bento-bg": "#211D1A",
        "bento-card": "#2E2925",
        "bento-taupe": "#7A6B58",
        "bento-olive": "#6B6353",
        "bento-rust": "#8A3A20",
        "bento-clay": "#C97B4A",
        "bento-cream": "#EFE8DC",
        "bento-sand": "#C9BBA6",
        "bento-line": "#3A332D",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
        // Neobrutalism shadows
        "neo-sm": "4px 4px 0px 0px rgba(0, 0, 0, 1)",
        "neo-md": "6px 6px 0px 0px rgba(0, 0, 0, 1)",
        "neo-lg": "8px 8px 0px 0px rgba(0, 0, 0, 1)",
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};
export default config;
