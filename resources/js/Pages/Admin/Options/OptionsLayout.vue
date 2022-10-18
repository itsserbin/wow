<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="md:col-span-1">
                <sidebar-component class="mb-5">
                    <sidebar-item v-for="item in items"
                                  :item="item"
                                  :active="route(route().current()) === item.href"
                    />
                </sidebar-component>
                <sidebar-component class="mb-5">
                    <sidebar-item v-for="item in items3"
                                  :item="item"
                                  :active="route(route().current()) === item.href"
                    />
                </sidebar-component>

                <sidebar-component>
                    <sidebar-item v-for="item in items2"
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

import {reactive, ref} from "vue";

defineProps(['title']);

const items = reactive([
    {
        title: 'Головна',
        href: route('admin.options.index')
    },
    {
        title: 'Основні',
        href: route('admin.options.main')
    },
    {
        title: 'Скрипти',
        href: route('admin.options.scripts')
    },
    {
        title: 'Банери',
        href: route('admin.options.banners.index')
    },
    {
        title: 'Переваги',
        href: route('admin.options.advantages.index')
    },
    {
        title: 'FAQ',
        href: route('admin.options.faqs.index')
    },
]);

const items2 = reactive([
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
    }
]);

const items3 = reactive([
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
        href: route('admin.options.providers.index')
    },
    {
        title: 'Промо-коди',
        href: route('admin.options.promo-codes.index')
    },
    {
        title: 'XML',
        href: route('admin.options.xmls.index')
    },
]);
</script>
