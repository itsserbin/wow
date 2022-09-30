<template>
    <div class="card__product">
        <a class="text-decoration-none" :href="productRoute + '/' + product.id">

            <div class="card__image">
                <!--                <img :src="'/storage/products/350/' + product.preview"-->
                <!--                     :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"-->
                <!--                     loading="lazy">-->

                <img src="https://dabango.store/storage/products/350/photo_2021-04-06_10-36-54.jpg" loading="lazy">
            </div>

            <div class="card__body">
<!--                                <h5 class="card__label">-->
<!--                                    {{ lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null) }}-->
<!--                                </h5>-->
                <h5 class="card__label">{{ product.h1.ua }}</h5>
                <div class="card__price">
                    <div v-if="!product.discount_price"
                         class="card__price-without-discount">{{ product.price }} грн.
                    </div>

                    <div v-if="product.discount_price" class="card__discount_price">
                        <div class="card__old-price">{{ product.price }} грн.</div>
                        <div class="card__actual-price">{{ product.discount_price }} грн.</div>
                    </div>
                </div>
                <span class="card__button">{{ textGoToProductCard }}</span>
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
