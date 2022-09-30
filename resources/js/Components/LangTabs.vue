<template>
    <Tabs :data="tabsData"
          :activeItem="activeItem ? activeItem : defaultLang"
          @clickTab="clickTab"
          classes="justify-center"
    />
</template>

<script setup>
import Tabs from '@/Components/Tabs.vue';
import {inject, ref} from "vue";

const defaultLang = inject('$defaultLang');

const tabsData = ref([
    {
        key: 'ua',
        value: 'UA'
    },
    {
        key: 'ru',
        value: 'RU'
    }
]);

defineProps(['activeItem']);

const emits = defineEmits(['clickLang'])

function clickTab(val) {
    emits('clickLang', val);
}
</script>
