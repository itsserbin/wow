<template>
    <swiper
        :slides-per-view="8"
        :modules="modules"
        navigation
    >
        <swiper-slide v-for="image in images">
            <ImageCard :image="image.src" :id="image.id" :destroyIcon="true" @destroyImage="destroyImage"/>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import ImageCard from '@/Components/ImageCard.vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {reactive} from "vue";
import {Navigation} from "swiper";

const modules = reactive([Navigation]);

const props = defineProps(['images']);

const emits = defineEmits(['destroyImage']);

function destroyImage(image) {
    emits('destroyImage', image)
}
</script>
