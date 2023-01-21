/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'], 
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['garden'],
  },
}
