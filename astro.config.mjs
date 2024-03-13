import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.treblle.com',
  integrations: [starlight({
    title: 'Treblle',
    description: 'Treblle is your End to End API Ops platform, helping engineering and product teams build, ship and understand their REST APis in one single place.',
    editLink: {
      baseUrl: 'https://github.com/treblle/docs.treblle.com/edit/main/',
    },
    logo: {
      dark: './src/assets/logo-white.svg',
      light: './src/assets/logo-black.svg',
      replacesTitle: true
    },
    social: {
      github: 'https://github.com/treblle',
      twitter: 'https://twitter.com/treblleapi',
      youtube: 'https://youtube.com/@treblle'
    },
		customCss: [
			'./src/tailwind.css'
		],
    lastUpdated: true,
    sidebar: [{
      label: 'Who is Treblle for?',
      link: '/who'
    }, {
      label: 'How Treblle works',
      link: '/how'
    }, {
      label: 'Treblle',
      autogenerate: {
        directory: 'treblle'
      }
    }, {
      label: 'Integrations',
      collapsed: true,
      autogenerate: {
        directory: 'integrations'
      }
    }]
  }), tailwind({
		applyBaseStyles: false
	})]
});