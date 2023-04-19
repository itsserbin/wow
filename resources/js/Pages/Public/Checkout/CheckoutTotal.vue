<script setup>
import {useStore} from "vuex";
import Button from '@/Pages/Public/Components/Button.vue';

const store = useStore();
</script>

<template>
    <div class="
                rounded-[15px]
                mt-[50px]
                bg-[#fff]
                border-[0.5px]
                border-gray-300
                shadow-lg
                box-border
                mb-[1.5rem]
                p-[1rem]
                font-subheading
            "
    >
        <div class="pb-[0.625rem]">
            <div class="items-center flex justify-between">
                <div class="text-[#e3342f] text-base">Ціна без знижки</div>
                <div class="value">
                    <div class="product-card__price">
                        <div class="price">
                            <del>
                                <span class="amount price-old">
                                    {{ store.state.price_without_discount }} грн.
                                </span>
                            </del>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-[#000] font-[500] uppercase">До сплати</div>
                <div class="value">
                    <div class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap">
                        <div class="price total">
                            {{ store.state.totalPrice }} грн.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-center flex flex-col">
            <Button type="submit" class="w-full">
                Оформити замовлення
            </Button>
        </div>
    </div>
</template>
