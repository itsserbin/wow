<script setup>
import UploadInput from '@/Components/Form/UploadImagesInput.vue';
import Modal from '@/Components/Modal.vue';

const emits = defineEmits(['closeModal', 'onUpload', 'loadMoreImages'])

function onUploadFunction(data) {
    emits('onUpload', data);
}
</script>

<template>
    <Modal @closeModal="$emit('closeModal')"
           submit-button-text="Зберегти"
           cancel-button-text="Скасувати"
           @submitForm="$emit('closeModal')"
           @clickCancel="$emit('closeModal')"
           size="large"
           :declineButton="false"
    >
        <template #title>
            Завантаження зображень
        </template>

        <template #content>
            <UploadInput @onUpload="onUploadFunction"/>
        </template>
    </Modal>
</template>
