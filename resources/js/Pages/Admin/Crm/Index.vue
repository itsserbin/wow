<template>
    <auth-layout>
        <div class="grid grid-cols-1">
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Link v-for="item in items" :href="item.href">
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
        title: 'Замовлення',
        href: route('admin.crm.orders')
    },
    {
        title: 'Клієнти',
        href: route('admin.crm.clients')
    },
    {
        title: 'Зворотній звʼязок',
        href: route('admin.crm.callbacks')
    },
    {
        title: 'Підтримка клієнтів',
        href: route('admin.crm.supports')
    }
]);
</script>
