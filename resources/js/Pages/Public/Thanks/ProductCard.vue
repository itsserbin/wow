<template>
    <div class="
                    items-stretch
                    no-underline
                    grid
                    border-[1px]
                    border-[#e9e9e9]
                    rounded-b-[5px]
                    relative
                    hover:scale-105
                    transition-all
                    h-full
            "
    >

        <div class="w-full mx-auto h-56 md:h-72">
            <a :href="route('product',product.id)">
                <img :src="route('images.350',product.preview) "
                     :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"
                     loading="lazy"
                     class="h-full object-cover w-full"
                >
            </a>
        </div>

        <div class="
                        flex
                        flex-col
                        items-center
                        p-2
                        md:p-4
                        pt-0
                        justify-between
                    "
        >
            <a :href="route('product',product.id)">

                <h5 class="
                            text-black
                            mb-[15px]
                            overflow-hidden
                            font-bold
                            text-center
                            text-base
                            h-18
                            md:h-12
                        "
                >
                    {{ lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null) }}
                </h5>

            </a>
            <div class="text-sm text-gray-500 w-full mb-3">
                <span v-for="size in product.sizes">
                    {{ size.title }}&nbsp;
                </span>
            </div>
            <div class="card__price flex-col mr-auto">
                <div v-if="!product.discount_price"
                     class="
                                font-bold
                                text-lg
                                md:text-2xl
                                text-black
                             "
                >{{ product.price }} грн.
                </div>

                <div v-if="product.discount_price" class="flex flex-col">
                    <div class="
                                    text-[1rem]
                                    font-medium
                                    text-xs
                                    md:text-base
                                    line-through
                                    text-[#A5A5A5]
                        ">{{ product.price }} грн.
                    </div>
                    <div class="
                                    font-bold
                                    text-lg
                                    md:text-2xl
                                    text-[#ff0000]
                        ">{{ product.discount_price }} грн.
                    </div>
                </div>
                <a href="javascript:"
                   @click="$emit('addItemToOrder',product.id,product.discount_price)"
                   class="
                            w-12
                            h-12
                            md:w-14
                            md:h-14
                            bg-red-600
                            rounded-full
                            flex
                            justify-center
                            items-center
                            col-span-1
                            ml-auto
                            absolute
                            right-3
                            bottom-2
                            hover:bg-red-700
                    ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="text-white" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: Object,
    lang: String,
    textGoToProductCard: {
        type: String,
        default: 'Докладніше'
    },
});

defineEmits(['addItemToOrder']);
</script>
