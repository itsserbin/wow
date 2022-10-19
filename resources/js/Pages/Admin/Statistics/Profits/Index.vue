<template>
    <StatisticLayout title="Прибуток">
        <template #header>
            Прибуток
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-profits')">

            <div class="grid grid-cols-1 gap-4 mt-5">

                <div class="block">
                    <label-component value="Фільтр по даті"/>
                    <Datepicker v-model="params.date"
                                class="w-100"
                                placeholder="Оберіть дату"
                                autoApply
                                :monthChangeOnScroll="false"
                                :enableTimePicker="false"
                                range
                                locale="ru"
                                @update:modelValue="sortByRange"
                    ></Datepicker>
                </div>

            </div>

            <LastParams :active-item="params.last" @sortByLast="sortByLast"/>

            <ProfitChart v-if="state.chart" :chart-data="state.chart"/>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <card-component v-for="(item,i) in state.profits.generalStat"
                                class="text-center"
                                :title="i"
                                :description="$filters.formatMoney(item)"
                >
                </card-component>
            </div>
            <table-component :headings="headings"
                             :rows="state.profits.result.data"
                             :isSlotMode="true"
            >
                <template v-slot:date="{data}">
                    {{ $filters.dateFormat(data.row.date) }}
                </template>

                <template v-slot:costs="{data}">
                    {{ $filters.formatMoney(data.row.costs) }}
                </template>

                <template v-slot:turnover="{data}">
                    {{ $filters.formatMoney(data.row.turnover) }}
                </template>

                <template v-slot:marginality="{data}">
                    {{ $filters.formatMoney(data.row.marginality) }}
                </template>

                <template v-slot:clear_profit="{data}">
                    {{ $filters.formatMoney(data.row.clear_profit) }}
                </template>

                <template v-slot:average_marginality="{data}">
                    {{ $filters.formatMoney(data.row.average_marginality) }}
                </template>

                <template v-slot:sale_of_air_sum="{data}">
                    {{ $filters.formatMoney(data.row.sale_of_air_sum) }}
                </template>

                <template v-slot:debt_supplier="{data}">
                    {{ $filters.formatMoney(data.row.debt_supplier) }}
                </template>

                <template v-slot:prepayment_sum="{data}">
                    {{ $filters.formatMoney(data.row.prepayment_sum) }}
                </template>

                <template v-slot:refunds_sum="{data}">
                    {{ $filters.formatMoney(data.row.refunds_sum) }}
                </template>

                <template v-slot:additional_sales_marginality_sum="{data}">
                    {{ $filters.formatMoney(data.row.additional_sales_marginality_sum) }}
                </template>

                <template v-slot:additional_sales_sum="{data}">
                    {{ $filters.formatMoney(data.row.additional_sales_sum) }}
                </template>
            </table-component>

            <pagination :pagination="state.profits.result"
                        :click-handler="fetch"
                        v-model="params.currentPage"
            />
        </div>
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import ColorModal from '@/Pages/Admin/Statistics/Costs/Modal.vue';
import ProfitChart from '@/Pages/Admin/Statistics/Profits/Chart.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import LastParams from '@/Pages/Admin/Statistics/LastParams.vue'

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    profits: [],
    chart: null,
    isLoading: true,
});

const params = ref({
    date: [],
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

const headings = reactive([
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Витрати',
        key: 'cost'
    },
    {
        label: 'Оберт',
        key: 'turnover'
    },
    {
        label: 'Маржа',
        key: 'marginality'
    },
    {
        label: 'Чистий прибуток',
        key: 'clear_profit'
    },
    {
        label: 'Винен постачальник',
        key: 'debt_supplier'
    },
    {
        label: 'Продажі повітря',
        key: 'sale_of_air_sum'
    },
    {
        label: 'Середня маржа',
        key: 'average_marginality'
    },
    {
        label: 'Сума переодоплат',
        key: 'prepayment_sum'
    },
    {
        label: 'Сума за повернення товару',
        key: 'refunds_sum'
    },
    {
        label: 'Маржа з дод.продаж',
        key: 'additional_sales_marginality_sum'
    },
    {
        label: 'Оберт дод.продаж',
        key: 'additional_sales_sum'
    },
]);

function sortByLast(val) {
    if (val) {
        params.value.last = val;
    } else {
        params.value = {
            date: [],
            last: null,
            currentPage: 1,
        };
    }
    fetch();
}

function sortByRange(val) {
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
