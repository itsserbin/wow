<template>
    <form class="grid gap-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="block">
                <label-component value="Імʼя"/>
                <input-component v-model="order.client.name" type="text" disabled/>
            </div>
            <div class="block">
                <label-component value="Прізвище"/>
                <input-component v-model="order.client.last_name" type="text" disabled/>
            </div>
            <div class="block">
                <label-component value="По-батькові"/>
                <input-component v-model="order.client.middle_name" type="text" disabled/>
            </div>
            <div class="block">
                <label-component value="&nbsp;"/>
                <button-component class="w-full">
                    Картка клієнта
                </button-component>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <label-component value="Статус клієнта"/>
                <input-component v-model="order.client.status" type="text" disabled/>
            </div>
            <div class="block">
                <label-component value="Телефон"/>
                <input-component v-model="order.client.phone" type="text" disabled/>
            </div>
        </div>
        <hr>
        <div class="grid grid-cols-1 md:grid-cols-4 mb-5">
            <div class="block mb-5 md:mr-5">
                <label-component value="Статус замовлення"/>
                <select-component v-model="order.status" :options="state.statuses"/>
            </div>
            <div class="block mb-5 md:mr-5">
                <label-component value="Менеджер"/>
                <select-component v-model="order.manager_id" :options="state.managers"/>
            </div>
            <div class="block mb-5 md:mr-5">
                <label-component value="Спосіб оплати"/>
                <select-component v-model="order.payment_method" :options="state.paymentMethods"/>
            </div>
            <div class="block mb-5">
                <label-component value="Нагадування про посилку"/>
                <select-component v-model="order.parcel_reminder" :options="parcelReminderValues"/>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 mb-10">
            <div class="block md:mr-5">
                <div class="block mb-5">
                    <label-component value="Місто"/>
                    <input-component v-model="order.city" type="text"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Почтове відділення"/>
                    <input-component v-model="order.postal_office" type="text"/>
                </div>
                <div class="block">
                    <label-component value="Номер накладної"/>
                    <input-component v-model="order.waybill" type="text"/>
                    <div v-if="!order.sms_waybill_status && order.waybill">
                        <a
                            href="javascript:"
                            @click.prevent="sendWaybill(order.client.phone,order.waybill)"
                        >Отправить ТТН клиенту</a>
                    </div>
                    <div v-if="order.sms_waybill_status">
                        ТТН отправлена (<a href="javascript:"
                                           @click.prevent="sendWaybill(order.client.phone,order.waybill)"
                    >Отправить повторно</a>)
                    </div>
                </div>
            </div>
            <div class="block">
                <label-component value="Коментар"/>
                <textarea-component rows="10"
                                    v-model="order.comment"/>
            </div>
        </div>

        <div class="mb-7">
            <div class="grid grid-cols-2">
                <div class="block mb-5 mr-5">
                    <label-component value="Дод.продаж повітря"/>
                    <select-component v-model="order.sale_of_air" :options="parcelReminderValues"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Сума доп.продажу повітря (грн.)"/>
                    <input-component v-model="order.sale_of_air_price" type="number" v-if="order.sale_of_air"/>
                    <input-component v-model="order.sale_of_air_price" type="number" v-else disabled/>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="block mb-5 mr-5">
                    <label-component value="Передоплата"/>
                    <select-component v-model="order.prepayment" :options="parcelReminderValues"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Сума передоплати (грн.)"/>
                    <input-component v-model="order.prepayment_sum" type="number" v-if="order.prepayment"/>
                    <input-component v-model="order.prepayment_sum" type="number" v-else disabled/>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="block mb-5 mr-5">
                    <label-component value="Знижка"/>
                    <select-component v-model="order.discount" :options="parcelReminderValues"/>
                </div>
                <div class="block mb-5">
                    <label-component value="Сума знижки (грн.)"/>
                    <input-component v-model="order.discount_sum" type="number" v-if="order.discount"/>
                    <input-component v-model="order.discount_sum" type="number" v-else disabled/>
                </div>
            </div>
        </div>

        <div class="block mb-5">
            <button-component type="button" @click="addProductToOrder">Додати товар</button-component>
            <component :is="itemsModal"
                       :item="state.item"
                       size="medium"
                       @closeModal="itemsModalFunction"
                       @submitItemForm="submitItemForm"
            ></component>
        </div>

        <ItemsTable :data="order.items"
                    @editOrderItem="editOrderItem"
                    @destroyOrderItem="destroyOrderItem"
        />

        <div class="grid grid-cols-1 md:grid-cols-3 mt-5">
            <div class="flex justify-center">
                <p class="font-semibold text-l text-gray-900 dark:text-white">
                    Кількість товарів:&nbsp;
                </p>
                <p class="text-l  text-gray-900 dark:text-white">
                    {{ order.total_count }}
                </p>
            </div>
            <div class="flex justify-center">
                <p class="font-semibold text-l text-gray-900 dark:text-white">
                    Загальна ціна:&nbsp;
                </p>
                <p class="text-l  text-gray-900 dark:text-white">
                    {{ $filters.formatMoney(order.total_price) }}
                </p>
            </div>
            <div class="flex justify-center">
                <p class="font-semibold text-l text-gray-900 dark:text-white">
                    Промо-код:&nbsp;
                </p>
                <p class="text-l  text-gray-900 dark:text-white">
                    {{ order.promo_code ? order.promo_code : 'Відсутній' }}
                </p>
            </div>
        </div>
    </form>
</template>

<script setup>
import {computed, onMounted, reactive, ref, inject} from "vue";
import ModalAddItemToOrder from '@/Pages/Admin/Orders/ItemsModal.vue'
import ItemsTable from '@/Pages/Admin/Orders/ItemsTable.vue'

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
        product_id: null
    },
    statuses: [],
    managers: [],
    paymentMethods: [],
})

onMounted(() => {
    getManagersList();

    for (const [key, value] of Object.entries(props.statuses)) {
        state.value.statuses.push({
            key: key,
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

const parcelReminderValues = reactive([
    {
        key: 0,
        value: 'Ні',
    },
    {
        key: 1,
        value: 'Так',
    }
])

function sendWaybill() {
    console.log(props.order.client.phone);
    if (props.order.waybill) {
        axios.post(route('notify.waybill'), {
            phone: props.order.client.phone,
            waybill: props.order.waybill,
            order_id: props.order.id
        })
            .then(({data}) => {
                if (data.success === true) {
                    swal({
                        'icon': 'success',
                        'title': 'Номер накладной успешно отправлен клиенту',
                        'text': data.info,
                    })
                } else {
                    swal({
                        'icon': 'error',
                        'title': 'Ошибка',
                        'text': data.info,
                    })
                }
                axios.put(route('api.orders.update', props.order.id), props.order)
            })
            .catch((response) => {
                swal({
                    'icon': 'error',
                    'title': 'Ошибка',
                    'text': 'Обратитесь к администратору',
                })
                console.log(response)
            });
    }
}

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
                data.result.forEach((item) => {
                    state.value.managers.push({
                        key: item.id,
                        value: item.name
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
