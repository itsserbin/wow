<template>
    <StatisticLayout title="Статистика для менеджерів">
        <template #header>
            Статистика для менеджерів
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">

            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
                <div class="block col-span-2 text-center">
                    <label-component value="&nbsp;"/>
                    <button-component type="button" @click="fetchClear">
                        Очистити
                    </button-component>
                </div>
                <div class="block col-span-4">
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
                    ></Datepicker>
                </div>

                <div class="block col-span-4">
                    <label-component value="Фільтр по менеджерам"/>
                    <multiselect
                        v-model="state.managers"
                        :options="managers"
                        label="name"
                        placeholder="Оберіть менеджерів"
                        track-by="id"
                        :searchable="true"
                        :close-on-select="false"
                        multiple
                    />
                </div>

                <div class="block col-span-2 text-center">
                    <label-component value="&nbsp;"/>
                    <button-component type="button" @click="fetch">
                        Пошук
                    </button-component>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <card-component v-for="(item,i) in state.data.generalStat"
                                class="text-center"
                                :title="i"
                                :description="item"
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

            <pagination :pagination="state.data.result"
                      :click-handler="fetch"
                      v-model="params.currentPage"
            />
        </div>
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    data: [],
    managers: [],
    isLoading: true,
});

const managers = ref([]);

const endPoint = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0];
        data.date_end = params.value.date[1];
    }
    if (managersArray.value) {
        data.managers = managersArray.value;
    }
    data.page = params.value.currentPage;
    console.log(data);
    return route('api.statistics.managers.index', data);

})

const managersArray = computed(() => {
    let managers = [];
    state.value.managers.forEach((item) => {
        managers.push(item.id)
    })

    return managers.join();
})

const params = ref({
    date: [],
    managers: [],
    currentPage: 1,
})

onMounted(() => {
    fetch();

    axios.get(route('api.users.list.managers'))
        .then(({data}) => managers.value = data.result)
        .catch((response) => console.log(response))
})

const headings = reactive([
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Надійшло заявок',
        key: 'count_applications'
    },
    {
        label: 'В процесі',
        key: 'in_process_applications'
    },
    {
        label: 'Зроблено дод.продаж',
        key: 'count_additional_sales'
    },
    {
        label: 'Скасованих',
        key: 'canceled_applications'
    },
    {
        label: 'Повернень',
        key: 'returned_applications'
    },
    {
        label: 'Виконаних',
        key: 'done_applications'
    },
    {
        label: 'Загальний апрув',
        key: 'total_applications'
    },
    {
        label: 'Кількість дод.продажів повітря',
        key: 'count_sale_of_air'
    },
    {
        label: 'Сума дод.продажів повітря',
        key: 'price_sale_of_air'
    },
    {
        label: 'Прибуток з дод.продажів повітря',
        key: 'total_sale_of_air'
    },
    {
        label: 'Загальна маржа дод.продажів',
        key: 'sum_additional_sales'
    },
    {
        label: 'Сума за заявки',
        key: 'sum_price_applications'
    },
    {
        label: 'Сума за дод.продажі',
        key: 'sum_price_additional_sales'
    },
    {
        label: 'Кількість передоплат',
        key: 'count_prepayments'
    },
    {
        label: 'Сума за передоплати',
        key: 'prepayments_amount'
    },
    {
        label: 'Загальна сума',
        key: 'total_price'
    },
]);

function fetchClear() {
    params.value.managers = [];
    params.value.date = [];
    params.value.managers = [];
    state.value.managers = [];
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
