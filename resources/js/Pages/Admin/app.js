import '@/bootstrap';

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../../../vendor/tightenco/ziggy/dist/vue.m';
import {stateSymbol, createState, can} from "@/Includes/user.js";
import VueSweetalert2 from 'vue-sweetalert2';
import moment from "moment";
import numeral from "numeral";

import Card from '@/Components/Card.vue';
import LangTabs from '@/Components/LangTabs.vue';
import Table from '@/Components/Table.vue';
import Loader from '@/Components/Loader.vue';
import Modal from '@/Components/Modal.vue';
import Button from '@/Components/Button.vue';
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import UploadInput from '@/Components/Form/UploadInput.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Select from '@/Components/Form/Select.vue';
import XCircle from '@/Components/Icons/XCircle.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Multiselect from '@/Components/Multiselect/Multiselect.vue';
import Paginate from '@/Components/Paginate.vue';
import Datepicker from '@vuepic/vue-datepicker';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./${name}.vue`, import.meta.glob('./**/*.vue')),
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue, Ziggy);

        app.use(VueSweetalert2);

        app.provide(stateSymbol, createState());
        app.provide('$can', can);

        // Layouts
        app.component('auth-layout', AuthenticatedLayout);

        // Components
        app.component('lang-tabs', LangTabs);
        app.component('card-component', Card);
        app.component('table-component', Table);
        app.component('loader-component', Loader);
        app.component('modal-component', Modal);
        app.component('button-component', Button);
        app.component('label-component', Label);
        app.component('input-component', Input);
        app.component('upload-input-component', UploadInput);
        app.component('textarea-component', Textarea);
        app.component('select-component', Select);
        app.component('xcircle-component', XCircle);
        app.component('multiselect', Multiselect);
        app.component('paginate', Paginate);
        app.component('Datepicker', Datepicker);

        app.config.globalProperties.$filters = {
            formatMoney(value) {
                return numeral(value).format('0,0[.]00') + ' грн.';
            },
            dateFormat(value) {
                return moment(value).format('DD.MM.YY');
            },
            dateTimeFormat(value) {
                return moment(value).format('DD.MM.YY HH:mm');
            },
            publishedStatus(value) {
                return value ? 'Опубліковано' : 'Не опубліковано';
            },
            yesOrNo(value) {
                return value ? 'Так' : 'Ні';
            }
        }

        app.config.globalProperties.$defaultLang = 'ua';
        app.provide('$defaultLang', app.config.globalProperties.$defaultLang);

        app.config.globalProperties.$selectYesOrNo = [
            {
                key: 0,
                value: 'Ні'
            },
            {
                key: 1,
                value: 'Так'
            },
        ];
        app.provide('$selectYesOrNo', app.config.globalProperties.$selectYesOrNo);

        app.config.globalProperties.$publishedStatuses = [
            {
                key: 0,
                value: 'Не опубліковано'
            },
            {
                key: 1,
                value: 'Опубліковано'
            },
        ];
        app.provide('$publishedStatuses', app.config.globalProperties.$publishedStatuses);

        app.config.globalProperties.$moment = moment;
        app.provide('$moment', moment);

        app.mount(el);
    },
});

InertiaProgress.init({color: '#4B5563'});
