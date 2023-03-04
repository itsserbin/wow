<template>
    <auth-layout>
        <div class="grid grid-cols-1 gap-14">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link v-for="item in items" :href="item.href" v-show="can(item.permission)">
                <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                    {{ item.title }}
                </div>
                </Link>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link v-for="item in items2" :href="item.href" v-show="can(item.permission)">
                <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                    {{ item.title }}
                </div>
                </Link>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link v-for="item in items3" :href="item.href" v-show="can(item.permission)">
                <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                    {{ item.title }}
                </div>
                </Link>
            </div>
        </div>
    </auth-layout>
</template>

<script setup>
import { inject } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

const can = inject('$can');
const items = [
    {
        title: 'Головна',
        permission: 'show-options',
        href: route('admin.options.index')
    },
    {
        title: 'Основні',
        permission: 'show-main-options',
        href: route('admin.options.main')
    },
    {
        title: 'Скрипти',
        permission: 'show-scripts-options',
        href: route('admin.options.scripts')
    },
    {
        title: 'Банери',
        permission: 'show-banners',
        href: route('admin.options.banners.index')
    },
    {
        title: 'Переваги',
        permission: 'show-advantages',
        href: route('admin.options.advantages.index')
    },
    {
        title: 'Логотип',
        permission: 'show-main-options',
        href: route('admin.logo')
    },
    {
        title: 'FAQ',
        permission: 'show-faq',
        href: route('admin.options.faqs.index')
    },
];

const items2 = [
    {
        title: 'Користувачі',
        permission: 'show-users',
        href: route('admin.users.index')
    },
    {
        title: 'Ролі',
        permission: 'show-roles',
        href: route('admin.roles.index')
    },
    {
        title: 'Права',
        permission: 'show-permissions',
        href: route('admin.permissions.index')
    },

];

const items3 = [
    {
        title: 'Кольори',
        permission: 'show-colors',
        href: route('admin.options.colors.index')
    },
    {
        title: 'Розміри',
        permission: 'show-sizes',
        href: route('admin.options.sizes.index')
    },
    {
        title: 'Характеристики',
        permission: 'show-characteristics',
        href: route('admin.options.characteristics.index')
    },
    {
        title: 'Постачальники',
        permission: 'show-providers',
        href: route('admin.options.providers.index')
    },
    {
        title: 'Промо-коди',
        permission: 'show-promo-codes',
        href: route('admin.options.promo-codes.index')
    },
    {
        title: 'XML',
        permission: 'show-xmls',
        href: route('admin.options.xmls.index')
    },


];
</script>
