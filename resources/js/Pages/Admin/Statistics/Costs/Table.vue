<template>
    <table-component :headings="headings"
                     :rows="data"
                     :isSlotMode="true"
    >
        <template #id="{data}">
            <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #date="{data}">
            {{ $filters.dateFormat(data.row.date) }}
        </template>

        <template #category="{data}">
            {{ data.row.category.title }}
        </template>

        <template #sum="{data}">
            {{ $filters.formatMoney(data.row.sum) }}
        </template>

        <template #total="{data}">
            {{ $filters.formatMoney(data.row.total) }}
        </template>

        <template #user="{data}">
            {{ data.row.user ? data.row.user.name : '-' }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>

<script setup>
defineProps(['data']);
defineEmits(['onDestroy']);

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Категорія',
        key: 'category'
    },
    {
        label: 'Кількість',
        key: 'quantity'
    },
    {
        label: 'Сума',
        key: 'sum'
    },
    {
        label: 'Загалом',
        key: 'total'
    },
    {
        label: 'Відповідальний',
        key: 'user'
    },
    {
        label: 'Коментар',
        key: 'comment'
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
