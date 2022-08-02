/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
    },
    container: {
      center: true,
      padding: '16px',
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'black': '#0d263b',
      'blue': '#0061df',
      'muted': '#696969'
    }
  },
  plugins: [],
}