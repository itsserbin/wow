<template>
    <section class="banners mb-5" v-if="data.length">
        <Swiper :modules="modules" v-bind="settings" class="main-banners-slider">
            <SwiperSlide v-for="(banner,i) in data" :key="i" class="shadow-sm">
                <a :href="banner.link ? banner.link[lang] : 'javascript:'">
                    <picture>
                        <source
                            media="(max-width: 568px)"
                            :srcset="route('images.banners.mobile', banner.image_mobile[lang])"
                        >
                        <source
                            :srcset="route('images.banners.table',banner.image_table[lang])"
                            media="(max-width: 991px)">
                        <source
                            :srcset="route('images.banners.desktop',banner.image_desktop[lang])">
                        <img
                            :srcset="route('images.banners.desktop',banner.image_desktop[lang])"
                            :alt="banner.title[lang]"
                            class="w-full"
                        >
                    </picture>
                </a>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import {Lazy, Autoplay, Pagination, EffectCreative} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/vue';

const props = defineProps(['lang', 'data']);

const modules = [Lazy, Autoplay, Pagination, EffectCreative];
const settings = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        dynamicBullets: true,
        clickable: true
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    lazy: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    }
};
</script>
