export const useMeta = (opts) => {
    if (opts.title) {
        useHead({
            title: opts.title
        })
        useServerSeoMeta({
            ogTitle: opts.title
        })
    }

    if (opts.description) {
        useServerSeoMeta({
            ogDescription: opts.description
        })
    }

    if (opts.image) {
        useServerSeoMeta({
            ogImage: opts.image
        })
    }

    if (opts.lang) {
        useHead({
            htmlAttrs: {
                lang: opts.lang
            }
        })
    }
}