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
                    rounded-lg
                    font-semibold
                    text-xs
                    text-white
                    uppercase
                    tracking-widest
                    active:bg-accent
                    focus:outline-none
                    focus:border-accent
                    focus:shadow-outline-accent
                    transition
                    ease-in-out
                    duration-300
                    hover:scale-105
            "
            :class="{
                'outline-none border-accent shadow-outline-gray bg-accent' : active,
                'bg-button hover:bg-accent' : !active
            }"
    >
        <slot/>
    </button>
</template>
