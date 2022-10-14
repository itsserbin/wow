<template>
    <div class="pt-[5%]">
        <hr class="mb-4">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="mb-4 mb-md-0 flex items-center justify-evenly flex-col">
                <div class="text-center" v-if="discountPrice">
                    <div class="text-[20px] font-medium text-[#A5A5A5] line-through">
                        {{ price }} грн.
                    </div>
                    <div class=" font-bold text-[#ff0000] text-[36px]">{{ discountPrice }} грн.</div>
                </div>
            </div>
            <div class="mx-0">
                <button class="mb-[20px] w-full h-[50px] bg-[#dc3545] rounded-[10px] text-white"
                        type="button"
                        @click="addToCart"
                >
                    <span>До кошика</span>
                </button>
                <button class="w-full h-[50px] bg-[#dc3545] rounded-[10px]  text-white"
                        type="button"
                        @click="showBuyIn1ClickModal"
                >
                    <span>Купити в 1 клік</span>
                </button>
            </div>
        </div>
        <hr class="mt-4">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        <div v-if="JSON.parse(sizes).length">
            <div class="w-full mb-2">Доступні розміри</div>
            <ul class="flex pb-[20px]">
                <li v-for="size in JSON.parse(sizes)">
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
        <div v-if="JSON.parse(colors).length">
            <div class="w-100 mb-2">Доступні кольори</div>
            <div class="flex">
                <div v-for="color in JSON.parse(colors)">
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
    <BuyIn1Click v-if="state.isActiveBuyIn1ClickModal" @closeModal="showBuyIn1ClickModal"/>
</template>

<script setup>
import {inject, ref} from "vue";
import {useStore} from "vuex";
import BuyIn1Click from '@/Pages/Public/Product/BuyIn1ClickModal.vue';

const swal = inject('$swal');

const store = useStore();

const props = defineProps([
    'id',
    'price',
    'discountPrice',
    'sizes',
    'colors'
]);

const item = ref({
    count: 1,
    size: [],
    color: [],
    item_id: null,
});

const state = ref({
    isActiveBuyIn1ClickModal: false
})

function showBuyIn1ClickModal() {
    state.value.isActiveBuyIn1ClickModal = !state.value.isActiveBuyIn1ClickModal;
}

function addToCart() {
    item.value.item_id = props.id;
    axios.post(route('api.v1.cart.add', item.value))
        .then(() => {
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
                    window.location.href = '/cart';
                }
            })
            // if (typeof fbq !== "undefined") {
            //     fbq('track', 'AddToCart', {
            //         "value": this.discountPrice ? this.discountPrice : this.price,
            //         "currency": "UAH",
            //         "content_type": "product",
            //         "content_ids": [this.item.item_id],
            //         "content_name": this.h1
            //     });
            //
            //
            //     if (typeof this.$gtm !== "undefined") {
            //         this.$gtm.trackEvent({
            //             event: 'add_product_to_cart',
            //             ecommerce: {
            //                 items: [{
            //                     item_name: this.h1,
            //                     item_id: this.item.item_id,
            //                     price: this.discountPrice ? this.discountPrice : this.price,
            //                     quantity: 1
            //                 }]
            //             }
            //         });
            //     }
            // }
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
