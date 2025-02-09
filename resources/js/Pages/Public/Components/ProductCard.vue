<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useGtm} from "@gtm-support/vue-gtm";
import {swal} from '@/Includes/swal';
import {Link} from "@inertiajs/inertia-vue3";
import eventTracking from "@/Includes/eventTracking";

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

const store = useStore();

const gtm = useGtm();
const item = ref({
    count: 1,
    size: [],
    color: [],
    item_id: null,
    src: typeof window !== 'undefined' ? window.location.href : null,
    event_id: ''
});

const discountPercentage = computed(() => (price, discount_price) => `- ${(((price - discount_price) * 100) / price).toFixed()}%`);

const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const addToCard = async (id) => {
    item.value.item_id = id;
    item.value.event_id = uuidv4() + '_AddToCard' + '_' + new Date().getTime();
    await axios.post(route('api.v1.cart.add', item.value))
        .then(async () => {
            store.commit('loadCart');
            if (import.meta.env.MODE === 'production') {
                try {
                    eventTracking(
                        'AddToCart',
                        {
                            "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                            "currency": "UAH",
                            "content_type": "product",
                            "content_ids": [item.value.item_id],
                            "content_name": props.product.h1
                        },
                        item.value.event_id
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
            await swal({
                icon: 'success',
                title: 'Товар додано до вашого кошика!',
                text: 'Ви можете оформити замовлення або продовжити покупки :)',
                showCancelButton: true,
                confirmButtonText: 'Оформити замовлення',
                cancelButtonText: 'Продовжити покупки',

            }).then((result) => {
                if (result.isConfirmed && typeof window !== 'undefined') {
                    window.location.href = route('checkout');
                }
            })

        })
        .catch(async () => {
            await swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректність данних'
            })
        });
}
</script>

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
        <Link class="w-full mx-auto" :href="route('product',product.id)">
            <picture v-if="product.preview">
                <source :srcset="route('images.350',product.preview.webp_src)"
                        v-if="product.preview.webp_src"
                        type="image/webp">

                <img :src="route('images.350',product.preview.src)"
                     :alt="product.h1[lang]"
                     class="object-cover w-full rounded-t-lg h-56 md:h-72 "
                     loading="lazy"
                >
            </picture>
        </Link>

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
            <Link :href="route('product',product.id)">

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
                    {{ product.h1[$page.props.lang] }}
                </h5>

            </Link>
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

<style>
.product-card-swiper .swiper-button-prev {
    left: 0;
}

.product-card-swiper .swiper-button-next {
    right: 0;
}

.product-card-swiper .swiper-button-prev::after,
.product-card-swiper .swiper-button-next::after {
    font-size: 20px;
}
</style>
