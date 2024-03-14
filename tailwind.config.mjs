const defaultTheme = require('tailwindcss/defaultTheme')
import starlightPlugin from '@astrojs/starlight-tailwind';
import aspectRatio from '@tailwindcss/aspect-ratio';

const accent = { 200: '#f6f7fa', 600: '#0058ff', 900: '#0047bb', 950: '#11152f' };
const gray = { 100: '#fff', 200: '#eeeeee', 300: '#c2c2c2', 400: '#8b8b8b', 500: '#585858', 700: '#383838', 800: '#01041a', 900: '#01041a' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
			fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
				'body': ['"Inter"', ...defaultTheme.fontFamily.sans],
				'heading': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [
		starlightPlugin(),
		aspectRatio,
	],
}
