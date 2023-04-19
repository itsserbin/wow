<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Pagination, EffectCoverflow} from "swiper";
import ReviewForm from '@/Pages/Public/Product/ReviewForm.vue'

const modules = [Autoplay, Pagination, EffectCoverflow];

const settings = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    pagination: {
        type: 'progressbar',
    },
    loop: true,
    autoplay: {
        delay: 2500,
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
    reviews: Array,
    id: Number,
    textProductReviews: {
        type: String,
        default: 'Відгуки'
    },
    textNoReviews: {
        type: String,
        default: 'Відгуки відсутні'
    }
});
</script>

<template>
    <div id="reviews" class="reviews px-5">
        <div v-if="reviews.length">
            <div class="text-[24px] text-[#000] font-bold mb-5 text-center">
                {{ textProductReviews }}
            </div>
            <swiper class="product-reviews-carousel" :modules="modules" v-bind="settings">
                <swiper-slide v-for="review in reviews" :key="review.id" class="text-center bg-red-100 rounded-xl p-5">
                    <div class="font-bold">{{ review.name }}</div>
                    <hr class="bg-red-600 shadow-lg rounded border-0 h-[1px] my-2">
                    <div>{{ review.comment }}</div>
                </swiper-slide>
            </swiper>
        </div>

        <ReviewForm
            :id="id"
        ></ReviewForm>
    </div>
</template>

<style>
.product-reviews-carousel .swiper-wrapper {
    min-height: 12rem;
}

.product-reviews-carousel .swiper-pagination {
    bottom: 1rem;
    top: unset;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
}
</style>
