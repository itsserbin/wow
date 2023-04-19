<script setup>
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

defineProps(['data', 'canDestroy']);
defineEmits(['onDestroy', 'onEdit'])

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Slug',
        key: 'slug'
    },
    {
        label: 'Опис',
        key: 'description'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
];
</script>

<template>
    <Table :headings="headings" :isSlotMode="true" :rows="data">
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>
        <template #slug="{data}">
            <a :href="route('xml.fb.get',data.row.slug)" target="_blank">
                {{ data.row.title }}
            </a>
            <div v-html="data.row.icon"></div>
        </template>

        <template #published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
