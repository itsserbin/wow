<template>
    <modal-component @closeModal="$emit('closeModal')"
                     :decline-button="canDestroy"
                     @declineForm="$emit('declineForm',product.id)"
                     @submitForm="$emit('submitForm')"
                     @clickCancel="$emit('closeModal')"
                     size="extralarge"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <ProductForm :product="product"
                         @setProductImages="setProductImages"
                         @destroyImage="destroyImage"
            />
        </template>
    </modal-component>
</template>

<script setup>
import ProductForm from '@/Pages/Admin/Content/Products/Form.vue';
import {computed} from "vue";

const props = defineProps([
    'product',
    'canDestroy'
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

function setProductImages(images) {
    emits('setProductImages', images);
}

function destroyImage(image) {
    emits('destroyImage', image);
}

</script>
