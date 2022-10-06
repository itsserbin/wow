<template>
    <div class="w-full" v-if="images.length">
        <div class="row flex justify-center items-center">
            <div class="col" v-for="image in images">
                <ImageCard
                    :destroyIcon="true"
                    :image="image.src"
                    :alt="image.alt"
                    @destroyImage="$emit('onDestroyImage')"
                />
            </div>
        </div>
    </div>
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
               :for="id"
        >{{ label }}</label>
        <input v-if="multiple"
               class="
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
               :id="id"
               type="file"
               multiple
               @change="$emit('upload', $event.target.files)"
        >
        <input v-else
               class="
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
               :id="id"
               type="file"
               @change="$emit('upload', $event.target.files[0])"
        >
    </div>
</template>

<script setup>
import ImageCard from '@/Components/ImageCard.vue';

const props = defineProps({
    id: String,
    label: String,
    multiple: {
        type: Boolean,
        default: false
    },
    images: [Array, String]
})

defineEmits(['upload','onDestroyImage']);
</script>
