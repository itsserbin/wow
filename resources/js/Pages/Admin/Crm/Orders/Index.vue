<template>
    <CrmLayout title="Замовлення">
        <template #header>
            Замовлення
        </template>

        <Loader v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-orders')">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="md:col-span-1 gap-4">
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
                <div class="w-full md:col-span-4 grid gap-4 grid-cols-1">
                    <Search @search="search"
                            :clear="true"
                            placeholder="Імʼя, прізвище, телефон, накладка, коментар..."
                    />
                    <Table v-if="state.orders"
                           :data="state.orders.data"
                           @onEdit="onEdit"
                           @onDestroy="destroy"
                           @orderBy="orderBy"
                           :statuses="statuses"
                           :canDestroy="can('destroy-orders')"
                    />
                    <div class="text-center">
                        <Paginate v-if="state.orders"
                                  :pagination="state.orders"
                                  :click-handler="paginate"
                                  v-model="state.currentPage"
                        />
                    </div>
                </div>
            </div>


            <component :is="editModal"
                       :order="state.orderModal"
                       :statuses="props.statuses"
                       :invoiceStatuses="props.invoiceStatuses"
                       :paymentMethods="props.payment_methods"
                       size="extralarge"
                       @closeModal="editModalFunction"
                       @declineForm="destroy"
                       @submitForm="onUpdate"
                       @submitItemForm="submitItemForm"
                       :canDestroy="can('destroy-orders')"
                       @onEditClient="onEditClient"
            ></component>

            <component :is="clientModal"
                       :item="state.clientModal"
                       :statuses="state.clientsStatuses"
                       :sub-statuses="state.clientsSubStatuses"
                       size="extralarge"
                       @closeModal="modalClientFunction"
                       @submitForm="onUpdateClient"
            ></component>
        </div>
    </CrmLayout>
</template>

<script setup>
import {computed, inject, onMounted, ref} from "vue";
import Paginate from '@/Components/Paginate.vue';
import Search from '@/Components/Search.vue';
import Loader from '@/Components/Loader.vue';
import Sidebar from '@/Components/Sidebar/Sidebar.vue';
import SidebarItem from '@/Components/Sidebar/SidebarItem.vue';
import ClientModal from '@/Pages/Admin/Crm/Clients/Modal.vue';
import OrderModal from '@/Pages/Admin/Crm/Orders/Modal.vue';
import Table from '@/Pages/Admin/Crm/Orders/Table.vue';
import CrmLayout from '@/Pages/Admin/Crm/CrmLayout.vue';
import {OrdersRepository} from '@/Repositories/OrdersRepository.js';
import {ClientsRepository} from '@/Repositories/ClientsRepository.js';
import _ from 'lodash';

const state = ref({
    orders: [],
    currentPage: 1,
    isLoading: true,
    isActiveEditModal: false,
    isActiveClientModal: false,
    sidebarActive: 'all',
    orderModal: {},
    clientModal: {},
    clientsStatuses: null,
    clientsSubStatuses: null,
});

const sidebar = ref([]);
const exportSidebar = [
    {
        title: 'Експортувати',
        key: 'export'
    }
];
const props = defineProps(['statuses', 'payment_methods', 'invoiceStatuses']);

const swal = inject('$swal')
const can = inject('$can');

const params = ref({
    status: null,
    currentPage: 1,
    orderBy: {
        key: null,
        val: null
    }
})

const getParams = computed(() => {
    const {currentPage, status = null, orderBy = null} = params.value;
    return {page: currentPage, status, orderBy};
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
    sidebar.value.push({title: 'Всі замовлення', key: 'all'});
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

    axios.get(route('api.clients.statuses'))
        .then(({data}) => {
            state.value.clientsStatuses = data.statuses;
            state.value.clientsSubStatuses = data.subStatuses;
        });
});

const editModal = computed(() => state.value.isActiveEditModal ? OrderModal : null);
const clientModal = computed(() => state.value.isActiveClientModal ? ClientModal : null);

const fetch = async () => {
    try {
        const data = await OrdersRepository().fetch(getParams.value);
        if (data.success) {
            state.value.orders = data.result;
        }
        state.value.isLoading = false;
    } catch (e) {
        console.error(e);
        state.value.isLoading = false;
    }
}

