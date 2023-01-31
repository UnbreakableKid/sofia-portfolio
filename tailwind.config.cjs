module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      cursor: {
        default:
          "url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), default",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
