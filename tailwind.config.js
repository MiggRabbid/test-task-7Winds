/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,scss}',
  ],
  theme: {
    extend: {
      fontFamily: {
        siteFont: ['Roboto', 'sans-serif']
      },
      colors: {
        siteTheme: {
          main: '#27272A',
          second: '#A1A1AA',
          ascent: '#414144',
          dark: '#202124',
          light: '#FFFFFF',
        }
      },
      borderWidth: {
        siteWidth: '1px',
      },
      keyframes: {
        fadeStart: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        fadeStart: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        fadeStart: 'fade 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};