/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          100: "#f1c0c6"
        },
        blue: {
          50: "#f4f9fd",
          200: "#a7c7e7"
        }
      }
    },
  },
  plugins: [],
}
