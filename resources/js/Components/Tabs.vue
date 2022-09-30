<template>
    <ul class="
                flex
                flex-wrap
                text-sm
                font-medium
                text-center
                text-gray-500
                border-b
                border-gray-200
                dark:border-gray-700
                dark:text-gray-400
            "
        :class="classes"
    >
        <li class="mr-2" v-for="item in data">
            <a href="javascript:"
               @click="clickTab(item.key)"
               :class="{
                    'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300' : active !== item.key,
                    'inline-block p-4 rounded-t-lg text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500' : active === item.key
                }"
            >{{ item.value }}</a>
        </li>
    </ul>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['data', 'activeItem', 'classes']);

const active = ref(null);
const emits = defineEmits(['clickTab']);

onMounted(() => {
    if (props.activeItem) {
        active.value = props.activeItem;
    }
})

function clickTab(val) {
    active.value = val;
    emits('clickTab', val)
}
</script>
