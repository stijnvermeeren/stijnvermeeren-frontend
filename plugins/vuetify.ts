import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // pre-build css styles

/* Add build-in icon used internally in various components */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import { mdi, aliases as allAliases } from 'vuetify/iconsets/mdi-svg';
import {Plugin} from "@vue/runtime-core";
const aliases = allAliases;

export const VuetifyInjectionKey: InjectionKey<Plugin<[]>> = Symbol('vuetify');

export default defineNuxtPlugin((nuxtApp) => {

    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: { mdi }
        },
        ssr: true
    });

    nuxtApp.vueApp.use(vuetify);
    nuxtApp.vueApp.provide(VuetifyInjectionKey, vuetify)
});