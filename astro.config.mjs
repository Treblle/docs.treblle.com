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
      link: '/who-is-treblle-for'
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
    '/en/integrations': '/integrations',
    '/en/integrations/ruby': '/integrations/ruby/rails',
    '/en/integrations/sails': '/integrations/javascript/sails',
    '/en/integrations/go': '/integrations/go/core',
    '/en/integrations/lumen': '/integrations/php/lumen',
    '/en/integrations/django': '/integrations/python/django',
    '/en/integrations/sping': '/integrations/java/spring',
    '/en/integrations/adonisjs': '/integrations/javascript/adonis',
    '/en/integrations/net-core': '/integrations/net/net-core',
    '/en/integrations/strapi': '/integrations/javascript/strapi',
    '/en/integrations/koa': '/integrations/javascript/koa',
    '/en/integrations/net': '/integrations/net/net',
    '/en/integrations/node': '/integrations/javascripts/node',
    '/en/integrations/php': '/integrations/php/no-framework',
    '/en/integrations/express': '/integrations/javascript/express',
    '/en/integrations/fastify': '/integrations/javascript/fastify',
    '/en/integrations/symfony': '/integrations/php/symfony',
    '/en/integrations/directus': '/integrations/javascript/directus',
    '/en/integrations/laravel': '/integrations/php/laravel',

    '/en/dashboard/api-score': '/treblle/api-governance',
    '/en/security/masked-fields': '/security/masking',
    '/en/dashboard': '/treblle/dashboard',
    '/en/dashboard/customize-dashboard': '/treblle/dashboard',
    '/en/dashboard/api-documentation': '/treblle/api-documentation',
    '/en/dashboard/requests': '/treblle/requests',
    '/en/dashboard/flows': '/treblle/flows',
    '/en/dashboard/problems': '/treblle/problems',
    '/en/dashboard/api-security': '/treblle/api-security',
    '/en/dashboard/endpoints': '/treblle/endpoints',
    '/en/dashboard/api-analytics': '/treblle/api-analytics',
    '/en/dashboard/projects': '/treblle/projects',


    '/en/who-is-treblle-for': '/who-is-treblle-for',
    '/en/how-treblle-works': '/how',
    '/en/introduction': '/guides',
    '/en/sdk-development': '/integrations/custom',
    '/en/integrations/community-sdks': '/integrations#community-sdks'
  }
});