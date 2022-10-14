<template>
    <form @submit.prevent="goToCheckout">
        <div class="grid grid-cols-1 md:grid-cols-2 relative gap-4">
            <div class="">
                <CartItem v-for="item in cart.list" :item="item"/>
            </div>
            <div class="">
                <div class="cart-item__right row mb-3">
                    <PromoCode/>
                    <CartTotal/>
                    <AdditionalProducts/>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup>
import AdditionalProducts from '@/Pages/Public/Cart/AdditionalProducts.vue'
import CartItem from '@/Pages/Public/Cart/CartItem.vue'
import PromoCode from '@/Pages/Public/Cart/PromoCode.vue'
import CartTotal from '@/Pages/Public/Cart/CartTotal.vue'
import {useStore} from "vuex";
import {ref} from "vue";

const store = useStore();
const cart = ref(store.state);

function goToCheckout() {
    window.location.href = route('checkout');
}
</script>
