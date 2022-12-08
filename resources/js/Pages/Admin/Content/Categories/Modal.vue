<template>
    <modal-component @closeModal="$emit('closeModal')"
                     :decline-button="canDestroy"
                     @declineForm="$emit('declineForm',item.id)"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="extralarge"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <CategoryForm :item="item"/>
        </template>
    </modal-component>
</template>

<script setup>
import CategoryForm from '@/Pages/Admin/Content/Categories/Form.vue';
import {computed} from "vue";

const props = defineProps([
    'item',
    'canDestroy',
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
