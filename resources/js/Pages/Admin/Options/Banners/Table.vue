
<template>
    <table-component :headings="headings" :isSlotMode="true" :rows="state.data.data">
        <template v-slot:id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template v-slot:image="{data}">
            <img :src="state.activeLang === 'ua' ? data.row.image_mobile.ua :
            (state.activeLang === 'ru' ? data.row.image_mobile.ru : null)" :alt=" state.activeLang === 'ua' ? data.row.title.ua :
(state.activeLang === 'ru' ? data.row.title.ru : null)" class="w-1/4 mx-auto">
        </template>

        <template v-slot:title="{data}">
            {{
            state.activeLang === 'ua' ? data.row.title.ua :
            (state.activeLang === 'ru' ? data.row.title.ru : null)
            }}
        </template>

        <template v-slot:published="{data}">
            {{$filters.publishedStatus(data.row.published)}}
        </template>

        <template v-slot:link="{data}">
            {{
            state.activeLang === 'ua' ? data.row.link.ua :
            (state.activeLang === 'ru' ? data.row.link.ru : null)
            }}
        </template>

        <template v-slot:timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template v-slot:actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)">
                <xcircle-component />
            </a>
        </template>
    </table-component>
</template>


<script setup>
defineProps(['data']);
defineEmits(['onDestroy','onEdit']);

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Фото',
        key: 'image'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Статус',
        key: 'published'
    },
    {
        label: 'Посилання',
        key: 'link'
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