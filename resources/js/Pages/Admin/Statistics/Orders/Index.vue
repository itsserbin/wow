<template>
    <StatisticLayout title="Статистика заявок">
        <template #header>
            Статистика заявок
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-orders')" class="grid grid-cols-1 gap-4">

            <div class="block">
                <label-component value="Фільтр по даті"/>
                <DatepickerComponent v-model="params.date"
                                     @update:modelValue="fetch"
                />
            </div>

            <Chart v-if="state.chart" :chart-data="state.chart"/>

            <Indicators :data="state.indicators"/>

            <Table :data="state.orders.result.data"/>

            <div class="text-center">
                <pagination :pagination="state.orders.result"
                            :click-handler="fetch"
                            v-model="params.currentPage"
                />
            </div>
        </div>
    </StatisticLayout>
</template>

<script setup>
import {onMounted, inject, ref, computed} from "vue";
import Chart from '@/Pages/Admin/Statistics/Orders/Chart.vue';
import Table from '@/Pages/Admin/Statistics/Orders/Table.vue';
import Indicators from '@/Pages/Admin/Statistics/Orders/Indicators.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'
import {endOfMonth, startOfMonth} from "date-fns";

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    orders: [],
    chart: null,
    indicators: null,
    isLoading: true,
});


const params = ref({
    date: [],
    currentPage: 1,
})

const costCategoriesOptions = ref([]);

const getParams = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
    }
    data.page = params.value.currentPage;
    return data;

})

onMounted(() => {
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());

    fetch();
})

function paginate(page) {
    if (page) {
        params.value.currentPage = page;
    }
    fetch();
}

function fetch() {
    state.value.isLoading = true;
    axios.get(route('api.statistics.orders.index', getParams.value))
        .then(({data}) => {
            state.value.orders = data;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        });

    axios.get(route('api.statistics.orders.chart', getParams.value))
        .then(({data}) => state.value.chart = data.result)
        .catch((response) => console.log(response));

    axios.get(route('api.statistics.orders.indicators', getParams.value))
        .then(({data}) => state.value.indicators = data.result)
        .catch((response) => console.log(response));

}
</script>
