<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="md:col-span-1">
                <sidebar-component class="mb-5">
                    <sidebar-item v-for="item in items"
                                  v-show="can(item.permission)"
                                  :item="item"
                                  :active="route(route().current()) === item.href"
                    />
                </sidebar-component>
                <sidebar-component class="mb-5">
                    <sidebar-item v-for="item in items3"
                                  v-show="can(item.permission)"
                                  :item="item"
                                  :active="route(route().current()) === item.href"
                    />
                </sidebar-component>

                <sidebar-component>
                    <sidebar-item v-for="item in items2"
                                  v-show="can(item.permission)"
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
import {inject} from "vue";

const can = inject('$can');
defineProps(['title']);

const items =[
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
    }
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
