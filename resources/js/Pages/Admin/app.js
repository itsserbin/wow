if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    import('primevue/resources/themes/vela-blue/theme.css');
} else {
    import('primevue/resources/themes/viva-light/theme.css');
}

import '@/Includes/bootstrap';

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../../../vendor/tightenco/ziggy/dist/vue.m';
import moment from "moment";
import numeral from "numeral";
import i18n from "@/Includes/i18n";
import user from '@/Includes/user.js';
import PrimeVue from 'primevue/config';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./${name}.vue`, import.meta.glob('./**/*.vue')),
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
            .use(plugin)
            .use(PrimeVue)
            .use(user)
            .use(i18n)
            .use(ZiggyVue, Ziggy);

        // app.config.globalProperties.confirm = createConfirm;

        app.provide('$can', function (val) {
            return user.state.permissions.includes(val);
        });

        app.config.globalProperties.$filters = {
            formatMoney(value) {
                return numeral(value).format('0,0[.]00') + ' грн.';
            },
            formatMoney1(value) {
                return numeral(value).format('0,0[.]00');
            },
            dateFormat(value) {
                return moment(value).format('DD.MM.YY');
            },
            monthFormat(value) {
                return moment(value).format('MM.YYYY');
            },
            dateTimeFormat(value) {
                return moment(value).format('DD.MM.YY HH:mm');
            },
            timeFormat(value) {
                return moment(value).format('HH:mm');
            },
            publishedStatus(value) {
                return value ? 'Опубліковано' : 'Не опубліковано';
            },
            yesOrNo(value) {
                return value ? 'Так' : 'Ні';
            }
        }

        app.provide('$defaultLang', 'ua');

        app.provide('$selectYesOrNo', [
            {
                key: 0,
                value: 'Ні'
            },
            {
                key: 1,
                value: 'Так'
            },
        ]);

        app.provide('$publishedStatuses', [
            {
                key: 0,
                value: 'Не опубліковано'
            },
            {
                key: 1,
                value: 'Опубліковано'
            },
        ]);

        app.provide('$tiny', {
            api: import.meta.env.VITE_TINY_API,
            settings: {
                plugins: ['table', 'code', 'lists'],
                height: 300,
                branding: false,
                toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat'
            }
        });
        app.config.globalProperties.$moment = moment;
        app.provide('$moment', moment);

        app.mount(el);
    },
});

InertiaProgress.init({color: '#4B5563'});
