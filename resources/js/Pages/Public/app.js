import '@/bootstrap';

import {createApp} from 'vue/dist/vue.esm-bundler.js';

const app = createApp({});

import {Swiper, SwiperSlide} from 'swiper/vue';

app.component('swiper', Swiper);
app.component('swiper-slide', SwiperSlide);

import CartIconComponent from '@/Pages/Public/Components/CartIcon.vue';
import Header from '@/Pages/Public/Components/Header.vue';
import Categories from '@/Pages/Public/Components/Categories.vue';
import FaqComponent from '@/Pages/Public/Components/FaqComponent.vue';
import Loader from '@/Pages/Public/Components/Loader.vue';
import ProductCard from '@/Pages/Public/Components/ProductCard.vue';
import ProductCards from '@/Pages/Public/Components/ProductCards.vue';

app.component('cart-icon-component', CartIconComponent)
app.component('header-component', Header)
app.component('categories-component', Categories)
app.component('faq-component', FaqComponent)
app.component('loader', Loader)
app.component('product-card', ProductCard)
app.component('product-cards', ProductCards)

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

import AllProducts from '@/Pages/Public/Home/AllProducts.vue';
import BestSelling from '@/Pages/Public/Home/BestSelling.vue';
import NewProducts from '@/Pages/Public/Home/NewProducts.vue';
import AllReviewsCarousel from '@/Pages/Public/Home/AllReviewsCarousel.vue';

app.component('all-products', AllProducts);
app.component('best-selling-products', BestSelling);
app.component('new-products', NewProducts);
app.component('all-reviews-carousel', AllReviewsCarousel);

app.mount('#app');
