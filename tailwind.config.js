/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./public/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				tertiary: 'rgb(var(--color-tertiary) / <alpha-value>)',
				katt: 'rgb(var(--color-katt) / <alpha-value>)',
				'katt-light': 'rgb(var(--color-katt-light) / <alpha-value>)',
			},
			minWidth: {
				'1/2': '13rem',
				'1/3': '16rem',
			},
			boxShadow: {
				DEFAULT: '0 4px 4px rgb(var(--color-katt) / 0.5)',
			},
			screens: {
				xs: '440px',
				// => @media (min-width: 640px) { ... }
			},
		},
	},
	plugins: [],
};
