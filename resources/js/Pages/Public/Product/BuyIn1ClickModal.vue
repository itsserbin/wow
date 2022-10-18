<template>
    <modal size="small"
           submit-button-text="Замовити"
           @submitForm="sendForm"
           @closeModal="$emit('closeModal')"
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

    <!--    <modal :is-active="isActive"-->
    <!--           @closeModal="$emit('closeModal')"-->
    <!--           @sendForm="sendForm"-->
    <!--           text-send="Відправити"-->
    <!--           text-cancel="Відмінити"-->
    <!--           :is-loading="isLoading"-->
    <!--           id="buy-in-1-click"-->
    <!--    >-->
    <!--        <div class="input phone" slot="content">-->
    <!--            <label>Імʼя-->
    <!--                <input type="text"-->
    <!--                       class="name"-->
    <!--                       placeholder="Ваше імʼя"-->
    <!--                       v-model="order.name"-->
    <!--                />-->
    <!--            </label>-->
    <!--        </div>-->

    <!--        <div class="input phone" slot="content">-->
    <!--            <label>Ваш телефон <span class="required">*</span>-->
    <!--                    <input v-maska="'+38 (0##) ###-##-##'"-->
    <!--                           type="tel"-->
    <!--                           class="phone"-->
    <!--                           placeholder="+38 (0"-->
    <!--                           v-model="order.phone"-->
    <!--                           :class="{'is-invalid': errors.phone}"-->
    <!--                    />-->
    <!--                <input-invalid-feedback v-if="errors.phone"-->
    <!--                                        :errors="errors.phone"-->
    <!--                ></input-invalid-feedback>-->
    <!--            </label>-->
    <!--        </div>-->

    <!--    </modal>-->
</template>

<script setup>
import {ref} from "vue";

defineEmits(['closeModal']);

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

function sendForm() {
    state.value.isLoading = true;
    state.value.errors = [];
    axios.post(route('api.v1.orders.create'), state.value.order)
        .then(({data}) => {
            // if (typeof fbq !== "undefined") {
            //     fbq('track', 'Purchase', {
            //         "value": this.cart.totalPrice,
            //         "currency": "UAH",
            //         "content_type": "product",
            //         "num_items": this.cart.totalCount,
            //         "content_ids": this.contentIds
            //     });
            //
            //     if (typeof this.$gtm !== "undefined") {
            //         this.$gtm.trackEvent({
            //             event: 'send_order',
            //             ecommerce: {
            //                 transaction_id: data.order.id,
            //                 value: data.order.total_price,
            //                 currency: "UAH",
            //                 items: this.ga4ProductsArray
            //             }
            //         });
            //     }
            //
            // }
            state.value.isLoading = false;
            window.location.href = route('thanks', data.order.id);
        })
        .catch(({response}) => {
            state.value.errors = response.data;
            state.value.isLoading = false;
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректніть данних',
            })
        });}

// export default {
//     props: ['isActive', 'item'],
//     emits: ['closeModal'],
//     data() {
//         return {
//             order: {
//                 name: null,
//                 last_name: null,
//                 middle_name: null,
//                 email: null,
//                 comment: null,
//                 phone: null,
//                 city: null,
//                 postal_office: null,
//                 payment_method: null,
//             },
//             errors: [],
//             response: {
//                 isActive: false,
//                 icon: null,
//                 text: null,
//                 title: null
//             },
//             isLoading: false,
//             cart: this.$store.state,
//         }
//     },
//     methods: {
//         sendForm() {
//             this.isLoading = true;
//             axios.post('/api/v1/cart/add', this.item)
//             this.$store.commit('loadCart');
//             axios.post('/api/v1/order/create', this.order)
//                 .then(({data}) => {
//                     if (typeof fbq !== "undefined") {
//                         fbq('track', 'Purchase', {
//                             "value": this.cart.totalPrice,
//                             "currency": "UAH",
//                             "content_type": "product",
//                             "num_items": this.cart.totalCount,
//                             "content_ids": this.contentIds
//                         });
//
//                         if (typeof this.$gtm !== "undefined") {
//                             let ga4ProductsArray = [];
//
//                             this.cart.list.forEach((item) => {
//                                 ga4ProductsArray.push({
//                                     item_name: item.name.ua ? item.name.ua : item.name.ru,
//                                     item_id: item.id,
//                                     price: item.discount_price ? item.discount_price : item.price,
//                                     quantity: item.count
//                                 })
//                             })
//
//                             this.$gtm.trackEvent({
//                                 event: 'send_order',
//                                 ecommerce: {
//                                     transaction_id: data.order.id,
//                                     value: data.order.total_price,
//                                     currency: "UAH",
//                                     items: ga4ProductsArray
//                                 }
//                             });
//                         }
//
//                     }
//                     this.isLoading = false;
//                     window.location.href = '/send-form?order=' + data.order.id;
//                 })
//                 .catch(({response}) => {
//                     this.errors = response.data;
//                     this.isLoading = false;
//                 });
//         }
//     }
// }
</script>
