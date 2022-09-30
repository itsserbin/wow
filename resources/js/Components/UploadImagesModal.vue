<template>
    <Modal :is-active="props.isActive"
           @closeModal="$emit('closeModal')"
           submit-button-text="Ok"
           cancel-button-text="Load more"
           @submitForm="$emit('closeModal')"
           @clickCancel="$emit('loadMoreImages')"
    >
        <template #title>
            Upload images
        </template>

        <template #content>
            <UploadInput :multiple="true"
                         id="uploadImages"
                         label="Upload images"
                         @upload="uploadImagesFunction"
                         :images="props.images"
            />
        </template>
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue';
import UploadInput from '@/Components/Form/UploadInput.vue';

const props = defineProps([
    'isActive',
    'images'
])

const emits = defineEmits(['closeModal', 'uploadImages', 'loadMoreImages'])

function uploadImagesFunction(data) {
    emits('uploadImages', data);
}
</script>
