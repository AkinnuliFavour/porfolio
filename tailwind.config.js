/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";

const CustomStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-primary": "#181818",
        "text-secondary": "#808080",
        "bg-light": "#F9F9F9",
        "bg-card": "#F6F6F6",
        "tag-bg": "#313131",
        "tag-border": "#222",
      },
      boxShadow: {
        "card-default":
          "0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
        tag: "0 2px 4px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 300ms ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [CustomStyle],
};
