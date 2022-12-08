<template>
    <modal-component @closeModal="$emit('closeModal')"
                     @declineForm="$emit('declineForm',item.id)"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="extralarge"
                     :decline-button="canDestroy"
    >
        <template #content>
            <Form :item="item" :statuses="statuses"/>
        </template>
    </modal-component>
</template>

<script setup>
import Form from '@/Pages/Admin/Crm/Supports/Form.vue';

defineProps([
    'item',
    'statuses',
    'canDestroy'
])

defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
])

</script>
