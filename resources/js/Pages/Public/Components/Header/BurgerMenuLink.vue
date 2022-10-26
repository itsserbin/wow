<template>
    <a :href="href"
       class="
                py-5
                line
                relative
                inline-block
                font-bold
                text-center text-[#fff]
                no-underline
                after:content-['']
                after:bg-[#c4c4c4]
                after:bottom-0
                after:h-[1px]
                after:left-0
                after:mx-auto
                after:my-auto
                after:absolute
                after:right-0
                after:w-0
        "
    >
        <slot></slot>
    </a>
</template>

<script setup>
defineProps(['href'])
</script>
