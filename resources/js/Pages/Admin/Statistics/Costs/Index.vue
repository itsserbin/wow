<template>
    <StatisticLayout title="Витрати">
        <template #header>
            Витрати
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-costs')" class="grid grid-cols-1 gap-4">
            <div>
                <button-component type="btn" @click="create">
                    Додати
                </button-component>
            </div>

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
                    <DatepickerComponent v-model="params.date"
                                         @update:modelValue="fetch"
                    />
                </div>

            </div>

            <CostChart v-if="state.chart" :chart-data="state.chart"/>

            <div class="grid grid-cols-2 md:grid-cols-6">
                <card-component v-for="(item,i) in state.data.generalStat"
                                class="text-center"
                                :title="i"
                                :description="$filters.formatMoney(item)"
                >
                </card-component>
            </div>

            <Table :data="state.data.result.data" @onDestroy="onDestroy" @onEdit="onEdit"/>

            <div class="text-center">
                <pagination :pagination="state.data.result"
                            :click-handler="fetch"
                            v-model="params.page"
                />
            </div>

            <component :is="activeModal"
                       :item="state.item"
                       :modalAction="state.modalAction"
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
import Table from '@/Pages/Admin/Statistics/Costs/Table.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'
import {endOfMonth, startOfMonth} from "date-fns";

const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    name: null,
    date: null,
    sum: null,
    quantity: 1,
    comment: null,
    total: null,
    cost_category_id: null,
    cost_type: 'single',
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
    page: 1,
})

const costCategoriesOptions = ref([]);

const getParams = computed(() => {
    const data = {};
    if (params.value.filter) {
        data.filter = params.value.filter
    }
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
    }
    data.page = params.value.page;
    return data;
});

onMounted(() => {
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());
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

function modalFunction() {
    state.value.isActiveModal = !state.value.isActiveModal;
}

function onEdit(id, i) {
    axios.get(route('api.statistics.costs.edit', id))
        .then(({data}) => {
            state.value.item = data.result;
            state.value.modalAction = 'edit';
            state.value.item.index = i;
            modalFunction();
        })
        .catch((response) => console.log(response))
}

function onUpdate() {
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

function onCreate() {
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

function submitForm() {
    if (state.value.modalAction === 'edit') {
        onUpdate();
    } else if (state.value.modalAction === 'create') {
        onCreate();
    }
}

function create() {
    Object.assign(state.value.item, item);
    state.value.modalAction = 'create';
    modalFunction();
}
</script>
