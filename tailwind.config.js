/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        "ink-soft": "#141310",
        black: "#000000",
        ivory: "#F3EEE3",
        gold: "#C9A227",
        "gold-light": "#E7D19A",
        "gold-deep": "#8B6914",
      },
      fontFamily: {
        display: ["\"Playfair Display\"", "serif"],
        body: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
