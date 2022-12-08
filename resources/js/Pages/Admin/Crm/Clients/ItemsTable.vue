<template>
    <table-component
        :isSlotMode="true"
        :rows="data"
        :headings="headings"
    >
        <template #id="{data}">
            <a :href="route('admin.crm.orders', {id: data.row.id})" target="_blank">
                {{ data.row.id }}
            </a>
        </template>
        <template #total_price="{data}">
            {{ $filters.formatMoney(data.row.total_price) }}
        </template>
        <template #timestamps="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
            <hr class="my-1 max-w-[40%] mx-auto">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>
    </table-component>
</template>

<script setup>
import Pencil from '@/Components/Icons/Pencil.vue';
import {reactive} from "vue";

defineProps(['data']);
defineEmits(['editOrderItem', 'destroyOrderItem'])

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Статус',
        key: 'status'
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
        label: "Оновлено<hr class='my-1 max-w-[40%] mx-auto'>Створено",
        key: 'timestamps'
    }
])

function orderPage(id) {
    window.location.href = route('admin.crm.orders', {id: id});
}
</script>
