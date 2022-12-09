<template>
    <auth-layout>
        <div class="grid grid-cols-1">
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Link v-for="item in items" :href="item.href" v-show="can(item.permission)">
                    <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                        {{ item.title }}
                    </div>
                </Link>
            </div>
        </div>
    </auth-layout>
</template>

<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import {inject} from "vue";

const can = inject('$can');
const items = [
    {
        title: 'Замовлення',
        permission: 'show-orders',
        href: route('admin.crm.orders')
    },
    {
        title: 'Клієнти',
        permission: 'show-clients',
        href: route('admin.crm.clients')
    },
    {
        title: 'Зворотній звʼязок',
        permission: 'show-callbacks',
        href: route('admin.crm.callbacks')
    },
    {
        title: 'Підтримка клієнтів',
        permission: 'show-supports',
        href: route('admin.crm.supports')
    },
    {
        title: 'Рахунки',
        permission: 'show-invoices',
        href: route('admin.crm.invoices')
    }
];
</script>
