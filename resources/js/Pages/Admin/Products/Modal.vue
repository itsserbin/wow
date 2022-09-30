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
            <ProductForm :product="props.product" @setProductImages="setProductImages" @destroyImage="destroyImage"/>
        </template>
    </modal-component>
</template>

<script setup>
import ProductForm from '@/Pages/Admin/Products/Form.vue';
import {computed} from "vue";

const props = defineProps([
    'product',
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
    'setProductImages',
    'destroyImage'
])

const formHeading = computed(() =>
    props.product.id ? props.product.id + (props.product.title ? ' / ' + props.product.title : null) : null
);

function declineForm() {
    emits('declineForm', props.product.id);
}

function setProductImages(images) {
    emits('setProductImages', images);
}

function destroyImage(image) {
    emits('destroyImage', image);
}

</script>
