const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './layouts/**/*.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})


module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    process.env.HUGO_ENVIRONMENT === 'production' ? require('autoprefixer') : null,
    process.env.HUGO_ENVIRONMENT === 'production' ? cssnano({ preset: 'default' }) : null,
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
  ]
}
