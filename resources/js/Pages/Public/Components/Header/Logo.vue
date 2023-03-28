<template>
    <img src="/storage/logo.jpeg" class="w-[3.5rem] h-[3.5rem]" :alt="appName">
</template>

<script setup>
const appName = import.meta.env.VITE_APP_NAME;
</script>
