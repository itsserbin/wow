<template>
    <StatisticLayout title="Статистика заявок">
        <template #header>
            Статистика заявок
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-orders')">

            <div class="grid grid-cols-1 gap-4 mt-5">

                <div class="block">
                    <label-component value="Фільтр по даті"/>
                    <Datepicker v-model="params.date"
                                class="w-100"
                                locale="ru"
                                placeholder="Оберіть дату"
                                autoApply
                                :monthChangeOnScroll="false"
                                :enableTimePicker="false"
                                range
                                utc
                                @update:modelValue="sortByRange"
                    ></Datepicker>
                </div>

            </div>

            <LastParams :active-item="params.last" @sortByLast="sortByLast"/>

            <Chart v-if="state.chart" :chart-data="state.chart"/>

            <Indicators :data="state.indicators"/>

            <Table :data="state.orders.result.data"/>

            <pagination :pagination="state.orders.result"
                      :click-handler="fetch"
                      v-model="params.currentPage"
            />
        </div>
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import Chart from '@/Pages/Admin/Statistics/Orders/Chart.vue';
import Table from '@/Pages/Admin/Statistics/Orders/Table.vue';
import Indicators from '@/Pages/Admin/Statistics/Orders/Indicators.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import LastParams from '@/Pages/Admin/Statistics/LastParams.vue'

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
    filter: null,
    last: 'one-month',
    currentPage: 1,
})

const costCategoriesOptions = ref([]);

const getParams = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0];
        data.date_end = params.value.date[1];
    }
    if (params.value.last) {
        data.last = params.value.last
    }
    data.page = params.value.currentPage;
    return data;

})

onMounted(() => fetch())

function sortByLast(val) {
    if (val) {
        params.value.last = val;
    } else {
        params.value = {
            date: [],
            filter: null,
            last: null,
            currentPage: 1,
        };
    }
    fetch();
}

function sortByRange() {
    params.value.last = 'range';
    fetch();
}

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
