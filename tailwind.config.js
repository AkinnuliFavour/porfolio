/** @type {import('tailwindcss').Config} */

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
          "0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)",
        "card-hover":
          "0 8px 24px rgba(0, 0, 0, 0.10), 0 2px 8px rgba(0, 0, 0, 0.06)",
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
  plugins: [],
};
