<template>
    <table-component
        :isSlotMode="true"
        :rows="data"
        :headings="headings"
    >
        <template #id="{data}">
            <a :href="route('admin.orders.index',{id:data.row.id})" target="_blank">
                {{ data.row.id }}
            </a>
        </template>

        <template #total_price="{data}">
            {{ $filters.formatMoney(data.row.total_price) }}
        </template>

        <template #status="{data}">
            {{ statuses[data.row.status] }}
        </template>

        <template #created_at="{data}">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>
    </table-component>
</template>

<script setup>
import Pencil from '@/Components/Icons/Pencil.vue';
import {reactive} from "vue";

defineProps(['data','statuses']);
defineEmits(['editOrderItem', 'destroyOrderItem'])

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Кількість',
        key: 'total_count'
    },
    {
        label: 'Сума',
        key: 'total_price'
    },
    {
        label: 'Статус',
        key: 'status'
    },
    {
        label: 'Дата створення',
        key: 'created_at'
    },

])
</script>
