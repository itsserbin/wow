<template>
    <div>
        <lang-tabs @clickLang="changeLang"/>

        <table-component :headings="headings"
                         :isSlotMode="true"
                         :rows="data"
        >
            <template v-slot:id="{data}">
                <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                    {{ data.row.id }}
                </a>
            </template>

            <template v-slot:preview="{data}">
                <img :src="route('images.category',data.row.preview)"
                     :alt="activeLang === 'ua' ? data.row.title.ua :
                                (activeLang === 'ru' ? data.row.title.ru : '-')"
                     class="mx-auto w-16"
                >
            </template>

            <template v-slot:title="{data}">
                <a href="javascript:">
                    {{
                        activeLang === 'ua' ? data.row.title.ua :
                            (activeLang === 'ru' ? data.row.title.ru : '-')
                    }}
                </a>
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
                <a href="javascript:" @click="$emit('onDestroy',data.row.id)">
                    <xcircle-component/>
                </a>
            </template>
        </table-component>
    </div>
</template>

<script setup>
import {inject, ref} from "vue";

defineProps(['data']);
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
