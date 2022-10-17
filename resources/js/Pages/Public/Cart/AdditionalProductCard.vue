<template>
    <div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px]">
        <div class="col-span-2">
            <img :src="route('images.products.350',item.preview)"
                 :alt="item.h1.ua ? item.h1.ua : item.h1.ru"
                 class="p-[25px] pr-[1.25rem]">
        </div>

        <div class="col-span-6 p-[20px] flex items-center">
            <div class="flex  space-x-[50px]">
                <div class="text-red-600">
                    {{ item.h1.ua ? item.h1.ua : item.h1.ru }}
                </div>
                <div class="font-bold pr-[8px]">
                    {{ item.discount_price ? item.discount_price : item.price }} <span>грн</span>
                </div>

            </div>
            <div class="border-r-[1px] content-[''] h-[100px] "></div>
            <div class="block pl-[1.25rem]">
                <div class="plus-btn" @click="addToCart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                         height="16" fill="currentColor" class="bi bi-plus-circle"
                         viewBox="0 0 16 16">
                        <path
                            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                        </path>
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useStore} from "vuex";
import {inject} from "vue";

const props = defineProps(['item']);
const store = useStore();
const swal = inject('$swal');

function addToCart() {
    axios.post(route('api.v1.cart.add', {
        item_id: props.item.id,
        count: 1,
        size: null,
        color: null,
    }))
        .then(() => {
            store.commit('loadCart');
            swal({
                icon: 'success',
                title: 'Додано!',
                text: 'Товар успішно додано до вашого замовлення',
            });
        })
        .catch(() => {
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Зверніться до адміністратора',
            });
        });
}
</script>
