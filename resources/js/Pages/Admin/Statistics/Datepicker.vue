<script setup>
import isDark from "@/Includes/isDark";
import Datepicker from '@vuepic/vue-datepicker';
import {endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths} from 'date-fns';
import {ref, computed} from "vue";

const props = defineProps(['modelValue']);
const emits = defineEmits(['update:modelValue']);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits("update:modelValue", value);
    },
});

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

<template>
    <Datepicker v-model="value"
                class="w-100"
                locale="uk"
                placeholder="Оберіть дату"
                autoApply
                :monthChangeOnScroll="false"
                :enableTimePicker="false"
                range
                :presetRanges="presetRanges"
                :dark="isDark"
    ></Datepicker>
</template>
