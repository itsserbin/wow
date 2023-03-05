<template>
    <CrmLayout :title="$t('clients.page_title')">
        <template #header>{{ $t('clients.page_title') }}</template>


        <div v-if="can('show-clients')">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="md:col-span-1">
                    <Sidebar class="mb-5">
                        <SidebarItem v-if="sidebar.length"
                                     v-for="item in sidebar"
                                     @click="sortByStatus(item.key)"
                                     :active="state.sidebarActive === item.key"
                        >
                            {{ item.title }}
                        </SidebarItem>
                    </Sidebar>

                    <Sidebar v-if="can('export-orders')">
                        <SidebarItem v-if="exportSidebar.length"
                                     v-for="item in exportSidebar"
                                     @click="exportFunction(item.key)"
                        >
                            {{ item.title }}
                        </SidebarItem>
                    </Sidebar>
                </div>


                <div class="md:col-span-4">
                    <Loader v-if="state.isLoading"/>
                    <div v-if="!state.isLoading" class="w-full grid grid-cols-1 gap-4">
                        <DatepickerComponent v-model="params.date"
                                             @update:modelValue="sortByDate"
                        />
                        <Indicators :data="state.indicators"/>
                        <Search @search="search"
                                :clear="true"
                                :placeholder="$t('clients.search_placeholder')"
                        />
                        <Table :data="state.data.data"
                               @onEdit="onEdit"
                               @onDestroy="destroy"
                               @orderBy="orderBy"
                               :statuses="statuses"
                               :canDestroy="can('destroy-clients')"
                        />
                        <div class="text-center">
                            <Paginate :pagination="state.data"
                                      :click-handler="paginate"
                                      v-model="params.currentPage"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <component :is="editModal"
                       :item="state.modal"
                       :statuses="statuses"
                       :sub-statuses="subStatuses"
                       :order-statuses="orderStatuses"
                       size="extralarge"
                       @closeModal="editModalFunction"
                       @declineForm="destroy"
                       @submitForm="onUpdate"
                       :canDestroy="can('destroy-clients')"
            ></component>
        </div>
    </CrmLayout>
</template>

<script setup>
import Indicators from '@/Pages/Admin/Crm/Clients/Indicators.vue';
import Modal from '@/Pages/Admin/Crm/Clients/Modal.vue';
import Table from '@/Pages/Admin/Crm/Clients/Table.vue';
import CrmLayout from '@/Pages/Admin/Crm/CrmLayout.vue';
import Loader from '@/Components/Loader.vue';
import Sidebar from '@/Components/Sidebar/Sidebar.vue';
import SidebarItem from '@/Components/Sidebar/SidebarItem.vue';
import Search from '@/Components/Search.vue';
import Paginate from '@/Components/Paginate.vue';
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'

import {computed, inject, onMounted, ref} from "vue";
import ClientsRepository from "@/Repositories/ClientsRepository";
import {useI18n} from 'vue-i18n';

const props = defineProps(['statuses', 'subStatuses', 'orderStatuses']);

const {t} = useI18n();
const swal = inject('$swal')
const can = inject('$can');

const sidebar = ref([]);

const exportSidebar = [
    {
        title: t('clients.export'),
        key: 'export'
    }
];

const state = ref({
    data: [],
    indicators: {},
    isLoading: true,
    isActiveEditModal: false,
    sidebarActive: 'all',
    modal: {}
});

const params = ref({
    status: null,
    currentPage: 1,
    orderBy: {
        key: null,
        val: null
    },
    date: [],
})

const dateRange = computed(() => {
    if (params.value.date.length === 2) {
        return {
            date_start: params.value.date[0].toLocaleDateString(),
            date_end: params.value.date[1].toLocaleDateString()
        }
    }
});

const getParams = computed(() => {
    const {currentPage, status = null, orderBy = null} = params.value;
    return {page: currentPage, status, orderBy, ...dateRange.value};
});

const orderBy = (key, val) => {
    params.value.orderBy = {
        key: key,
        val: val
    }
    params.value.currentPage = 1;
    fetch();
}

onMounted(() => {
    fetch();

    sidebar.value.push({title: t('clients.all_clients'), key: 'all'});
    for (const [key, value] of Object.entries(props.statuses)) {
        sidebar.value.push({
            title: value,
            key: key,
        })
    }

    if (route().params.id) {
        state.value.isLoading = true;
        onEdit(route().params.id);
    }
});

const editModal = computed(() => state.value.isActiveEditModal ? Modal : null);

const exportFunction = (key) => {
    if (key === 'export') {
        window.location.href = route('admin.crm.clients.export');
    }
}

const search = async (query) => {
    state.value.isLoading = true;
    const data = await ClientsRepository.search(query);
    if (data.success) {
        state.value.sidebarActive = null;
        params.value.currentPage = 1;
        state.value.data = data.result;
        state.value.isLoading = false;
    }
    state.value.isLoading = false;
}

const sortByStatus = (status) => {
    state.value.sidebarActive = status;
    params.value.status = status === 'all' ? null : status;
    params.value.date = [];
    params.value.currentPage = 1;
    fetch();
}

const sortByDate = async () => {
    params.value.currentPage = 1;
    await fetch();
}

const paginate = async (page) => {
    if (page) {
        params.value.currentPage = page;
    }
    await fetch();
}

const fetch = async () => {
    state.value.isLoading = true;
    const data = await ClientsRepository.fetch(getParams.value);
    if (data.success) {
        state.value.indicators = data.indicators;
        state.value.data = data.result;
        state.value.isLoading = false;
    }
}

const destroy = async (id) => {
    if (can('destroy-clients')) {
        const result = await swal({
            title: t('swal.sure'),
            icon: 'warning',
            showCancelButton: true,
        })

        if (result.isConfirmed) {
            const {success} = await ClientsRepository.destroy(id);
            if (success) {
                state.value.isLoading = false;
                await fetch();
                if (state.value.isActiveEditModal) {
                    editModalFunction();
                }
                swal({
                    title: t('swal.destroyed'),
                    icon: 'success'
                })
            }
        }
    }
}

const onEdit = async (id, i) => {
    state.value.isLoading = true;
    const data = await ClientsRepository.edit(id);
    if (data.success) {
        state.value.modal.index = i;
        state.value.modal = data.result;
        editModalFunction();
        state.value.isLoading = false;
    }
}

const onUpdate = async () => {
    const data = await ClientsRepository.update(state.value.modal);

    if (data.success) {
        editModalFunction();
        await fetch();
        swal({
            title: t('swal.updated'),
            icon: 'success'
        })
    }
}

const editModalFunction = () => {
    state.value.isActiveEditModal = !state.value.isActiveEditModal;
}
</script>
