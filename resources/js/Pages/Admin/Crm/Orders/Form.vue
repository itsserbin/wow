<template>
    <form class="grid gap-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="block">
                <Label :value="$t('clients.status')"/>
                <Input :value="clientStatuses[order.client.status]" type="text" disabled/>
            </div>
            <div class="block">
                <Label :value="$t('clients.full_name')"/>
                <Input :value="fullName"
                       type="text"
                       disabled
                />
            </div>
            <div class="block">
                <Label :value="$t('clients.phone')"/>
                <div class="flex items-center gap-x-2">
                    <a :href="'tel:+' + order.client.phone" class="border-lg rounded-lg border p-3">
                        <Telephone/>
                    </a>
                    <Input v-model="order.client.phone"
                           type="text"
                           disabled
                    />
                    <a :href="'javascript:'" @click="copyPhone" class="border-lg rounded-lg border p-3">
                        <Copy/>
                    </a>
                </div>

            </div>
            <div class="block">
                <Label value="&nbsp;"/>
                <Button class="w-full" type="button" @click="$emit('onEditClient')">
                    {{ $t('orders.client_card') }}
                </Button>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">


        </div>
        <ClientOrders v-if="order.client.orders.length > 1"
                      :data="order.client.orders"
                      :statuses="statuses"
        />
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="block">
                <Label :value="$t('orders.status')"/>
                <Select v-model="order.status" :options="state.statuses"/>
            </div>
            <div class="block">
                <Label :value="$t('orders.manager_id')"/>
                <Select v-model="order.manager_id" :options="state.managers"/>
            </div>
            <div class="block">
                <Label :value="$t('orders.payment_method')"/>
                <Select v-model="order.payment_method" :options="state.paymentMethods"/>
            </div>
            <div class="block">
                <Label :value="$t('orders.parcel_reminder')"/>
                <div class="block">
                    <div class="flex gap-x-2 items-center w-full">
                        <Checkbox v-model="order.parcel_reminder"/>
                        <Label :value="order.parcel_reminder ? 'Так' : 'Ні'"/>
                    </div>
                </div>
            </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="grid grid-cols-1 gap-4">
                <div class="block">
                    <Label :value="$t('orders.city')"/>
                    <Input v-model="order.city"
                           type="text"
                           :placeholder="$t('orders.enter_city')"
                    />
                </div>
                <div class="block">
                    <Label :value="$t('orders.postal_office')"/>
                    <Input v-model="order.postal_office"
                           type="text"
                           :placeholder="$t('orders.enter_postal_office')"
                    />
                </div>
                <div class="block">
                    <Label :value="$t('orders.waybill')"/>
                    <Input v-model="order.waybill"
                           type="text"
                           :placeholder="$t('orders.enter_waybill')"
                    />
                    <div v-if="!order.sms_waybill_status && order.waybill">
                        <a
                            href="javascript:"
                            @click.prevent="sendWaybill(order.client.phone,order.waybill)"
                        >{{ $t('orders.send_waybill_for_client') }}</a>
                    </div>
                    <div v-if="order.sms_waybill_status">
                        {{ $t('orders.waybill_sent') }}
                        (<a href="javascript:"
                            @click.prevent="sendWaybill(order.client.phone,order.waybill)"
                    >{{ $t('orders.waybill_resent') }}</a>)
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-x-2" v-if="order.status === 'return'">
                    <div class="flex gap-x-2">
                        <Checkbox v-model="order.refund_other_waybill" @change="test"/>
                        <Label :value="$t('orders.refund_other_waybill')"/>
                    </div>
                    <Input v-if="order.refund_other_waybill"
                           v-model="order.other_waybill"
                           type="text"
                           :placeholder="$t('orders.enter_refund_other_waybill')"
                    />
                </div>
            </div>
            <div class="block">
                <Label :value="$t('orders.comment')"/>
                <Textarea rows="12"
                          v-model="order.comment"
                          :placeholder="$t('orders.enter_comment')"
                />
            </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500">
        <div class="grid grid-cols-1 gap-y-4">
            <div class="block">
                <Label :value="$t('orders.sale_of_air')"/>
                <Input v-model="order.sale_of_air_price"
                       type="number"
                       :placeholder="$t('orders.enter_sale_of_air_price')"
                />
            </div>

            <div class="block">
                <Label :value="$t('orders.discount')"/>
                <Input v-model="order.discount_sum"
                       type="number"
                       :placeholder="$t('orders.enter_discount_sum')"
                />
            </div>

            <div class="block">
                <Label value="Загальна сума передоплати (грн.)"/>
                <Input v-model="order.prepayment_sum" type="number" disabled/>
            </div>
        </div>

        <div class="block mb-5">
            <Button type="button" @click="addProductToOrder">Додати товар</Button>
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

        <div class="grid grid-cols-2 md:grid-cols-4 mt-5">
            <Card title="Кількість товарів"
                  :description="order.total_count"
                  class="text-center"
            />

            <Card title="Загальна ціна"
                  :description="$filters.formatMoney(order.total_price)"
                  class="text-center"
            />

            <Card title="Ціна на посилку"
                  :description="$filters.formatMoney(priceForWaybill)"
                  class="text-center"
            />

            <Card title="Промо-код"
                  :description="order.promo_code ? order.promo_code : 'Відсутній'"
                  class="text-center"
            />
        </div>

        <div class="block" v-if="can('show-invoices')">
            <Button type="button"
                    @click="addInvoice"
                    class="my-4"
                    v-if="can('create-invoices')"
            >
                Додати рахунок
            </Button>
            <InvoicesTable :data="order.invoices"
                           :statuses="invoiceStatuses"
                           :can-destroy="can('destroy-invoices')"
                           @onDestroy="onDestroyInvoice"
                           v-if="order.invoices.length"
                           @onSendInvoiceSms="onSendInvoiceSms"
            />
            <component :is="invoiceModal"
                       :item="state.invoiceItem"
                       @closeModal="invoiceModalFunction"
                       @submitForm="onAddInvoice"
                       @declineForm="invoiceModalFunction"
            />
        </div>
    </form>
