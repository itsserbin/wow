<template>
    <form class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-4">
            <div class="block mb-5 md:mr-5">
                <label-component value="First name"/>
                <input-component v-model="order.first_name" type="text"/>
            </div>
            <div class="block mb-5 md:mr-5">
                <label-component value="Last name"/>
                <input-component v-model="order.last_name" type="text"/>
            </div>
            <div class="block mb-5 md:mr-5">
                <label-component value="Middle name"/>
                <input-component v-model="order.middle_name" type="text"/>
            </div>
            <div class="block mb-7">
                <label-component value="Phone"/>
                <input-component v-model="order.phone" type="text"/>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 mb-5">
            <div class="block mb-5 md:mr-5">
                <label-component value="Order status"/>
                <select-component v-model="order.status" :options="state.statuses"/>
            </div>
            <div class="block mb-5 md:mr-5">
                <label-component value="Manager"/>
                <select-component v-model="order.manager_id" :options="state.managers"/>
            </div>
            <div class="block mb-5 md:mr-5">
                <label-component value="Payment methods"/>
                <select-component v-model="order.payment_method" :options="state.paymentMethods"/>
            </div>
            <div class="block mb-5">
                <label-component value="Parcel reminder"/>
                <select-component v-model="order.parcel_reminder" :options="parcelReminderValues"/>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 mb-10">
            <div class="block md:mr-5">
                <div class="block mb-5">
                    <label-component value="City"/>
                    <input-component v-model="order.city" type="text"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Post office"/>
                    <input-component v-model="order.postal_office" type="text"/>
                </div>
                <div class="block">
                    <label-component value="Waybill"/>
                    <input-component v-model="order.waybill" type="text"/>
                </div>
            </div>
            <div class="block">
                <label-component value="Comment"/>
                <textarea-component rows="10"
                                    v-model="order.comment"/>
            </div>
        </div>

        <div class="mb-7">
            <div class="grid grid-cols-2">
                <div class="block mb-5 mr-5">
                    <label-component value="Sale of air"/>
                    <select-component v-model="order.sale_of_air" :options="parcelReminderValues"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Sum sale of air"/>
                    <input-component v-model="order.sale_of_air_sum" type="number" v-if="order.sale_of_air"/>
                    <input-component v-model="order.sale_of_air_sum" type="number" v-else disabled/>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="block mb-5 mr-5">
                    <label-component value="Prepayment"/>
                    <select-component v-model="order.prepayment" :options="parcelReminderValues"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Sum prepayment"/>
                    <input-component v-model="order.prepayment_sum" type="number" v-if="order.prepayment"/>
                    <input-component v-model="order.prepayment_sum" type="number" v-else disabled/>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="block mb-5 mr-5">
                    <label-component value="Discount"/>
                    <select-component v-model="order.discount" :options="parcelReminderValues"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Sum discount"/>
                    <input-component v-model="order.discount_sum" type="number" v-if="order.discount"/>
                    <input-component v-model="order.discount_sum" type="number" v-else disabled/>
                </div>
            </div>
        </div>

        <div class="block mb-5">
            <button-component type="button" @click="addProductToOrder">Add product</button-component>
            <component :is="itemsModal"
                       :item="state.item"
                       size="medium"
                       @closeModal="itemsModalFunction"
                       @submitItemForm="submitItemForm"
            ></component>
        </div>
        <div class="block mb-5" v-if="order.items.length">
            <table-component
                :isSlotMode="true"
                :rows="order.items"
                :headings="headingsItems"
            >
                <template #actions="{data}">
                    <div class="flex">
                        <a href="javascript:" class="md:mr-3" @click="editOrderItem(data.row.id,data.i)">
                            <Pencil/>
                        </a>
                        <a href="javascript:" @click="destroyOrderItem(data.row.id,data.i)">
                            <xcircle-component/>
                        </a>
                    </div>
                </template>
            </table-component>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 mt-5">
            <div class="flex justify-center">
                <p class="font-semibold text-l text-gray-900 dark:text-white">
                    Total count:&nbsp;
                </p>
                <p class="text-l  text-gray-900 dark:text-white">
                    {{ order.total_count }}
                </p>
            </div>
            <div class="flex justify-center">
                <p class="font-semibold text-l text-gray-900 dark:text-white">
                    Total price:&nbsp;
                </p>
                <p class="text-l  text-gray-900 dark:text-white">
                    {{ order.total_price }}
                </p>
            </div>
            <div class="flex justify-center">
                <p class="font-semibold text-l text-gray-900 dark:text-white">
                    Promo-code:&nbsp;
                </p>
                <p class="text-l  text-gray-900 dark:text-white">
                    {{ order.promo_code ? order.promo_code : 'None' }}
                </p>
            </div>
        </div>
    </form>
