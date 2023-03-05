<template>
    <Modal @closeModal="$emit('closeModal')"
           :decline-button="canDestroy"
           @declineForm="$emit('declineForm',item.id)"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           :size="size"
    >
        <template #title>
            {{ item.id + (item.name ? ' / ' + item.name : null) }}
        </template>
        <template #content>
            <Form
                :item="item"
                :statuses="statuses"
                :sub-statuses="subStatuses"
                :order-statuses="orderStatuses"
            />
        </template>
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue';
import Form from '@/Pages/Admin/Crm/Clients/Form.vue';

defineProps([
    'size',
    'item',
    'statuses',
    'subStatuses',
    'orderStatuses',
    'canDestroy'
]);

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
    'submitItemForm'
]);
</script>
