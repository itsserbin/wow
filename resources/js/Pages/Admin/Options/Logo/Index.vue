<template>
    <AuthenticatedLayout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>
        <div class="mb-4">
            <label class="block font-medium text-gray-700">{{ $t('options.text_label_logo') }}</label>
            <div class="mt-2">
                <div v-if="image">
                    <img :src="image" class="w-20 h-20 object-contain mb-2">
                    <button type="button" class="text-sm font-medium text-red-500 hover:text-red-700"
                        @click="destroyImage">{{ $t('options.text_destroyLabel') }}</button>
                </div>
                <div v-else>
                    <input type="file" @change="onFileChange" :accept="accept">
                    <p class="mt-2 text-sm text-gray-500">{{ $t('options.instructions') }}</p>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ref } from 'vue';
import axios from 'axios';

defineProps(['title']);

const accept = 'image/*';
const image = ref(null);

//Загрузка фото
const onFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('logo', file);

    await axios.post('/upload-image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(({ data }) => {
            image.value = URL.createObjectURL(file);
            emit('upload', data.path);
        })
        .catch(error => {
            console.error(error);
        });
};

//Удаляем лого которое загрузилось
const destroyImage = async () => {
    await axios.delete(route('logo.upload'))
        .then(() => {
            image.value = null;
            emits('onDestroyImage');
        })
        .catch(error => {
            console.error(error);
        });
};

</script>