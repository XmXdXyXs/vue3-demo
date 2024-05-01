/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        v1TextColor: "var(--v1-text-color)",
        v1TextColor2: "var(--v1-text2-color)",
        v1BorderColor: "var(--v1-border-color)",
        v1BgColor: "var(--v1-background-color)",
        v1TextDefault: "var(--v1-tex-default-color)",
        v1TextErrorColor: "var(--v1-text-error-color)",
      },
    },
    // colors: {
    //   blue: {
    //     DEFAULT: "#1fb6ff",
    //     dark: "#009eeb",
    //   },
    //   pink: {
    //     DEFAULT: "#ff49db",
    //     dark: "#ff16d1",
    //   },
    //   gray: {
    //     dark: "#3c4858",
    //     DEFAULT: "#c0ccda",
    //   },
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
