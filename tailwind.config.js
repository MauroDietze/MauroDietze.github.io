/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  safelist: [
    {
      pattern: /animation-delay-/,
    },
    {
      pattern: /animation-duration-/,
    }
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      keyframes: {
        "move-x": {
          "0%": { transform: "translateX(var(--move-x-from, -100%))" },
          "100%": { transform: "translateX(var(--move-x-to, calc(100% + 100vw)))" },
        },
      },
      animation: {
        "move-x": "move-x linear infinite",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    function ({ addUtilities }) {
      const newUtilities = {};
      for (let i = 1; i <= 20; i++) {
        newUtilities[`.animation-delay-${i}`] = {
          "animation-delay": `-${i * 2}s`,
        };
      }
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addComponents }) {
      addComponents({
        ".animation-move-x": {
          animation: "move-x linear infinite",
        },
      });
    }
  ]  
};
