<template>
    <div class="pt-[5%]">
        <hr class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2 font-subheading">
            <div class="mb-4 mb-md-0 flex items-center justify-evenly flex-col">
                <div class="text-center" v-if="product.discount_price">
                    <div class="text-lg font-medium text-[#A5A5A5] line-through">
                        {{ product.price }} грн.
                    </div>
                    <div class="font-bold text-[#ff0000] text-4xl">{{ product.discount_price }} грн.</div>
                </div>
                <div class="text-center" v-if="!product.discount_price">
                    <div class="text-lg font-bold font-medium text-[#A5A5A5] text-[2.5rem]">
                        {{ product.price }} грн.
                    </div>
                </div>
            </div>
            <div class="grid gap-4">
                <Button @click="addToCart" type="button">
                    До кошика
                </Button>
                <Button @click="showBuyIn1ClickModal" type="button">
                    Купити в 1 клік
                </Button>
            </div>
        </div>
        <hr class="mt-4">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 font-subheading">
        <div v-if="product.sizes.length">
            <div class="w-full mb-2">Доступні розміри</div>
            <ul class="flex pb-[20px]">
                <li v-for="size in product.sizes" class="mx-1">
                    <input type="checkbox"
                           :value="size.title"
                           :id="size.title"
                           class="hidden peer"
                           v-model="item.size"
                    >
                    <label :for="size.title"
                           class="
                                inline-flex
                                justify-center
                                items-center
                                mx-auto
                                text-gray-500
                                bg-white rounded-lg border-2
                                border-gray-200
                                cursor-pointer
                                peer-checked:border-blue-600
                                hover:text-gray-600
                                peer-checked:text-gray-600
                                hover:bg-gray-50
                                w-[40px]
                                h-[40px]
                            "
                    >
                        {{ size.title }}
                    </label>
                </li>
            </ul>
        </div>
        <div v-if="product.colors.length">
            <div class="w-100 mb-2">Доступні кольори</div>
            <div class="flex">
                <div v-for="color in product.colors">
                    <input type="checkbox"
                           :id="color.name"
                           :value="color.name"
                           class="hidden peer"
                           v-model="item.color"
                    >
                    <label :for="color.name"
                           :style="'background-color:' + color.hex"
                           class="
                                inline-flex
                                justify-center
                                items-center
                                mx-auto
                                text-black-500
                                rounded-lg
                                border-2
                                border-gray-200
                                cursor-pointer
                                peer-checked:border-blue-600
                                hover:text-black
                                peer-checked:text-gray-600
                                hover:bg-black
                                w-[40px]
                                h-[40px]
                            "
                    >
                    </label>
                </div>
            </div>
        </div>
    </div>
    <BuyIn1Click v-if="state.isActiveBuyIn1ClickModal"
                 @closeModal="showBuyIn1ClickModal"
                 :item="item"
                 :product="product"
                 :cart="store.state.list"
                 :eventIdPurchaseIn1Click="props.eventIdPurchaseIn1Click"
                 :eventIdAddToCard="props.eventIdAddToCard"
                 :isAddToCart="state.isAddToCart"
    />
</template>

<script setup>
import {getCurrentInstance, inject, ref} from "vue";
import {useStore} from "vuex";
import BuyIn1Click from '@/Pages/Public/Product/BuyIn1ClickModal.vue';
import {useGtm} from "@gtm-support/vue-gtm";
import Button from '@/Pages/Public/Components/Button.vue'
import {swal} from '@/Includes/swal';

const gtm = useGtm();
const store = useStore();
const {appContext} = getCurrentInstance()
const {$fbq} = appContext.config.globalProperties

const props = defineProps([
    'product',
    'eventIdAddToCard',
    'eventIdPurchaseIn1Click',
]);


const item = ref({
    count: 1,
    size: [],
    color: [],
    item_id: props.product.id,
    src: route(route().current(), route().params),
    event_id: props.eventIdAddToCard
});

const state = ref({
    product: {
        id: null,
        discount_price: null,
        price: null,
        h1: null,
        sizes: [],
        colors: [],
    },
    isActiveBuyIn1ClickModal: false,
    isAddToCart: false,
})

function showBuyIn1ClickModal() {
    state.value.isActiveBuyIn1ClickModal = !state.value.isActiveBuyIn1ClickModal;
}

function addToCart() {
    if (!state.value.isAddToCart) {
        axios.post(route('api.v1.cart.add', item.value))
            .then(() => {
                state.value.isAddToCart = true;
                if (import.meta.env.MODE === 'production') {
                    try {
                        $fbq('AddToCart',
                            {
                                "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                                "currency": "UAH",
                                "content_type": "product",
                                "content_ids": [item.value.item_id],
                                "content_name": props.product.h1
                            },
                            item.value.event_id
                        );

                        gtm.trackEvent({
                            event: 'add_product_to_cart',
                            ecommerce: {
                                items: [{
                                    item_name: props.product.h1,
                                    item_id: item.value.item_id,
                                    price: props.product.discount_price ? props.product.discount_price : props.product.price,
                                    quantity: 1
                                }]
                            }
                        });
                    } catch (e) {
                        console.log(e);
                    }
                }
                store.commit('loadCart');
                swal({
                    icon: 'success',
                    title: 'Товар додано до вашого кошика!',
                    text: 'Ви можете оформити замовлення або продовжити покупки :)',
                    showCancelButton: true,
                    confirmButtonText: 'Оформити замовлення',
                    cancelButtonText: 'Продовжити покупки',

                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = route('checkout');
                    }
                })

            })
            .catch(() => {
                swal({
                    icon: 'error',
                    title: 'Виникла помилка',
                    text: 'Перевірте корректність данних'
                })
            });
    }
}
</script>
