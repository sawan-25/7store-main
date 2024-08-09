/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'background-color' : '#BBE7FE',
        'header-color' : '#D3B5E5',
        'body-color': '#FFD4DB'
      },
      mixBlendMode: ['hover', 'focus'],
    },
  },
  plugins: [],
}