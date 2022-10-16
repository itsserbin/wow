<template>
    <section class="my-5" v-if="state.reviews.length">
        <div class="reviews__block-title font-bold text-[22px] text-center text-black">
            {{ textReviews }}
        </div>
        <swiper
            :modules="modules"
            class="reviews-carousel"
            v-bind="settings"
        >
            <swiper-slide v-for="review in state.reviews" class="text-center bg-red-100 rounded-xl p-5">
                <div class=" font-bold">{{ review.name }}</div>
                <hr class="bg-red-600 shadow-lg rounded border-0 h-[1px] my-2">
                <div>{{ review.comment }}</div>
            </swiper-slide>
        </swiper>
        <div class="flex-row text-center" v-if="state.reviews.length">
            <a :href="reviewsRoute" target="_blank">
                <button-component type="button">
                    {{ textSeeMore }}
                </button-component>
            </a>
        </div>
    </section>
</template>

<script setup>
import {Pagination, Autoplay, EffectCoverflow} from "swiper";
import {onMounted, ref} from "vue";

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
const state = ref({
    reviews: []
});

defineProps({
    textReviews: {
        type: String,
        default: 'Відгуки'
    },
    textNoReviews: {
        type: String,
        default: 'Відгуки відсутні'
    },
    reviewsRoute: String,
    textSeeMore: {
        type: String,
        default: 'Дивитись більше'
    }
})

onMounted(() => {
    axios.get('/api/v1/reviews/carousel-list')
        .then(({data}) => state.value.reviews = data.result)
        .catch((response) => console.log(response));
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
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    max-width: 80%;
}
</style>
