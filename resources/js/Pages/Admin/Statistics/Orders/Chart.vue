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
    applications: 'Всего заявок',
    completed: 'Выполненные',
    refunds: 'Возвраты',
    cancel: 'Отмененные'
};

const data = ref({
    labels: [],
    datasets: [
        {
            label: datasetCategories.applications,
            data: [],
            borderColor: ['#3498DB']
        },
        {
            label: datasetCategories.completed,
            data: [],
            borderColor: ['#A569BD']
        },
        {
            label: datasetCategories.refunds,
            data: [],
            borderColor: ['#45B39D']
        },
        {
            label: datasetCategories.cancel,
            data: [],
            borderColor: ['#F4D03F']
        }
    ],
});

const options = ref({
    responsive: true,
    interaction: {
        intersect: false,
    },
});

onMounted(() => {
    const applications = data.value.datasets.find((item) => item.label === datasetCategories.applications);
    const completed = data.value.datasets.find((item) => item.label === datasetCategories.completed);
    const refunds = data.value.datasets.find((item) => item.label === datasetCategories.refunds);
    const cancel = data.value.datasets.find((item) => item.label === datasetCategories.cancel);

    props.chartData.forEach((item) => {
        applications.data.unshift(item.applications)
        completed.data.unshift(item.completed)
        refunds.data.unshift(item.refunds)
        cancel.data.unshift(item.cancel)
        data.value.labels.unshift(moment(item.date).format('DD.MM.YY'))
    })

})

</script>
