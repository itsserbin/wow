<template>
    <Head title="Кошик"/>

    <form>
        <div class="grid grid-cols-1 md:grid-cols-2 relative gap-4">
            <div class="">
                <CartItem v-for="item in cart.list" :item="item"/>
            </div>
            <div class="">
                <div class="cart-item__right row mb-3">
                    <PromoCode/>
                    <CartTotal/>
                    <AdditionalProducts :products="recommendProducts" :lang="lang"/>
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
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Head from "@/Pages/Public/Components/Head.vue";

import {useStore} from "vuex";
import {onMounted, ref} from "vue";

defineOptions({layout: MasterLayout})

const props = defineProps([
    'recommendProducts',
    'lang',
    'categories',
    'options',
    'pages',
    'eventIdPageView'
]);

const store = useStore();
const cart = ref({});

onMounted(async () => {
    cart.value = store.state;
});
</script>
