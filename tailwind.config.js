/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./archive/**/*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        brand: {
          green: "#1E5E3A",
          darkgreen: "#144329",
          gold: "#D4A017",
          accent: "#2563EB",
          softblue: "#EBF4FE",
          softmint: "#F0FDF4",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
