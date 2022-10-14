<template>
    <modal-component @closeModal="$emit('closeModal')"
                     submit-button-text="Save"
                     cancel-button-text="Cancel"
                     decline-button-text="Destroy"
                     @declineForm="declineForm"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="large"
    >
        <template #content>
            <Form :item="item"/>
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Options/PromoCodes/Form.vue';
import {computed} from "vue";

const props = defineProps([
    'item',
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])

function declineForm() {
    emits('declineForm', props.item.id);
}
</script>
