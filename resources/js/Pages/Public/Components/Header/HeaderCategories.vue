<script setup>
import {Lazy, Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Link} from "@inertiajs/inertia-vue3";

const modules = [Lazy, Autoplay, Pagination];

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

<template>
    <div class="bg-[#000000] text-white">
        <Swiper class="font-subheading max-w-7xl mx-auto header-categories" v-bind="settings"
                :modules="modules">
            <SwiperSlide v-for="category in $page.props.categories" class="text-center py-2">
                <Link :href="route('category',category.slug)"
                      class="font-bold text-sm whitespace-nowrap">
                    {{ category.title[$page.props.lang] }}
                </Link>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style>
@media screen and (min-width: 1366px) {
    .header-categories .swiper-wrapper {
        justify-content: center;
    }
}
</style>
