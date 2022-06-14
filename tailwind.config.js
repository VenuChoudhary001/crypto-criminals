module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#DF0431",
        dark: "rgba(0 0 0 / 0.45)",
        lightBlue: "#0566C2",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        raleway: ["Raleway"],
        anton: ["Anton"],
        oswald: ["Oswald"],
        hazaru: ["Hazaru", "Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};