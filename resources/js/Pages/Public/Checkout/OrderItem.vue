<script setup>
import {useStore} from "vuex";

const props = defineProps(['item']);
defineEmits(['removeFromCart']);
const store = useStore();

function removeFromCart() {
    axios.delete(route('api.v1.cart.delete', props.item.id))
        .then(() => store.commit('loadCart'))
        .catch((response) => console.log(response));
}
</script>

<template>
    <div class="grid grid-cols-8 border-[1px] relative border-gray-300 rounded-[10px]">
        <div class="absolute cursor-pointer top-1 right-1" @click="removeFromCart">
            <svg width="18" height="18"
                 viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.0575 9.00002L14.7825 4.28252C14.9237 4.14129 15.003 3.94974 15.003 3.75002C15.003 3.55029 14.9237 3.35874 14.7825 3.21752C14.6412 3.07629 14.4497 2.99695 14.25 2.99695C14.0502 2.99695 13.8587 3.07629 13.7175 3.21752L8.99995 7.94252L4.28245 3.21752C4.14123 3.07629 3.94968 2.99695 3.74995 2.99695C3.55023 2.99695 3.35868 3.07629 3.21745 3.21752C3.07623 3.35874 2.99689 3.55029 2.99689 3.75002C2.99689 3.94974 3.07623 4.14129 3.21745 4.28252L7.94245 9.00002L3.21745 13.7175C3.14716 13.7872 3.09136 13.8702 3.05329 13.9616C3.01521 14.053 2.99561 14.151 2.99561 14.25C2.99561 14.349 3.01521 14.4471 3.05329 14.5384C3.09136 14.6298 3.14716 14.7128 3.21745 14.7825C3.28718 14.8528 3.37013 14.9086 3.46152 14.9467C3.55292 14.9848 3.65095 15.0044 3.74995 15.0044C3.84896 15.0044 3.94699 14.9848 4.03839 14.9467C4.12978 14.9086 4.21273 14.8528 4.28245 14.7825L8.99995 10.0575L13.7175 14.7825C13.7872 14.8528 13.8701 14.9086 13.9615 14.9467C14.0529 14.9848 14.1509 15.0044 14.25 15.0044C14.349 15.0044 14.447 14.9848 14.5384 14.9467C14.6298 14.9086 14.7127 14.8528 14.7825 14.7825C14.8527 14.7128 14.9085 14.6298 14.9466 14.5384C14.9847 14.4471 15.0043 14.349 15.0043 14.25C15.0043 14.151 14.9847 14.053 14.9466 13.9616C14.9085 13.8702 14.8527 13.7872 14.7825 13.7175L10.0575 9.00002Z"
                    fill="#878787"></path>
            </svg>
        </div>
        <div class="col-span-2">
            <picture class=" w-full ">
                <source :srcset="route('images.350',item.image.webp_src)" type="image/webp">
                <img :src="route('images.350',item.image.src)" class="w-full h-full p-3 object-cover">
            </picture>
        </div>
        <div class="col-span-6 p-[20px] flex items-center">
            <div class="flex space-x-[50px]">
                <div class="text-red-600">
                    {{ item.name.ua ? item.name.ua : item.name.ru }}
                </div>
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
                        {{ item.price }} <span class="text-xs"> грн.</span>
                    </ins>
                </div>
            </div>
        </div>
    </div>
</template>
