/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./js/portfolio.js", "./index*.html", "./css/*"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      "floral-white": "#fffcf5",
    },
    extend: {
      fontFamily: {
        monserrat: ["Montserrat"],
        "plex-mono": ["IBM\\ Plex\\ Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
