/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-rbg": "rgba(34, 33, 33, 1)"
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),require("tailwind-scrollbar-hide")],
}
