<script setup>
import CategoryForm from '@/Pages/Admin/Content/Categories/Form.vue';
import Modal from '@/Components/Modal.vue';

import {computed} from "vue";

const props = defineProps([
    'item',
    'canDestroy',
    'errors'
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])

const formHeading = computed(() => {
    let title = null;
    if (props.item.title.ua) {
        title = props.item.title.ua;
    } else if (props.item.title.ru) {
        title = props.item.title.ru.trim();
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
            <CategoryForm :item="item" :errors="errors"/>
        </template>
    </Modal>
</template>
