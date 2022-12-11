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
                  :invoiceStatuses="invoiceStatuses"
                  @submitItemForm="$emit('submitItemForm')"
                  @onEditClient="$emit('onEditClient')"
            />
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Crm/Orders/Form.vue';

defineProps([
    'size',
    'order',
    'statuses',
    'paymentMethods',
    'canDestroy',
    'invoiceStatuses'
]);

defineEmits(['closeModal', 'submitForm', 'declineForm', 'submitItemForm','onEditClient']);

</script>
