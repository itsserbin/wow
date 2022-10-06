<template>
    <modal-component
        @closeModal="$emit('closeModal')"
        submit-button-text="Save"
        cancel-button-text="Cancel"
        decline-button-text="Destroy"
        @declineForm="declineForm"
        @submitForm="$emit('submitForm')"
        @clickCancel="$emit('closeModal')"
    >
        <template #content>
            <Form :image="props.image"/>
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Images/Form.vue';

const props = defineProps([
    'image'
])

function declineForm() {
    emits('declineForm', props.image.id);
}

const emits = defineEmits(['closeModal', 'submitForm', 'declineForm'])
</script>
