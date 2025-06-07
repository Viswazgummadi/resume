// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merienda: ["Merienda", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-bg": "#000000",
        "secondary-bg": "#121212",
        "card-bg": "#1A1A1A", // Slightly lighter card background for better contrast
        "text-primary": "#f0f0f0", // Brighter white for primary text
        "text-secondary": "#b0b0b0",
        accent: "#ffffff",
        "accent-hover": "#e0e0e0",
        "border-color": "#383838", // Slightly lighter border
        "glow-color": "rgba(255, 255, 255, 0.2)", // For subtle white glows
      },
      boxShadow: {
        "glow-sm": "0 0 8px 2px var(--tw-shadow-color, rgba(255,255,255,0.1))",
        "glow-md": "0 0 15px 5px var(--tw-shadow-color, rgba(255,255,255,0.1))",
        "card-hover":
          "0 10px 25px -5px rgba(255, 255, 255, 0.07), 0 8px 10px -6px rgba(255, 255, 255, 0.07)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "subtle-pulse": "subtlePulse 2s infinite ease-in-out",
        "text-clip-reveal": "textClipReveal 1s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        subtlePulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.03)", opacity: "0.8" },
        },
        textClipReveal: {
          // For animated headings
          "0%": { "clip-path": "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          "100%": { "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
      },
    },
  },
  plugins: [],
};
