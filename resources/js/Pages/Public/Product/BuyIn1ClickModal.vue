<template>
    <Modal size="small"
           submit-button-text="Замовити"
           @submitForm="sendForm"
           @closeModal="$emit('closeModal')"
           :is-loading="state.isLoading"
    >
        <template #content>
            <div class="grid gap-4">
                <div class="block">
                    <Label>Ім`я</Label>
                    <Input type="text"
                           v-model="order.name"
                           placeholder="Введіть ваше ім'я"
                    />
                </div>
                <div class="block">
                    <Label :required="true">Ваш телефон</Label>
                    <Input type="tel"
                           v-maska="'+38 (0##) ###-##-##'"
                           v-model="order.phone"
                           placeholder="+38 (0"
                           class="phone"
                    />
                    <InputError v-if="state.errors.phone" v-for="error in state.errors.phone" :message="error"/>
                </div>
            </div>
        </template>
    </Modal>
</template>

<script setup>
import {getCurrentInstance, ref} from "vue";
import {useGtm} from "@gtm-support/vue-gtm";
import {useStore} from "vuex";
import {maska as vMaska} from 'maska'

import Modal from '@/Pages/Public/Components/Modal.vue';
import Input from '@/Pages/Public/Components/Input.vue';
import InputError from '@/Components/Form/InputError.vue';
import Label from '@/Pages/Public/Components/Label.vue';

const emits = defineEmits(['closeModal', 'addToCard']);
const props = defineProps([
    'item',
    'product',
    'eventIdPurchaseIn1Click',
    'eventIdAddToCard',
    'isAddToCart'
]);

const gtm = useGtm();
const {appContext} = getCurrentInstance()
const {$fbq} = appContext.config.globalProperties

const order = ref({
    name: '',
    last_name: '',
    middle_name: '',
    email: null,
    comment: null,
    phone: null,
    city: null,
    postal_office: null,
    payment_method: null,
    event_id: props.eventIdPurchaseIn1Click
});

const state = ref({
    isLoading: false,
    errors: [],
    contentIds: [],
    ga4ProductsArray: []
});

const store = useStore();

async function sendForm() {
    state.value.errors = [];
    state.value.isLoading = true;

    if (!props.isAddToCart) {
        await axios.post(route('api.v1.cart.add'), props.item)
            .then(() => {
                props.isAddToCart = true;
                if (import.meta.env.MODE === 'production') {
                    try {
                        $fbq(
                            'AddToCart',
                            {
                                "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                                "currency": "UAH",
                                "content_type": "product",
                                "content_ids": [props.item.item_id],
                                "content_name": props.product.h1
                            },
                            props.eventIdAddToCard
                        );
                    } catch (e) {
                        console.error(e);
                    }
                }
                store.commit('loadCart');
                createOrder();
            })
    } else {
        await createOrder();
    }
}

async function createOrder() {
    await axios.post(route('api.v1.orders.create.1click'), order.value)
        .then(({data}) => {
            if (import.meta.env.MODE === 'production') {
                try {
                    store.state.list.forEach((item) => {
                        state.value.contentIds.push(item.id);
                        state.value.ga4ProductsArray.push({
                            item_name: item.name.ua ? item.name.ua : item.name.ru,
                            item_id: item.id,
                            price: item.discount_price ? item.discount_price : item.price,
                            quantity: item.count
                        })
                    });

                    $fbq(
                        'Purchase',
                        {
                            "value": store.state.totalPrice,
                            "currency": "UAH",
                            "content_type": "product",
                            "num_items": store.state.totalCount,
                            "content_ids": state.value.contentIds
                        },
                        props.eventIdPurchaseIn1Click
                    );

                    gtm.trackEvent({
                        event: 'send_order',
                        ecommerce: {
                            transaction_id: data.order.id,
                            value: data.order.total_price,
                            currency: "UAH",
                            items: state.value.ga4ProductsArray
                        }
                    });
                } catch (e) {
                    console.log(e);
                }
            }
            axios.post(route('sms.new.order'), {
                order_id: data.order.id,
                phone: data.order.client.phone,
            })
            state.value.isLoading = false;
            window.location.href = route('thanks', data.order.id);
        })
        .catch(({response}) => {
            state.value.errors = response.data;
            state.value.isLoading = false;
        });
}
</script>
