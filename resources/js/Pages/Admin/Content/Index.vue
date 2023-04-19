<template>
    <AuthenticatedLayout>
        <div class="grid grid-cols-1">
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
                <Link v-for="item in items" :href="item.href" v-show="can(item.permission)">
                    <div class="p-5 bg-gray-50 rounded dark:bg-gray-800 text-gray-900 dark:text-white">
                        {{ item.title }}
                    </div>
                </Link>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import {inject} from "vue";
import {Link} from "@inertiajs/inertia-vue3";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const can = inject('$can');
const items = [
    {
        title: 'Товари',
        permission: 'show-products',
        href: route('admin.content.products')
    },
    {
        title: 'Категорії',
        permission: 'show-categories',
        href: route('admin.content.categories')
    },
    {
        title: 'Сторінки',
        permission: 'show-pages',
        href: route('admin.content.pages')
    },
    {
        title: 'Зображення',
        permission: 'show-images',
        href: route('admin.content.images')
    },
    {
        title: 'Відгуки',
        permission: 'show-reviews',
        href: route('admin.content.reviews.product')
    },
];
</script>
