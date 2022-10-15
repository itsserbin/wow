<template>
    <section class="relative product-list" v-if="products.length">
        <div class="container">
            <div class="row my-5">
                <div class="relative__title block-title">{{ textRelativeProducts }}</div>
                <div class="relative-slider">
                    <swiper
                        class="social-reviews-carousel"
                        :space-between="5"
                        :modules="modules"
                        :navigation="true"
                        :pagination="{
                          clickable: true,
                        }"
                        :loop="true"
                        :autoplay="{
                          delay: 3000,
                          disableOnInteraction: false,
                        }"
                        :slides-per-view="2"
                        :breakpoints="{
                          '768': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                          },
                          '1024': {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          '1366': {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                        }"
                        :lazy="true"
                    >

                        <swiper-slide v-for="(product,i) in products" :key="i">
                            <div class="card__product p-2">
                                <a :href="productRoute + '/' + product.id" class="text-decoration-none">
                                    <div class="card__image">
                                        <img :src="'/storage/products/500/' + product.preview"
                                             :alt="lang === 'ru' ? product.h1.ru :product.h1.ua"
                                             loading="lazy"/>
                                    </div>
                                    <div class="card__body">
                                        <h5 class="card__label">{{ lang === 'ru' ? product.h1.ru : product.h1.ua }}</h5>
                                        <div class="card__price">
                                            <div v-if="product.discount_price !== 0">
                                                <div class="card__old-price">{{ product.price }} грн.</div>
                                                <div class="card__actual-price">{{ product.discount_price }} грн.</div>
                                            </div>
                                            <div v-else>
                                                <div class="card__price-without-discount">{{ product.price }} грн.</div>
                                            </div>
                                        </div>
                                        <span class="card__button">{{ textGoToProductCard }}</span>
                                    </div>
                                </a>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {Autoplay, Lazy, Pagination, Navigation} from "swiper";

export default {
    setup() {
        return {
            modules: [Pagination, Navigation, Autoplay, Lazy],
        };
    },
    data() {
        return {
            products: [],
        }
    },
    props: {
        id: String,
        lang: String,
        textGoToProductCard: String,
        textRelativeProducts: String,
        productRoute: String
    },
    mounted() {
        axios.get('/api/v1/product/relative/' + this.id)
            .then(({data}) => this.products = data.result)
            .catch((response) => console.log(response));
    }
}
</script>
