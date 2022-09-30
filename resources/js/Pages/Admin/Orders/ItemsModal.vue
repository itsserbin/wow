<template>
    <modal-component @closeModal="$emit('closeModal')"
                     submit-button-text="Save"
                     cancel-button-text="Cancel"
                     @submitForm="$emit('submitItemForm')"
                     @clickCancel="$emit('closeModal')"
    >
        <template #title>Add item to order</template>
        <template #content>
            <ItemsForm :item="item"/>
        </template>
    </modal-component>
</template>

<script setup>
import ItemsForm from '@/Pages/Admin/Orders/ItemsForm.vue';

const props = defineProps(['item']);
const emits = defineEmits(['closeModal', 'submitItemForm'])
</script>
