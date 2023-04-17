// https://nuxt.com/docs/api/configuration/nuxt-config
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
    }
})