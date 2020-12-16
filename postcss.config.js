const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './layouts/*.html',
    './layouts/*.html',
    './layouts/**/*.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
