<template>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 mt-3">
        <ImageCard
            class="m-1"
            v-for="image in images.data"
            :image="route('images.350',image.src)"
            :id="image.id"
            :alt="image.alt"
            @clickImage="$emit('clickImage',image)"
            :destroyIcon="true"
            @destroyImage="destroyImage"
        />
    </div>
</template>

<script setup>
import ImageCard from '@/Components/ImageCard.vue';

const emits = defineEmits(['fetch', 'clickImage', 'destroyImage']);

defineProps(['images'])

function fetch(data) {
    emits('fetch', data)
}

function destroyImage(image) {
    emits('destroyImage', image);
}
</script>
