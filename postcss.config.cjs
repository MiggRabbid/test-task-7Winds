module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 0,
      features: {}
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};