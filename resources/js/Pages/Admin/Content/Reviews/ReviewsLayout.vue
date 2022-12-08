<template>
    <ContentLayout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div class="md:col-span-2">
                <sidebar-component>
                    <sidebar-item v-for="item in items"
                                  :item="item"
                                  :active="route(route().current()) === item.href"
                    >
                    </sidebar-item>
                </sidebar-component>
            </div>
            <div class="w-full md:col-span-10">
                <slot></slot>
            </div>
        </div>

    </ContentLayout>

</template>

<script setup>
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'
import {ref} from "vue";

defineProps(['title']);

const items = ref([
    {
        title: 'Відгуки про товари',
        href: route('admin.content.reviews.product')
    },
    {
        title: 'Відгуки із соц.мереж',
        href: route('admin.content.reviews.social')
    },
])
</script>
