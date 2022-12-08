<template>
    <modal-component @closeModal="$emit('closeModal')"
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
            />
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Crm/Clients/Form.vue';

defineProps([
    'size',
    'item',
    'statuses',
    'subStatuses',
    'canDestroy'
]);

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
    'submitItemForm'
]);
</script>
