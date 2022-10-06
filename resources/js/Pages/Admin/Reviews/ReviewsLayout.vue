<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div class="md:col-span-2">
                <Sidebar :items="items"/>
            </div>
            <div class="w-full md:col-span-10">
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
