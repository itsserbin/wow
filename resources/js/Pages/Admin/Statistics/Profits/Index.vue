<template>
    <StatisticLayout title="Прибуток">
        <template #header>
            Прибуток
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-profits')" class="grid grid-cols-1 gap-4">
            <div class="block">
                <label-component value="Фільтр по даті"/>
                <DatepickerComponent v-model="params.date"
                                     @update:modelValue="fetch"
                />
            </div>

            <ProfitChart v-if="state.chart" :chart-data="state.chart"/>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <card-component v-for="(item,i) in state.profits.generalStat"
                                class="text-center"
                                :title="i"
                                :description="$filters.formatMoney(item)"
                >
                </card-component>
            </div>

            <Table :data="state.profits.result.data"/>

            <div class="text-center">
                <pagination :pagination="state.profits.result"
                            :click-handler="fetch"
                            v-model="params.currentPage"
                />
            </div>
        </div>
    </StatisticLayout>
</template>

<script setup>
import {onMounted, inject, ref, computed} from "vue";
import {endOfMonth, startOfMonth} from "date-fns";
import ProfitChart from '@/Pages/Admin/Statistics/Profits/Chart.vue';
import Table from '@/Pages/Admin/Statistics/Profits/Table.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    profits: [],
    chart: null,
    isLoading: true,
});

const params = ref({
    date: [],
    currentPage: 1,
})

const costCategoriesOptions = ref([]);

const dateRange = computed(() => {
    if (params.value.date.length === 2) {
        return {
            date_start: params.value.date[0].toLocaleDateString(),
            date_end: params.value.date[1].toLocaleDateString()
        }
    }
});

const last = computed(() => params.value.last);

const getParams = computed(() => ({
    ...dateRange.value,
    last: last.value,
    page: params.value.currentPage
}));

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
    axios.get(route('api.statistics.profits.index', getParams.value))
        .then(({data}) => {
            state.value.profits = data;
            state.value.isLoading = false;
        })
        .catch((response) => {
            console.log(response);
            state.value.isLoading = false;
        });

    axios.get(route('api.statistics.profits.chart', getParams.value))
        .then(({data}) => state.value.chart = data.result)
        .catch((response) => console.log(response))
}
</script>
