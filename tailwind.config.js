/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#F5F2EB",
        cream: "#FAF9F6",
        charcoal: "#1A1A1A",
        gold: "#B08D57",
        "gold-light": "#D4B896",
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
