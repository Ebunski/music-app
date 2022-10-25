/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#1e1e1e',
				'secondary-bg': '#1A1E1F',
				'secondary-color': 'rgb(255,255,255,0.25)',
				'darkgray':'rgba(255, 255, 255, 0.5)',
				'bright-yellow': '#FACD66',
				'average-blue': '#609EAF',
			},
		},
		fontFamily: {
			quicksand: 'Quicksand, sans-serif',
		},
	},
	plugins: [],
};
