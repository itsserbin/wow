import '@/Includes/bootstrap';
import store from '@/Includes/store.js';

import {createGtm} from '@gtm-support/vue-gtm';
import {ZiggyVue} from '../../../../vendor/tightenco/ziggy/dist/vue.m';
import {createI18n} from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import {createSSRApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {InertiaProgress} from "@inertiajs/progress";

const i18n = createI18n({})

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./${name}.vue`, import.meta.glob('./**/*.vue')),
    setup({el, App, props, plugin}) {
        const app = createSSRApp({render: () => h(App, props)})
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

        store.commit('loadCart');

        app.provide('$defaultLang', 'ua');

        app.mount(el)
    }
})
InertiaProgress.init({color: '#EC7063'});
