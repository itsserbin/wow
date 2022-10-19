<template>
    <modal size="small"
           submit-button-text="Замовити"
           @submitForm="sendForm"
           @closeModal="$emit('closeModal')"
           :is-loading="state.isLoading"
    >
        <template #content>
            <div class="grid gap-4">
                <div class="block">
                    <label-component>Ім`я</label-component>
                    <input-component type="text"
                                     v-model="order.name"
                                     placeholder="Введіть ваше ім'я"
                    />
                </div>
                <div class="block">
                    <label-component :required="true">Ваш телефон</label-component>
                    <input-component type="tel"
                                     v-maska="'+38 (0##) ###-##-##'"
                                     v-model="order.phone"
                                     placeholder="+38 (0"
                                     class="phone"
                    />
                </div>
            </div>
        </template>
    </modal>
</template>

<script setup>
import {inject, ref} from "vue";
import {useGtm} from "@gtm-support/vue-gtm";
import {useStore} from "vuex";

defineEmits(['closeModal']);
const props = defineProps(['item']);
const gtm = useGtm();
const swal = inject('$swal');
const order = ref({
    name: null,
    last_name: null,
    middle_name: null,
    email: null,
    comment: null,
    phone: null,
    city: null,
    postal_office: null,
    payment_method: null,
});

const state = ref({
    isLoading: false,
    contentIds: [],
    ga4ProductsArray: []
});

const store = useStore();

function sendForm() {
    state.value.isLoading = true;
    state.value.errors = [];
    axios.post(route('api.v1.cart.add'), props.item)
    store.commit('loadCart');
    axios.post(route('api.v1.orders.create'), order.value)
        .then(({data}) => {
            if (import.meta.env.MODE === 'production') {
                store.state.list.forEach((item) => {
                    state.value.contentIds.push(item.id);
                    state.value.ga4ProductsArray.push({
                        item_name: item.name.ua ? item.name.ua : item.name.ru,
                        item_id: item.id,
                        price: item.discount_price ? item.discount_price : item.price,
                        quantity: item.count
                    })
                });

                fbq('track', 'Purchase', {
                    "value": store.state.totalPrice,
                    "currency": "UAH",
                    "content_type": "product",
                    "num_items": store.state.totalCount,
                    "content_ids": state.value.contentIds
                });

                gtm.trackEvent({
                    event: 'send_order',
                    ecommerce: {
                        transaction_id: data.order.id,
                        value: data.order.total_price,
                        currency: "UAH",
                        items: state.value.ga4ProductsArray
                    }
                });
            }
            state.value.isLoading = false;
            window.location.href = route('thanks', data.order.id);
        })
        .catch((errors) => {
            console.log(errors);
            state.value.isLoading = false;
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректніть данних',
            })
        });
}
</script>
