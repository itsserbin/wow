<script setup>
import Modal from '@/Components/Modal.vue';
import ColorForm from '@/Pages/Admin/Statistics/Costs/Form.vue';
import {computed} from "vue";

const props = defineProps([
    'item',
    'modalAction'
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])

const formHeading = computed(() =>
    props.item.id ? props.item.id + (props.item.title ? ' / ' + props.item.title : null) : null
);

function declineForm() {
    emits('declineForm', props.item.id);
}
</script>

<template>
    <Modal @closeModal="$emit('closeModal')"
           submit-button-text="Save"
           cancel-button-text="Cancel"
           decline-button-text="Destroy"
           @declineForm="declineForm"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           size="large"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <ColorForm :item="item" :modalAction="modalAction"/>
        </template>
    </Modal>
</template>
