module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "rgba(0 0 0 / 0.45)",
        primary: "#D00000",
      },
      fontFamily: {
        alpha:['Alpha','sans-serif']
      },
    },
  },
  plugins: [],
};