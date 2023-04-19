<script setup>
import Form from '@/Pages/Admin/Content/Images/Form.vue';
import Modal from '@/Components/Modal.vue';

const props = defineProps([
    'image'
]);

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm'
]);

function declineForm() {
    emits('declineForm', props.image.id);
}

</script>

<template>
    <Modal
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
    </Modal>
</template>
