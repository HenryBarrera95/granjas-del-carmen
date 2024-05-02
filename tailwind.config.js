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
      mainbg: "#f5f5f5",
      primary: "#572408",
      primaryBg: "#F4EBE0",
      primaryBgLigth: "rgba(87, 36, 8, 0.8)",
      secondary: "#0F430E",
      secondaryBg: "#CBD3C4",
      white: "#FFFFFF",
      black: "#000000",
      blackLigth: "rgba(0, 0, 0, 0.8)",

      cioccolato: {
        50: "#fefaec",
        100: "#fbf1ca",
        200: "#f8e48f",
        300: "#f4d055",
        400: "#f1bc2e",
        500: "#ea9c16",
        600: "#cf7710",
        700: "#ac5511",
        800: "#8c4214",
        900: "#733714",
        950: "#572408",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
