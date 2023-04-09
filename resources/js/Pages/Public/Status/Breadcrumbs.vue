<template>
    <Breadcrumbs :breadcrumbs="items"/>
</template>

<script setup>
import Breadcrumbs from '@/Pages/Public/Components/Breadcrumbs.vue';

const props = defineProps([
    'options',
    'lang',
    'title'
]);

const items = [
    {title: props.options.brand, url: '/'},
    {title: props.title, url: route().current},
];

</script>
