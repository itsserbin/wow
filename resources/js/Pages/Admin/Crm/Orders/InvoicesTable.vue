<template>
    <table-component
        :isSlotMode="true"
        :rows="data"
        :headings="headings"
    >
        <template #id="{data}">
            {{ data.row.id }}
        </template>

        <template #sum="{data}">
            {{ $filters.formatMoney(data.row.sum) }}
        </template>

        <template #status="{data}">
            {{ statuses[data.row.status] }}
        </template>

        <template #timestamp="{data}">
            {{ $filters.dateFormat(data.row.created_at) }}
            <br/>
            {{ $filters.dateFormat(data.row.updated_at) }}
        </template>
    </table-component>
</template>

<script setup>
defineProps(['data', 'statuses']);
defineEmits(['editOrderItem', 'destroyOrderItem'])

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Сума',
        key: 'sum'
    },
    {
        label: 'Статус',
        key: 'status'
    },
    {
        label: 'Посилання для оплати',
        key: 'status'
    },
    {
        label: 'Дата створення<br/>Дата новлення',
        key: 'timestamp'
    },

];
</script>
