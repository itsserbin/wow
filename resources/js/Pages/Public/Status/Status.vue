<script setup>
import {computed} from "vue";
import OrderItem from '@/Pages/Public/Status/OrderItem.vue';

const props = defineProps(['order', 'statuses']);

const name = computed(() => {
    const {name, last_name, middle_name} = props.order.client;
    return `${name ? name : ''} ${last_name ? last_name : ''} ${middle_name ? middle_name : ''}`;
})

</script>

<template>
    <div>
        <div class="grid grid-cols-1 gap-4">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
                <h3 class="font-semibold text-xl">ID завомлення:</h3>
                <div class="text-xl">{{ order.id }}</div>
            </div>
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
                <h3 class="font-semibold text-xl">Статус виконання:</h3>
                <div class="text-xl">{{
                        order.status === 'transferred_to_supplier' ? 'Передано до упакування' : props.statuses[order.status]
                    }}
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
                <h3 class="font-semibold text-xl">Загальна сума замовлення:</h3>
                <div class="text-xl">{{ order.total_price }}</div>
            </div>
            <div class="grid grid-cols-2 gap-4 justify-center items-center" v-if="order.prepayment_sum">
                <h3 class="font-semibold text-xl">Передоплата:</h3>
                <div class="text-xl">{{ order.prepayment_sum }}</div>
            </div>
            <hr class="my-3">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
                <h3 class="font-semibold text-xl">Контактні дані:</h3>
                <div class="text-xl">{{ name }}</div>
            </div>
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
                <h3 class="font-semibold text-xl">Номер телефону:</h3>
                <div class="text-xl">{{ order.client.phone }}</div>
            </div>
            <hr class="my-3">
            <div class="grid grid-cols-2 gap-4 justify-center items-center" v-if="order.city">
                <h3 class="font-semibold text-xl">Місто призначення:</h3>
                <div class="text-xl">{{ order.city }}</div>
            </div>
            <div class="grid grid-cols-2 gap-4 justify-center items-center" v-if="order.postal_office">
                <h3 class="font-semibold text-xl">Почтове відділення:</h3>
                <div class="text-xl">{{ order.postal_office }}</div>
            </div>
            <div class="grid grid-cols-2 gap-4 justify-center items-center" v-if="order.waybill">
                <h3 class="font-semibold text-xl">Номер накладної:</h3>
                <div class="text-xl">{{ order.waybill }}</div>
            </div>
            <div class="block">
                <OrderItem v-for="item in order.items" :item="item"/>
            </div>
        </div>
    </div>
</template>