</template>

<script setup>
import {computed, onMounted, reactive, ref, inject} from "vue";
import ModalAddItemToOrder from '@/Pages/Admin/Orders/ItemsModal.vue'
import axios from "axios";
import Pencil from '@/Components/Icons/Pencil.vue';

const emits = defineEmits([
    'submitItemForm'
])

const swal = inject('$swal');

const props = defineProps(['order', 'statuses', 'paymentMethods'])

const state = ref({
    showItemsModal: false,
    itemsModalAction: '',
    item: {
        count: 1,
        size: '',
        color: '',
    },
    statuses: [],
    managers: [],
    paymentMethods: [],
})

onMounted(() => {
    getManagersList();

    for (const [key, value] of Object.entries(props.statuses)) {
        state.value.statuses.push({
            key: value,
            value: value,
        })
    }

    for (const [key, value] of Object.entries(props.paymentMethods)) {
        state.value.paymentMethods.push({
            key: value,
            value: value,
        })
    }
})

const itemsModal = computed(() => state.value.showItemsModal ? ModalAddItemToOrder : null);

const headingsItems = reactive([
    {
        label: 'Title',
        key: 'title'
    },
    {
        label: 'Count',
        key: 'count'
    },
    {
        label: 'Price',
        key: 'sale_price'
    },
    {
        label: 'Sum',
        key: 'total_price'
    },
    {
        label: 'Resale',
        key: 'resale'
    },
    {
        label: 'Discount',
        key: 'discount'
    },
    {
        label: 'Vendor code',
        key: 'vendor_code'
    },
    {
        label: '#',
        key: 'actions'
    },
])

const parcelReminderValues = reactive([
    {
        key: 0,
        value: 'No',
    },
    {
        key: 1,
        value: 'Yes',
    }
])

function submitItemForm() {
    if (state.value.itemsModalAction === 'create') {
        axios.post(route('api.order-items.add', props.order.id), state.value.item)
            .then(({data}) => {
                itemsModalFunction();
                emits('submitItemForm', data.result)
            })
            .catch((response) => console.log(response))
    } else if (state.value.itemsModalAction === 'edit') {
        axios.put(route('api.order-items.update', state.value.item.id), state.value.item)
            .then(({data}) => {
                itemsModalFunction();
                emits('submitItemForm', data.result)
            })
            .catch((response) => console.log(response))
    }

}

function addProductToOrder() {
    itemsModalFunction();
    state.value.itemsModalAction = 'create';
}

function itemsModalFunction() {
    state.value.showItemsModal = !state.value.showItemsModal;
}

function getManagersList() {
    axios.get(route('api.users.list.managers'))
        .then(({data}) => {
            if (data.result.length) {
                data.result.forEach((key, value) => {
                    state.value.managers.push({
                        key: key,
                        value: value
                    })
                })
            }
        })
        .catch((response) => console.log(response))
}

function destroyOrderItem(id, i) {
    swal({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(route('api.order-items.destroy', {
                item_id: id,
                order_id: props.order.id
            }))
                .then(() => {
                    props.order.items.splice(i, 1)
                    swal({
                        title: 'Success',
                        icon: 'success',
                    });
                })
                .catch((response) => {
                    console.log(response);
                    swal({
                        title: 'Error',
                        icon: 'error',
                    });
                });
        }
    });
}

function editOrderItem(id) {
    itemsModalFunction();
    state.value.itemsModalAction = 'edit';
    axios.get(route('api.order-items.edit', id))
        .then(({data}) => state.value.item = data.result)
        .catch((response) => console.log(response))
}
</script>
