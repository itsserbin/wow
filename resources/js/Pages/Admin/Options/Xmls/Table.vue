<template>
    <table-component :headings="headings"
                     :isSlotMode="true"
                     :rows="data"
    >
        <template v-slot:id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>
        <template v-slot:slug="{data}">
            <a :href="route('xml.fb.get',data.row.slug)" target="_blank">
                {{ data.row.title }}
            </a>
            <div v-html="data.row.icon"></div>
        </template>

        <template v-slot:published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template v-slot:timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template v-slot:actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>


<script setup>
defineProps(['data']);
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
