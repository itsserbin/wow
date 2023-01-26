<template>
    <div class="
                    items-stretch
                    flex
                    flex-col
                    no-underline
                    border-[1px]
                    border-secondary
                    rounded-lg
                    relative
                    hover:scale-105
                    transition-all
                    duration-300
                    h-full
            "
    >
        <div v-if="product.discount_price"
             class="
                    absolute
                    rounded-xl
                    bg-secondary
                    p-1
                    top-1
                    left-1
                    text-[0.675rem]
                    z-10
                "
        >
            {{ discountPercentage(product.price, product.discount_price) }}
        </div>
        <div>
            <div class="w-full mx-auto">
                <div v-if="!slider">
                    <a :href="route('product',product.id)">
                        <picture>
                            <source v-lazy :data-src="route('images.350',product.preview.webp_src)"
                                    type="image/webp">
                            <img v-lazy
                                 :data-src="route('images.350',product.preview.src)"
                                 :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"
                                 class="h-full object-cover w-full rounded-t-lg  h-56 md:h-72 swiper-lazy"
                            >
                        </picture>
                    </a>
                </div>
                <div v-if="slider">
                    <swiper v-bind="settings" :modules="modules" class="mySwiper">
                        <swiper-slide>
                            <a :href="route('product',product.id)">
                                <picture>
                                    <source v-lazy :data-src="route('images.350',product.preview.webp_src)"
                                            type="image/webp">
                                    <img v-lazy
                                         :data-src="route('images.350',product.preview.src)"
                                         class="h-full object-cover w-full rounded-t-lg  h-56 md:h-72 swiper-lazy"
                                    >
                                </picture>
                            </a>
                        </swiper-slide>
                        <swiper-slide v-for="image in product.images">
                            <a :href="route('product',product.id)">
                                <img :data-src="route('images.350',image.src) "
                                     :data-srcset="route('images.350',image.webp_src) "
                                     :alt="product.h1[lang]"
                                     class="h-full object-cover w-full rounded-t-lg  h-56 md:h-72 swiper-lazy"
                                >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                            </a>
                        </swiper-slide>
                        <div class="swiper-button-next">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g stroke-width="0"></g>
                                <g stroke-linecap="round" stroke-linejoin="round"></g>
                                <g>
                                    <path
                                        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-opacity=".3" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="swiper-button-prev">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g stroke-width="0"></g>
                                <g stroke-linecap="round" stroke-linejoin="round"></g>
                                <g>
                                    <path
                                        d="M14.9998 19.9201L8.47984 13.4001C7.70984 12.6301 7.70984 11.3701 8.47984 10.6001L14.9998 4.08008"
                                        stroke="#292D32" stroke-opacity=".3" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                    </swiper>
                </div>

            </div>
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
                            h-18
                            md:h-12
                            font-subheading
                            text-base
                        "
                >
                    {{ lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null) }}
                </h5>

            </a>
            <div class="text-sm text-gray-500 font-text w-full mb-3">
                <span v-for="size in product.sizes">
                    {{ size.title }}&nbsp;
                </span>
            </div>

            <div class="card__price flex-col mr-auto font-subheading">
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
                   @click="addToCard(product.id)"
                   class="
                            w-12
                            h-12
                            md:w-14
                            md:h-14
                            rounded-full
                            flex
                            justify-center
                            items-center
                            col-span-1
                            absolute
                            right-[-7px]
                            bottom-[-7px]
                            bg-button
                            hover:bg-accent
                            hover:scale-105
                            transition-all
                            duration-500
                    ">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="12.459" cy="22.2084" rx="1.625" ry="1.625" fill="white"></ellipse>
                        <circle cx="18.959" cy="22.2084" r="1.625" fill="white"></circle>
                        <path
                            d="M7.32572 7.04167L9.60348 17.2435C9.75655 17.9291 10.3649 18.4167 11.0674 18.4167H20.0919C20.7944 18.4167 21.4028 17.9291 21.5559 17.2435L23.4258 8.86852C23.635 7.93136 22.9221 7.04167 21.9618 7.04167H7.32572ZM7.32572 7.04167L6.59497 4.35616C6.41728 3.70315 5.82435 3.25 5.1476 3.25H2.16699"
                            stroke="white" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>

</template>

<script setup>
import {computed, inject, ref} from "vue";
import {useStore} from "vuex";
import {useGtm} from "@gtm-support/vue-gtm";
import vLazy from '@/Includes/lazyload.js'
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Lazy, Navigation} from "swiper";

const props = defineProps({
    product: Object,
    lang: String,
    textGoToProductCard: {
        type: String,
        default: 'Докладніше'
    },
    slider: {
        type: Boolean,
        default: false
    }
});

