<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import {computed, onMounted, reactive, ref} from "vue";
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';

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

const columns = reactive([
    {name: 'Місяць', code: 'month'},
    {name: 'Загальна виручка', code: 'total_revenues'},
    {name: 'Витрати', code: 'costs'},
    {name: 'Інвестиції', code: 'investments'},
    {name: 'Повернення інвестицій', code: 'returned_investments'},
    {name: 'Дивіденди', code: 'dividends'},
    {name: 'Ціна закупки', code: 'purchase_cost'},
    {name: 'Чистий прибуток', code: 'net_profit'},
    {name: 'Рентабельність', code: 'business_profitability'},
]);

const selectedColumns = ref(columns);

const expandedRows = ref([]);
const expandRowData = reactive({});

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


const onRowExpand = async (event) => {
    state.isLoading = true;
    const {data} = await axios.get(route('api.statistics.bank-card-movements.cost-and-profit', event.data.month))
    if (data.success) {
        expandRowData[event.data.id] = data.result
    }
    state.isLoading = false;
};

const isSelectedColumn = (val) => {
    return selectedColumns.value.some(item => item.code === val);
}

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


</script>

<template>
    <StatisticLayout>
        <template #header>
            P&L
        </template>

        <div class="grid grid-cols-1 gap-4">
            <DataTable
                resizableColumns
                columnResizeMode="expand"
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
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            >
                <template #header>
                    <MultiSelect v-model="selectedColumns"
                                 :options="columns"
                                 optionLabel="name"
                                 placeholder="Оберіть стовпці"
                                 class="w-full md:w-20rem"
                    />
                </template>

                <Column expander/>

                <Column v-if="isSelectedColumn('month')"
                        sortable
                        field="month"
                        header="Місяць"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.monthFormat(data.month) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('total_revenues')"
                        sortable
                        field="total_revenues"
                        header="Загальна виручка"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.total_revenues) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('costs')"
                        sortable
                        field="costs"
                        header="Витрати"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(-data.costs) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('investments')"
                        sortable
                        field="investments"
                        header="Інвестиції"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.investments) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('returned_investments')"
                        sortable
                        field="returned_investments"
                        header="Повернення інвестицій"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(-data.returned_investments) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('dividends')"
                        sortable
                        field="dividends"
                        header="Дивіденди"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(-data.dividends) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('purchase_cost')"
                        sortable
                        field="purchase_cost"
                        header="Ціна закупки"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.purchase_cost) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('net_profit')"
                        sortable
                        field="net_profit"
                        header="Чистий прибуток"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ $filters.formatMoney(data.net_profit) }}
                        </div>
                    </template>
                </Column>

                <Column v-if="isSelectedColumn('business_profitability')"
                        sortable
                        field="business_profitability"
                        header="Рентабельність"
                >
                    <template #body="{data}">
                        <div class="text-center whitespace-nowrap">
                            {{ data.business_profitability }} %
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
                                   class="p-datatable profit-and-loss-inner-table"
                        >
                            <Column header="Витрати">
                                <template #body="{data}">
                                    {{ data.key }}
                                </template>
                            </Column>

                            <Column>
                                <template #body="{data}">
                                    {{ $filters.formatMoney(-data.value) }}
                                </template>
                            </Column>
                        </DataTable>

                        <DataTable v-if="expandRowData[slotProps.data.id]"
                                   :value="expandRowData[slotProps.data.id].profits"
                                   class="p-datatable profit-and-loss-inner-table"
                        >
                            <Column header="Надходження">
                                <template #body="{data}">
                                    {{ data.key }}
                                </template>
                            </Column>

                            <Column>
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

.profit-and-loss-inner-table.p-datatable .p-column-header-content {
    justify-content: start;
}
</style>
