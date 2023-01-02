<template>
    <swiper
        :slides-per-view="8"
        :space-between="20"
        :modules="modules"
        navigation
    >
        <swiper-slide v-for="image in images">
            <ImageCard :image="image"
                       :id="image.id"
                       size="350"
                       :destroyIcon="true"
                       @destroyImage="destroyImage"
            />
        </swiper-slide>
    </swiper>
</template>

<script setup>
import ImageCard from '@/Components/ImageCard.vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from "swiper";

const modules = [Navigation];

defineProps(['images']);

const emits = defineEmits(['destroyImage']);

function destroyImage(image) {
    emits('destroyImage', image)
}
</script>