const modules = [Lazy, Navigation];
const settings = {
    slidesPerView: 1,
    lazy: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,

    // style: {
    //     '--swiper-navigation-color': 'rgba(255, 255, 255, 0.3)',
    //     '--swiper-pagination-color': 'rgba(255, 255, 255, 0.3)',
    // }
};

const store = useStore();
const swal = inject('$swal');
const gtm = useGtm();
const item = ref({
    count: 1,
    size: [],
    color: [],
    item_id: null,
    src: route(route().current(), route().params),
    event_id: ''
});

const discountPercentage = computed(() => (price, discount_price) => `- ${(((price - discount_price) * 100) / price).toFixed()}%`);

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function addToCard(id) {
    item.value.item_id = id;
    item.value.event_id = uuidv4() + '_AddToCard' + '_' + new Date().getTime();
    console.log(item.value.event_id)
    axios.post(route('api.v1.cart.add', item.value))
        .then(() => {
            store.commit('loadCart');
            if (import.meta.env.MODE === 'production') {
                try {
                    fbq('track',
                        'AddToCart',
                        {
                            "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                            "currency": "UAH",
                            "content_type": "product",
                            "content_ids": [item.value.item_id],
                            "content_name": props.product.h1
                        },
                        {
                            event_id: item.value.event_id
                        }
                    );

                    gtm.trackEvent({
                        event: 'add_product_to_cart',
                        ecommerce: {
                            items: [{
                                item_name: props.product.h1,
                                item_id: item.value.item_id,
                                price: props.product.discount_price ? props.product.discount_price : props.product.price,
                                quantity: 1
                            }]
                        }
                    });
                } catch (e) {
                    console.log(e);
                }
            }
            swal({
                icon: 'success',
                title: 'Товар додано до вашого кошика!',
                text: 'Ви можете оформити замовлення або продовжити покупки :)',
                showCancelButton: true,
                confirmButtonText: 'Оформити замовлення',
                cancelButtonText: 'Продовжити покупки',

            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = route('checkout');
                }
            })

        })
        .catch(() => {
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректність данних'
            })
        });
}
</script>

<style>
/*.swiper-button-prev {*/
/*    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%234c71ae'%2F%3E%3C%2Fsvg%3E") !important;*/
/*}*/

.swiper-button-prev::after {
    display: none;
    /*content: "";*/
    /*border: solid black;*/
    /*border-width: 0 3px 3px 0;*/
    /*display: inline-block;*/
    /*padding: 3px;*/
    /*transform: rotate(135deg);*/
    /*background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 17.00 17.00' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='si-glyph si-glyph-arrow-left' fill='none'%3E%3Cg stroke-width='0'%3E%3C/g%3E%3Cg stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg%3E%3Cdefs%3E%3C/defs%3E%3Cg stroke-width='0.00017' fill='none'%3E%3Cpath d='M10.978,1.162 C10.978,1.387 10.916,1.612 10.782,1.812 L6.626,8.041 L10.823,14.078 C11.182,14.619 11.036,15.348 10.495,15.707 C9.956,16.068 9.224,15.922 8.865,15.382 L4.235,8.694 C3.971,8.3 3.969,7.786 4.233,7.39 L8.822,0.51 C9.182,-0.032 9.914,-0.178 10.454,0.181 C10.795,0.409 10.978,0.782 10.978,1.162 L10.978,1.162 Z' fill='%23b8b8b8' fill-opacity='0.3' class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important*/
}

.swiper-button-next::after {
    display: none;
    /*content: "";*/
    /*border: solid black;*/
    /*border-width: 0 3px 3px 0;*/
    /*display: inline-block;*/
    /*padding: 3px;*/
    /*transform: rotate(-45deg);*/
    /*background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 17.00 17.00' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' class='si-glyph si-glyph-arrow-left' fill='none'%3E%3Cg stroke-width='0'%3E%3C/g%3E%3Cg stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg%3E%3Cdefs%3E%3C/defs%3E%3Cg stroke-width='0.00017' fill='none'%3E%3Cpath d='M10.978,1.162 C10.978,1.387 10.916,1.612 10.782,1.812 L6.626,8.041 L10.823,14.078 C11.182,14.619 11.036,15.348 10.495,15.707 C9.956,16.068 9.224,15.922 8.865,15.382 L4.235,8.694 C3.971,8.3 3.969,7.786 4.233,7.39 L8.822,0.51 C9.182,-0.032 9.914,-0.178 10.454,0.181 C10.795,0.409 10.978,0.782 10.978,1.162 L10.978,1.162 Z' fill='%23b8b8b8' fill-opacity='0.3' class='si-glyph-fill'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E") !important*/
}

/*.swiper-button-prev::after,*/
/*.swiper-button-next::after {*/
/*    display: none;*/
/*}*/
/*.swiper-button-prev img {*/
/*    transform: rotate(180deg);*/
/*}*/
</style>
