import '@/Includes/bootstrap';
import store from '@/Includes/store.js';
import FacebookPixel from '@/Includes/facebook-pixel.js';

import {createGtm} from '@gtm-support/vue-gtm';
import {ZiggyVue} from '../../../../vendor/tightenco/ziggy/dist/vue.m';
import {createI18n} from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";

const i18n = createI18n({})

export function mountPublic() {
    createInertiaApp({
        resolve: (name) => resolvePageComponent(`./${name.substring(name.indexOf('/') + 1)}.vue`, import.meta.glob('./**/*.vue')),
        setup({el, App, props, plugin}) {
            const app = createApp({render: () => h(App, props)})
            app.use(plugin)
            app.use(i18n)
            app.use(ZiggyVue, Ziggy);
            app.use(store);
            if (import.meta.env.MODE === 'production' && import.meta.env.VITE_GTM) {
                app.use(
                    createGtm({
                        id: import.meta.env.VITE_GTM,
                        defer: false,
                        compatibility: false,
                        enabled: true,
                        debug: false,
                        loadScript: true,
                        trackOnNextTick: false,
                    })
                );
            }
            if (import.meta.env.MODE === 'production') {
                app.use(FacebookPixel, {pixelId: import.meta.env.VITE_FB_PIXEL_ID})
            }

            store.commit('loadCart');

            app.provide('$defaultLang', 'ua');

            app.mount(el)
        },
    })
}
