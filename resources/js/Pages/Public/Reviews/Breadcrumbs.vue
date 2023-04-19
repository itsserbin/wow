<script setup>
import Breadcrumbs from '@/Pages/Public/Components/Breadcrumbs.vue';

const props = defineProps([
    'options',
    'currentUrl',
    'lang',
    'title'
]);

const items = [
    {title: props.options.brand, url: '/'},
    {title: props.title, url: props.currentUrl},
];

</script>

<template>
    <Breadcrumbs :breadcrumbs="items"/>
</template>
