<script setup>
import {Head} from "@inertiajs/inertia-vue3";

defineProps({title: String, description: String})
</script>

<template>
    <Head>
        <title v-if="title">{{title}}</title>
        <meta v-if="description" name="description" :content="description"/>
        <slot/>
    </Head>
</template>
