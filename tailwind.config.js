module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        extraDark:"rgba(0 0 0 / 0.75)",
        dark: "rgba(0 0 0 / 0.45)",
        light:"rgba(0 0 0 / 0.25)",
        primary: "#D00000",
      },
      fontFamily: {
        alpha:['Alpha','sans-serif']
      },
    },
  },
  plugins: [],
};