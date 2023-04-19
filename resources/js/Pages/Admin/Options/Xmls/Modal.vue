<script setup>
import Modal from '@/Components/Modal.vue';
import Form from '@/Pages/Admin/Options/Xmls/Form.vue';

defineProps([
    'item',
    'canDestroy'
]);

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
]);
</script>

<template>
    <Modal @closeModal="$emit('closeModal')"
           :decline-button="canDestroy"
           @declineForm="$emit('declineForm',item.id)"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           size="large"
    >
        <template #content>
            <Form :item="item"/>
        </template>
    </Modal>
</template>
