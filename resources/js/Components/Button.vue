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
                    active:bg-gray-900
                    focus:outline-none
                    focus:border-gray-900
                    focus:shadow-outline-gray
                    transition
                    ease-in-out
                    duration-150
            "
            :class="{
                'outline-none border-gray-900 shadow-outline-gray bg-gray-500' : active,
                'bg-gray-800 hover:bg-gray-700' : !active
            }"
    >
        <slot/>
    </button>
</template>
