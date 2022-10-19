<template>
    <modal-component @closeModal="$emit('closeModal')"
                     submit-button-text="Save"
                     cancel-button-text="Cancel"
                     decline-button-text="Destroy"
                     @declineForm="declineForm"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="extralarge"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <Form :item="item" :statuses="statuses"/>
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Callbacks/Form.vue';
import {computed} from "vue";

const props = defineProps([
    'item',
    'statuses',
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
