<template>
    <auth-layout title="Замовлення">
        <template #header>
            Замовлення
        </template>

        <loader-component v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-orders')">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="md:col-span-1">
                    <sidebar-component>
                        <sidebar-item v-if="sidebar.length"
                                      v-for="item in sidebar"
                                      @click="sortByStatus(item.key)"
                                      :active="state.sidebarActive === item.key"
                        >
                            {{ item.title }}
                        </sidebar-item>
                    </sidebar-component>
                </div>
                <div class="w-full md:col-span-4 grid gap-4 grid-cols-1">
                    <search-component @search="search"
                                      :clear="true"
                                      placeholder="Імʼя, прізвище, телефон, накладка, коментар..."
                    />
                    <Table :data="state.orders.data"
                           @onEdit="onEdit"
                           @onDestroy="destroy"
                           :statuses="statuses"
                           :canDestroy="can('destroy-orders')"
                    />
                    <div class="text-center">
                        <pagination :pagination="state.orders"
                                    :click-handler="paginate"
                                    v-model="state.currentPage"
                        />
                    </div>
                </div>
            </div>


            <component :is="editModal"
                       :order="state.orderModal"
                       :statuses="props.statuses"
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
    </auth-layout>
</template>

<script setup>
import {computed, inject, onMounted, ref} from "vue";
import ClientModal from '@/Pages/Admin/Clients/Modal.vue';
import OrderModal from '@/Pages/Admin/Orders/Modal.vue';
import Table from '@/Pages/Admin/Orders/Table.vue';

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
const props = defineProps(['statuses', 'payment_methods']);

const swal = inject('$swal')
const can = inject('$can');
const params = ref({
    status: null,
    currentPage: 1,
})

const getParams = computed(() => {
    const data = {};
    data.page = params.value.currentPage;
    if (params.value.status) {
        data.status = params.value.status;
    }
    return data;
})

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

function onEditClient() {
    axios.get(route('api.clients.edit', state.value.orderModal.client.id))
        .then(({data}) => {
            state.value.clientModal = data.result;
            modalClientFunction();
        })
        .catch((errors) => console.log(errors))

}

function modalClientFunction() {
    state.value.isActiveClientModal = !state.value.isActiveClientModal;
}

function onUpdateClient() {
    axios.put(route('api.clients.update', state.value.clientModal.id), state.value.clientModal)
        .then(() => {
            modalClientFunction();
            axios.put(route('api.orders.update', state.value.orderModal.id), state.value.orderModal)
            axios.get(route('api.orders.edit', state.value.orderModal.id))
                .then(({data}) => state.value.orderModal = data.result)
                .catch((errors) => console.log(errors))
            swal({
                title: 'Success!',
                icon: 'success'
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

function submitItemForm() {
    if (can('edit-orders')) {
        axios.put(route('api.orders.update', state.value.orderModal.id), state.value.orderModal)
        axios.get(route('api.orders.edit', state.value.orderModal.id))
            .then(({data}) => state.value.orderModal = data.result)
            .catch((errors) => console.log(errors))
    }
}

function sortByStatus(status) {
    state.value.sidebarActive = status;
    if (status === 'all') {
        params.value.status = null
    } else {
        params.value.status = status
    }
    fetch();
}

function paginate(page) {
    if (page) {
        params.value.currentPage = page;
    }
    fetch();
}

function search(query) {
    axios.get(route('api.orders.search', query))
        .then(({data}) => {
            state.value.sidebarActive = null;
            params.value.currentPage = 1;
            state.value.orders = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function fetch() {
    axios.get(route('api.orders.index', getParams.value))
        .then(({data}) => {
            state.value.orders = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function destroy(id) {
    if (can('destroy-orders')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.orders.destroy', id))
                    .then(() => {
                        state.value.isLoading = false;
                        fetch();
                        if (state.value.isActiveEditModal) {
                            editModalFunction();
                        }
                        swal({
                            title: 'Success!',
                            icon: 'success'
                        })
                    })
                    .catch(errors => {
                        console.log(errors);
                        swal({
                            title: 'Error!',
                            icon: 'error'
                        })
                    })
            }
        });
    }
}

function onEdit(id, i) {
    axios.get(route('api.orders.edit', id))
        .then(({data}) => {
            state.value.orderModal.index = i;
            state.value.orderModal = data.result;
            editModalFunction();
            state.value.isLoading = false;
        })
        .catch((errors) => console.log(errors))
}

function onUpdate() {
    if (can('edit-orders')) {
        axios.put(route('api.orders.update', state.value.orderModal.id), state.value.orderModal)
            .then(() => {
                editModalFunction();
                fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
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
}

function editModalFunction() {
    state.value.isActiveEditModal = !state.value.isActiveEditModal;
}
</script>
