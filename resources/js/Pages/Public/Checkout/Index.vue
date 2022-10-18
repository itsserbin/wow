<template>
    <form @submit.prevent="sendOrder">
        <div class="grid grid-cols-1 md:grid-cols-2 relative gap-4">
            <div>
                <PersonalData :order="state.order"/>
                <Delivery :order="state.order"/>
                <Payment :order="state.order"/>
                <Comment :comment="state.order.comment"/>
            </div>
            <div class="">
                <div class="cart-item__right row mb-3">
                    <h3 class="text-[1.625rem] mb-[1rem]">Замовлення</h3>

                    <div class="grid gap-4">
                        <OrderItem v-for="item in state.cart.list"
                                   :item="item"
                                   @removeFromCart="removeFromCart"
                        />
                    </div>
                    <CheckoutTotal/>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import PersonalData from '@/Pages/Public/Checkout/PersonalData.vue';
import Delivery from '@/Pages/Public/Checkout/Delivery.vue';
import Payment from '@/Pages/Public/Checkout/Payment.vue';
import OrderItem from '@/Pages/Public/Checkout/OrderItem.vue';
import Comment from '@/Pages/Public/Checkout/Comment.vue';
import CheckoutTotal from '@/Pages/Public/Checkout/CheckoutTotal.vue';
import {inject, ref, onMounted} from "vue";
import {useStore} from "vuex";
import {useGtm} from '@gtm-support/vue-gtm';

const store = useStore();
const swal = inject('$swal');
const gtm = useGtm();

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
    },
    cart: ref(store.state),
    contentIds: [],
    ga4ProductsArray: [],
})
onMounted(() => {
    state.value.cart.list.forEach((item) => {
        state.value.contentIds.push(item.id);
        state.value.ga4ProductsArray.push({
            item_name: item.name.ua ? item.name.ua : item.name.ru,
            item_id: item.id,
            price: item.discount_price ? item.discount_price : item.price,
            quantity: item.count
        })
    });

    if (import.meta.env.MODE === 'production') {
        gtm.trackEvent({
            event: 'start_checkout',
            ecommerce: {
                items: state.value.ga4ProductsArray
            }
        });
    }
})

function sendOrder() {
    state.value.isLoading = true;
    state.value.errors = [];
    axios.post(route('api.v1.orders.create'), state.value.order)
        .then(({data}) => {
            if (import.meta.env.MODE === 'production') {
                fbq('track', 'Purchase', {
                    "value": state.value.cart.totalPrice,
                    "currency": "UAH",
                    "content_type": "product",
                    "num_items": state.value.cart.totalCount,
                    "content_ids": state.value.contentIds
                });

                gtm.trackEvent({
                    event: 'send_order',
                    ecommerce: {
                        transaction_id: data.order.id,
                        value: data.order.total_price,
                        currency: "UAH",
                        items: state.value.ga4ProductsArray
                    }
                });
            }
            state.value.isLoading = false;
            window.location.href = route('thanks', data.order.id);
        })
        .catch(({response}) => {
            state.value.errors = response.data;
            state.value.isLoading = false;
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректніть данних',
            })
        });
}

function removeFromCart(){

}
</script>
