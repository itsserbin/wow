<template>
    <modal-component @closeModal="$emit('closeModal')"
                     submit-button-text="Save"
                     cancel-button-text="Cancel"
                     decline-button-text="Destroy"
                     @declineForm="declineForm"
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
                  @submitItemForm="submitItemForm"
            />
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Orders/Form.vue';

const props = defineProps([
    'size',
    'order',
    'statuses',
    'paymentMethods'
]);

const emits = defineEmits(['closeModal', 'submitForm', 'declineForm', 'submitItemForm']);

function declineForm() {
    emits('declineForm', props.order.id);
}

function submitItemForm(data) {
    emits('submitItemForm', data)
}

</script>
