<template>
    <Datepicker v-model="modelValue"
                class="w-100"
                locale="ru"
                placeholder="Оберіть дату"
                autoApply
                :monthChangeOnScroll="false"
                :enableTimePicker="false"
                range
                :presetRanges="presetRanges"
                @update:modelValue="$emit('update:modelValue', modelValue)"
    ></Datepicker>
</template>

<script setup>
import {endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths} from 'date-fns';
import {ref,toRef} from "vue";

const props = defineProps(['modelValue']);
defineEmits(['update:modelValue']);

const modelValue = toRef(props,'modelValue')

const presetRanges = ref([
    {
        label: 'Сьогодні',
        range: [
            new Date(),
            new Date()
        ]
    },
    {
        label: 'Вчора',
        range: [
            new Date() - 86400000,
            new Date() - 86400000
        ]
    },
    {
        label: 'Поточний місяць',
        range: [
            startOfMonth(new Date()),
            endOfMonth(new Date())
        ]
    },
    {
        label: 'Попередній місяць',
        range: [
            startOfMonth(subMonths(new Date(), 1)),
            endOfMonth(subMonths(new Date(), 1))
        ],
    },
    {
        label: 'Поточний рік',
        range: [
            startOfYear(new Date()),
            endOfYear(new Date())
        ]
    },
]);
</script>
