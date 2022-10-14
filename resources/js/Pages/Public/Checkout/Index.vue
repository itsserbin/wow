<template>
    <form @submit.prevent="">
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
import {ref} from "vue";
import {useStore} from "vuex";

const store = useStore();

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
    cart: ref(store.state)
})
</script>
