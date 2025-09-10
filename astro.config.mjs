import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.treblle.com',
  trailingSlash: 'always',
  integrations: [starlight({
    title: 'Treblle',
    description: 'Treblle is your End to End API Ops platform, helping engineering and product teams build, ship and understand their REST APis in one single place.',
    editLink: {
      baseUrl: 'https://github.com/treblle/docs.treblle.com/edit/main/'
    },
    components: {
      Head: './src/components/Head.astro'
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
      discord: 'https://treblle.com/chat'
    },
    customCss: ['./src/tailwind.css', '@fontsource/poppins/600.css', '@fontsource-variable/inter/standard.css'],
    lastUpdated: true,
    sidebar: [{
      label: 'Introduction',
      link: '/documentation-overview/'
    }, {
      label: 'Getting Started',
      link: '/guides/getting-started/'
    },  {
      label: 'Your Account',
      collapsed: true,
      items: [{
        label: 'Profile',
        link: '/treblle/profile/'
      }, {
        label: 'Preferences',
        link: '/treblle/preferences/'
      }, {
        label: 'Security and Access',
        link: '/treblle/security-and-access/'
      },]
    }, {
      label: 'Administer Treblle',
      collapsed: true,
      items: [{
        label: 'Invite Users',
        link: '/admin/invite-users/'
      }, {
        label: 'Team Management',
        link: '/admin/manage-your-workspace/'
      }, {
        label: 'Single Sign-On',
        link: '/admin/single-sign-on/'
      }, {
        label: 'Billing and Subscription Management',
        link: '/admin/billing-subscription/'
      }, {
        label: 'Workspace Settings',
        link: '/admin/workspace-settings/'
      }, {
        label: 'Manage Password',
        link: '/admin/password/'
      }]
    }, {
      label: 'Treblle Platform',
      collapsed: true,
      items: [{
        label: 'Workspace and Sidebar',
        collapsed: true,
        items: [{
          label: 'Home',
          link: '/treblle/workspace-dashboard/'
        }, {
          label: 'APIs',
          link: '/treblle/apilist/'
        }, {
          label: 'Trace',
          link: '/treblle/api-traceability/'
        }, {
          label: 'Catalog',
          link: '/features/api-catalog/'
        }, {
          label: 'Alfred AI',
          link: '/treblle/alfred-ai/'
        }, ]
      }, {
        label: 'Notifications and Alerts',
        collapsed: true,
        items: [{
          label: 'Default Alerts',
          link: '/features/default-alerts/'
        }, {
          label: 'Custom Alerts',
          link: '/features/custom-alerts/'
        }, {
          label: 'Spike Alerts',
          link: '/features/spike-alerts/'
        }]
      }, {
        label: 'API Dashboard',
        link: '/treblle/dashboard/'
      }, {
        label: 'Requests',
        link: '/treblle/requests/'
      }, {
        label: 'Metadata',
        link: '/treblle/metadata/'
      }, {
        label: 'Endpoints',
        link: '/treblle/endpoints/'
      }, {
        label: 'Customers',
        link: '/treblle/customers/'
      }, {
        label: 'Problems',
        link: '/treblle/problems/'
      }, {
        label: 'API Governance',
        link: '/treblle/api-governance/'
      }, {
        label: 'API Compliance',
        link: '/features/api-compliance/'
      }, {
        label: 'API Documentation',
        link: '/treblle/api-documentation/'
      }, {
        label: 'API Security',
        collapsed: true,
        items: [{
          label: 'Overview',
          link: '/treblle/api-security/'
        }, {
          label: 'DDoS Attack Detection',
          link: '/treblle/api-security/ddos-attack/'
        }, {
          label: 'Request Information',
          link: '/treblle/api-security/request-information/'
        }, {
          label: 'IP Address Security',
          link: '/treblle/api-security/ip-address/'
        }]
      }, {
        label: 'Sustainability',
        link: '/treblle/sustainability/'
      }, {
        label: 'Observability as a Service',
        link: '/treblle/observability-as-a-service/'
      }, {
        label: 'Data Masking',
        link: '/treblle/data-masking/'
      }]
    }, {
      label: 'API Toolkit',
      collapsed: true,
      items: [{
        label: 'Aspen',
        link: '/aspen/'
      }, {
        label: 'API Insights',
        link: '/treblle/api-insights/',
      }]
    }, {
      label: 'Integrations',
      collapsed: true,
      items: [{
        label: 'Treblle Integrations',
        link: '/integrations/'
      }, {
        label: 'Custom Integrations',
        link: '/integrations/custom/'
      }, {
        label: 'API Gateways',
        collapsed: true,
        items: [{
          label: 'Kong',
          link: '/integrations/gateways/kong/'
        }, {
          label: 'Traefik',
          link: '/integrations/gateways/traefik/'
        }, {
          label: 'WSO2',
          link: '/integrations/gateways/wso2/'
        }, {
          label: 'AWS API Gateway',
          link: '/integrations/gateways/aws/'
        }, {    
          label: 'Azure API Gateway',
          link: '/integrations/gateways/azure/'
        }, {   
          label: 'MuleSoft',
          collapsed: true,
          items: [{
            label: 'Policy Integration',
            link: '/integrations/gateways/mulesoft/policy/'
          }, {
            label: 'Auto-Discovery App',
            link: '/integrations/gateways/mulesoft/app/'
          }]
        }]
      }, {
        label: 'Go',
        collapsed: true,
        items: [{
          label: 'Treblle with Go standard library',
          link: '/integrations/go/core/'
        }]
      }, {
        label: 'Java',
        collapsed: true,
        items: [{
          label: 'Treblle with Spring',
          link: '/integrations/java/spring/'
        }, {
          label: 'Treblle with AWS Lambda',
          link: '/integrations/java/aws-lambda/'
        }, {
          label: 'Treblle with JavaX',
          link: '/integrations/java/javax/'
        }]
      }, {
        label: 'JavaScript',
        collapsed: true,
        items: [{
          label: 'Treblle with AdonisJS',
          link: '/integrations/javascript/adonis/'
        }, {
          label: 'Treblle with Directus',
          link: '/integrations/javascript/directus/'
        }, {
          label: 'Treblle with Express',
          link: '/integrations/javascript/express/'
        }, {
          label: 'Treblle with Fastify',
          link: '/integrations/javascript/fastify/'
        }, {
          label: 'Treblle with Koa',
          link: '/integrations/javascript/koa/'
        }, {
          label: 'Treblle with NestJS',
          link: '/integrations/javascript/nest/'
        }, {
          label: 'Treblle with NodeJS',
          link: '/integrations/javascript/node/'
        }, {
          label: 'Treblle with SailsJS',
          link: '/integrations/javascript/sails/'
        }, {
          label: 'Treblle with Strapi',
          link: '/integrations/javascript/strapi/'
        }]
      }, {
        label: '.NET',
        collapsed: true,
        items: [{
          label: 'Treblle with .NET Core',
          link: '/integrations/net/net-core/'
        }, {
          label: 'Treblle with .NET',
          link: '/integrations/net/net/'
        }]
      }, {
        label: 'PHP',
        collapsed: true,
        items: [{
          label: 'Treblle with Laravel',
          link: '/integrations/php/laravel/'
        }, {
          label: 'Treblle with Lumen',
          link: '/integrations/php/lumen/'
        }, {
          label: 'Treblle with no-framework',
          link: '/integrations/php/no-framework/'
        }, {
          label: 'Treblle with Symfony',
          link: '/integrations/php/symfony/'
        }]
      }, {
        label: 'Python',
        collapsed: true,
        items: [{
          label: 'Treblle with Django',
          link: '/integrations/python/django/'
        }, {
          label: 'Treblle with Flask',
          link: '/integrations/python/flask/'
        }]
      }, {
        label: 'Ruby',
        collapsed: true,
        items: [{
          label: 'Treblle with Ruby on Rails',
          link: '/integrations/ruby/rails/'
        }]
      }]
    }, {
      label: 'Trust Center',
      collapsed: true,
      items: [{
        label: 'Treblle Privacy Policy',
        link: '/security/certification/'
      }, {
        label: 'Trust Center',
        link: 'https://trust.treblle.com/'
      }]
    }, 
    {
      label: 'API Knowledge Base',
      link: 'https://treblle.com/knowledgebase'
    },
    {
      label: 'Resources',
      collapsed: true,
      items: [{
        label: 'FAQs',
        link: '/faqs/'
      }, {
        label: 'Laravel API Course',
        link: 'https://apiacademy.treblle.com/laravel-api-course/'
      }]
    }]
  }), tailwind({
    applyBaseStyles: false
  }), sitemap(), react(), svelte()],
  redirects: {
    '/en/integrations': {
      status: 301,
      destination: '/integrations/'
    },
    '/en/integrations/ruby': {
      status: 301,
      destination: '/integrations/ruby/rails/'
    },
    '/en/integrations/sails': {
      status: 301,
      destination: '/integrations/javascript/sails/'
    },
    '/en/integrations/go': {
      status: 301,
      destination: '/integrations/go/core/'
    },
    '/en/integrations/lumen': {
      status: 301,
      destination: '/integrations/php/lumen/'
    },
    '/en/integrations/django': {
      status: 301,
      destination: '/integrations/python/django/'
    },
    '/en/integrations/spring': {
      status: 301,
      destination: '/integrations/java/spring/'
    },
    '/en/integrations/adonisjs': {
      status: 301,
      destination: '/integrations/javascript/adonis/'
    },
    '/en/integrations/net-core': {
      status: 301,
      destination: '/integrations/net/net-core/'
    },
    '/en/integrations/strapi': {
      status: 301,
      destination: '/integrations/javascript/strapi/'
    },
    '/en/integrations/koa': {
      status: 301,
      destination: '/integrations/javascript/koa/'
    },
    '/en/integrations/net': {
      status: 301,
      destination: '/integrations/net/net/'
    },
    '/en/integrations/node': {
      status: 301,
      destination: '/integrations/javascript/node/'
    },
    '/en/integrations/php': {
      status: 301,
      destination: '/integrations/php/no-framework/'
    },
    '/en/integrations/express': {
      status: 301,
      destination: '/integrations/javascript/express/'
    },
    '/en/integrations/fastify': {
      status: 301,
      destination: '/integrations/javascript/fastify/'
    },
    '/en/integrations/symfony': {
      status: 301,
      destination: '/integrations/php/symfony/'
    },
    '/en/integrations/directus': {
      status: 301,
      destination: '/integrations/javascript/directus/'
    },
    '/en/integrations/laravel': {
      status: 301,
      destination: '/integrations/php/laravel/'
    },
    '/en/dashboard/api-score': {
      status: 301,
      destination: '/treblle/api-governance/'
    },
    '/en/security/masked-fields': {
      status: 301,
      destination: '/security/masking/'
    },
    '/en/dashboard': {
      status: 301,
      destination: '/treblle/dashboard/'
    },
    '/en/dashboard/customize-dashboard': {
      status: 301,
      destination: '/treblle/dashboard/'
    },
    '/en/dashboard/api-documentation': {
      status: 301,
      destination: '/treblle/api-documentation/'
    },
    '/en/dashboard/requests': {
      status: 301,
      destination: '/treblle/requests/'
    },
    '/en/dashboard/problems': {
      status: 301,
      destination: '/treblle/problems/'
    },
    '/en/dashboard/api-security': {
      status: 301,
      destination: '/treblle/api-security/'
    },
    '/en/dashboard/endpoints': {
      status: 301,
      destination: '/treblle/endpoints/'
    },
    '/en/dashboard/api-analytics': {
      status: 301,
      destination: '/treblle/api-analytics/'
    },
    '/en/dashboard/projects': {
      status: 301,
      destination: '/treblle/projects/'
    },
    '/en/who-is-treblle-for': {
      status: 301,
      destination: '/who-is-treblle-for/'
    },
    '/en/sdk-development': {
      status: 301,
      destination: '/integrations/custom/'
    },
    '/en/integrations/community-sdks': {
      status: 301,
      destination: '/integrations#community-sdks/'
    },
    '/guides/': {
      status: 301,
      destination: '/guides/getting-started/'
    },
    '/en/integrations/community-sdks': {
      status: 301,
      destination: '/integrations#community-sdks/'
    },
    '/guides/': {
      status: 301,
      destination: '/guides/getting-started/'
    },
    '/en/introduction/': {
      status: 301,
      destination: '/guides/getting-started/'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Aspen', link: '/aspen/' },
    ],
  }
});