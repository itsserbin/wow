<template>
    <section class="grid gap-4 grid-cols-1">
        <div class="grid grid-cols-1 gap-4">
            <h1 class="font-bold text-black text-center text-2xl">
                {{ textThanksPageTitle }}
            </h1>

            <div class="text-center text-xl">
                <p>{{ textThanksPageDescription }}</p>
            </div>

            <div class="text-center text-xl" v-if="state.orderId">
                {{ textThanksPageOrderId }} {{ state.orderId }}
            </div>
        </div>

        <loader v-if="state.isLoading"></loader>
        <div v-if="!state.isLoading">
            <div v-if="state.activeSpecialOffer" class="grid gap-4 mt-5">
                <div class="font-bold text-black text-center text-2xl">
                    {{ textThanksPageSpecials }}
                </div>
                <Timer :timer="timer"/>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ProductCard v-for="product in state.products"
                                 :product="product"
                                 @addItemToOrder="addItemToOrder"
                                 :lang="lang"
                    />
                </div>
                <!--                <div class="row">-->
                <!--                    <div class="product-list">-->
                <!--                        <div class="col-6 col-md-3 card__product" v-for="(product,i) in products" :key="i">-->
                <!--                            <div class="card__image">-->
                <!--                                <a class="text-decoration-none" :href="route('product',product.id)">-->
                <!--                                    <img :src="route('images.product.350',product.preview)"-->
                <!--                                         :alt="lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null)"-->
                <!--                                    >-->
                <!--                                </a>-->
                <!--                            </div>-->
                <!--                            <div class="card__body">-->
                <!--                                <h5 class="card__label">-->
                <!--                                    {{ lang === 'ru' ? product.h1.ru : (lang === 'ua' ? product.h1.ua : null) }}-->
                <!--                                </h5>-->
                <!--                                <div class="card__price">-->
                <!--                                    <div v-if="!product.discount_price"-->
                <!--                                         class="card__price-without-discount">{{ product.price }} грн.-->
                <!--                                    </div>-->

                <!--                                    <div v-if="product.discount_price" class="card__discount_price">-->
                <!--                                        <div class="card__old-price">{{ product.price }} грн.</div>-->
                <!--                                        <div class="card__actual-price">{{ product.discount_price }} грн.</div>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <span class="card__button"-->
                <!--                                      @click="addItemToOrder(product.id,product.discount_price)">-->
                <!--                                    {{ textThanksPageAddItem }}-->
                <!--                                </span>-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
            <div v-else class="order-page__text my-5">
                <p>{{ textThanksPageSpecialsEnds }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import Timer from '@/Pages/Public/Thanks/Timer.vue'
import ProductCard from '@/Pages/Public/Thanks/ProductCard.vue'

defineProps({
    lang: String,
    textThanksPageTitle: {
        type: String,
        default: 'Дякую за ваше замовлення :)'
    },
    textThanksPageDescription: {
        type: String,
        default: 'Найближчим часом з вами зв\'яжеться оператор для підтвердження замовлення.',
    },
    textThanksPageOrderId: {
        type: String,
        default: 'Номер вашого замовлення:'
    },
    textThanksPageSpecials: {
        type: String,
        default: 'Спеціальні пропозиції. Встигни додати до замовлення'
    },
    textThanksPageSpecialsEnds: {
        type: String,
        default: 'Час дії пропозиції минув. Сподіваємось, Вас зацікавлять наші акції наступного разу. Починаємо готувати посилку і незабаром відправимо Ваше замовлення'
    },
});

const timer = ref({
    hours: '',
    mins: '',
    secs: '',
});

const state = ref({
    orderId: null,
    isLoading: true,
    products: [],
    activeSpecialOffer: false,
});

const swal = inject('$swal');

onMounted(() => {
    state.value.orderId = route().params.id;

    axios.get(route('api.v1.orders.special', state.value.orderId))
        .then(({data}) => {
            if (data.result) {
                setInterval(function () {
                    let t = new Date(data.result.end_time).getTime() - new Date().getTime();
                    if (t >= 0) {
                        timer.value.hours = ('0' + Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
                        timer.value.mins = ('0' + Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
                        timer.value.secs = ('0' + Math.floor((t % (1000 * 60)) / 1000)).slice(-2);
                        state.value.activeSpecialOffer = true;
                        state.value.products = data.result.products;
                        state.value.isLoading = false;
                    } else {
                        state.value.activeSpecialOffer = false;
                        state.value.isLoading = false;
                    }
                }, 1000);
            } else {
                state.value.isLoading = false;
                state.value.activeSpecialOffer = false;
            }

        })
});

function addItemToOrder(id, price) {
    axios.post('/api/v1/order/add-item/' + state.value.orderId, {
        'id': id,
        'price': price,
    })
        .then(() => swal({
            icon: 'success',
            title: 'Додано!',
            text: 'Товар успішно додано до вашого замовлення',
        }))
        .catch((response) => {
            console.log(response);
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Зверніться до адміністратора',
            })
        })
}

// export default {
//
//     mounted() {
//         this.orderId = new URLSearchParams(window.location.search).get('order');
//
//         axios.get('/api/v1/order/special/' + this.orderId)
//             .then(({data}) => {
//                 if (data.result) {
//                     const self = this;
//                     setInterval(function () {
//                         let t = new Date(data.result.end_time).getTime() - new Date().getTime();
//                         if (t >= 0) {
//                             self.timer.hours = ('0' + Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
//                             self.timer.mins = ('0' + Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
//                             self.timer.secs = ('0' + Math.floor((t % (1000 * 60)) / 1000)).slice(-2);
//                             self.activeSpecialOffer = true;
//                             self.products = data.result.products;
//                             self.isLoading = false;
//                         } else {
//                             self.activeSpecialOffer = false;
//                             self.isLoading = false;
//                         }
//                     }, 1000);
//                 } else {
//                     this.isLoading = false;
//                     this.activeSpecialOffer = false;
//                 }
//
//             })
//     },
//     methods: {
//         clearResponse() {
//             this.response = {
//                 isActive: false,
//                 icon: null,
//                 text: null,
//                 title: null
//             }
//         },
//         addItemToOrder(id, price) {
//             this.clearResponse();
//             axios.post('/api/v1/order/add-item/' + this.orderId, {
//                 'id': id,
//                 'price': price,
//             })
//                 .then(() => this.response = {
//                     isActive: true,
//                     icon: 'success',
//                     title: 'Додано!',
//                     text: 'Товар успішно додано до вашого замовлення',
//                 })
//                 .catch((response) => {
//                     console.log(response);
//                     this.response = {
//                         isActive: true,
//                         icon: 'error',
//                         title: 'Виникла помилка',
//                         text: 'Зверніться до адміністратора',
//                     }
//                 })
//         }
//     }
// }
</script>
