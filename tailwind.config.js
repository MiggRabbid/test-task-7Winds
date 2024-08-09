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
    },
  },
  plugins: [],
};