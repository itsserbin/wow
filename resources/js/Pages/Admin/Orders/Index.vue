<template>
    <auth-layout title="Замовлення">
        <template #header>
            Замовлення
        </template>

        <loader-component v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-orders')">
            <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.orders.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:created_at="{data}">
                    {{ $filters.dateFormat(data.row.created_at) }}
                </template>
                <template v-slot:updated_at="{data}">
                    {{ $filters.dateFormat(data.row.updated_at) }}
                </template>
                <template v-slot:actions="{data}">
                    <a href="javascript:" @click="destroy(data.row.id)">
                        <xcircle-component/>
                    </a>
                </template>
            </table-component>
            <paginate  :pagination="state.orders"
                       :click-handler="fetch"
                       v-model="state.currentPage"
            />
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
import {Head} from '@inertiajs/inertia-vue3';
import axios from "axios";

const state = ref({
    orders: [],
    currentPage: 1,
    isLoading: true,
    isActiveEditModal: false,
    orderModal: {}
});

const props = defineProps(['statuses', 'payment_methods']);

const swal = inject('$swal')
const can = inject('$can');

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Статус',
        key: 'status'
    },
    {
        label: 'Імʼя',
        key: 'first_name'
    },
    {
        label: 'Телефон',
        key: 'phone'
    },
    {
        label: 'Накладка',
        key: 'waybill'
    },
    {
        label: 'Товарів',
        key: 'total_count'
    },
    {
        label: 'Сума',
        key: 'total_price'
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

onMounted(() => fetch());

function editModalItems(data) {
    let items = [];
    data.forEach((item) => {
        items.push({
            id: item.id,
            title: item.product.title,
            count: item.count,
            sale_price: item.sale_price,
            total_price: item.total_price,
            resale: item.resale ? 'Yes' : 'No',
            discount: item.discount,
            vendor_code: item.vendor_code,
            actions: '',
        })
    })
    return items;
}

const editModal = computed(() => state.value.isActiveEditModal ? OrderModal : null);

function submitItemForm(data) {
    if (can('edit-orders')) {
        axios.put(route('api.orders.update', state.value.orderModal.id), state.value.orderModal)
        axios.get(route('api.orders.edit', data.order_id))
            .then(({data}) => {
                state.value.orderModal = data.result;
                state.value.orderModal.items = editModalItems(data.result.items);
            })
            .catch((errors) => console.log(errors))
    }
}

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.orders.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.orders, response.data.result);
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
    if (can('edit-orders')) {
        axios.get(route('api.orders.edit', id))
            .then(({data}) => {
                state.value.orderModal.index = i;
                state.value.orderModal = data.result;
                state.value.orderModal.items = editModalItems(data.result.items);
                editModalFunction();
            })
            .catch((errors) => console.log(errors))
    }
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
