const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      fore: colors.gray,
      back: colors.indigo,
      primary: colors.blue,
      danger: colors.red,
      green: colors.green,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
};
