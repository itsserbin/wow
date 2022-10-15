<template>
    <modal-component @closeModal="$emit('closeModal')"
                     submit-button-text="Зберегти"
                     cancel-button-text="Відмінити"
                     @submitForm="$emit('submitItemForm')"
                     @clickCancel="$emit('closeModal')"
    >
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
