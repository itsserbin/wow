<script setup>
import ImageCard from '@/Components/ImageCard.vue';

defineProps(['label', 'image']);
defineEmits(['upload', 'onDestroyImage']);
</script>

<template>
    <ImageCard
        v-if="image"
        :destroyIcon="true"
        :image="image"
        @destroyImage="$emit('onDestroyImage')"
    />
    <div class="w-full" v-else>
        <label v-if="label"
               class="
                        block
                        mb-2
                        text-sm
                        font-medium
                        text-gray-900
                        dark:text-gray-300
               "
        >{{ label }}</label>
        <input class="
                        block
                        w-full
                        text-sm
                        text-gray-900
                        bg-gray-50
                        rounded-lg
                        border
                        border-gray-300
                        cursor-pointer
                        dark:text-gray-400
                        focus:outline-none
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:placeholder-gray-400
               "
               type="file"
               @change="$emit('upload', $event.target.files[0])"
        >
    </div>
</template>
