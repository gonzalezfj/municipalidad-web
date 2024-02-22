/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            strong: {
              color: 'inherit'
            },
            h1: {
              color: 'inherit'
            },
            h2: {
              color: 'inherit'
            },
            h3: {
              color: 'inherit'
            },
            'li::marker': {
              color: 'inherit'
            }

          }
        }
      },
      colors: {
        primary: '#FFC14F',
        secondary: '#D85B35',
        third: '#FFFFFF',
        room: '#8A43EF',
        fifth: '#4B0984',
        six: '#616161',
        seven: '#9C9C9C',
        eight: '#9747FFF'
        // nine: '#F2F2F2',
        // ten: '#F2F2F2',
        // eleven: '#F2F2F2',
        // twelve: '#F2F2F2',
      },
      borderRadius: {
        primary: '35px',
        secondary: '200px 0 0 0',
        third: '600px 0 0 0',
        room: '0 250px 250px 0',
        fifth: '60px',
        six: '0 150px 0 0'
      },
      textColor: {
        primary: '#FFFFF'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
