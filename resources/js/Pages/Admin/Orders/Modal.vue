<template>
    <modal-component @closeModal="$emit('closeModal')"
                     :decline-button="canDestroy"
                     @declineForm="$emit('declineForm',order.id)"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     :size="size"
    >
        <template #title>
            {{ order.id + (order.first_name ? ' / ' + order.first_name : null) }}
        </template>
        <template #content>
            <Form :order="order"
                  :statuses="statuses"
                  :paymentMethods="paymentMethods"
                  @submitItemForm="$emit('submitItemForm')"
            />
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Orders/Form.vue';

defineProps([
    'size',
    'order',
    'statuses',
    'paymentMethods',
    'canDestroy'
]);

defineEmits(['closeModal', 'submitForm', 'declineForm', 'submitItemForm']);

</script>
