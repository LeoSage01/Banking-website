/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4e07f3",
        translucent: "#ffffff9d",
        // dimWhite: "rgba(255, 255, 255, 0.7)",
        // dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        sans: ["open-sans"],
      },
    },
    screens: {
      sm: "630px",
      md: "768px",
      // lg: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}