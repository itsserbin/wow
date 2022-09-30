<template>
    <LineChart :chartData="data" :options="options"/>
</template>

<script setup>
import {LineChart} from 'vue-chart-3';
import {getCurrentInstance, inject, onMounted, ref} from 'vue'

const moment = inject('$moment');

const props = defineProps({
    chartData: {
        type: Array,
        default: () => {
        }
    }
})

const data = ref({
    labels: [],
    datasets: [
        {
            label: 'Расходы',
            data: [],
            borderColor: ['#3498DB']
        },
    ],
});

const options = ref({
    responsive: true,
    interaction: {
        intersect: false,
    },
});

onMounted(() => {
    const costs = data.value.datasets.find((item) => item.label === 'Расходы');

    props.chartData.forEach((item) => {
        costs.data.push(item.total)
        data.value.labels.push(moment(item.date).format('DD.MM.YY'))
    })
})

</script>
