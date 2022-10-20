<template>
    <modal-component @closeModal="$emit('closeModal')"
                     :decline-button="canDestroy"
                     @declineForm="$emit('declineForm',item.id)"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="large"
    >
        <template #content>
            <BannersForm :item="item" @onUploadImage="onUploadImage"/>
        </template>
    </modal-component>
</template>

<script setup>
import BannersForm from '@/Pages/Admin/Options/Banners/Form.vue';

defineProps([
    'item',
    'canDestroy'
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
    'onUploadImage',
])

function onUploadImage(image, device, lang) {
    emits('onUploadImage', image, device, lang);
}
</script>
