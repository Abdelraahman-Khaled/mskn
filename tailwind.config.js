/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#2eca6a',
        'custom-white': 'aliceblue'
      }
    },
  },
  plugins: [],
}