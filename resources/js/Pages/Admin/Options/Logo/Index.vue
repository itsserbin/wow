<template>
    <AuthenticatedLayout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>
        <div class="mb-4">
            <label class="block font-medium text-gray-700">{{ label }}</label>
            <div class="mt-2">
                <div v-if="image">
                    <img :src="image" class="w-20 h-20 object-contain mb-2">
                    <button type="button" class="text-sm font-medium text-red-500 hover:text-red-700"
                        @click="destroyImage">{{ destroyLabel }}</button>
                </div>
                <div v-else>
                    <input type="file" @change="onFileChange" :accept="accept">
                    <p class="mt-2 text-sm text-gray-500">{{ instructions }}</p>
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

const label = 'Логотип';
const destroyLabel = 'Видалити';
const accept = 'image/*';
const instructions = 'Виберіть зображення логотипу';

const image = ref(null);

const onFileChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('logo', file);

    axios.post('/upload-image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => {
            image.value = URL.createObjectURL(file);
            emit('upload', response.data.path);
        })
        .catch(error => {
            console.error(error);
        });
};

const destroyImage = () => {
    axios.delete('/delete-image')
        .then(() => {
            image.value = null;
            emit('onDestroyImage');
        })
        .catch(error => {
            console.error(error);
        });
};

const emit = (event, payload) => {
    const eventName = `update:${event}`;
    if (props[`on${event}`]) {
        props[`on${event}`](payload);
    } else if (attrs[eventName]) {
        attrs[eventName](payload);
    }
};

</script>