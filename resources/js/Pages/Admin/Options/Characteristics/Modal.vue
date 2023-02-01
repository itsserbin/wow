<template>
    <Modal @closeModal="$emit('closeModal')"
           :decline-button="canDestroy"
           @declineForm="$emit('declineForm',item.id)"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           size="medium"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <Form :item="item"/>
        </template>
    </Modal>
</template>

<script setup>
import {computed} from "vue";
import Modal from '@/Components/Modal.vue';
import Form from '@/Pages/Admin/Options/Characteristics/Form.vue';

const props = defineProps([
    'item',
    'canDestroy'
])

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])

const formHeading = computed(() =>
    props.item.id ? props.item.id + (props.item.title ? ' / ' + props.item.title : null) : null
);
</script>
