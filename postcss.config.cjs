// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // <-- NEW correct plugin name
    autoprefixer: {},
  },
}

