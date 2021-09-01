const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        dawningOfaNewDay: ['Dawning of a New Day'],
      },
      colors: {
        coolBlue: '#0d98ba',
        offWhite: '#fbfbfb',
        // offWhite: '#f8f8f8',
        // silver: '#f6f6f6',
        silver: '#eeeeee',
        platinum: '#e2e2e2',
        goldenrod: '#FFD700'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
