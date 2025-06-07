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
        "primary-bg": "#000000", // Pure Black
        "secondary-bg": "#121212", // Very Dark Gray (almost black, good for subtle section bg difference)
        "card-bg": "#1f1f1f", // Dark Gray for cards
        "text-primary": "#e5e5e5", // Light Gray (Off-White)
        "text-secondary": "#a0a0a0", // Medium Gray for secondary text
        accent: "#ffffff", // White (this will be your main "pop" color)
        "accent-hover": "#cccccc", // Light gray for hover on white elements
        "border-color": "#333333", // Dark gray for subtle borders
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
