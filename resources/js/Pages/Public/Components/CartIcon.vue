<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {Link} from "@inertiajs/inertia-vue3";

const store = useStore();
const cart = ref(store.state);

const cartLink = computed(() => {
    if (cart.value.list.length) {
        return route('cart');
    } else {
        return 'javascript:';
    }
});
</script>

<template>
    <Link :href="cartLink"
          class="
                ml-auto
                relative
                w-[37px]
                h-[38px]
                rounded-[50%]
                flex
                items-center
                justify-center
                bg-button
                hover:bg-accent
                transition-all
                duration-500
        "
    >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10.541" cy="18.7917" rx="1.375" ry="1.375" fill="white"></ellipse>
            <ellipse cx="16.041" cy="18.7917" rx="1.375" ry="1.375" fill="white"></ellipse>
            <path d="M3.66667 8.25L2.75 8.25" stroke="white" stroke-width="1.1" stroke-linecap="round"></path>
            <path d="M4.58268 13.75L3.66602 13.75" stroke="white" stroke-width="1.1" stroke-linecap="round"></path>
            <path d="M4.58301 11L1.83301 11" stroke="white" stroke-width="1.1" stroke-linecap="round"></path>
            <path
                d="M6.19809 5.95833L8.08512 14.4102C8.2382 15.0958 8.84659 15.5833 9.54908 15.5833H16.8153C17.5178 15.5833 18.1262 15.0958 18.2793 14.4102L19.7585 7.78519C19.9677 6.84803 19.2547 5.95833 18.2945 5.95833H6.19809ZM6.19809 5.95833L5.62607 3.85616C5.44838 3.20315 4.85544 2.75 4.17869 2.75H1.83301"
                stroke="white" stroke-width="1.1" stroke-linecap="round"></path>
        </svg>
        <span class="
                        absolute
                        left-[100%]
                        bottom-[100%]
                        bg-secondary
                        rounded-[50%]
                        text-text
                        font-semibold
                        text-[.75rem]
                        w-[20px]
                        h-[20px]
                        text-center
                        translate-y-[66%]
                        translate-x-[-66%]
                    "
        >
                {{ cart.totalCount }}</span>
    </Link>
</template>
