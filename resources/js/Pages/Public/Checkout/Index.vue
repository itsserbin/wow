<template>
    <MasterLayout :categories="categories"
                  :options="options"
                  :lang="lang"
                  :pages="pages"
    >
        <form @submit.prevent="sendOrder">
            <div class="grid grid-cols-1 md:grid-cols-2 relative gap-4">
                <div>
                    <PersonalData :order="state.order" :errors="state.errors"/>
                    <Delivery :order="state.order"/>
                    <Payment :order="state.order"/>
                    <Comment :order="state.order"/>
                </div>
                <div class="">
                    <div class="cart-item__right row mb-3">
                        <h3 class="text-2xl font-heading mb-[1rem]">Замовлення</h3>

                        <div class="grid gap-4">
                            <OrderItem v-for="item in store.state.list"
                                       :item="item"
                                       @removeFromCart="removeFromCart"
                            />
                        </div>
                        <Loader v-if="state.isLoading"/>
                        <CheckoutTotal v-if="!state.isLoading"/>
                    </div>
                </div>
            </div>
        </form>
    </MasterLayout>
</template>

<script setup>
import Loader from '@/Pages/Public/Components/Loader.vue';
import PersonalData from '@/Pages/Public/Checkout/PersonalData.vue';
import Delivery from '@/Pages/Public/Checkout/Delivery.vue';
import Payment from '@/Pages/Public/Checkout/Payment.vue';
import OrderItem from '@/Pages/Public/Checkout/OrderItem.vue';
import Comment from '@/Pages/Public/Checkout/Comment.vue';
import CheckoutTotal from '@/Pages/Public/Checkout/CheckoutTotal.vue';
import MasterLayout from '@/Layouts/MasterLayout.vue'

const {appContext} = getCurrentInstance()
const {$fbq} = appContext.config.globalProperties

import {inject, ref, onMounted, getCurrentInstance} from "vue";
import {useStore} from "vuex";
import {useGtm} from '@gtm-support/vue-gtm';
import hmacMD5 from 'crypto-js/hmac-md5';
import CryptoJS from 'crypto-js';
import {isLoading} from "@/Pages/Public/load";

const store = useStore();
const swal = inject('$swal');
const gtm = useGtm();
const props = defineProps([
    'lang',
    'eventIdInitiateCheckout',
    'eventIdPurchase',
    'categories',
    'options',
    'pages',
]);

const state = ref({
    order: {
        name: null,
        last_name: null,
        middle_name: null,
        email: null,
        comment: null,
        phone: null,
        city: null,
        postal_office: null,
        payment_method: null,
        event_id: props.eventIdPurchase
    },
    errors: [],
    contentIds: [],
    ga4ProductsArray: [],
    isLoading: false,
})

