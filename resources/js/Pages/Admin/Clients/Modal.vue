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
            {{ item.id + (item.name ? ' / ' + item.name : null) }}
        </template>
        <template #content>
            <Form
                :item="item"
                :statuses="statuses"
                :sub-statuses="subStatuses"
                @submitItemForm="submitItemForm"
            />
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Clients/Form.vue';

const props = defineProps([
    'size',
    'item',
    'statuses',
    'subStatuses',
]);

const emits = defineEmits(['closeModal', 'submitForm', 'declineForm', 'submitItemForm']);

function declineForm() {
    emits('declineForm', props.item.id);
}

function submitItemForm(data) {
    emits('submitItemForm', data)
}

</script>
