<template>
    <div class="bg-secondary rounded-lg shadow-sm p-7">
        <button @click="$emit('close')" type="button"
                v-if="isShow"
                class="absolute top-4 right-2"
        >
            <svg aria-hidden="true" class="w-5 h-5 test_x" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
            </svg>
        </button>
        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <label class="block mb-2 text-sm font-medium text-gray-900">
                    Ціна
                </label>
                <div class="flex items-center">
                    <Input type="nubmer" v-model="state.price[0]" placeholder="Від" class="mt-0"/>
                    <p class="text-2xl px-3">-</p>
                    <Input type="nubmer" v-model="state.price[1]" placeholder="До" class="mt-0"/>
                </div>
              <div class="py-6">
                  <Slider v-model="state.price"
                          tooltipPosition="bottom"
                          :min="characteristics.price.min"
                          :max="characteristics.price.max"
                          class="slider-red"
                  />
              </div>
            </div>
            <div class="block">
                <label class="block mb-2 text-sm font-medium text-gray-900">
                    Розміри
                </label>
                <ul class="grid w-full gap-2 grid-cols-5">
                    <li v-for="size in characteristics.sizes">
                        <input type="checkbox" :id="'size_' + size.id" multiple v-model="state.sizes" :value="size.id"
                               class="hidden peer">
                        <label :for="'size_' + size.id"
                               class="inline-flex text-sm items-center justify-center w-full p-3 text-text bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">
                            {{ size.title }}
                        </label>
                    </li>
                </ul>
            </div>
            <div class="block">
                <label class="block mb-2 text-sm font-medium text-gray-900">
                    Кольори
                </label>
                <ul class="grid w-full gap-3 grid-cols-6">
                    <li v-for="color in characteristics.colors">
                        <input type="checkbox"
                               :id="color.id"
                               :value="color.id"
                               class="hidden peer"
                               v-model="state.colors"
                        >
                        <label :for="color.id"
                               :style="'background-color:' + color.hex"
                               class="
                                inline-flex
                                justify-center
                                items-center
                                mx-auto
                                text-black-500
                                rounded-lg
                                border-2
                                border-gray-200
                                cursor-pointer
                                peer-checked:border-blue-600
                                hover:text-black
                                peer-checked:text-gray-600
                                hover:bg-black
                                w-[40px]
                                h-[40px]
                            "
                        />
                    </li>
                </ul>
            </div>
            <Accordion>
                <AccordionItem v-for="item in characteristics.list">
                    <template #accordion-trigger>
                        {{ item.title[lang] }}
                    </template>
                    <template #accordion-content>
                        <ul class="h-48 px-1 pb-3 overflow-y-auto text-sm text-gray-700">
                            <li v-for="value in item.values">
                                <div class="flex items-center p-1">
                                    <input type="checkbox"
                                           :value="value.id"
                                           v-model="state.characteristics[item.id]"
                                           multiple
                                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                                    <label
                                        class="w-full ml-2 text-sm font-medium rounded">
                                        {{ value.title[lang] }}
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </template>
                </AccordionItem>
            </Accordion>
            <Button type="button" @click="filter">Філтрувати</Button>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from "vue";
import Input from '@/Pages/Public/Components/Input.vue'
import Button from '@/Pages/Public/Components/Button.vue'
import Accordion from "@/Components/Accordion/Accordion.vue";
import AccordionItem from "@/Components/Accordion/AccordionItem.vue";
import Slider from '@vueform/slider'

const props = defineProps(['characteristics', 'lang','isShow']);
const emits = defineEmits(['fetch','close']);

const state = ref({
    price: [
        props.characteristics.price.min,
        props.characteristics.price.max
    ],
    characteristics: {},
    sizes: [],
    colors: []
});
console.log(props.isShow)
props.characteristics.list.forEach((item) => {
    state.value.characteristics[item.id] = [];
});

const params = computed(() => {
    let characteristics = [];
    props.characteristics.list.forEach((item) => {
        if (state.value.characteristics[item.id].length) {
            state.value.characteristics[item.id].forEach((val) => {
                characteristics.push(val);
            })
        }
    });
    return {
        characteristics: characteristics,
        price: state.value.price,
        colors: state.value.colors,
        sizes: state.value.sizes
    }
})


function filter() {
    emits('fetch', params.value);
}
</script>

<style>
.slider-red {
    --slider-connect-bg: #EF4444;
    --slider-tooltip-bg: #EF4444;
    --slider-handle-ring-color: #EF444430;
}
</style>
