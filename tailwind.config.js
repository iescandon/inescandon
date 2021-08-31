const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      coolBlue: '#0d98ba',
      offWhite: '#fbfbfb',
      platinum: '#E5E4E2',
      goldenrod: '#FFD700'
      // goldenrod: '#f0b520'
    },
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        dawningOfaNewDay: ['Dawning of a New Day'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
