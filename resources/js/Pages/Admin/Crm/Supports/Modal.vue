<script setup>
import Modal from '@/Components/Modal.vue';
import Form from '@/Pages/Admin/Crm/Supports/Form.vue';

defineProps([
    'item',
    'statuses',
    'canDestroy'
])

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])

</script>

<template>
    <Modal @closeModal="$emit('closeModal')"
           @declineForm="$emit('declineForm',item.id)"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           size="extralarge"
           :decline-button="canDestroy"
    >
        <template #content>
            <Form :item="item" :statuses="statuses"/>
        </template>
    </Modal>
</template>
