<script setup>
import Modal from '@/Components/Modal.vue';
import PermissionForm from '@/Pages/Admin/Options/Roles/Form.vue';
import {computed} from "vue";

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
            <PermissionForm :item="item"/>
        </template>
    </Modal>
</template>
