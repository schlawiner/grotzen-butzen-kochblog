module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
      'serif': ["'Crimson Pro'", "'PT Serif'", 'Yrsa', 'ui-serif', 'Georgia'],
     },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
