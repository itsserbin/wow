<template>
    <MasterLayout :categories="categories"
                  :options="options"
                  :lang="lang"
                  :pages="pages"
                  :eventIdPageView="eventIdPageView"
    >
        <section class="grid gap-4 grid-cols-1">
            <div class="grid grid-cols-1 gap-4">
                <h1 class="font-bold text-black text-center text-2xl font-heading">
                    {{ textThanksPageTitle }}
                </h1>

                <div class="text-center text-xl font-subheading">
                    <p>{{ textThanksPageDescription }}</p>
                </div>

                <div class="text-center text-xl font-subheading" v-if="state.orderId">
                    {{ textThanksPageOrderId }} {{ state.orderId }}
                </div>
            </div>

            <div v-if="state.activeSpecialOffer" class="grid gap-4 mt-5">
                <div class="font-bold text-black text-center text-2xl font-subheading">
                    {{ textThanksPageSpecials }}
                </div>
                <Timer :timer="timer"/>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ProductCard v-for="product in state.products" :product="product" @addItemToOrder="addItemToOrder"
                                 :lang="lang"/>
                </div>
            </div>
            <div v-else class="order-page__text my-5">
                <p>{{ textThanksPageSpecialsEnds }}</p>
            </div>
        </section>
    </MasterLayout>
</template>

<script setup>
import {getCurrentInstance, inject, onMounted, ref} from "vue";
import Timer from '@/Pages/Public/Thanks/Timer.vue'
import ProductCard from '@/Pages/Public/Thanks/ProductCard.vue'
import {isLoading} from "@/Pages/Public/load";
import MasterLayout from '@/Layouts/MasterLayout.vue'
import {swal} from '@/Includes/swal';

// const {appContext} = getCurrentInstance()
// const {$fbq} = appContext.config.globalProperties

const props = defineProps({
    categories: Array,
    options: Object,
    pages: Array,
    lang: String,
    eventIdPageView: String,
    textThanksPageTitle: {
        type: String,
        default: 'Дякую за ваше замовлення :)'
    },
    textThanksPageDescription: {
        type: String,
        default: 'Найближчим часом з вами зв`яжеться оператор для підтвердження замовлення.',
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

onMounted(async () => {
    state.value.orderId = route().params.id;

    await axios.get(route('api.v1.orders.special', state.value.orderId))
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

    isLoading.value = false;

    // if (import.meta.env.MODE === 'production') {
    //     try {
    //         $fbq('PageView', {}, props.eventIdPageView);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
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
</script>
