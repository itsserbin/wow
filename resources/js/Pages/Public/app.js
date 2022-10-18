import '@/bootstrap';

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import {ZiggyVue} from '../../../../vendor/tightenco/ziggy/dist/vue.m';
import store from '@/Includes/store.js';
import { createI18n } from 'vue-i18n'

const app = createApp();
const i18n = createI18n({})

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
import Header from '@/Pages/Public/Components/Header.vue';
import Categories from '@/Pages/Public/Components/Categories.vue';
import FaqComponent from '@/Pages/Public/Components/FaqComponent.vue';
import Loader from '@/Pages/Public/Components/Loader.vue';
import ProductCard from '@/Pages/Public/Components/ProductCard.vue';
import ProductCards from '@/Pages/Public/Components/ProductCards.vue';
import Modal from '@/Pages/Public/Components/Modal.vue';
import Label from '@/Pages/Public/Components/Label.vue';
import Input from '@/Pages/Public/Components/Input.vue';
import Button from '@/Pages/Public/Components/Button.vue';
import AllReviewsList from '@/Pages/Public/Components/AllReviewsList.vue';

app.component('cart-icon-component', CartIconComponent)
app.component('header-component', Header)
app.component('categories-component', Categories)
app.component('faq-component', FaqComponent)
app.component('loader', Loader)
app.component('product-card', ProductCard)
app.component('product-cards', ProductCards)
app.component('modal', Modal)
app.component('label-component', Label)
app.component('input-component', Input)
app.component('button-component', Button)
app.component('all-reviews-list', AllReviewsList)

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

import MainBanners from '@/Pages/Public/Home/MainBanners.vue';
import AllProducts from '@/Pages/Public/Home/AllProducts.vue';
import BestSelling from '@/Pages/Public/Home/BestSelling.vue';
import NewProducts from '@/Pages/Public/Home/NewProducts.vue';
import AllReviewsCarousel from '@/Pages/Public/Home/AllReviewsCarousel.vue';

app.component('main-banners', MainBanners);
app.component('all-products', AllProducts);
app.component('best-selling-products', BestSelling);
app.component('new-products', NewProducts);
app.component('all-reviews-carousel', AllReviewsCarousel);

import DeliveryAndPayment from '@/Pages/Public/Product/DeliveryAndPayment.vue';
import ProductImagesSlider from '@/Pages/Public/Product/ImagesSlider.vue';
import AddToCart from '@/Pages/Public/Product/AddToCart.vue';
import ProductReviews from '@/Pages/Public/Product/Reviews.vue';
import SizesTable from '@/Pages/Public/Product/SizesTable.vue';
import RelativeProducts from '@/Pages/Public/Product/RelativeProducts.vue';
import BestSellingProducts from '@/Pages/Public/Product/BestSellingProducts.vue';
import NewProduct from '@/Pages/Public/Product/NewProducts.vue';

app.component('delivery-and-payment', DeliveryAndPayment);
app.component('product-images-slider', ProductImagesSlider);
app.component('add-to-cart', AddToCart);
app.component('product-reviews', ProductReviews);
app.component('sizes-table', SizesTable);
app.component('relative-products', RelativeProducts);
app.component('best-selling-product', BestSellingProducts);
app.component('new-product', NewProduct);

import CategoryBanners from '@/Pages/Public/Category/Banners.vue';
import CategoryProducts from '@/Pages/Public/Category/Products.vue';

app.component('category-banners', CategoryBanners);
app.component('category-products', CategoryProducts);

import CartComponent from '@/Pages/Public/Cart/Index.vue';
import CheckoutComponent from '@/Pages/Public/Checkout/Index.vue';
import ThanksPageIndex from '@/Pages/Public/Thanks/Index.vue';

app.component('cart-component', CartComponent);
app.component('checkout-component', CheckoutComponent);
app.component('thanks-component', ThanksPageIndex);

app.mount('#app');
