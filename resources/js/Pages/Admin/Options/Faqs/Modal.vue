<template>
    <modal-component @closeModal="$emit('closeModal')"
                     :decline-button="canDestroy"
                     @declineForm="$emit('declineForm',item.id)"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="large"
    >
        <template #content>
            <Form :item="item"/>
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Options/Faqs/Form.vue';

defineProps([
    'item',
    'canDestroy'
])

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])
</script>
