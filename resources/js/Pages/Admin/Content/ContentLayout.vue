<template>
    <AuthenticatedLayout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="w-full grid grid-cols-1 gap-4">
            <nav class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-lg p-4 md:py-0">
                <div class="h-full md:h-12 grid grid-cols-2 md:grid-cols-5 gap-4">
                    <NavLink :href="route('admin.content.products')"
                             v-if="can('show-products')"
                             :active="route().current('admin.content.products')"
                             class="justify-center text-center"
                    >
                        Товари
                    </NavLink>

                    <NavLink :href="route('admin.content.categories')"
                             v-if="can('show-categories')"
                             :active="route().current('admin.content.categories')"
                             class="justify-center text-center"
                    >
                        Категорії
                    </NavLink>

                    <NavLink :href="route('admin.content.pages')"
                             v-if="can('show-pages')"
                             :active="route().current('admin.content.pages')"
                             class="justify-center text-center"
                    >
                        Сторінки
                    </NavLink>

                    <NavLink :href="route('admin.content.images')"
                             v-if="can('show-images')"
                             :active="route().current('admin.content.images')"
                             class="justify-center text-center"
                    >
                        Зображення
                    </NavLink>

                    <NavLink :href="route('admin.content.reviews.product')"
                             v-if="can('show-reviews')"
                             :active="route().current('admin.content.reviews.*')"
                             class="justify-center text-center"
                    >
                        Відгуки
                    </NavLink>
                </div>
            </nav>
            <slot></slot>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import NavLink from '@/Components/NavLink.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {inject} from "vue";

const can = inject('$can');
defineProps(['title']);
</script>
