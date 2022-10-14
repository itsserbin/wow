<template>
    <modal-component @closeModal="$emit('closeModal')"
                     submit-button-text="Save"
                     cancel-button-text="Cancel"
                     decline-button-text="Destroy"
                     @declineForm="declineForm"
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
import {computed} from "vue";

const props = defineProps([
    'item',
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
    'onUploadImage',
])

function declineForm() {
    emits('declineForm', props.item.id);
}

function onUploadImage(image, device, lang) {
    emits('onUploadImage', image, device, lang);
}
</script>
