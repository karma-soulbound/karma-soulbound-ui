module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['halloween'],
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
};
