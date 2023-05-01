<script setup>
import {getCurrentInstance, onMounted, reactive} from "vue";
import {GChart} from 'vue-google-charts'

const props = defineProps(['data']);

const {$filters} = getCurrentInstance().appContext.config.globalProperties

const state = reactive({
    lineChartOptions: {
        tooltip: {trigger: 'hover'},
        legend: { position: 'bottom' },
        focusTarget: 'category',
    },
    chartData: [
        ['Місяць', 'Надходження', 'Витрати', 'Грошовий потік']
    ],
    barChartOptions: {
        tooltip: {trigger: 'hover'},
        legend: { position: 'bottom' },
        focusTarget: 'category',
    }
})

const series = reactive([])

onMounted(() => {
    props.data.data.forEach((item) => {
        state.chartData.splice(1, 0, [
            $filters.monthFormat(item.month),
            item.approved_income,
            item.approved_consumption = -item.approved_consumption,
            item.difference,
        ])
    })

    console.log(state.chartData);
})
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
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
</template>
