<template>
    <div class="grid grid-cols-1 gap-4">
        <div class="border-b border-red-200 dark:border-red-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-main">
                <li class="mr-2" v-for="item in items" @click="setActiveTab(item.key,item.value,item.class)">
                    <a href="javascript:"
                       class="
                            inline-flex
                            p-4
                            border-b-2
                            border-transparent
                            rounded-t-lg
                            hover:text-accent
                            hover:border-accent
                            group
                            font-subheading
                            text-base
                        "
                       :class="{'text-red-600 border-red-600' : state.active === item.key}"
                    >
                        {{ item.label }}
                    </a>
                </li>
            </ul>
        </div>
        <div v-html="state.content" :class="state.class"></div>
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

const state = ref({
    active: 'characteristics',
    content: props.lang === 'ru' ? JSON.parse(props.characteristics).ru : JSON.parse(props.characteristics).ua,
    class: 'characteristics-table'
})
// const active = ref('characteristics');
// const content = ref(JSON.parse(props.characteristics));
const items = [
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

function setActiveTab(key, val, style) {
    state.value.active = key;
    state.value.content = key === 'sizeTable' ? val : (props.lang === 'ru' ? val.ru : val.ua);
    state.value.class = style;
    // active.value = key;
    // content.value = props.lang === 'ru' ? val.ru : val.ua;
}
</script>
