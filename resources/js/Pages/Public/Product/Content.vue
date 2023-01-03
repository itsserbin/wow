<template>
    <div class="border-b border-red-200 dark:border-red-700">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-red-500 dark:text-red-400">
            <li class="mr-2" v-for="item in state" @click="setActiveTab(item.key)">
                <a href="javascript:"
                   class="
                            inline-flex
                            p-4
                            border-b-2
                            border-transparent
                            rounded-t-lg
                            hover:text-red-600
                            hover:border-red-300
                            dark:hover:text-red-300
                            group
                        "
                   :class="{'text-red-600' : active === item.key}"
                >
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </div>
    <div v-for="item in state" :class="item.class">
        <div
            v-html="active === item.key ? (active === 'sizeTable' ? item.value : (lang === 'ru' ? item.value.ru : item.value.ua )) : null"></div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps([
    'lang',
    'description',
    'characteristics',
    'sizeTable',
    'youtube',
    'returnAndExchangeUa',
    'returnAndExchangeRu',
    'deliveryAndPaymentUa',
    'deliveryAndPaymentRu',
]);

const active = ref('characteristics');

const state = [
    {
        label: 'Характеристики',
        key: 'characteristics',
        value: JSON.parse(props.characteristics),
        class: 'characteristics-table'
    },
    {
        label: 'Таблиця розмірів',
        key: 'sizeTable',
        value: JSON.parse(props.sizeTable),
        class: 'sizes-table'
    },
    {
        label: 'Доставка та оплата',
        key: 'deliveryAndPayment',
        value: {
            ua: props.deliveryAndPaymentUa,
            ru: props.deliveryAndPaymentRu
        },
        class: 'content'
    },
    {
        label: 'Повернення та обмін',
        key: 'returnAndExchange',
        value: {
            ua: props.returnAndExchangeUa,
            ru: props.returnAndExchangeRu
        },
        class: 'content'
    },
];

function setActiveTab(val) {
    active.value = val;
}
</script>
