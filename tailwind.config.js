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
        Box:"#E7E8EB",
        fair:"#FFFFFF",
        "dark-primary":"#602EEE",
        ash:"#494949",
        black:"#000000",
      },
      animation: {
        'fad': 'fade-in 2s linear',
        'boun': 'bounce 2s linear',
        'spi': 'spin 2s linear'
      },
      // keyframes: {
      //   wige: {
      //     '0%, 100%': { transform: 'rotate(-3deg)' },
      //     '50%': { transform: 'rotate(3deg)' },
      //   }
      // }
    },
    screens: {
      xs: "320px",
      sm: "672px",
      md: "768px",
      lg: "908px",
      xl: "1020px",
      xxl: "1200px"
    },
  },
  plugins: [],
}