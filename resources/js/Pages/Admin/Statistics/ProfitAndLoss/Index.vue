<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {computed, onMounted, reactive, ref} from "vue";

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
    await axios.get(route('api.statistics.profit-and-loss', getParams.value))
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
            P&L
        </template>

        <div class="grid grid-cols-1 gap-4">
            <DataTable
                v-model:expandedRows="expandedRows"
                @rowExpand="onRowExpand"
                selectionMode="single"
                ref="dt"
                dataKey="month"
                :loading="state.isLoading"
                :value="state.data.data"
                class="p-datatable profit-and-loss-table"
                lazy
                paginator
                :rows="state.data.per_page"
                :totalRecords="state.data.total"
                @page="onPage($event)"
                @sort="onSort($event)"
                :rowsPerPageOptions="[15, 50, 100, 500]"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
                currentPageReportTemplate="Показано з {first} по {last} із {totalRecords} записів"
            >
                <Column expander/>

                <Column sortable field="month" header="Місяць">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ $filters.dateFormat(data.month) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="total_revenues" header="Загальна виручка">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ $filters.formatMoney(data.total_revenues) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="costs" header="Витрати">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ $filters.formatMoney(data.costs) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="purchase_cost" header="Ціна закупки">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ $filters.formatMoney(data.purchase_cost) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="net_profit" header="Чистий прибуток">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ $filters.formatMoney(data.net_profit) }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="business_profitability" header="Рентабельність бізнесу">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ data.business_profitability }} %
                        </div>
                    </template>
                </Column>

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
.profit-and-loss-table.p-datatable .p-column-header-content {
    justify-content: center;
}
</style>
