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
        <template #status="{data}">
            {{ statuses[data.row.status] }}
        </template>
        <template #comment="{data}">
            {{data.row.comment ? data.row.comment.substr(0, 30) + '...' : '-'}}
        </template>
        <template v-slot:timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template v-slot:actions="{data}">
            <a href="javascript:"
               @click="$emit('onDestroy', data.row.id)"
               v-if="canDestroy"
            >
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>

<script setup>
defineProps(['data', 'statuses','canDestroy']);
defineEmits(['onDestroy', 'onEdit'])

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Статус',
        key: 'status'
    },
    {
        label: 'Імʼя',
        key: 'name'
    },
    {
        label: 'Телефон',
        key: 'phone'
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
