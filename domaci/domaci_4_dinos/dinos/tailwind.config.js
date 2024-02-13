/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: { 'background': "url('/src/images/marko-transformed.jpeg')" },
      colors: {
        'dino-green': '#595f54',
      },
    },
  },
  plugins: [],
}

