<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="md:col-span-1">
                <Sidebar :items="items" class="mb-5"/>
                <Sidebar :items="costItems"/>
            </div>
            <div class="w-full md:col-span-4">
                <slot></slot>
            </div>
        </div>

    </auth-layout>

</template>

<script setup>
import Sidebar from '@/Components/Sidebar.vue';

import {reactive} from "vue";

defineProps(['title']);

const items = reactive([
    {
        title: 'Головна',
        href: route('admin.statistics.index')
    },
    {
        title: 'Прибуток',
        href: route('admin.statistics.profits.index')
    },
    {
        title: 'Заявки',
        href: route('admin.statistics.orders.index')
    },
    {
        title: 'Маркетинг',
        href: route('admin.statistics.marketing.index')
    },
    {
        title: 'Менеджери',
        href: route('admin.statistics.managers.index')
    },
])

const costItems = reactive([
    {
        title: 'Витрати',
        href: route('admin.statistics.costs.index')
    },
    {
        title: 'Категорії витрат',
        href: route('admin.statistics.costs.categories.index')
    },
])
</script>
