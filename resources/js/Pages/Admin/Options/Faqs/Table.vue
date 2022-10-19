<template>

<table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.data.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:question="{data}">
                    {{
                        state.activeLang === 'ua' ? data.row.question.ua :
                            (state.activeLang === 'ru' ? data.row.question.ru : null)
                    }}
                </template>

                <template v-slot:answer="{data}">
                    {{
                        state.activeLang === 'ua' ? data.row.answer.ua :
                            (state.activeLang === 'ru' ? data.row.answer.ru : null)
                    }}
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
defineEmits(['onDestroy','onEdit'])


const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Питання',
        key: 'question'
    },
    {
        label: 'Відповідь',
        key: 'answer'
    },
    {
        label: 'Статус',
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