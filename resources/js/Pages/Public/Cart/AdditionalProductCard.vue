<script setup>
import {useStore} from "vuex";
import {swal} from '@/Includes/swal';

const props = defineProps(['item', 'lang']);
const store = useStore();

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

<template>
    <div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px] relative">
        <div class="col-span-2">
            <picture class="w-full ">
                <source :srcset="route('images.350',item.preview.webp_src)" type="image/webp">
                <img :src="route('images.350',item.preview.src)"
                     class="w-full h-full object-cover"
                     :alt="item.h1[lang]"
                >
            </picture>
        </div>

        <div class="col-span-6 p-[20px] flex flex-col">
            <div class="flex space-x-[50px]">
                <div class="text-text font-subheading text-lg">
                    {{ item.h1[lang] }}
                </div>
            </div>
            <div class="flex h-full items-end">
                <div class="text-[#231f20] flex flex-col text-base font-[700] whitespace-nowrap font-subheading">
                    <div class="flex flex-col justify-center" v-if="item.discount_price">
                        <del class="text-[#777] text-[1rem] mb-3">
                                <span class="text-gray-600 text-[1rem]">
                                    {{ item.price }} <span class="text-xs">грн.</span>
                                </span>
                        </del>
                        <ins class="text-[#ff4c3b] text-[1.5rem] font-[700] no-underline mt-[-14px]">
                                <span class="text-red-600">
                                    {{ item.discount_price }} <span class="text-xs"> грн.</span>
                                </span>
                        </ins>
                    </div>
                    <div class="flex flex-col justify-center" v-else>
                        <ins class="text-[1.5rem] font-[700] no-underline mt-[-14px]">
                            {{ item.discount_price }} <span class="text-xs"> грн.</span>
                        </ins>
                    </div>
                </div>
            </div>
            <div class="block pl-[1.25rem] absolute right-5 top-16">
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
