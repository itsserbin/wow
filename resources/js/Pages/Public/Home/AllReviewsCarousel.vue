<template>
    <section id="reviews" class="pr-[20px] my-5" v-if="reviews.length">
        <div class="container">
            <div class="reviews__block-title font-bold text-[22px] text-center text-black mb-3">{{ textReviews }}</div>
            <swiper
                v-if="reviews.length"
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
                <swiper-slide v-for="review in reviews">
                    <div class="text-center font-bold">{{ review.name }}</div>
                    <div class="reviews-slider__text">{{ review.comment }}</div>
                </swiper-slide>
            </swiper>
            <h3 v-else>{{ textNoReviews }}</h3>
            <div class="flex-row text-center" v-if="reviews.length">
                <a :href="reviewsRoute" target="_blank">
                    <button class="cursor-pointer w-[250px] h-[50px] text-white bg-[#E02424] text-bold uppercase rounded-[10px]" type="button">
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

const reviews = ref([
    {
        name: 'Богдана',
        comment: 'Замовила собі у подарунок залишилась задоволеною, якість хороша, продавець також, рекомендую.'
    },
    {
        name: 'Богдана',
        comment: 'Замовила собі у подарунок залишилась задоволеною, якість хороша, продавець також, рекомендую.'
    },
    {
        name: 'Богдана',
        comment: 'Замовила собі у подарунок залишилась задоволеною, якість хороша, продавець також, рекомендую.'
    },
    {
        name: 'Богдана',
        comment: 'Замовила собі у подарунок залишилась задоволеною, якість хороша, продавець також, рекомендую.'
    },
    {
        name: 'Богдана',
        comment: 'Замовила собі у подарунок залишилась задоволеною, якість хороша, продавець також, рекомендую.'
    },

]);

// onMounted(() => {
//     axios.get('/api/v1/reviews/carousel-list')
//         .then(({data}) => reviews.value = data.result)
//         .catch((response) => console.log(response));
// })
</script>

<style>
.reviews-carousel .swiper-wrapper {
    min-height: 100px;
}
</style>