onMounted(() => {
    if (import.meta.env.MODE === 'production') {
        store.state.list.forEach((item) => {
            state.value.contentIds.push(item.id);
            state.value.ga4ProductsArray.push({
                item_name: item.name.ua ? item.name.ua : item.name.ru,
                item_id: item.id,
                price: item.discount_price ? item.discount_price : item.price,
                quantity: item.count
            })
        });
        try {
            $fbq('track',
                'InitiateCheckout',
                {
                    "value": store.state.totalPrice,
                    "currency": "UAH",
                    "num_items": store.state.totalCount,
                    "content_ids": state.value.contentIds,
                    "content_type": "product"
                },
                {
                    event_id: props.eventIdInitiateCheckout
                }
            );
            gtm.trackEvent({
                event: 'start_checkout',
                ecommerce: {
                    items: state.value.ga4ProductsArray
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
    isLoading.value = false;
})

function wfp(order) {
    const wayforpay = new Wayforpay();
    const data = {
        names: [],
        prices: [],
        counts: [],
        amount: null,
    }
    order.items.forEach((item) => {
        data.names.push(item.product.h1.ua ? item.product.h1.ua : item.product.h1.ru)
        data.counts.push(item.count)
    })
    if (order.payment_method === 'minimum_prepayment') {
        data.amount = order.total_price * 0.1;
        order.items.forEach((item) => {
            data.prices.push(item.sale_price * 0.1)
        })
    } else if (order.payment_method === 'full_prepayment') {
        data.amount = order.total_price;
        order.items.forEach((item) => {
            data.prices.push(item.sale_price)
        })
    }

    let params = {
        // merchantAccount: 'test_merch_n1',
        merchantAccount: import.meta.env.VITE_WFP_MERCHANT_LOGIN,
        merchantDomainName: import.meta.env.VITE_DOMAIN,
        orderReference: order.id,
        orderDate: Math.floor(new Date(order.created_at).getTime() / 1000),
        // amount: 1,
        amount: data.amount,
        currency: "UAH",
        productName: data.names,
        // productPrice: [1],
        productPrice: data.prices,
        productCount: data.counts,
        clientFirstName: order.client.name,
        clientLastName: order.client.last_name,
        clientPhone: order.client.phone,
        language: "UA",
        deliveryList: 'nova',
        returnUrl: route('api.v1.orders.set-prepayment')
    };
    let string = (Object.values(
        {
            merchantAccount: params.merchantAccount,
            merchantDomainName: params.merchantDomainName,
            orderReference: params.orderReference,
            orderDate: params.orderDate,
            amount: params.amount,
            currency: params.currency,
            productName: params.productName.join(';'),
            productCount: params.productCount.join(';'),
            productPrice: params.productPrice.join(';'),
        }
    ).join(';'))
    let signature = CryptoJS.enc.Utf8.stringify(
        CryptoJS.enc.Utf8.parse(
            hmacMD5(
                string,
                // 'flk3409refn54t54t*FNJRET'
                import.meta.env.VITE_WFP_MERCHANT_SECRET_KEY
            )
        )
    );
    wayforpay.run({
            merchantAccount: params.merchantAccount,
            merchantDomainName: params.merchantDomainName,
            authorizationType: "SimpleSignature",
            merchantSignature: signature,
            orderReference: params.orderReference,
            orderDate: params.orderDate,
            amount: params.amount,
            currency: params.currency,
            productName: params.productName,
            productPrice: params.productPrice,
            productCount: params.productCount,
            clientFirstName: params.clientFirstName,
            clientLastName: params.clientLastName,
            clientPhone: params.clientPhone,
            language: params.language,
            returnUrl: params.returnUrl,
            // deliveryList: params.deliveryList
        },
        function (response) {
            // on approved
            onSuccessPurchase(response, order);
        },
        function (response) {
            // on declined
        },
        function (response) {
            // on pending or in processing
        }
    );
}

function onSuccessPurchase(response, order) {
    window.addEventListener("message", function () {
        if (event.data === 'WfpWidgetEventApproved') {
            axios.post(route('api.v1.orders.set-prepayment', response))
                .then(({data}) => {
                    window.location.href = route('thanks', order.id);
                })
        }
    }, false);

}

function sendOrder() {
    state.value.isLoading = true;
    state.value.errors = [];
    axios.post(route('api.v1.orders.create'), state.value.order)
        .then(({data}) => {
            if (import.meta.env.MODE === 'production') {
                try {
                    $fbq('track',
                        'Purchase',
                        {
                            "value": store.state.totalPrice,
                            "currency": "UAH",
                            "content_type": "product",
                            "num_items": store.state.totalCount,
                            "content_ids": state.value.contentIds
                        },
                        {
                            event_id: props.eventIdPurchase
                        }
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
                .then()
                .catch((response) => console.log(response))
                .then(() => {
                    if (data.order.payment_method === 'minimum_prepayment' || data.order.payment_method === 'full_prepayment') {
                        wfp(data.order);
                    } else {
                        window.location.href = route('thanks', data.order.id);
                    }
                })


            state.value.isLoading = false;
        })
        .catch(({response}) => {
            console.log(response);
            state.value.errors = response.data;
            state.value.isLoading = false;
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректніть данних',
            })
        });
}

function removeFromCart() {

}
</script>
