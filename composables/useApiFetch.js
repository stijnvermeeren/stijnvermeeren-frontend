export const useApiFetch = (request, opts) => {
    const apiUri = useApiUri()
    console.log(apiUri)
    return useFetch(request, { baseURL: apiUri, ...opts })
}