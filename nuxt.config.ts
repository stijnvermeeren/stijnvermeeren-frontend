// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:8080', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        }
    },
})