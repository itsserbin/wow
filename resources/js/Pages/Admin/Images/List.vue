<template>
    <div class="grid grid-cols-2 md:grid-cols-6 mt-3">
        <ImageCard
            class="m-1"
            v-for="image in props.images.data"
            :image="route('images.products.350',image.src)"
            :id="image.id"
            :alt="image.alt"
            @clickImage="$emit('clickImage',image)"
            :destroyIcon="true"
            @destroyImage="destroyImage"
        />
    </div>
    <div class="row flex justify-center my-5" v-if="props.images">
        <paginate :pagination="props.images"
                  :click-handler="fetch"
                  v-model="currentPage"
        />
    </div>
</template>

<script setup>
import ImageCard from '@/Components/ImageCard.vue';
import {ref} from "vue";

const currentPage = ref(1);

const emits = defineEmits(['fetch', 'clickImage', 'destroyImage']);

const props = defineProps(['images'])

function fetch(data) {
    emits('fetch', data)
}

function destroyImage(image) {
    emits('destroyImage', image);
}
</script>
