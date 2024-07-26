<script setup>
defineProps(['item']);
</script>

<template>
    <div class="mb-3">
        <div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px]">
            <div class="col-span-2">
                <div class="
                            border-r-[1px]
                            content-['']
                            h-[100px]
                            absolute
                            z-40
                            ml-[150px]
                            mt-[29px]
                        "
                ></div>
                <img :src="'/storage/products' + item.product.preview.src"
                     :alt="item.product.h1.ua ? item.product.h1.ua : item.product.h1.ru"
                     class="p-[25px] pr-[1.25rem]">
            </div>
            <div class="col-span-6 p-[20px] ">
                <a :href="route('product',item.product.id)" class="mb-[0.25rem] text-red-600 col-span-7 text-[1rem]">
                    <div>{{ item.product.h1.ua ? item.product.h1.ua : item.product.h1.ru }}</div>
                </a>

                <div class="items-center flex col-span-8 justify-between mt-0 pl-[0.75rem] pt-0">
                    <div class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap mr-[40px]">
                        <div class="flex flex-col justify-center" v-if="item.product.discount_price">
                            <del class="text-[#777] text-[1rem] mb-3">
                                <span class="text-gray-600 text-[1rem]">
                                    {{ item.product.price }} <span class="text-xs">грн.</span>
                                </span>
                            </del>
                            <ins class="text-[#ff4c3b] text-[1.5rem] font-[700] no-underline mt-[-14px]">
                                <span class="text-red-600">
                                    {{ item.product.discount_price }} <span class="text-xs"> грн.</span>
                                </span>
                            </ins>
                        </div>
                        <div class="flex flex-col justify-center" v-else>
                            <ins class="text-[1.5rem] font-[700] no-underline mt-[-14px]">
                                {{ item.product.discount_price }} <span class="text-xs"> грн.</span>
                            </ins>
                        </div>
                    </div>

                    <div class="items-center flex max-w-[6.25rem]">
                        <input type="text"
                               :value="item.count"
                               class="text-[#e3342f] border-none text-sm w-10 outline-none text-center mx-auto"
                               disabled
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
