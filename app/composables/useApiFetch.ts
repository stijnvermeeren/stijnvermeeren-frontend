export const useApiFetch: typeof useFetch = (request, opts) => {
    const apiUri = useApiUri()
    return useFetch(request, { baseURL: apiUri, ...opts })
}