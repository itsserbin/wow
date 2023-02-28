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

        <div v-html="state.content"
             :class="state.class"
             v-if="state.active !== 'characteristics' && state.active !== 'youtube'"
        ></div>

        <iframe width="100%"
                height="500px"
                :src="state.content"
                v-if="state.active === 'youtube'"
        ></iframe>

        <component :is="isActiveCharacteristic" :items="characteristics" :lang="lang"></component>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import Characteristic from '@/Pages/Public/Product/Characteristics.vue'

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
    active: '',
    content: '',
    class: ''
});

const isActiveCharacteristic = computed(() => state.value.active === 'characteristics' ? Characteristic : null);

const items = [
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

if ((props.youtube).length) {
    items.unshift({
        label: 'Відео-огляд',
        key: 'youtube',
        value: props.youtube,
        class: 'youtube'
    });
    state.value = {
        active: 'youtube',
        content: props.youtube,
        class: 'youtube'
    };
}

if (Object.keys(JSON.parse(props.sizeTable)).length) {
    items.unshift({
        label: 'Таблиця розмірів',
        key: 'sizeTable',
        value: JSON.parse(props.sizeTable),
        class: 'sizes-table'
    });
    state.value = {
        active: 'sizeTable',
        content: JSON.parse(props.sizeTable),
        class: 'sizes-table'
    };
}

if (Object.keys(JSON.parse(props.characteristics)).length) {
    items.unshift({
        label: 'Характеристики',
        key: 'characteristics',
        value: JSON.parse(props.characteristics),
        class: 'characteristics-table'
    });
    state.value = {
        active: 'characteristics',
        content: '',
        class: 'characteristics-table'
    };
}

const setActiveTab = (key, val, style) => {
    state.value.active = key;
    switch (key) {
        case 'sizeTable':
        case 'youtube':
            state.value.content = val;
            break;
        case 'characteristics':
            state.value.content = key;
            break;
        default:
            state.value.content = props.lang === 'ru' ? val.ru : val.ua;
            break;
    }
    state.value.class = style;
};
</script>
