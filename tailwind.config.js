module.exports = {
  purge: ['./src/**/*.njk',],
  mode: 'jit',
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
      'serif': ["'Crimson Pro'", "'PT Serif'", 'Yrsa', 'ui-serif', 'Georgia'],
    },
    extend: {},
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
