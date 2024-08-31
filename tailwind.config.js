/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lexend: '"Jost", sans-serif',
			},
			colors: {
				primary: 'rgb(45, 212, 191)'
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
			},
		},
	},
	plugins: [],
}