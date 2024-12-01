import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: '#87ceeb',
				'primary-dark': '#27a7db',
				'primary-dark-text': '#242424',
				secondary: '#e6f4fa',
				'secondary-dark-text': '#57bae3',
				tertiary: '#15607e'
			}
		}
	},

	plugins: []
} satisfies Config;
