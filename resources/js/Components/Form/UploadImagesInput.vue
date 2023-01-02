<template>
    <loader-component v-if="isLoading"/>
    <div class="w-full" v-if="!isLoading">
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
               multiple
               @change="uploadImage($event.target.files)"
        >
    </div>
</template>

<script setup>
import {ref} from "vue";

defineProps(['label']);
const emits = defineEmits(['onUpload', 'onDestroyImage']);

const isLoading = ref(false);

function uploadImage(images) {
    isLoading.value = true;
    Array.from(images).forEach(function (image) {
        let formData = new FormData();
        formData.append('image', image);
        axios.post(route('api.images.upload'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(({data}) => {
                emits('onUpload');
                isLoading.value = false;
                console.log(data);
            })
            .catch((response) => {
                console.log(response);
                isLoading.value = false;
            });
    })
}
</script>
