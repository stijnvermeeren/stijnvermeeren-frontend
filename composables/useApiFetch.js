export const useApiFetch = (request, opts) => {
    const apiUri = useApiUri()
    return useFetch(request, { baseURL: apiUri, ...opts })
}