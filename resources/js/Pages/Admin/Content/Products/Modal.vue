<template>
    <Modal @closeModal="$emit('closeModal')"
           :decline-button="canDestroy"
           @declineForm="$emit('declineForm',product.id)"
           @submitForm="$emit('submitForm')"
           @clickCancel="$emit('closeModal')"
           size="extralarge"
    >
        <template #title>{{ formHeading }}</template>
        <template #content>
            <ProductForm :product="item"
                         @setProductImages="setProductImages"
                         @destroyImage="destroyImage"
            />
        </template>
    </Modal>
</template>

<script setup>
import Modal from '@/Components/Modal.vue';
import ProductForm from '@/Pages/Admin/Content/Products/Form.vue';

import {computed} from "vue";

const props = defineProps([
    'item',
    'canDestroy'
])

const emits = defineEmits([
    'closeModal',
    'submitForm',
    'declineForm',
    'setProductImages',
    'destroyImage'
])

const formHeading = computed(() => {
    let title = null;
    if (props.item.h1.ua) {
        title = props.item.h1.ua;
    } else if (props.item.h1.ru) {
        title = props.item.h1.ru.trim();
    }
    return props.item.id && title ? `${props.item.id} / ${title}` : null;
});

const setProductImages = (images) => {
    emits('setProductImages', images);
}

const destroyImage = (image) => {
    emits('destroyImage', image);
}

</script>
