<script setup>
import ImageCard from '@/Components/ImageCard.vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation} from "swiper";

const modules = [Navigation];

defineProps(['images']);

const emits = defineEmits(['destroyImage']);

const destroyImage = (image) => {
    emits('destroyImage', image)
}
</script>

<template>
    <Swiper :slides-per-view="8" :space-between="20" :modules="modules" navigation>
        <SwiperSlide v-for="image in images">
            <ImageCard :image="image"
                       :id="image.id"
                       size="350"
                       :destroyIcon="true"
                       @destroyImage="destroyImage"
            />
        </SwiperSlide>
    </Swiper>
</template>
