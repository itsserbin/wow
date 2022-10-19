<template>
    <StatisticLayout title="Витрати">
        <template #header>
            Витрати
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-costs')">
            <button-component type="btn" @click="create" v-if="can('create-costs')">
                Додати
            </button-component>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div class="block">
                    <label-component value="Фільтр по категорії"/>
                    <select-component v-model="params.filter"
                                      :options="costCategoriesOptions"
                                      @change="fetch"
                    />
                </div>

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
                                @update:modelValue="sortByRange"
                    ></Datepicker>
                </div>

            </div>

            <LastParams :active-item="params.last" @sortByLast="sortByLast"/>

            <CostChart v-if="state.chart" :chart-data="state.chart"/>

            <div class="grid grid-cols-2 md:grid-cols-6">
                <card-component v-for="(item,i) in state.data.generalStat"
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
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:date="{data}">
                    {{ $filters.dateFormat(data.row.date) }}
                </template>

                <template v-slot:category="{data}">
                    {{ data.row.category.title }}
                </template>

                <template v-slot:sum="{data}">
                    {{ $filters.formatMoney(data.row.sum) }}
                </template>

                <template v-slot:total="{data}">
                    {{ $filters.formatMoney(data.row.total) }}
                </template>

                <template v-slot:user="{data}">
                    {{ data.row.user ? data.row.user.name : '-' }}
                </template>

                <template v-slot:actions="{data}">
                    <a href="javascript:" @click="onDestroy(data.row.id)">
                        <xcircle-component/>
                    </a>
                </template>
            </table-component>

            <pagination :pagination="state.data.result"
                      :click-handler="fetch"
                      v-model="params.page"
            />

            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
            ></component>
        </div>
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import ColorModal from '@/Pages/Admin/Statistics/Costs/Modal.vue';
import CostChart from '@/Pages/Admin/Statistics/Costs/Chart.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import LastParams from '@/Pages/Admin/Statistics/LastParams.vue'

const swal = inject('$swal')
const can = inject('$can');

const item = ({
    name: null,
    date: null,
    sum: null,
    quantity: 1,
    comment: null,
    total: null,
    cost_category_id: null,
})

const state = ref({
    data: [],
    chart: [],
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
});


const params = ref({
    date: [],
    filter: null,
    last: 'one-month',
    page: 1,
})

const costCategoriesOptions = ref([]);

const getParams = computed(() => {
    const data = {};
    if (params.value.filter) {
        data.filter = params.value.filter
    }
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0];
        data.date_end = params.value.date[1];
    }
    if (params.value.last) {
        data.last = params.value.last
    }
    data.page = params.value.page;
    return data;
});

function sortByLast(val) {
    if (val) {
        params.value.last = val;
    } else {
        params.value = {
            date: [],
            filter: null,
            last: null,
            page: 1,
        };
    }
    fetch();
}

onMounted(() => {
    fetch();
    axios.get(route('api.statistics.costs.categories.list'))
        .then(({data}) => {
            data.result.forEach((item) => {
                costCategoriesOptions.value.push({
                    value: item.title,
                    key: item.id,
                })
            });
        })
        .catch((errors) => console.log(errors))
})

const activeModal = computed(() => state.value.isActiveModal ? ColorModal : null)

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Категорія',
        key: 'category'
    },
    {
        label: 'Кількість',
        key: 'quantity'
    },
    {
        label: 'Сума',
        key: 'sum'
    },
    {
        label: 'Загалом',
        key: 'total'
    },
    {
        label: 'Відповідальний',
        key: 'user'
    },
    {
        label: 'Коментар',
        key: 'comment'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
]);

function sortByRange() {
    params.value.last = 'range';
    fetch();
}

function paginate(page) {
    if (page) {
        params.value.page = page;
    }
    fetch();
}

function fetch() {
    state.value.isLoading = true;
    axios.get(route('api.statistics.costs.index', getParams.value))
        .then(({data}) => {
            state.value.data = data
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        });

    axios.get(route('api.statistics.costs.chart', getParams.value))
        .then(({data}) => state.value.chart = data.result)
        .catch((errors) => console.log(errors));

}

function onDestroy(id) {
    if (can('destroy-colors')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.statistics.costs.destroy', id))
                    .then(() => {
                        fetch();
                        if (state.value.isActiveModal) {
                            modalFunction();
                        }
                        swal({
                            icon: 'success',
                            title: 'Destroyed!'
                        })
                    })
                    .catch(errors => {
                        console.log(errors);
                        swal({
                            icon: 'error',
                            title: 'Error!'
                        })
                    })
            }
        })

    }
}

function modalFunction() {
    state.value.isActiveModal = !state.value.isActiveModal;
}

function onEdit(id, i) {
    if (can('edit-costs')) {
        axios.get(route('api.statistics.costs.edit', id))
            .then(({data}) => {
                state.value.item = data.result;
                state.value.modalAction = 'edit';
                state.value.item.index = i;
                modalFunction();
            })
            .catch((response) => console.log(response))
    }
}

function onUpdate() {
    if (can('edit-costs')) {
        axios.put(route('api.statistics.costs.update', state.value.item.id), state.value.item)
            .then(() => {
                modalFunction();
                fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            })
            .catch((response) => {
                console.log(response);
                swal({
                    title: 'Error!',
                    icon: 'error'
                })
            })
    }
}

function onCreate() {
    if (can('create-costs')) {
        axios.post(route('api.statistics.costs.create'), state.value.item)
            .then(() => {
                modalFunction();
                state.value.item = item;
                fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            })
            .catch((response) => {
                console.log(response);
                swal({
                    title: 'Error!',
                    icon: 'error'
                })
            })
    }
}

function submitForm() {
    if (state.value.modalAction === 'edit' && can('edit-costs')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-costs')) {
        onCreate();
    }
}

function create() {
    if (can('create-costs')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