const onEditClient = async () => {
    const data = await ClientsRepository().edit(state.value.orderModal.client.id);
    if (data.success) {
        state.value.clientModal = data.result;
        modalClientFunction();
    }
}

const exportFunction = (key) => {
    if (key === 'export') {
        window.location.href = route('admin.crm.orders.export');
    }
}

const modalClientFunction = () => {
    state.value.isActiveClientModal = !state.value.isActiveClientModal;
}

const onUpdateClient = () => {
    axios.put(route('api.clients.update', state.value.clientModal.id), state.value.clientModal)
        .then(() => {
            modalClientFunction();
            axios.put(route('api.orders.update', state.value.orderModal.id), state.value.orderModal)
                .then(() => {
                    axios.get(route('api.orders.edit', state.value.orderModal.id))
                        .then(({data}) => {
                            state.value.orderModal = data.result;
                            swal({
                                title: 'Success!',
                                icon: 'success'
                            })
                        })
                        .catch((errors) => console.log(errors))
                })
        })
        .catch((errors) => {
            console.log(errors);
            swal({
                title: 'Error!',
                icon: 'error'
            })
        })
}

const submitItemForm = async () => {
    try {
        const {success} = await OrdersRepository().update(state.value.orderModal.id, state.value.orderModal)
        if (success) {
            const {result} = await OrdersRepository().edit(state.value.orderModal.id);
            state.value.orderModal = result
        }
    } catch (errors) {
        console.error(errors);
        swal({
            title: 'Error!',
            icon: 'error',
            text: errors.response.data.message || 'An error occurred, please try again later'
        });
    }
}


const sortByStatus = _.debounce((status) => {
    if (state.value.sidebarActive !== status) {
        params.value.orderBy = {
            key: null,
            val: null
        }
        state.value.sidebarActive = status;
        params.value.status = status === 'all' ? null : status;
        fetch();
    }
}, 250);

const paginate = (page) => {
    params.value.currentPage = page ? page : params.value.currentPage;
    fetch();
}

const search = async (query) => {
    try {
        const {result, success} = await OrdersRepository().search(query);
        if (success) {
            state.value.sidebarActive = null;
            params.value.currentPage = 1;
            state.value.orders = result;
            state.value.isLoading = false;
        }
    } catch (errors) {
        console.error(errors);
        swal({
            title: 'Error!',
            icon: 'error',
            text: errors.response.data.message || 'An error occurred, please try again later'
        });
    }
}

const destroy = async (id) => {
    try {
        if (can('destroy-orders')) {
            const confirm = await swal({
                title: 'Видалити?',
                icon: 'warning',
                showCancelButton: true,
            });
            if (confirm.isConfirmed) {
                await OrdersRepository().destroy(id);
                state.value.isLoading = false;
                await fetch();
                if (state.value.isActiveEditModal) {
                    editModalFunction();
                }
                swal({
                    title: 'Success!',
                    icon: 'success'
                });
            }
        }
    } catch (errors) {
        console.error(errors);
        swal({
            title: 'Error!',
            icon: 'error',
            text: errors.response.data.message || 'An error occurred, please try again later'
        });
    }
}

const onEdit = async (id, i) => {
    try {
        const {result, success} = await OrdersRepository().edit(id);
        if (success) {
            state.value.orderModal.index = i;
            state.value.orderModal = result;
            editModalFunction();
            state.value.isLoading = false;
        }
    } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
            title: 'Error!',
            icon: 'error',
            text: error.response.data.message || 'An error occurred, please try again later'
        });
    }
}

const onUpdate = async () => {
    try {
        if (can('edit-orders')) {
            const {success} = await OrdersRepository().update(state.value.orderModal.id, state.value.orderModal);
            if (success) {
                editModalFunction();
                await fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            }
        }
    } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
            title: 'Error!',
            icon: 'error',
            text: error.response.data.message || 'An error occurred, please try again later'
        });
    }
}

const editModalFunction = () => {
    state.value.isActiveEditModal = !state.value.isActiveEditModal;
}
</script>
