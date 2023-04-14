<template>
    <Breadcrumbs :breadcrumbs="items"/>
</template>

<script setup>
import Breadcrumbs from '@/Pages/Public/Components/Breadcrumbs.vue';

const props = defineProps([
    'options',
    'parent',
    'parentUrl',
    'title',
    'currentUrl'
]);

const items = [
    {title: props.options.brand, url: '/'},
    {title: props.parent, url: props.parentUrl},
    {title: props.title, url: props.currentUrl},
];

</script>
