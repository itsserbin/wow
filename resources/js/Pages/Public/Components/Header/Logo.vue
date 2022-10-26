<template>
    <a :href="route('home')">
        <img src="/storage/logo.png" :alt="appName" class="w-[55px]">
        <!--                        <img :src="logoApp" :alt="appName">-->
    </a>
</template>

<script setup>
defineProps(['appName']);
</script>
