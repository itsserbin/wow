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
        label: 'Імʼя',
        key: 'name'
    },
    {
        label: 'Email',
        key: 'email'
    },
    {
        label: 'Роль',
        key: 'role'
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

        <template #timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template #role="{data}">
            <span v-for="item in data.row.roles">{{ item.name }}<br></span>
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
