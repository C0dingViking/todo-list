/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#BBD0FF',
        foreground: '#E7C6FF',
        secondary: '#C8B6FF',
        accent: '#FFD6FF',
        highlight: '#B8C0FF',
      },
    },
  },
  plugins: [],
}

