<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="md:col-span-1">
                <Sidebar :items="items" class="mb-5"/>

                <Sidebar :items="items2"/>
            </div>
            <div class="w-full md:col-span-4">
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
        title: 'Основні',
        href: route('admin.options.index')
    },
    {
        title: 'Кольори',
        href: route('admin.options.colors.index')
    },
    {
        title: 'Розміри',
        href: route('admin.options.sizes.index')
    },
    {
        title: 'Постачальники',
        href: route('admin.providers.index')
    },

])

const items2 = ref([
    {
        title: 'Користувачі',
        href: route('admin.users.index')
    },
    {
        title: 'Ролі',
        href: route('admin.roles.index')
    },
    {
        title: 'Права',
        href: route('admin.permissions.index')
    },
])
</script>
