<template>
<table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.colors.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:actions="{data}">
                    <a href="javascript:" @click="$emit('onDestroy',data.row.id)">
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
        label: 'Колір',
        key: 'color'
    },
    {
        label: 'Назва',
        key: 'name'
    },
    {
        label: 'HEX',
        key: 'hex'
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