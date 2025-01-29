/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Next.js 13+ için app klasörünü ekleyin
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-yellow': '#FFD700',
        'retro-green': '#006400',
        'retro-brown': '#8B4513',
        'retro-beige': '#F5F5DC',
      },
      fontFamily: {
        'retro': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};