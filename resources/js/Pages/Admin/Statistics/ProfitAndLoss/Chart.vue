<script setup>
import {getCurrentInstance, onMounted, reactive} from "vue";
import {GChart} from 'vue-google-charts'

const props = defineProps(['data']);

const {$filters} = getCurrentInstance().appContext.config.globalProperties

const state = reactive({
    lineChartOptions: {
        legend: { position: 'bottom' },
        tooltip: {trigger: 'hover'},
        is3D: true,
        focusTarget: 'category',
    },
    chartData: [
        ['Місяць', 'Витрати', 'Загальна виручка', 'Чистий прибуток'],
    ],
    barChartOptions: {
        legend: { position: 'bottom' },
        focusTarget: 'category',
        tooltip: {trigger: 'hover'},
    }
})

const series = reactive([])

onMounted(() => {
    props.data.data.forEach((item) => {
        state.chartData.splice(1, 0, [
            $filters.monthFormat(item.month),
            item.costs = -item.costs,
            item.total_revenues,
            item.net_profit
        ])
    })
})
</script>

<template>
    <div class="grid grid-cols-1">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GChart
                type="ColumnChart"
                :data="state.chartData"
                :options="state.barChartOptions"
            />

            <GChart
                type="LineChart"
                :data="state.chartData"
                :options="state.lineChartOptions"
            />
        </div>
    </div>
</template>
