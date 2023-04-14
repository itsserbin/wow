import '@/Includes/bootstrap';
import {ZiggyVue} from '../../../vendor/tightenco/ziggy/dist/vue.m';
// import {createI18n} from 'vue-i18n'
import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3'
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import store from "@/Includes/store";
// import mountPublic from "@/Pages/Public/app";
// import mountAdmin from "@/Pages/Admin/app";

// const i18n = createI18n({})

if (location.pathname.startsWith('/admin') || location.pathname.startsWith('/auth')) {
    import('@/Pages/Admin/app').then(({mountAdmin}) => {
        mountAdmin();
    });
} else {
    import('@/Pages/Public/app').then(({mountPublic}) => {
        mountPublic();
    });

}
// createInertiaApp({
//     resolve: (name) => resolvePageComponent(`./${name}.vue`, import.meta.glob('./**/*.vue')),
//     setup({el, App, props, plugin}) {
//         const app = createApp({render: () => h(App, props)})
//         app.use(plugin)
//         app.use(i18n)
//         app.use(ZiggyVue, Ziggy);
//         app.use(store);
//
//         if (!location.pathname.startsWith('/admin')) {
//             store.commit('loadCart');
//             import('@/Pages/Public/app').then(({mountPublic}) => {
//                 mountPublic(app);
//             });
//         }
//
//         // const appModule = location.pathname.startsWith('/admin')
//         //     ? import('./Admin/app')
//         //     : import('./Public/app');
//         //
//         // appModule.then((appModule) => {
//         //     const {application} = appModule;
//         //     application(app);
//         //
//         //     app.mount(el);
//         // });
//
//
//         app.mount(el);
//     },
// })
