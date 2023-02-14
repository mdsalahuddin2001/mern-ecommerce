/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      // "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
      boxShadow: {
        cardShadow: "0 0.75rem 1.5rem #12263f08",
        // box-shadow: 0 0.75rem 1.5rem #12263f08;
      },
      colors: {
        textPrimary: "#383853",
        textPrimaryLight: "#7b8191",
        textLight: "#a9abbd",
        white: "#fff",
        primary: "#fcb941",
        primaryHover: "#bf913d",
        bodyWhite: "#F8F8FB",
        bodyDark: "#383d52",
        card: "#fff",
        primaryDark: "#2a2e3f",
        green: "#4ADE80",
        yellow: "#FFBF00",
        red: "#F87171",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
