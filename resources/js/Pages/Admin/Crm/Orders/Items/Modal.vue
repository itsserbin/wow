<template>
    <Modal @closeModal="$emit('closeModal')"
           submit-button-text="Зберегти"
           cancel-button-text="Відмінити"
           @submitForm="$emit('submitItemForm')"
           @clickCancel="$emit('closeModal')"
    >
        <template #content>
            <ItemsForm :item="item"/>
        </template>
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue';
import ItemsForm from '@/Pages/Admin/Crm/Orders/Items/Form.vue';

defineProps(['item']);
defineEmits(['closeModal', 'submitItemForm'])
</script>
