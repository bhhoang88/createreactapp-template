// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./public/index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      textShadow: {
        DEFAULT: "0px 0px calc(25/1920*100rem) rgba(0, 0, 0, 0.1)",
      },
      zIndex: {
        2: "2",
        3: "3",
        5: "5",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },

      colors: {
        transparent: "transparent",
        primary: {
          "051A3A": "#051A3A",
        },
        secondary: {
          D0E7E6: "#D0E7E6",
        }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};