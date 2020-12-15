module.exports = {
	purge: {
	    mode: 'all',
    	preserveHtmlElements: false,
    	content: [
			'./public/*.html'
		]
	},
	darkMode: false,
	theme: {
		extend: {
			colors: {
				teal: {
					'50':  '#eef9fa',
					'100': '#d6f7f6',
					'200': '#a7efed',
					'300': '#6ce4e4',
					'400': '#5bcbd5',
					'500': '#0db2c1',
					'600': '#0b93a6',
					'700': '#107785',
					'800': '#135c65',
					'900': '#114a50',
				},
				green: {
					'50': '#e0fcde',
					'100': '#d5fad1',
					'200': '#9ff193',
					'300': '#4be12d',
					'400': '#3ebd1f',
					'500': '#358e1a',
					'600': '#296812',
					'700': '#1d450c',
					'800': '#153008',
					'900': '#132707',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
	  	require('@tailwindcss/forms'),
  		require('@tailwindcss/typography'),
  	],
}
