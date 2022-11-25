<template>
    <div>
        <lang-tabs @clickLang="changeLang"/>

        <table-component :headings="headings"
                         :isSlotMode="true"
                         :rows="data"
        >
            <template #id="{data}">
                <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                    {{ data.row.id }}
                </a>
            </template>

            <template #preview="{data}">
                <img :src="route('images.55', data.row.preview)"
                     :alt="activeLang === 'ua' ? data.row.title.ua :
                                (activeLang === 'ru' ? data.row.title.ru : '-')"
                     class="mx-auto w-16"
                >
            </template>

            <template #title="{data}">
                <a href="javascript:">
                    {{
                        activeLang === 'ua' ? data.row.title.ua :
                            (activeLang === 'ru' ? data.row.title.ru : '-')
                    }}
                </a>
            </template>

            <template #published="{data}">
                {{ $filters.publishedStatus(data.row.published) }}
            </template>

            <template #timestamps="{data}">
                {{ $filters.dateFormat(data.row.updated_at) }}
                <hr class="my-1">
                {{ $filters.dateFormat(data.row.created_at) }}
            </template>

            <template #actions="{data}">
                <a href="javascript:" @click="$emit('onDestroy',data.row.id)" v-if="canDestroy">
                    <xcircle-component/>
                </a>
            </template>
        </table-component>
    </div>
</template>

<script setup>
import {inject, ref} from "vue";

defineProps(['data', 'canDestroy']);
defineEmits(['onEdit', 'onDestroy']);

const defaultLang = inject('$defaultLang');

const activeLang = ref(defaultLang);

const headings = ([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Головне зображення',
        key: 'preview'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Статус публікації',
        key: 'published'
    },
    {
        label: 'Батьківська категорія',
        key: 'parent_id'
    },
    {
        label: 'Сортування',
        key: 'sort'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
]);

function changeLang(val) {
    activeLang.value = val;
}
</script>
