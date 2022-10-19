<template>
    <auth-layout>
        <div class="grid grid-cols-1 gap-14">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link v-for="item in items" :href="item.href">
                    <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                        {{ item.title }}
                    </div>
                </Link>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link v-for="item in items2" :href="item.href">
                    <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                        {{ item.title }}
                    </div>
                </Link>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Link v-for="item in items3" :href="item.href">
                    <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                        {{ item.title }}
                    </div>
                </Link>
            </div>
        </div>
    </auth-layout>
</template>

<script setup>
import {reactive} from "vue";
import {Link} from "@inertiajs/inertia-vue3";

const items = reactive([
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
