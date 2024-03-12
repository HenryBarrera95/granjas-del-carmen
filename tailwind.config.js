module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
      roboto: ["Roboto"],
    },
    colors: {
      primary: "#572408",
      primaryBg: "#F4EBE0",
      primaryBgLigth: "rgba(87, 36, 8, 0.8)",
      secondary: "#0F430E",
      secondaryBg: "#CBD3C4",
      white: "#FFFFFF",
      black: "#000000",
      blackLigth: "rgba(0, 0, 0, 0.8)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
