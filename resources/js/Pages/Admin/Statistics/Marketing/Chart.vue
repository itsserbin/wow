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
    average_application_price: 'Ср. ціна заявки',
    average_approve_application_price: 'Ср. ціна апрува',
    average_done_application_price: 'Ср. ціна виконаної заявки',
    average_check: 'Ср. чек',
    average_marginality: 'Ср. маржа',
    average_items: 'Ср. кількість товарів',
};

const data = ref({
    labels: [],
    datasets: [
        {
            label: datasetCategories.average_application_price,
            data: [],
            borderColor: ['#5DADE2']
        },
        {
            label: datasetCategories.average_approve_application_price,
            data: [],
            borderColor: ['#F4D03F']
        },
        {
            label: datasetCategories.average_done_application_price,
            data: [],
            borderColor: ['#58D68D']
        },
        {
            label: datasetCategories.average_check,
            data: [],
            borderColor: ['#E74C3C']
        },
        {
            label: datasetCategories.average_marginality,
            data: [],
            borderColor: ['#A569BD']
        },
        {
            label: datasetCategories.average_items,
            data: [],
            borderColor: ['#85929E']
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
    const average_application_price = data.value.datasets.find((item) => item.label === datasetCategories.average_application_price);
    const average_approve_application_price = data.value.datasets.find((item) => item.label === datasetCategories.average_approve_application_price);
    const average_done_application_price = data.value.datasets.find((item) => item.label === datasetCategories.average_done_application_price);
    const average_check = data.value.datasets.find((item) => item.label === datasetCategories.average_check);
    const average_marginality = data.value.datasets.find((item) => item.label === datasetCategories.average_marginality);
    const average_items = data.value.datasets.find((item) => item.label === datasetCategories.average_items);

    props.chartData.forEach((item) => {
        average_application_price.data.unshift(item.average_application_price)
        average_approve_application_price.data.unshift(item.average_approve_application_price)
        average_done_application_price.data.unshift(item.average_done_application_price)
        average_check.data.unshift(item.average_check)
        average_marginality.data.unshift(item.average_marginality)
        average_items.data.unshift(item.average_items)
        data.value.labels.unshift(moment(item.date).format('DD.MM.YY'))
    })

})

</script>
