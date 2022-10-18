/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1e1e1e' 
      }
    },
    fontFamily: {
      quicksand: 'Quicksand, sans-serif'
    }
  },
  plugins: [],
};
