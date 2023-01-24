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
                    <input-error v-if="state.errors.phone" v-for="error in state.errors.phone" :message="error"/>
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
const props = defineProps([
    'item',
    'product',
    'eventIdPurchaseIn1Click',
    'eventIdAddToCard',
]);
const gtm = useGtm();
const swal = inject('$swal');
const order = ref({
    name: '',
    last_name: '',
    middle_name: '',
    email: null,
    comment: null,
    phone: null,
    city: null,
    postal_office: null,
    payment_method: null,
    event_id: props.eventIdPurchaseIn1Click
});

const state = ref({
    isLoading: false,
    errors: [],
    isAddToCart: false,
    contentIds: [],
    ga4ProductsArray: []
});

const store = useStore();

async function sendForm() {
    state.value.errors = [];
    state.value.isLoading = true;

    if (!state.value.isAddToCart) {
        await axios.post(route('api.v1.cart.add'), props.item)
            .then(() => {
                state.value.isAddToCart = true;
                if (import.meta.env.MODE === 'production') {
                    try {
                        fbq('track',
                            'AddToCart',
                            {
                                "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                                "currency": "UAH",
                                "content_type": "product",
                                "content_ids": [props.item.item_id],
                                "content_name": props.product.h1
                            },
                            {
                                event_id: props.eventIdAddToCard
                            }
                        );
                    } catch (e) {
                        console.error(e);
                    }
                }
                store.commit('loadCart');
                createOrder();
            })
    } else {
        await createOrder();
    }
}

async function createOrder() {
    await axios.post(route('api.v1.orders.create.1click'), order.value)
        .then(({data}) => {
            if (import.meta.env.MODE === 'production') {
                try {
                    store.state.list.forEach((item) => {
                        state.value.contentIds.push(item.id);
                        state.value.ga4ProductsArray.push({
                            item_name: item.name.ua ? item.name.ua : item.name.ru,
                            item_id: item.id,
                            price: item.discount_price ? item.discount_price : item.price,
                            quantity: item.count
                        })
                    });

                    fbq('track',
                        'Purchase',
                        {
                            "value": store.state.totalPrice,
                            "currency": "UAH",
                            "content_type": "product",
                            "num_items": store.state.totalCount,
                            "content_ids": state.value.contentIds
                        },
                        {
                            event_id: props.eventIdPurchaseIn1Click
                        }
                    );

                    gtm.trackEvent({
                        event: 'send_order',
                        ecommerce: {
                            transaction_id: data.order.id,
                            value: data.order.total_price,
                            currency: "UAH",
                            items: state.value.ga4ProductsArray
                        }
                    });
                } catch (e) {
                    console.log(e);
                }
            }
            axios.post(route('sms.new.order'), {
                order_id: data.order.id,
                phone: data.order.client.phone,
            })
            state.value.isLoading = false;
            window.location.href = route('thanks', data.order.id);
        })
        .catch(({response}) => {
            state.value.errors = response.data;
            state.value.isLoading = false;
        });
}
</script>
