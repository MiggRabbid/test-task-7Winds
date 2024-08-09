/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        siteTheme: {
          main: '#414144',
          second: '#A1A1AA',
          dark: '#202124',
          light: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
};