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
                                 :data-src="route('images.350',product.preview.src) "
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

                                <img :data-src="route('images.350',product.preview.src) "
                                     :data-srcset="route('images.350',product.preview.webp_src) "
                                     :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"
                                     class="h-full object-cover w-full rounded-t-lg  h-56 md:h-72 swiper-lazy"
                                >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                            </a>
                        </swiper-slide>
                        <swiper-slide v-for="image in product.images">
                            <a :href="route('product',product.id)">
<!--                                <picture>-->
<!--                                    <source v-lazy :data-src="route('images.350',image.webp_src)" type="image/webp">-->
<!--                                    <img v-lazy-->
<!--                                         :data-src="route('images.350',image.src) "-->
<!--                                         :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"-->
<!--                                         class="h-full object-cover w-full rounded-t-lg h-56 md:h-72 swiper-lazy"-->
<!--                                    >-->
<!--                                </picture>-->
                                <img :data-src="route('images.350',image.src) "
                                     :data-srcset="route('images.350',image.webp_src) "
                                     :alt="product.h1[lang]"
                                     class="h-full object-cover w-full rounded-t-lg  h-56 md:h-72 swiper-lazy"
                                >
                                <div class="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
                            </a>
                        </swiper-slide>
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
    navigation: true,
    loop: true,
    style: {
        '--swiper-navigation-color': 'rgba(255, 255, 255, 0.3)',
        '--swiper-pagination-color': 'rgba(255, 255, 255, 0.3)',
    }
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
