<template>
    <section class="relative product-list" v-if="products.length">
        <div class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
            {{ textBestSelling }}
        </div>
        <div class="relative-slider">
            <Swiper :modules="modules" v-bind="settings">
                <Swiper-slide v-for="(product,i) in products" :key="i">
                    <ProductCard :product="product"
                                 :lang="lang"
                    ></ProductCard>
                </Swiper-slide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import ProductCard from '@/Pages/Public/Components/ProductCard.vue'
import {Autoplay, Lazy, Navigation} from "swiper";

defineProps({
    lang: String,
    products: Array,
    textBestSelling: {
        type: String,
        default: 'Найпопулярніші'
    },
});

const modules = [Navigation, Autoplay, Lazy];
const settings = {
    spaceBetween: 10,
    navigation: true,
    pagination: {
        clickable: true,

    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 2,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1366: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
}
</script>
