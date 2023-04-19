<script setup>
import Form from '@/Pages/Admin/Content/Pages/Form.vue';
import Modal from '@/Components/Modal.vue';

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

const formHeading = computed(() => {
    let title = null;
    if (props.item.h1.ua) {
        title = props.item.h1.ua;
    } else if (props.item.h1.ru) {
        title = props.item.h1.ru.trim();
    }
    return props.item.id && title ? `${props.item.id} / ${title}` : null;
});

</script>

<template>
    <Modal @closeModal="$emit('closeModal')"
           :decline-button="canDestroy"
           @declineForm="$emit('declineForm',item.id)"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           size="extralarge"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <Form :item="item"/>
        </template>
    </Modal>
</template>
