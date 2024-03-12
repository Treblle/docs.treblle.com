import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.treblle.com',
  integrations: [starlight({
    title: 'Treblle',
		
    social: {
      github: 'https://github.com/treblle',
      twitter: 'https://twitter.com/treblleapi',
      youtube: 'https://youtube.com/@treblle'
    },
		customCss: [
			'./src/tailwind.css'
		],
    sidebar: [{
      label: 'Who is Treblle for?',
      link: '/who'
    }, {
      label: 'How Treblle works',
      link: '/how'
    }, {
      label: 'Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: 'Integrations',
      autogenerate: {
        directory: 'integrations'
      }
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind({
		applyBaseStyles: false
	})]
});