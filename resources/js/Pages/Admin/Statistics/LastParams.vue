<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
        <button-component type="btn"
                          @click="$emit('sortByLast',item.key)"
                          v-for="item in lastParams"
                          :active="item.key === activeItem"
        >
            {{ item.label }}
        </button-component>
    </div>
</template>

<script setup>
import {reactive, ref} from "vue";

defineEmits(['sortByLast'])
defineProps(['activeItem']);

const lastParams = reactive([
    {
        label: 'Весь час',
        key: null
    },
    {
        label: 'Поточний тиждень',
        key: 'week'
    },
    {
        label: 'Поточний та попередні тижні',
        key: 'two-week'
    },
    {
        label: 'Поточний місяць',
        key: 'one-month'
    },
    {
        label: '7 днів',
        key: '7-days'
    },
    {
        label: '14 днів',
        key: '14-days'
    },
    {
        label: '30 днів',
        key: '30-days'
    },
    {
        label: '90 днів',
        key: '90-days'
    },
])
</script>
