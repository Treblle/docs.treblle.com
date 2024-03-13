import starlightPlugin from '@astrojs/starlight-tailwind';
import aspectRatio from '@tailwindcss/aspect-ratio';

const accent = { 200: '#9ea2bd', 600: '#0058ff', 900: '#0047bb', 950: '#2d3f58' };
const gray = { 100: '#fff', 200: '#eeeeee', 300: '#c2c2c2', 400: '#8b8b8b', 500: '#585858', 700: '#383838', 800: '#01041a', 900: '#01041a' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray }
		},
	},
	plugins: [
		starlightPlugin(),
		aspectRatio,
	],
}
