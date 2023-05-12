<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {computed, onMounted, reactive, ref} from "vue";
import Button from 'primevue/button';

const state = reactive({
    data: [],
    isLoading: true,
});

const lazyParams = ref({
    date: null,
    page: 0,
    first: 0,
    rows: 15,
    sortField: null,
    sortOrder: null,
});

const getParams = computed(() => {
    let sort = {};

    if (lazyParams.value.sortField) {
        sort.sort = lazyParams.value.sortField;

        if (lazyParams.value.sortOrder === 1) {
            sort.param = 'asc';
        } else if (lazyParams.value.sortOrder === -1) {
            sort.param = 'desc';
        }
    }

    return {
        perPage: lazyParams.value.rows || 15,
        sort: sort.sort && sort.param ? sort.sort : null,
        param: sort.sort && sort.param ? sort.param : null,
        page: (lazyParams.value.page || 0) + 1,
    };
});

onMounted(async () => {
    await fetch();
})

const fetch = async () => {
    state.isLoading = true;
    await axios.get(route('api.statistics.cash-flow', getParams.value))
        .then(({data}) => state.data = data.result)
        .catch((errors) => console.log(errors));
    state.isLoading = false;
}


const onPage = async (e) => {
    lazyParams.value = e;
    await fetch();
}

const onSort = async (e) => {
    lazyParams.value = e;
    await fetch();
}
//
// const onSelectDate = async (val) => {
//     params.date = {
//         startDate: val.startDate,
//         endDate: val.endDate,
//     }
//     params.page = 1;
//     await fetch();
// }
//
// const getAllData = async () => {
//     params.date = {
//         startDate: null,
//         endDate: null,
//     }
//     params.page = 1;
//     await fetch();
// }

const expandedRows = ref([]);
const expandRowData = reactive({});

const onRowExpand = async (event) => {
    state.isLoading = true;
    await axios.get(route('api.statistics.bank-card-movements.cost-and-profit', event.data.month))
        .then(({data}) => {
            expandRowData[event.data.id] = data.result;
            state.isLoading = false;
        });
};
</script>

<template>
    <StatisticLayout>
        <template #header>
            CashFlow
        </template>

        <div class="grid grid-cols-1 gap-4">
            <!--            <Chart :data="state.data"/>-->
            <!--            <Table :data="state.data.data"/>-->

            <DataTable
                v-model:expandedRows="expandedRows"
                @rowExpand="onRowExpand"
                selectionMode="single"
                ref="dt"
                dataKey="month"
                :loading="state.isLoading"
                :value="state.data.data"
                class="p-datatable cash-flow-table"
                lazy
                paginator
                :rows="state.data.per_page"
                :totalRecords="state.data.total"
                @page="onPage($event)"
                @sort="onSort($event)"
                :rowsPerPageOptions="[15, 50, 100, 500]"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            >
                <Column expander/>

                <Column sortable field="month" header="Місяць">
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.dateFormat(data.month) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="start_month_balance" header="Залишок на початок місяця">
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.start_month_balance) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="approved_income" header="Надходження">
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.approved_income) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="approved_consumption" header="Списання">
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.approved_consumption) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="end_month_balance" header="Залишок на кінець місяця">
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.end_month_balance) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="difference" header="Чистий грошовий потік">
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.difference) }}
                        </div>
                    </template>
                </Column>

                <template #footer>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center">
                            Показано з {{ state.data.from }} по {{ state.data.to }} із {{ state.data.total }} записів
                        </div>
                        <div class="flex justify-end">
                            <Button icon="pi pi-file-export"
                                    iconPos="right"
                                    type="button"
                                    label="Експортувати"
                                    @click=""
                            />
                        </div>
                    </div>
                </template>

                <template #expansion="slotProps">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DataTable v-if="expandRowData[slotProps.data.id]"
                                   :value="expandRowData[slotProps.data.id].costs"
                                   class="p-datatable cash-flow-profits-table"
                        >
                            <template #header>
                                Витрати
                            </template>
                            <Column field="" header="Назва">
                                <template #body="{data}">
                                    {{ data.key }}
                                </template>
                            </Column>

                            <Column field="" header="Сума">
                                <template #body="{data}">
                                    {{ $filters.formatMoney(data.value) }}
                                </template>
                            </Column>
                        </DataTable>

                        <DataTable v-if="expandRowData[slotProps.data.id]"
                                   :value="expandRowData[slotProps.data.id].profits"
                                   class="p-datatable cash-flow-profits-table"
                        >
                            <template #header>
                                Надходження
                            </template>
                            <Column field="" header="Назва">
                                <template #body="{data}">
                                    {{ data.key }}
                                </template>
                            </Column>

                            <Column field="" header="Сума">
                                <template #body="{data}">
                                    {{ $filters.formatMoney(data.value) }}
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </template>
            </DataTable>
        </div>
    </StatisticLayout>
</template>

<style>
.cash-flow-table.p-datatable .p-column-header-content {
    justify-content: center;
}

.cash-flow-profits-table.p-datatable .p-column-header-content {
    justify-content: start;
}
</style>
