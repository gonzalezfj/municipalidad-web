/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC14F',
        secondary: '#D85B35',
        third: '#FFFFFF',
        room: '#8A43EF',
        fifth: '#4B0984',
        six: '#FFC14F'
      },
      borderRadius: {
        primary: '35px',
        secondary: '200px 0 0 0',
        third: '600px 0 0 0',
        room: '0 250px 250px 0'
      },
      textColor: {
        primary: '#FFFFF'
      }
    }
  },
  plugins: []
}
