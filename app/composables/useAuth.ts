import {unref} from 'vue';
import {useAuth0} from "@auth0/auth0-vue";
import {type UseFetchOptions} from "#app/composables/fetch";
import {type FetchContext} from "ofetch";

export function useAuth() {
    const { getAccessTokenSilently } = useAuth0();

    function withAccessToken<T>(opts: UseFetchOptions<T> = {}): UseFetchOptions<T> {
        async function onRequest(context: FetchContext) {
            const headers = new Headers(unref(context.options.headers))

            const token = await getAccessTokenSilently()
            headers.append('Authorization', `Bearer ${token}`);
            context.options.headers = headers
        }

        opts.onRequest = onRequest
        return opts
    }

    return {
        withAccessToken: withAccessToken
    }
}