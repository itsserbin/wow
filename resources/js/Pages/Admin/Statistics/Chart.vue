<script setup>
import {Chart, registerables} from 'chart.js';
import {LineChart} from 'vue-chart-3';

Chart.register(...registerables);

defineProps(['chartData'])

const options = {
    responsive: true,
    interaction: {
        intersect: false,
    }
};
</script>

<template>
    <LineChart :chartData="chartData" :options="options"/>
</template>
