interface OptsType {
    title?: string,
    description?: string,
    image?: string,
    lang?: string
}

export const useMeta = (opts: OptsType) => {
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