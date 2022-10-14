<template>
    <LineChart :chartData="chartData" :options="options"/>
</template>

<script setup>
import {LineChart} from 'vue-chart-3';
import {reactive} from 'vue'

defineProps(['chartData'])

const options = reactive({
    responsive: true,
    interaction: {
        intersect: false,
    },
});
</script>
