<template>
    <div class="burger__sticks
                justify-end
                relative
                !w-[25px]
                h-[18px]
                z-50
                p-0
                ease-out
                before:bg-[#c4c4c4]
                before:content-['']
                before:h-[2px]
                before:absolute
                before:w-[100%]
                before:mt-[15px]
                before:ease-out
                after:bg-[#c4c4c4]
                after:content-['']
                after:h-[2px]
                after:absolute
                after:w-[100%]
                after:ease-out
                cursor-pointer
         "
         @click="showFunction"
         :class="{'active': show}">
        <span class="bg-[#c4c4c4] block h-[2px] relative left-0 top-[8px] w-[100%]"></span>
    </div>

    <transition name="fadeLast">
        <BurgerMenu v-if="show" :options="options" :pages="pages"/>
    </transition>

</template>

<script setup>
import {defineAsyncComponent, ref} from "vue";

const BurgerMenu = defineAsyncComponent(() => import('./BurgerMenu.vue'));

defineProps([
    'lang',
    'pages',
    'options'
]);

const show = ref(false);

function showFunction() {
    show.value = !show.value;
}
</script>
