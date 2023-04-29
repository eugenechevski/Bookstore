/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    plugin(({ addBase, theme }) => {
      addBase({
        '.scrollbar::-webkit-scrollbar': {
          height: '10px',
          width: '10px',
        },
        '.scrollbar::-webkit-scrollbar-thumb': {
          backgroundColor: '#24331A',
          borderRadius: '100vh',
        },
        '.scrollbar::-webkit-scrollbar-track-piece': {
          display: 'none',
        },
      });
    }),
  ],
  daisyui: {
    themes: ['garden'],
  },
}
