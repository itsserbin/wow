<template>
    <div class="max-w-7xl mx-auto">
        <Swiper class="header-categories" v-bind="settings" :modules="modules">
            <SwiperSlide v-for="category in categories">
                <li class="text-center py-2">
                    <a :href="route('category',category.slug)" class="font-bold text-sm whitespace-nowrap">
                        {{ title(category.title) }}
                    </a>
                </li>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup>
import {Lazy, Autoplay, Pagination} from "swiper";
import {computed} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Link} from "@inertiajs/inertia-vue3";

const props = defineProps(['categories', 'lang']);

const modules = [Lazy, Autoplay, Pagination];

const title = computed(() => (val) => props.lang === 'ua' ? val.ua : (props.lang === 'ru' ? val.ru : null))

const settings = {
    spaceBetween: 10,
    pagination: {
        type: 'progressbar',
    },
    freeMode: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    breakpoints: {
        '568': {
            slidesPerView: 2,
        },
        '768': {
            slidesPerView: 4,
        },
        '991': {
            slidesPerView: 6,
        },
        '1366': {
            slidesPerView: 8,
        },
    }
}
</script>

<style>
@media screen and (min-width: 1366px) {
    .header-categories .swiper-wrapper {
        justify-content: center;
    }
}
</style>
