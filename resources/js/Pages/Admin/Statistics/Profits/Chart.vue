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

const datasetCategories = {
    turnover: 'Оберт',
    marginality: 'Маржа',
    clear_profit: 'Чистий прибуток',
    average_marginality: 'Середня маржа',
    sale_of_air_sum: 'Продажі повітря'
};

const data = ref({
    labels: [],
    datasets: [
        {
            label: datasetCategories.turnover,
            data: [],
            borderColor: ['#3498DB']
        },
        {
            label: datasetCategories.marginality,
            data: [],
            borderColor: ['#A569BD']
        },
        {
            label: datasetCategories.clear_profit,
            data: [],
            borderColor: ['#45B39D']
        },
        {
            label: datasetCategories.average_marginality,
            data: [],
            borderColor: ['#F4D03F']
        },
        {
            label: datasetCategories.sale_of_air_sum,
            data: [],
            borderColor: ['#DC7633']
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
    const turnover = data.value.datasets.find((item) => item.label === datasetCategories.turnover);
    const marginality = data.value.datasets.find((item) => item.label === datasetCategories.marginality);
    const clear_profit = data.value.datasets.find((item) => item.label === datasetCategories.clear_profit);
    const average_marginality = data.value.datasets.find((item) => item.label === datasetCategories.average_marginality);
    const sale_of_air_sum = data.value.datasets.find((item) => item.label === datasetCategories.sale_of_air_sum);

    props.chartData.forEach((item) => {
        turnover.data.unshift(item.turnover)
        marginality.data.unshift(item.marginality)
        clear_profit.data.unshift(item.clear_profit)
        average_marginality.data.unshift(item.average_marginality)
        sale_of_air_sum.data.unshift(item.sale_of_air_sum)
        data.value.labels.unshift(moment(item.date).format('DD.MM.YY'))
    })

})

</script>
