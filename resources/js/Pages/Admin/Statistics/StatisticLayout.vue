<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4" v-if="can('show-bookkeeping')">
            <div class="md:col-span-1">
                <sidebar-component class="mb-5">
                    <sidebar-item v-for="item in items"
                                  :item="item"
                                  :active="route(route().current()) === item.href"
                    />
                </sidebar-component>

                <sidebar-component>
                    <sidebar-item v-for="item in costItems"
                                  :item="item"
                                  :active="route(route().current()) === item.href"
                    />
                </sidebar-component>
            </div>
            <div class="w-full md:col-span-4">
                <slot></slot>
            </div>
        </div>

    </auth-layout>

</template>

<script setup>
import Sidebar from '@/Components/Sidebar/Sidebar.vue';

import {computed, inject, onMounted, ref} from "vue";

defineProps(['title']);
const can = inject('$can');

const items = ([
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
]);

const costItems = ([
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
