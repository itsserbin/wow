import store from '@/Includes/store.js';
import {createI18n} from 'vue-i18n'

const i18n = createI18n({})
import {createSSRApp, h} from 'vue';
import {renderToString} from '@vue/server-renderer';
import {createInertiaApp} from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '@/../../vendor/tightenco/ziggy/dist/vue.m';

const appName = 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./${name}.vue`, import.meta.glob('./**/*.vue')),
        setup({App, props, plugin}) {
            return createSSRApp({render: () => h(App, props)})
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(i18n)
                .provide('$defaultLang', 'ua')
                .use(store);
        },
    })
);
