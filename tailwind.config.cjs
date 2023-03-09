/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
    },
  },

  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
