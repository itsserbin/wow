<script setup>
import ImageCard from '@/Components/ImageCard.vue';

const emits = defineEmits([
    'fetch',
    'clickImage',
    'destroyImage'
]);

defineProps(['images'])

const fetch = (data) => {
    emits('fetch', data)
}

const destroyImage = (image) => {
    emits('destroyImage', image);
}
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mt-3">
        <ImageCard
            class="m-1"
            v-for="image in images.data"
            :image="image"
            :id="image.id"
            :alt="image.alt"
            @clickImage="$emit('clickImage',image)"
            :destroyIcon="true"
            @destroyImage="destroyImage"
        />
    </div>
</template>
