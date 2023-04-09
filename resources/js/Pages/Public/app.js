import '@/Includes/bootstrap';
import store from '@/Includes/store.js';
import Maska from 'maska'
import VueSweetalert2 from 'vue-sweetalert2'
import FacebookPixel from '@/Includes/facebook-pixel.js';

import {createGtm} from '@gtm-support/vue-gtm';
import {ZiggyVue} from '../../../../vendor/tightenco/ziggy/dist/vue.m';
import {createI18n} from 'vue-i18n'
import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {InertiaProgress} from "@inertiajs/progress";


const i18n = createI18n({})

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./${name}.vue`, import.meta.glob('./**/*.vue')),
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
        app.use(plugin)

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
        app.use(i18n)
        app.use(store);
        app.use(ZiggyVue, Ziggy);


        app.use(Maska);
        app.use(VueSweetalert2, {
            confirmButtonColor: "rgb(220 53 69)",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
            // cancelButtonColor: "#ff0099"
        });

        app.provide('$defaultLang', 'ua');

        // if (import.meta.env.MODE === 'production') {
        app.use(FacebookPixel, {pixelId: import.meta.env.VITE_FB_PIXEL_ID})
        // }

        app.mount(el)
    },
})
InertiaProgress.init({color: 'rgb(51 51 51)'});
