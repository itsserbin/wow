<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="flex flex-col md:flex-row">
            <div class="md:mr-5">
                <Sidebar :items="items"/>
            </div>
            <div class="w-full">
                <slot></slot>
            </div>
        </div>

    </auth-layout>

</template>

<script setup>
import Sidebar from '@/Components/Sidebar.vue';

import {ref} from "vue";

defineProps(['title']);

const items = ref([
    {
        title: 'Відгуки про товари',
        href: route('admin.reviews.product.index')
    },
    {
        title: 'Відгуки із соц.мереж',
        href: route('admin.reviews.social.index')
    },
])
</script>
