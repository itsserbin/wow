<template>
    <section id="reviews" class="pr-[20px] my-5" v-if="state.reviews.length">
        <div class="container">
            <div class="reviews__block-title font-bold text-[22px] text-center text-black mb-3">{{ textReviews }}</div>
            <swiper
                :autoHeight="true"
                class="reviews-carousel"
                :slides-per-view="1"
                :space-between="0"
                :modules="modules"
                :pagination="true"
                :breakpoints="{
                  '768': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  '1024': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                }"
            >
                <swiper-slide v-for="review in state.reviews">
                    <div class="text-center font-bold">{{ review.name }}</div>
                    <div>{{ review.comment }}</div>
                </swiper-slide>
            </swiper>
            <div class="flex-row text-center" v-if="state.reviews.length">
                <a :href="reviewsRoute" target="_blank">
                    <button
                        class="cursor-pointer w-[250px] h-[50px] text-white bg-[#E02424] text-bold uppercase rounded-[10px]"
                        type="button">
                        {{ textSeeMore }}
                    </button>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import {Pagination, Autoplay} from "swiper";
import {onMounted, ref} from "vue";

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

const modules = [Pagination, Autoplay];

const state = ref({
    reviews: []
});

onMounted(() => {
    axios.get('/api/v1/reviews/carousel-list')
        .then(({data}) => state.value.reviews = data.result)
        .catch((response) => console.log(response));
})
</script>

<style>
.reviews-carousel .swiper-wrapper {
    min-height: 10rem;
}
</style>
