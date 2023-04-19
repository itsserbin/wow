<script setup>
import {Link} from "@inertiajs/inertia-vue3";

const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
    <Link :href="route('home')">
        <picture>
            <source srcset="/storage/logo.webp" type="image/webp">
            <img src="/storage/logo.jpeg" :alt="appName" width="55" height="55">
        </picture>
    </Link>
</template>
