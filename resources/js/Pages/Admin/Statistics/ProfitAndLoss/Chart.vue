<script setup>
import {getCurrentInstance, onMounted, reactive} from "vue";
import {GChart} from 'vue-google-charts'

const props = defineProps(['data']);

const {$filters} = getCurrentInstance().appContext.config.globalProperties

const state = reactive({
    chartData: [
        ['Місяць', 'Витрати', 'Загальна виручка', 'Чистий прибуток']
    ],
    chartOptions: {
        chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
    }
})

const series = reactive([])

onMounted(() => {
    props.data.data.forEach((item) => {
        state.chartData.splice(1, 0, [
            item.month,
            item.costs = -item.costs,
            item.total_revenues,
            item.net_profit
        ])
    })
})
</script>

<template>
    <div class="grid grid-cols-1">
        <GChart
            type="ColumnChart"
            :data="state.chartData"
            :options="state.chartOptions"
        />
    </div>
</template>
