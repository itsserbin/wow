<template>
    <auth-layout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="w-full grid grid-cols-1 gap-4">
            <nav class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 md:py-0">
                <div class="h-full md:h-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <NavLink :href="route('admin.crm.orders')"
                             :active="route().current('admin.crm.orders')"
                             class="justify-center text-center"
                    >
                        Замовлення
                    </NavLink>

                    <NavLink :href="route('admin.crm.clients')"
                             :active="route().current('admin.crm.clients')"
                             class="justify-center text-center"
                    >
                        Клієнти
                    </NavLink>

                    <NavLink :href="route('admin.crm.callbacks')"
                             :active="route().current('admin.crm.callbacks')"
                             class="justify-center text-center"
                    >
                        Зворотній звʼязок
                    </NavLink>

                    <NavLink :href="route('admin.crm.supports')"
                             :active="route().current('admin.crm.supports')"
                             class="justify-center text-center"
                    >
                        Підтримка
                    </NavLink>

                </div>
            </nav>
            <slot></slot>
        </div>
    </auth-layout>
</template>

<script setup>
import NavLink from '@/Components/NavLink.vue';

defineProps(['title']);
</script>
