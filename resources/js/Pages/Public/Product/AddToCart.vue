<template>
    <div class="pt-[5%]">
        <hr class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2 font-subheading">
            <div class="mb-4 mb-md-0 flex items-center justify-evenly flex-col">
                <div class="text-center" v-if="state.product.discount_price">
                    <div class="text-lg font-medium text-[#A5A5A5] line-through">
                        {{ state.product.price }} грн.
                    </div>
                    <div class="font-bold text-[#ff0000] text-4xl">{{ state.product.discount_price }} грн.</div>
                </div>
                <div class="text-center" v-if="!state.product.discount_price">
                    <div class="text-lg font-bold font-medium text-[#A5A5A5] text-[2.5rem]">
                        {{ state.product.price }} грн.
                    </div>
                </div>
            </div>
            <div class="grid gap-4">
                <button-component @click="addToCart" type="button">
                    До кошика
                </button-component>
                <button-component @click="showBuyIn1ClickModal" type="button">
                    Купити в 1 клік
                </button-component>
            </div>
        </div>
        <hr class="mt-4">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 font-subheading">
        <div v-if="state.product.sizes.length">
            <div class="w-full mb-2">Доступні розміри</div>
            <ul class="flex pb-[20px]">
                <li v-for="size in state.product.sizes" class="mx-1">
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
        <div v-if="state.product.colors.length">
            <div class="w-100 mb-2">Доступні кольори</div>
            <div class="flex">
                <div v-for="color in state.product.colors">
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
                 :product="state.product"
                 :cart="store.state.list"
    />
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import {useStore} from "vuex";
import BuyIn1Click from '@/Pages/Public/Product/BuyIn1ClickModal.vue';
import {useGtm} from "@gtm-support/vue-gtm";

const swal = inject('$swal');
const gtm = useGtm();
const store = useStore();

const props = defineProps([
    'product',
]);

onMounted(() => {
    state.value.product = JSON.parse(props.product);
    item.value.item_id = state.value.product.id;
    console.log()
    if (import.meta.env.MODE === 'production') {

        try {
            fbq('track', 'ViewContent', {
                "value": state.value.product.discount_price ? state.value.product.discount_price : state.value.product.price,
                "currency": "UAH",
                "content_type": "product",
                "content_ids": [item.value.item_id],
                "content_name": state.value.product.h1
            });

            gtm.trackEvent({
                event: 'view_product',
                ecommerce: {
                    items: [{
                        item_name: state.value.product.h1,
                        item_id: item.value.item_id,
                        price: state.value.product.discount_price ? state.value.product.discount_price : state.value.product.price,
                        quantity: 1
                    }]
                }
            });
        } catch (e) {
            console.log(e);
        }

    }
})

const item = ref({
    count: 1,
    size: [],
    color: [],
    item_id: null,
    src: route(route().current(),route().params)
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
    isActiveBuyIn1ClickModal: false
})

function showBuyIn1ClickModal() {
    state.value.isActiveBuyIn1ClickModal = !state.value.isActiveBuyIn1ClickModal;
}

function addToCart() {
    axios.post(route('api.v1.cart.add', item.value))
        .then(() => {
            if (import.meta.env.MODE === 'production') {
                try {
                    fbq('track', 'AddToCart', {
                        "value": state.value.product.discount_price ? state.value.product.discount_price : state.value.product.price,
                        "currency": "UAH",
                        "content_type": "product",
                        "content_ids": [item.value.item_id],
                        "content_name": state.value.product.h1
                    });

                    gtm.trackEvent({
                        event: 'add_product_to_cart',
                        ecommerce: {
                            items: [{
                                item_name: state.value.product.h1,
                                item_id: item.value.item_id,
                                price: state.value.product.discount_price ? state.value.product.discount_price : state.value.product.price,
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
</script>
