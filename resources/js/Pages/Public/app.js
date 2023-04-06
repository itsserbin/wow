import '@/Includes/bootstrap';

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import {createGtm} from '@gtm-support/vue-gtm';
import {ZiggyVue} from '../../../../vendor/tightenco/ziggy/dist/vue.m';
import store from '@/Includes/store.js';
import {createI18n} from 'vue-i18n'
import vLazy from '@/Includes/lazyload.js';

const app = createApp();
const i18n = createI18n({})

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

app.directive('lazy', vLazy);
store.commit('loadCart');
app.use(i18n)
app.use(store);
app.use(ZiggyVue, Ziggy);

import {Swiper, SwiperSlide} from 'swiper/vue';
import VueSweetalert2 from 'vue-sweetalert2';
import Maska from 'maska';

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
app.component('swiper', Swiper);
app.component('swiper-slide', SwiperSlide);

import CartIconComponent from '@/Pages/Public/Components/CartIcon.vue';
import Footer from '@/Pages/Public/Components/Footer.vue';
import Header from '@/Pages/Public/Components/Header/Header.vue';
import MasterLayout from '@/Layouts/MasterLayout.vue';
import Modal from '@/Pages/Public/Components/Modal.vue';
import Label from '@/Pages/Public/Components/Label.vue';
import Textarea from '@/Pages/Public/Components/Textarea.vue';
import Input from '@/Pages/Public/Components/Input.vue';
import InputError from '@/Components/Form/InputError.vue';
import Callback from '@/Pages/Public/Components/Callback.vue';
import Consultation from '@/Pages/Public/Components/Consultation.vue';
import Button from '@/Pages/Public/Components/Button.vue';
import ScrollToTop from '@/Pages/Public/Components/ScrollToTop.vue';

app.component('scroll-to-top', ScrollToTop)
app.component('cart-icon-component', CartIconComponent)
app.component('header-component', Header)
app.component('footer-component', Footer)
app.component('callback', Callback)
app.component('consultation', Consultation)
app.component('master-layout', MasterLayout)
app.component('modal', Modal)
app.component('label-component', Label)
app.component('input-component', Input)
app.component('textarea-component', Textarea)
app.component('input-error', InputError)
app.component('button-component', Button)

import InstagramIcon from "@/Components/Icons/InstagramIcon.vue";
import FacebookIcon from "@/Components/Icons/FacebookIcon.vue";
import TelegramIcon from "@/Components/Icons/TelegramIcon.vue";
import ViberIcon from "@/Components/Icons/ViberIcon.vue";
import CloseIcon from "@/Components/Icons/CloseIcon.vue";

app.component('instagram-icon', InstagramIcon);
app.component('facebook-icon', FacebookIcon);
app.component('telegram-icon', TelegramIcon);
app.component('viber-icon', ViberIcon);
app.component('close-icon', CloseIcon);

import HomeIndex from '@/Pages/Public/Home/Index.vue';
import CategoryIndex from '@/Pages/Public/Category/Index.vue';
import ProductIndex from '@/Pages/Public/Product/Index.vue';
import CartIndex from '@/Pages/Public/Cart/Index.vue';
import CheckoutIndex from '@/Pages/Public/Checkout/Index.vue';
import ThanksIndex from '@/Pages/Public/Thanks/Index.vue';
import StatusIndex from '@/Pages/Public/Status/Index.vue';
import ReviewsIndex from '@/Pages/Public/Reviews/Index.vue';
import PageIndex from '@/Pages/Public/Page/Index.vue';
import SupportIndex from '@/Pages/Public/Support/Index.vue';

app.component('home-index', HomeIndex);
app.component('category-index', CategoryIndex);
app.component('product-index', ProductIndex);
app.component('cart-index', CartIndex);
app.component('checkout-index', CheckoutIndex);
app.component('thanks-index', ThanksIndex);
app.component('order-status-index', StatusIndex);
app.component('reviews-index', ReviewsIndex);
app.component('page-index', PageIndex);
app.component('support-index', SupportIndex);

app.provide('$defaultLang', 'ua');

app.mount('#app');
