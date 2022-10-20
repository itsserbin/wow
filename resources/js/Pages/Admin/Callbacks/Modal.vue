<template>
    <modal-component @closeModal="$emit('closeModal')"
                     @declineForm="$emit('declineForm',item.id)"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="extralarge"
                     :decline-button="canDestroy"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <Form :item="item" :statuses="statuses"/>
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Callbacks/Form.vue';
import {computed, inject} from "vue";

const props = defineProps([
    'item',
    'statuses',
    'canDestroy'
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])

const formHeading = computed(() =>
    props.item.id ? props.item.id + (props.item.title ? ' / ' + props.item.title : null) : null
);

</script>
