import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.treblle.com",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Treblle",
      description:
        "Treblle is your End to End API Ops platform, helping engineering and product teams build, ship and understand their REST APis in one single place.",
      editLink: {
        baseUrl: "https://github.com/treblle/docs.treblle.com/edit/main/",
      },
      components: {
        Head: "./src/components/Head.astro",
      },
      logo: {
        dark: "./src/assets/logo-white.svg",
        light: "./src/assets/logo-black.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/treblle",
        twitter: "https://twitter.com/treblleapi",
        youtube: "https://youtube.com/@treblle",
        discord: "https://treblle.com/chat",
      },
      customCss: [
        "./src/tailwind.css",
        "@fontsource/poppins/600.css",
        "@fontsource-variable/inter/standard.css",
      ],
      lastUpdated: true,
      sidebar: [
        {
          label: "Treblle Platform",
          collapsed: false,
          items: [
            {
              label: "How Treblle works",
              link: "/how",
            },
            {
              label: "Account",
              collapsed: true,
              items: [
                {
                  label: "Treblle Identity",
                  link: "/treblle/account/",
                },
                {
                  label: "Create account",
                  link: "/treblle/account/creation/",
                },
                {
                  label: "Account settings",
                  link: "/treblle/account/profile/",
                },
                {
                  label: "PAT",
                  link: "/treblle/account/tokens/",
                },
                
              ],
            },
            {
              label: "Workspace",
              collapsed: true,
              items: [
                {
                  label: "Workspaces",
                  link: "/treblle/workspace/",
                },
                {
                  label: "Workspace Dashboard",
                  link: "/treblle/workspace/apis/apis-list",
                },
                {
                  label: "APIs",
                  collapsed: true,
                  items: [
        
                    {
                      label: "API Dashboard",
                      collapsed: true,
                      items: [
                        {
                          label: "Dashboard Details",
                          link: "/treblle/workspace/apis/dashboard/",
                        },
                        {
                          label: "Widgets",
                          link: "/treblle/workspace/apis/dashboard/widgets/",
                        }
                      ],
                    },
                    {
                      label: "Requests",
                      collapsed: true,
                      items: [
                        {
                          label: "Requests Details",
                          link: "/treblle/workspace/apis/requests/",
                        },
                        {
                          label: "Commenting",
                          link: "/treblle/workspace/apis/requests/commenting/",
                        },
                        {
                          label: "Saved Searches",
                          link: "/treblle/workspace/apis/requests/savedsearches/",
                        },
                        {
                          label: "Security",
                          link: "/treblle/workspace/apis/requests/security/",
                        },
                        {
                          label: "Tracability",
                          link: "/treblle/workspace/apis/requests/traceability/",
                        },
                      ],
                    },
                    {
                      label: "Endpoints",
                      link: "/treblle/workspace/apis/endpoints/",
                    },
                    {
                      label: "Problems",
                      link: "/treblle/workspace/apis/problems/",
                    },
                    {
                      label: "Governance",
                      link: "/treblle/workspace/apis/governance/",
                    },
                    {
                      label: "Compliance",
                      link: "/treblle/workspace/apis/compliance/",
                    },
                    {
                      label: "Alerts",
                      link: "/treblle/workspace/apis/alerts/",
                    },
                    {
                      label: "API Settings",
                      collapsed: true,
                      items: [
                        {
                          label: "Settings Details",
                          link: "/treblle/workspace/apis/settings/",
                        },
                        {
                          label: "Visibility",
                          link: "/treblle/workspace/apis/settings/visibility/",
                        },
                      ],
                    },
                    {
                      label: "Docs",
                      link: "/treblle/workspace/apis/api-docs/",
                    },
                  ],
                },
                {
                  label: "Create API",
                  link: "/treblle/workspace/create-an-api/",
                },
                {
                  label: "Catalog",
                  link: "/treblle/workspace/catalog/",
                },
                {
                  label: "Workspace Settings",
                  collapsed: true,
                  items: [
                    {
                      label: "Settings Details",
                      link: "/treblle/workspace/settings/",
                    },
                    {
                      label: "Billing",
                      link: "/treblle/workspace/settings/billing/",
                    },
                    {
                      label: "Roles",
                      link: "/treblle/workspace/settings/people-ws-roles/",
                    },
                    {
                      label: "Managing People",
                      link: "/treblle/workspace/settings/people/",
                    },

                    {
                      label: "People",
                      collapsed: true,
                      items: [
                        {
                          label: "Managing People ",
                          link: "/treblle/workspace/settings/people/",
                        },
                        {
                          label: "Invitations",
                          link: "/treblle/workspace/settings/people/invitations/",
                        },
                        {
                          label: "Roles",
                          link: "/treblle/workspace/settings/people/roles/",
                        },
                      
                      ],
                    },

                    {
                      label: "Plans",
                      link: "/treblle/workspace/settings/plans/",
                    },
                    {
                      label: "SSO",
                      link: "/treblle/workspace/settings/sso/",
                    },
                    
                  ],
                },
              ],
            },

            {
              label: "Who is Treblle for?",
              collapsed: true,
              items: [
                {
                  label: "General",
                  link: "/treblle/who-is-treblle-for/",
                },
                {
                  label: "Developers",
                  link: "/treblle/who-is-treblle-for/developers/",
                },
                {
                  label: "InfoSec",
                  link: "/treblle/who-is-treblle-for/infosec/",
                },
                {
                  label: "Leadership",
                  link: "/treblle/who-is-treblle-for/leadership/",
                },
                {
                  label: "Managers",
                  link: "/treblle/who-is-treblle-for/managers/",
                },
                {
                  label: "Product Managers",
                  link: "/treblle/who-is-treblle-for/product-managers/",
                },
                {
                  label: "QA",
                  link: "/treblle/who-is-treblle-for/qa/",
                },
                {
                  label: "Support",
                  link: "/treblle/who-is-treblle-for/support/",
                },
              ],
            },
  
      
          ],
        },
        {
          label: "API Insights",
          link: "/insights/",
        },
        {
          label: "Alfred",
          link: "/alfred/",
        },
        {
          label: "Aspen",
          link: "/aspen/",
        },
        {
          label: "SDK Integrations",
          collapsed: false,
          items: [
            {
              label: "Treblle Integrations",
              link: "/integrations/",
            },
            {
              label: "Custom Integrations",
              link: "/integrations/custom/",
            },
            {
              label: "API Gateways",
              collapsed: true,
              items: [
                {
                  label: "Traefik",
                  link: "/integrations/gateways/traefik/",
                },
                {
                  label: "WSO2",
                  link: "/integrations/gateways/wso2/",
                },
              ],
            },
            {
              label: "Go",
              collapsed: true,
              items: [
                {
                  label: "Treblle with Go standard library",
                  link: "/integrations/go/core/",
                },
              ],
            },
            {
              label: "Java",
              collapsed: true,
              items: [
                {
                  label: "Treblle with Spring",
                  link: "/integrations/java/spring/",
                },
              ],
            },
            {
              label: "JavaScript",
              collapsed: true,
              items: [
                {
                  label: "Treblle with AdonisJS",
                  link: "/integrations/javascript/adonis/",
                },
                {
                  label: "Treblle with Directus",
                  link: "/integrations/javascript/directus/",
                },
                {
                  label: "Treblle with Express",
                  link: "/integrations/javascript/express/",
                },
                {
                  label: "Treblle with Fastify",
                  link: "/integrations/javascript/fastify/",
                },
                {
                  label: "Treblle with Koa",
                  link: "/integrations/javascript/koa/",
                },
                {
                  label: "Treblle with NestJS",
                  link: "/integrations/javascript/nest/",
                },
                {
                  label: "Treblle with NodeJS",
                  link: "/integrations/javascript/node/",
                },
                {
                  label: "Treblle with SailsJS",
                  link: "/integrations/javascript/sails/",
                },
                {
                  label: "Treblle with Strapi",
                  link: "/integrations/javascript/strapi/",
                },
              ],
            },
            {
              label: ".NET",
              collapsed: true,
              items: [
                {
                  label: "Treblle with .NET Core",
                  link: "/integrations/net/net-core/",
                },
                {
                  label: "Treblle with .NET",
                  link: "/integrations/net/net/",
                },
              ],
            },
            {
              label: "PHP",
              collapsed: true,
              items: [
                {
                  label: "Treblle with Laravel",
                  link: "/integrations/php/laravel/",
                },
                {
                  label: "Treblle with Lumen",
                  link: "/integrations/php/lumen/",
                },
                {
                  label: "Treblle with no-framework",
                  link: "/integrations/php/no-framework/",
                },
                {
                  label: "Treblle with Symfony",
                  link: "/integrations/php/symfony/",
                },
              ],
            },
            {
              label: "Python",
              collapsed: true,
              items: [
                {
                  label: "Treblle with Django",
                  link: "/integrations/python/django/",
                },
                {
                  label: "Treblle with Flask",
                  link: "/integrations/python/flask/",
                },
              ],
            },
            {
              label: "Ruby",
              collapsed: true,
              items: [
                {
                  label: "Treblle with Ruby on Rails",
                  link: "/integrations/ruby/rails/",
                },
              ],
            },
          ],
        },
        {
          label: "Security",
          collapsed: true,
          items: [
            {
              label: "Certification",
              link: "/security/certification/",
            },
            {
              label: "Masking Fields",
              link: "/security/masking/",
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    svelte(),
  ],
  redirects: {
    "/en/integrations": {
      status: 301,
      destination: "/integrations/",
    },
    "/en/integrations/ruby": {
      status: 301,
      destination: "/integrations/ruby/rails/",
    },
    "/en/integrations/sails": {
      status: 301,
      destination: "/integrations/javascript/sails/",
    },
    "/en/integrations/go": {
      status: 301,
      destination: "/integrations/go/core/",
    },
    "/en/integrations/lumen": {
      status: 301,
      destination: "/integrations/php/lumen/",
    },
    "/en/integrations/django": {
      status: 301,
      destination: "/integrations/python/django/",
    },
    "/en/integrations/spring": {
      status: 301,
      destination: "/integrations/java/spring/",
    },
    "/en/integrations/adonisjs": {
      status: 301,
      destination: "/integrations/javascript/adonis/",
    },
    "/en/integrations/net-core": {
      status: 301,
      destination: "/integrations/net/net-core/",
    },
    "/en/integrations/strapi": {
      status: 301,
      destination: "/integrations/javascript/strapi/",
    },
    "/en/integrations/koa": {
      status: 301,
      destination: "/integrations/javascript/koa/",
    },
    "/en/integrations/net": {
      status: 301,
      destination: "/integrations/net/net/",
    },
    "/en/integrations/node": {
      status: 301,
      destination: "/integrations/javascript/node/",
    },
    "/en/integrations/php": {
      status: 301,
      destination: "/integrations/php/no-framework/",
    },
    "/en/integrations/express": {
      status: 301,
      destination: "/integrations/javascript/express/",
    },
    "/en/integrations/fastify": {
      status: 301,
      destination: "/integrations/javascript/fastify/",
    },
    "/en/integrations/symfony": {
      status: 301,
      destination: "/integrations/php/symfony/",
    },
    "/en/integrations/directus": {
      status: 301,
      destination: "/integrations/javascript/directus/",
    },
    "/en/integrations/laravel": {
      status: 301,
      destination: "/integrations/php/laravel/",
    },
    "/en/dashboard/api-score": {
      status: 301,
      destination: "/treblle/api-governance/",
    },
    "/en/security/masked-fields": {
      status: 301,
      destination: "/security/masking/",
    },
    "/en/dashboard": {
      status: 301,
      destination: "/treblle/dashboard/",
    },
    "/en/dashboard/customize-dashboard": {
      status: 301,
      destination: "/treblle/dashboard/",
    },
    "/en/dashboard/api-documentation": {
      status: 301,
      destination: "/treblle/api-documentation/",
    },
    "/en/dashboard/requests": {
      status: 301,
      destination: "/treblle/requests/",
    },
    "/en/dashboard/flows": {
      status: 301,
      destination: "/treblle/flows/",
    },
    "/en/dashboard/problems": {
      status: 301,
      destination: "/treblle/problems/",
    },
    "/en/dashboard/api-security": {
      status: 301,
      destination: "/treblle/api-security/",
    },
    "/en/dashboard/endpoints": {
      status: 301,
      destination: "/treblle/endpoints/",
    },
    "/en/dashboard/api-analytics": {
      status: 301,
      destination: "/treblle/api-analytics/",
    },
    "/en/dashboard/projects": {
      status: 301,
      destination: "/treblle/projects/",
    },
    "/en/who-is-treblle-for": {
      status: 301,
      destination: "/who-is-treblle-for/",
    },
    "/en/how-treblle-works": {
      status: 301,
      destination: "/how/",
    },
    "/en/introduction": {
      status: 301,
      destination: "/guides/",
    },
    "/en/sdk-development": {
      status: 301,
      destination: "/integrations/custom/",
    },
    "/en/integrations/community-sdks": {
      status: 301,
      destination: "/integrations#community-sdks/",
    },
  },
});
