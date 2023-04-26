// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiUriClient: '',
            apiUriServer: '',
        }
    },
    hooks: {
        'pages:extend' (pages) {
            // add a route
            pages.push({
                name: 'blogExtended',
                path: '/blog/:slug(.*)',
                file: '~/pages/blog/[slug].vue'
            });
        }
    },
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        /* Treeshaking: https://next.vuetifyjs.com/en/features/treeshaking/ */
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config?.plugins?.push(vuetify());
            });
        }
    ],
})