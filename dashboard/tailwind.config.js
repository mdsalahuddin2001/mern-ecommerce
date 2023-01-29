/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
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
        primary: "#38cab3",
        bodyWhite: "#F8F8FB",
        bodyDark: "#383d52",
        card: "#fff",
        primaryDark: "#2a2e3f",
      },
    },
  },
  plugins: [],
};
