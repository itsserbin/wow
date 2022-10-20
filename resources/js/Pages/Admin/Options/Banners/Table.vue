<template>
    <lang-tabs @clickLang="changeLang"/>

    <table-component :headings="headings" :isSlotMode="true" :rows="data">
        <template v-slot:id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template v-slot:image="{data}">
            <img :src="data.row.image_mobile.ua ? route('images.banners.mobile',data.row.image_mobile.ua) :
                        (data.row.image_mobile.ru ? route('images.banners.mobile',data.row.image_mobile.ru) : null)"
                 :alt="activeLang === 'ua' ? data.row.title.ua :
                        (activeLang === 'ru' ? data.row.title.ru : null)"
                 class="w-1/4 mx-auto">
        </template>

        <template v-slot:title="{data}">
            {{
                activeLang === 'ua' ? data.row.title.ua :
                    (activeLang === 'ru' ? data.row.title.ru : null)
            }}
        </template>

        <template v-slot:published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template v-slot:link="{data}">
            {{
                activeLang === 'ua' ? data.row.link.ua :
                    (activeLang === 'ru' ? data.row.link.ru : null)
            }}
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
import {inject, ref} from "vue";

defineProps(['data', 'canDestroy']);
defineEmits(['onDestroy', 'onEdit']);

const defaultLang = inject('$defaultLang');

const activeLang = ref(defaultLang);

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

function changeLang(val) {
    activeLang.value = val;
}
</script>
