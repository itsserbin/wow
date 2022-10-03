<template>
    <StatisticLayout title="Статистика заявок">
        <template #header>
            Статистика заявок
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">

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

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-5">
                <button-component type="btn"
                                  @click="sortByLast(item.key)"
                                  v-for="item in lastParams"
                                  :active="item.key === params.last"
                >
                    {{ item.label }}
                </button-component>
            </div>

            <OrderChart :chart-data="state.orders.chart"/>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <card-component v-for="(item,i) in state.orders.generalStat"
                                class="text-center"
                                :title="i"
                                :description="item"
                >
                </card-component>
            </div>
            <table-component :headings="headings"
                             :rows="state.orders.result.data"
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

            <Paginate :pagination="state.orders.result"
                      :click-handler="fetch"
                      v-model="params.currentPage"
            />
        </div>
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import OrderChart from '@/Pages/Admin/Statistics/Orders/Chart.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Paginate from '@/Components/Paginate.vue'

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    orders: [],
    isLoading: true,
});


const params = ref({
    date: [],
    filter: null,
    last: 'one-month',
    currentPage: 1,
})

const costCategoriesOptions = ref([]);

const endPoint = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0];
        data.date_end = params.value.date[1];
    }
    if (params.value.last) {
        data.last = params.value.last
    }
    data.page = params.value.currentPage;
    return route('api.statistics.orders.index', data);

})

onMounted(() => fetch())

const headings = reactive([
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Всього',
        key: 'applications'
    },
    {
        label: 'Передані постачальнику',
        key: 'transferred_to_supplier'
    },
    {
        label: 'Вимагають уточнення',
        key: 'requires_clarification'
    },
    {
        label: 'Очікують відправлення',
        key: 'awaiting_dispatch'
    },
    {
        label: 'Очікують передоплати',
        key: 'awaiting_prepayment'
    },
    {
        label: 'В дорозі',
        key: 'on_the_road'
    },
    {
        label: 'В процесі',
        key: 'in_process'
    },
    {
        label: 'На пошті',
        key: 'at_the_post_office'
    },
    {
        label: 'Виконані',
        key: 'completed'
    },
    {
        label: 'Повернення',
        key: 'refunds'
    },
    {
        label: 'Скасовані',
        key: 'cancel'
    },
    {
        label: 'Нові',
        key: 'unprocessed'
    },
]);

const lastParams = reactive([
    {
        label: 'Весь час',
        key: null
    },
    {
        label: 'Поточний тиждень',
        key: 'week'
    },
    {
        label: 'Поточний та попередні тижні',
        key: 'two-week'
    },
    {
        label: 'Поточний місяць',
        key: 'one-month'
    },
    {
        label: '7 днів',
        key: '7-days'
    },
    {
        label: '14 днів',
        key: '14-days'
    },
    {
        label: '30 днів',
        key: '30-days'
    },
    {
        label: '90 днів',
        key: '90-days'
    },
])


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
    axios.get(endPoint.value)
        .then(response => {
            Object.assign(state.value.orders, response.data);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}
</script>
