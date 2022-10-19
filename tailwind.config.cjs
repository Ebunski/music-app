/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#1e1e1e',
				'secondary-color': 'rgb(255,255,255,0.25)',
				'bright-yellow': '#FACD66',
			},
		},
		fontFamily: {
			quicksand: 'Quicksand, sans-serif',
		},
	},
	plugins: [],
};
