import i18n from "@/Includes/i18n";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

import {createSSRApp, h} from 'vue';
import {renderToString} from '@vue/server-renderer';
import {createInertiaApp} from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '@/../../vendor/tightenco/ziggy/dist/vue.m';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({App, props, plugin}) {
            return createSSRApp({render: () => h(App, props)})
                .use(plugin)
                .use(ZiggyVue, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                })
                .use(i18n)
                .provide('$defaultLang', 'ua');

            // app.use(VueSweetalert2);
            // app.use(user);
            // app.use(i18n);
            // // user.commit('load');
            // app.provide('$can', function (val) {
            //     return user.state.permissions.includes(val);
            // });
            //
            // // Layouts
            // app.component('auth-layout', AuthenticatedLayout);
            //
            // // Components
            // app.component('editor', Editor);
            // app.component('search-component', Search);
            // app.component('sidebar-component', Sidebar);
            // app.component('sidebar-item', SidebarItem);
            // app.component('lang-tabs', LangTabs);
            // app.component('card-component', Card);
            // app.component('table-component', Table);
            // app.component('loader-component', Loader);
            // app.component('modal-component', Modal);
            // app.component('button-component', Button);
            // app.component('checkbox-component', Checkbox);
            // app.component('image-card', ImageCard);
            // app.component('label-component', Label);
            // app.component('input-component', Input);
            // app.component('upload-input-component', UploadInput);
            // app.component('textarea-component', Textarea);
            // app.component('select-component', Select);
            // app.component('xcircle-component', XCircle);
            // app.component('multiselect', Multiselect);
            // app.component('pagination', Paginate);
            // app.component('Datepicker', Datepicker);
            //
            // app.config.globalProperties.$filters = {
            //     formatMoney(value) {
            //         return numeral(value).format('0,0[.]00') + ' грн.';
            //     },
            //     dateFormat(value) {
            //         return moment(value).format('DD.MM.YY');
            //     },
            //     dateTimeFormat(value) {
            //         return moment(value).format('DD.MM.YY HH:mm');
            //     },
            //     publishedStatus(value) {
            //         return value ? 'Опубліковано' : 'Не опубліковано';
            //     },
            //     yesOrNo(value) {
            //         return value ? 'Так' : 'Ні';
            //     }
            // }
            //
            // app.provide('$defaultLang', 'ua');
            //
            // app.provide('$selectYesOrNo', [
            //     {
            //         key: 0,
            //         value: 'Ні'
            //     },
            //     {
            //         key: 1,
            //         value: 'Так'
            //     },
            // ]);
            //
            // app.provide('$publishedStatuses', [
            //     {
            //         key: 0,
            //         value: 'Не опубліковано'
            //     },
            //     {
            //         key: 1,
            //         value: 'Опубліковано'
            //     },
            // ]);
            //
            // app.provide('$tiny', {
            //     api: import.meta.env.VITE_TINY_API,
            //     settings: {
            //         plugins: ['table', 'code', 'lists'],
            //         height: 300,
            //         branding: false,
            //         toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat'
            //     }
            // });
            // app.config.globalProperties.$moment = moment;
            // app.provide('$moment', moment);
            //
            // return app;
        },
    })
);
