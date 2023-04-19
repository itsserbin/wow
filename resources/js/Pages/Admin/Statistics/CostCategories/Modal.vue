<script setup>
import Modal from '@/Components/Modal.vue';
import CostCategoryForm from '@/Pages/Admin/Statistics/CostCategories/Form.vue';

import {computed} from "vue";

const props = defineProps([
    'item',
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
           size="medium"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <CostCategoryForm :item="item"/>
        </template>
    </Modal>
</template>
