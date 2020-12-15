module.exports = {
	purge: {
	    mode: 'all',
    	preserveHtmlElements: false,
    	content: [
			'./public/*.html'
		]
	},
	darkMode: false,
	theme: {},
	variants: {
		extend: {},
	},
	plugins: [
	  	require('@tailwindcss/forms'),
  		require('@tailwindcss/typography'),
  	],
}
