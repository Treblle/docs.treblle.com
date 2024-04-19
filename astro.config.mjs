import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.treblle.com',
  trailingSlash: 'always',
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
      youtube: 'https://youtube.com/@treblle',
      discord: 'https://treblle.com/chat',
    },
		customCss: [
			'./src/tailwind.css',
      '@fontsource/poppins/600.css',
      '@fontsource-variable/inter/standard.css',
		],
    lastUpdated: true,
    sidebar: [{
      label: 'Who is Treblle for?',
      collapsed: false,
      autogenerate: {
        directory: 'who-is-treblle-for'
      }
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
	})],
  redirects: {
    '/en/integrations': {
      status: 301,
      destination: '/integrations/',
    },
    '/en/integrations/ruby': {
      status: 301,
      destination: '/integrations/ruby/rails/',
    },
    '/en/integrations/sails': {
      status: 301,
      destination: '/integrations/javascript/sails/',
    },
    '/en/integrations/go': {
      status: 301,
      destination: '/integrations/go/core/',
    },
    '/en/integrations/lumen': {
      status: 301,
      destination: '/integrations/php/lumen/',
    },
    '/en/integrations/django': {
      status: 301,
      destination: '/integrations/python/django/',
    },
    '/en/integrations/spring': {
      status: 301,
      destination: '/integrations/java/spring/',
    },
    '/en/integrations/adonisjs': {
      status: 301,
      destination: '/integrations/javascript/adonis/',
    },
    '/en/integrations/net-core': {
      status: 301,
      destination: '/integrations/net/net-core/',
    },
    '/en/integrations/strapi': {
      status: 301,
      destination: '/integrations/javascript/strapi/',
    },
    '/en/integrations/koa': {
      status: 301,
      destination: '/integrations/javascript/koa/',
    },
    '/en/integrations/net': {
      status: 301,
      destination: '/integrations/net/net/',
    },
    '/en/integrations/node': {
      status: 301,
      destination: '/integrations/javascript/node/',
    },
    '/en/integrations/php': {
      status: 301,
      destination: '/integrations/php/no-framework/',
    },
    '/en/integrations/express': {
      status: 301,
      destination: '/integrations/javascript/express/',
    },
    '/en/integrations/fastify': {
      status: 301,
      destination: '/integrations/javascript/fastify/',
    },
    '/en/integrations/symfony': {
      status: 301,
      destination: '/integrations/php/symfony/',
    },
    '/en/integrations/directus': {
      status: 301,
      destination: '/integrations/javascript/directus/',
    },
    '/en/integrations/laravel': {
      status: 301,
      destination: '/integrations/php/laravel/',
    },

    '/en/dashboard/api-score': {
      status: 301,
      destination: '/treblle/api-governance/',
    },
    '/en/security/masked-fields': {
      status: 301,
      destination: '/security/masking/',
    },
    '/en/dashboard': {
      status: 301,
      destination: '/treblle/dashboard/',
    },
    '/en/dashboard/customize-dashboard': {
      status: 301,
      destination: '/treblle/dashboard/',
    },
    '/en/dashboard/api-documentation': {
      status: 301,
      destination: '/treblle/api-documentation/',
    },
    '/en/dashboard/requests': {
      status: 301,
      destination: '/treblle/requests/',
    },
    '/en/dashboard/flows': {
      status: 301,
      destination: '/treblle/flows/',
    },
    '/en/dashboard/problems': {
      status: 301,
      destination: '/treblle/problems/',
    },
    '/en/dashboard/api-security': {
      status: 301,
      destination: '/treblle/api-security/',
    },
    '/en/dashboard/endpoints': {
      status: 301,
      destination: '/treblle/endpoints/',
    },
    '/en/dashboard/api-analytics': {
      status: 301,
      destination: '/treblle/api-analytics/',
    },
    '/en/dashboard/projects': {
      status: 301,
      destination: '/treblle/projects/',
    },

    '/en/who-is-treblle-for': {
      status: 301,
      destination: '/who-is-treblle-for/',
    },
    '/en/how-treblle-works': {
      status: 301,
      destination: '/how/',
    },
    '/en/introduction': {
      status: 301,
      destination: '/guides/',
    },
    '/en/sdk-development': {
      status: 301,
      destination: '/integrations/custom/',
    },
    '/en/integrations/community-sdks': {
      status: 301,
      destination: '/integrations#community-sdks/',
    }
  }
});