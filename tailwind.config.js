/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#603FEF",
        translucent: "#cac7c77b",
      },
    },
    screens: {
      // xs: "",
      sm: "672px",
      md: "768px",
      lg: "908px",
      xl: "1200px"
    },
  },
  plugins: [],
}