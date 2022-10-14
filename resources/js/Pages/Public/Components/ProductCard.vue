<template>
    <div class="mb-[10px] items-stretch">
        <a class="
                    no-underline
                    grid
                    border-[1px]
                    border-[#e9e9e9]
                    rounded-b-[5px]
                "
           :href="route('product',product.id)">

            <div class="w-full mx-auto h-56 md:h-72">
                <img :src="'/storage/images/350/' + product.preview"
                     :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"
                     loading="lazy"
                     class="h-full object-cover w-full"
                >
            </div>

            <div class="
                        flex
                        flex-col
                        items-center
                    "
            >
                <h5 class="
                            text-black
                            text-lg
                            mb-[15px]
                            overflow-hidden
                            font-bold
                            text-center
                            h-28
                            md:h-16
                            px-2
                            mt-2
                        "
                >
                    {{ lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null) }}
                </h5>
                <div class="
                            card__price
                            mb-[15px]
                            ml-[0px]
                            mr-[0px]
                            mt-[0px]
                            h-[37px]
                            flex-col
                            items-center
                            justify-center
                         "
                >
                    <div v-if="!product.discount_price"
                         class="
                                font-bold
                                text-[16px]
                                text-black
                             "
                    >{{ product.price }} грн.
                    </div>

                    <div v-if="product.discount_price" class="flex flex-col">
                        <div class="
                                    text-[1rem]
                                    font-medium
                                    text-xs
                                    line-through
                                    text-[#A5A5A5]
                        ">{{ product.price }} грн.
                        </div>
                        <div class="
                                    font-bold
                                    text-[22px]
                                    text-[#ff0000]
                        ">{{ product.discount_price }} грн.
                        </div>
                    </div>
                </div>
                <span class="
                            block
                            rounded-[10px]
                            p-[10px]
                            w-[75%]
                            min-w-[120px]
                            text-[1rem]
                            text-center
                            font-medium
                            text-white
                            bg-[#ff0000]
                            mb-5
                ">{{ textGoToProductCard }}</span>
            </div>
        </a>
    </div>
</template>

<script setup>
defineProps([
    'product',
    'lang',
    'textGoToProductCard',
]);
</script>
