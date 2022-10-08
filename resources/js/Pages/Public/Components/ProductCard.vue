<template>
    <div class="mb-[10px] items-stretch px-[10px]">
        <a class="no-underline" :href="productRoute + '/' + product.id">

            <div class="card__image mx-auto h-[180px]">
                <!--                <img :src="'/storage/products/350/' + product.preview"-->
                <!--                     :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"-->
                <!--                     loading="lazy">-->

                <img src="https://dabango.store/storage/products/350/photo_2021-04-06_10-36-54.jpg" loading="lazy">
            </div>

            <div class="flex 
            flex-col 
            items-center 
            border-r-[1px] 
            border-r-[#e9e9e9]
            border-b-[1px]
            border-b-[#e9e9e9]
            border-l-[1px]
            border-l-[#e9e9e9]
            rounded-b-[5px]
            ">
                <!--                                <h5 class="card__label">-->
                <!--                                    {{ lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null) }}-->
                <!--                                </h5>-->
                <h5 class="
                text-black 
                text-[14px]
                mb-[15px]
                ml-[0px]
                mr-[0px]
                mt-[0px]
                overflow-hidden
                font-bold
                text-center
                h-[50px]
                ">{{ product.h1.ua }}</h5>
                <div class="card__price
                mb-[15px]
                ml-[0px]
                mr-[0px]
                mt-[0px]
                h-[37px]
                flex-col
                items-center
                justify-center

                ">
                    <div v-if="!product.discount_price" class="card__price-without-discount
                            font-bold
                            text-[16px]
                            text-black
                         ">{{ product.price }} грн.
                    </div>

                    <div v-if="product.discount_price" class="
                    flex
                    flex-col
                    ">
                        <div class="card__old-price
                        font-medium
                        text-xs
                        line-through
                        text-[#A5A5A5]
                        ">{{ product.price }} грн.</div>
                        <div class="card__actual-price
                                    font-bold
                                    text-[22px]
                                    text-[#ff0000]
                        ">{{ product.discount_price }} грн.</div>
                    </div>
                </div>
                <span class="
                card__button
                block
                rounded-[10px]
                p-[10px]
                w-[75%]
                min-w-[120px]
                text-[14px]
                text-center
                font-medium
                text-white
                bg-[#ff0000]
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
    'productRoute',
]);
</script>
