<template>
    <section class="my-5" v-if="data.length">
        <div class="reviews__block-title font-bold text-2xl font-heading text-center text-black">
            {{ textReviews }}
        </div>
        <Swiper :modules="modules" class="reviews-carousel" v-bind="settings">
            <SwiperSlide v-for="review in data" class="text-center bg-red-100 rounded-xl p-5">
                <div class="font-bold font-subheading">{{ review.name }}</div>
                <hr class="bg-main shadow-lg rounded border-0 h-[1px] my-2">
                <div class="text-base font-text">{{ review.comment }}</div>
            </SwiperSlide>
        </Swiper>
        <div class="flex-row text-center">
            <a :href="route('reviews')" target="_blank">
                <Button type="button">{{ textSeeMore }}</Button>
            </a>
        </div>
    </section>
</template>

<script setup>
import {Pagination, Autoplay, EffectCoverflow} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/vue';
import Button from '@/Pages/Public/Components/Button.vue';

const modules = [Pagination, Autoplay, EffectCoverflow];
const settings = {
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        type: 'progressbar',
    },
    breakpoints: {
        '768': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '1024': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    effect: 'coverflow',
    centeredSlides: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    }
};

defineProps({
    data: {
        type: Array
    },
    textReviews: {
        type: String,
        default: 'Відгуки'
    },
    textNoReviews: {
        type: String,
        default: 'Відгуки відсутні'
    },
    textSeeMore: {
        type: String,
        default: 'Дивитись більше'
    }
})
</script>

<style>
.reviews-carousel .swiper-wrapper {
    min-height: 15rem;
    align-items: center;
}

.reviews-carousel .swiper-pagination {
    bottom: 1rem;
    top: unset;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
}
</style>
