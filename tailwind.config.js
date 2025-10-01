/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", // only if you actually have this folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#283618",
          highlight: "#dda15e",
          // secondary: "#778DA9",
          // default: "#415A77",
          white: "#ffffff",
          success: "#2ECC71",
          error: "#E74C3C",
          warning: "#F39C12",
        },
        border: {
          default: "#bc6c25",
        },
        background: {
          primary: "#dda15e",
          white: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