</template>

<script setup>
import {computed, onMounted, reactive, ref, inject} from "vue";
import {useI18n} from 'vue-i18n';

import Telephone from '@/Components/Icons/Telephone.vue'
import Copy from '@/Components/Icons/Copy.vue'
import Card from '@/Components/Card.vue'
import Select from '@/Components/Form/Select.vue'
import Label from '@/Components/Form/Label.vue'
import Checkbox from '@/Components/Form/Checkbox.vue'
import Textarea from '@/Components/Form/Textarea.vue'
import Input from '@/Components/Form/Input.vue'
import Button from '@/Components/Button.vue'
import ModalAddItemToOrder from '@/Pages/Admin/Crm/Orders/Items/Modal.vue'
import ItemsTable from '@/Pages/Admin/Crm/Orders/Items/Table.vue'
import ClientOrders from '@/Pages/Admin/Crm/Orders/ClientOrders.vue'
import InvoicesTable from '@/Pages/Admin/Crm/Invoices/Table.vue';
import InvoiceModal from '@/Pages/Admin/Crm/Invoices/Modal.vue';

const {t} = useI18n();

const emits = defineEmits([
    'submitItemForm',
    'onEditClient'
])

const swal = inject('$swal');
const can = inject('$can');

const props = defineProps([
    'order',
    'statuses',
    'paymentMethods',
    'clientStatuses',
    'invoiceStatuses'
]);

const priceForWaybill = computed(() => props.order.total_price - props.order.prepayment_sum);

const fullName = computed(() => {
    const {name, last_name, middle_name} = props.order.client;
    const fullNameParts = [last_name, name, middle_name].filter(Boolean);
    return fullNameParts.length ? fullNameParts.join(' ') : 'Дані не вказані';
});

const invoiceItem = reactive({
    order_id: props.order.id,
    sum: null,
})

const state = ref({
    showItemsModal: false,
    showInvoicesModal: false,
    itemsModalAction: '',
    item: {
        count: 1,
        size: '',
        color: '',
        product_id: null
    },
    invoiceItem: {},
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
            key: key,
            value: value,
        })
    }
})

const itemsModal = computed(() => state.value.showItemsModal ? ModalAddItemToOrder : null);
const invoiceModal = computed(() => state.value.showInvoicesModal ? InvoiceModal : null);

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

function invoiceModalFunction() {
    state.value.showInvoicesModal = !state.value.showInvoicesModal
};

const copyPhone = () => {
    navigator.clipboard.writeText(props.order.client.phone)
        .then(() => {
            swal({
                icon: 'success',
                title: t('swal.data_copied'),
                timer: 1000,
                showConfirmButton: false
            })
        })
        .catch((error) => {
            console.error('Виникла помилка під час копіювання тексту:', error);
        });
}


function onDestroyInvoice(id) {
    if (can('destroy-invoices')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.invoices.destroy', id))
                    .then(() => {
                        emits('submitItemForm');
                        swal({
                            icon: 'success',
                            title: 'Destroyed!',
                        })
                    })
                    .catch(errors => {
                        console.log(errors);
                        swal({
                            icon: 'error',
                            title: 'Error!'
                        })
                    })
            }
        })

    }
}

function addInvoice() {
    if (can('create-invoices')) {
        state.value.invoiceItem = invoiceItem;
        invoiceModalFunction();
    }
}

function onAddInvoice() {
    axios.post(route('api.invoices.create'), state.value.invoiceItem)
        .then(({data}) => {
            state.value.invoiceItem = invoiceItem;
            invoiceModalFunction();
            navigator.clipboard.writeText(data.result.data.invoice_url);
            swal({
                title: 'Успішно!',
                text: 'Рахунок був успішно створений, посилання на оплату скопійовано в буфер обміну',
                icon: 'success'
            });
            emits('submitItemForm', data.result);
        })
        .catch((response) => {
            console.log(response);
            swal({
                title: 'Error!',
                icon: 'error'
            })
        })
}

function sendWaybill() {
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

// function onEditClient() {
//     window.open(
//         route('admin.clients.index', {id: props.order.client.id}),
//         '_blank'
//     )
// }

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
                    emits('submitItemForm');
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

function onSendInvoiceSms() {
    swal({
        title: 'Успішно',
        text: 'Посилання на оплату надіслано клієнту',
        icon: 'success'
    });
    emits('submitItemForm');
}
</script>
