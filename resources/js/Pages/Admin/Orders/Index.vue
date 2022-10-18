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
            ></component>
        </div>
    </auth-layout>
</template>

<script setup>
import {computed, inject, onMounted, reactive, ref} from "vue";
import OrderModal from '@/Pages/Admin/Orders/Modal.vue';
import Table from '@/Pages/Admin/Orders/Table.vue';
import {Head} from '@inertiajs/inertia-vue3';

const state = ref({
    orders: [],
    currentPage: 1,
    isLoading: true,
    isActiveEditModal: false,
    sidebarActive: 'all',
    orderModal: {}
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
    sidebar.value.push({title: 'Всі замовлення',key:'all'});
    for (const [key, value] of Object.entries(props.statuses)) {
        sidebar.value.push({
            title: value,
            key: key,
        })
    }
});

const editModal = computed(() => state.value.isActiveEditModal ? OrderModal : null);

function submitItemForm(data) {
    if (can('edit-orders')) {
        axios.put(route('api.orders.update', state.value.orderModal.id), state.value.orderModal)
        axios.get(route('api.orders.edit', data.order_id))
            .then(({data}) => state.value.orderModal = data.result)
            .catch((errors) => console.log(errors))
    }
}

function sortByStatus(status) {
    params.value.status = status;
    state.value.sidebarActive = status;
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
        state.value.isLoading = true;
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
}

function onEdit(id, i) {
    axios.get(route('api.orders.edit', id))
        .then(({data}) => {
            state.value.orderModal.index = i;
            state.value.orderModal = data.result;
            editModalFunction();
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
