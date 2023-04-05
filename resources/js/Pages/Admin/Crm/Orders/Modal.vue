<template>
    <Modal @closeModal="$emit('closeModal')"
           :decline-button="canDestroy"
           @declineForm="$emit('declineForm',order.id)"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           :size="size"
    >
        <template #title>{{ title }}</template>
        <template #content>
            <Form :order="order"
                  :statuses="statuses"
                  :paymentMethods="paymentMethods"
                  :invoiceStatuses="invoiceStatuses"
                  :clientStatuses="clientStatuses"
                  @submitItemForm="$emit('submitItemForm')"
                  @onEditClient="$emit('onEditClient')"
            />
        </template>
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue';
import Form from '@/Pages/Admin/Crm/Orders/Form.vue';
import {computed} from "vue";

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
    'submitItemForm',
    'onEditClient'
]);

const props = defineProps([
    'size',
    'order',
    'statuses',
    'paymentMethods',
    'canDestroy',
    'clientStatuses',
    'invoiceStatuses'
]);

const title = computed(() => {
    return props.order.id + ' / ' + (props.order.client.name ? props.order.client.name : 'Імʼя не вказано');
})
</script>
