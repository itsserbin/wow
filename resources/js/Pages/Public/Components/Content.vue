<script setup>
defineProps(['data']);
</script>

<template>
    <div v-if="data" class="content" v-html="data"></div>
</template>
