<template>
    <StatisticLayout title="Маркетингова статистика">
        <template #header>
            Маркетингова статистика
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

            <MarketingChart :chart-data="state.data.chart"/>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <card-component v-for="(item,i) in state.data.generalStatistics"
                                class="text-center"
                                :title="i"
                                :description="$filters.formatMoney(item)"
                >
                </card-component>
            </div>
            <table-component :headings="headings"
                             :rows="state.data.result.data"
                             :isSlotMode="true"
            >
                <template v-slot:date="{data}">
                    {{ $filters.dateFormat(data.row.date) }}
                </template>

                <template v-slot:costs="{data}">
                    {{ $filters.formatMoney(data.row.costs) }}
                </template>
            </table-component>

            <Paginate :pagination="state.data.result"
                      :click-handler="fetch"
                      v-model="params.currentPage"
            />
        </div>
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import MarketingChart from '@/Pages/Admin/Statistics/Marketing/Chart.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Paginate from '@/Components/Paginate.vue'

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    data: [],
    isLoading: true,
});


const params = ref({
    date: [],
    filter: null,
    last: 'one-month',
    currentPage: 1,
})

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
    return route('api.statistics.marketing.index', data);

})

onMounted(() => fetch())

const headings = reactive([
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Ср. ціна заявки',
        key: 'average_application_price'
    },
    {
        label: 'Ср. ціна апрува',
        key: 'average_approve_application_price'
    },
    {
        label: 'Ср. ціна виконаної заявки',
        key: 'average_done_application_price'
    },
    {
        label: 'Ср. чек',
        key: 'average_check'
    },
    {
        label: 'Ср. маржа',
        key: 'average_marginality'
    },
    {
        label: 'Ср. кількість товарів',
        key: 'average_items'
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
            Object.assign(state.value.data, response.data);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}
</script>
