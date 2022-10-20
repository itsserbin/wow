<template>
    <table-component :headings="headings"
                     :isSlotMode="true"
                     :rows="data"
    >
        <template v-slot:id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template v-slot:discount="{data}">
            {{
                data.row.discount_in_hryvnia ? data.row.discount_in_hryvnia + ' грн.' :
                    (data.row.percent_discount ? data.row.percent_discount + '%' : null)
            }}
        </template>

        <template v-slot:published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template v-slot:end_date="{data}">
            {{ $filters.dateFormat(data.row.end_date) }}
        </template>

        <template v-slot:timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template v-slot:actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>

<script setup>
defineProps(['data','canDestroy']);
defineEmits(['onDestroy', 'onEdit'])

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Код',
        key: 'code'
    },
    {
        label: 'Знижка',
        key: 'discount'
    },
    {
        label: 'Кінцева дата',
        key: 'end_date'
    },
    {
        label: 'Статус публікації',
        key: 'published'
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
