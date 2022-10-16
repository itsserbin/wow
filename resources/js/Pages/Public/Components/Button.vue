<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    active: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <button :type="type"
            class="
                    items-center
                    px-4
                    py-2
                    border
                    border-transparent
                    rounded-md
                    font-semibold
                    text-xs
                    text-white
                    uppercase
                    tracking-widest
                    active:bg-red-900
                    focus:outline-none
                    focus:border-red-900
                    focus:shadow-outline-red
                    transition
                    ease-in-out
                    duration-150
            "
            :class="{
                'outline-none border-red-900 shadow-outline-gray bg-red-500' : active,
                'bg-red-600 hover:bg-red-700' : !active
            }"
    >
        <slot/>
    </button>
</template>
