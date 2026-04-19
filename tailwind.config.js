/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#F9E27E',
          medium: '#D4AF37',
          dark: '#C5A028',
          deep: '#B8860B',
        },
        premium: {
          black: '#050505',
          midnight: '#0a0a0c',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}