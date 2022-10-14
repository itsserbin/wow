<template>
    <div id="reviews" class="reviews px-5">
        <div v-if="reviews.length">
            <div class="text-[24px] text-[#000] font-bold mb-5 text-center">
                {{ textProductReviews }}
            </div>
            <swiper
                class="reviews-slider"
                :slides-per-view="1"
                :space-between="20"
                :autoHeight="true"
                :modules="modules"
                :pagination="{
                  clickable: true,
                }"
                :loop="true"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
                }"
            >

                <swiper-slide v-for="review in reviews" :key="review.id">
                    <div class="text-center font-bold">{{ review.name }}</div>
                    <div>{{ review.comment }}</div>
                </swiper-slide>
            </swiper>
        </div>

<!--        <review-form-->
<!--            :id="id"-->
<!--            :text-give-review="textGiveReview"-->
<!--            :text-enter-name="textEnterName"-->
<!--            :text-enter-review="textEnterReview"-->
<!--            :text-name="textName"-->
<!--            :text-phone="textPhone"-->
<!--            :text-comment="textComment"-->
<!--        ></review-form>-->
    </div>
</template>

<script setup>
import {Autoplay, Pagination} from "swiper";

const modules = [Autoplay, Pagination];

defineProps({
    reviews: Array,
    textProductReviews: {
        type: String,
        default: 'Відгуки'
    },
    textNoReviews: {
        type: String,
        default: 'Відгуки відсутні'
    },
    textGiveReview: {
        type: String,
        default: 'Залишити відгук'
    },
    textEnterName: {
        type: String,
        default: 'Ваше імʼя'
    },
    textEnterReview: {
        type: String,
        default: 'Ваш відгук'
    },
    textName: {
        type: String,
        default: 'Імʼя'
    },
    textPhone: {
        type: String,
        default: 'Телефон'
    },
    textComment: {
        type: String,
        default: 'Відгук'
    },
});
</script>

<style>
.reviews-slider .swiper-wrapper {
    margin-bottom: 50px;
}
</style>
