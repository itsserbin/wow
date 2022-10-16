<template>
    <div class="max-w-7xl mx-auto">
        <swiper
            class="header-categories"
            v-bind="settings"
            :modules="modules"
        >
            <swiper-slide v-for="category in categories">
                <li class="text-center py-2">
                    <a :href="route('category',category.slug)" class="font-bold text-sm whitespace-nowrap">
                        {{
                            lang === 'ua' ? category.title.ua :
                                (lang === 'ru' ? category.title.ru : null)
                        }}
                    </a>
                </li>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script setup>
import {Lazy, Autoplay, Navigation} from "swiper";

defineProps(['categories', 'lang']);

const modules = [Lazy, Autoplay, Navigation];

const settings = {
    spaceBetween: 0,
    navigation: true,
    freeMode: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
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
