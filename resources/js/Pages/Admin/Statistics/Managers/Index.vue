<template>
    <StatisticLayout title="Статистика для менеджерів">
        <template #header>
            Статистика для менеджерів
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-managers')" class="grid grid-cols-1 gap-4">

            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
                <div class="block col-span-2 text-center">
                    <label-component value="&nbsp;"/>
                    <button-component type="button" @click="fetchClear">
                        Очистити
                    </button-component>
                </div>
                <div class="block col-span-4">
                    <label-component value="Фільтр по даті"/>
                    <DatepickerComponent v-model="params.date"/>
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

            <Table :data="state.data.result.data"/>

            <div class="text-center">
                <pagination :pagination="state.data.result"
                            :click-handler="fetch"
                            v-model="params.currentPage"
                />
            </div>
        </div>
    </StatisticLayout>
</template>

<script setup>
import {onMounted, inject, ref, computed} from "vue";
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'
import Table from '@/Pages/Admin/Statistics/Managers/Table.vue'
import {endOfMonth, startOfMonth} from 'date-fns';

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
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
    }
    if (managersArray.value) {
        data.managers = managersArray.value;
    }
    data.page = params.value.currentPage;
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
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());

    fetch();

    axios.get(route('api.users.list.managers'))
        .then(({data}) => managers.value = data.result)
        .catch((response) => console.log(response))
})

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
        .then(({data}) => {
            state.value.data = data;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}
</script>
