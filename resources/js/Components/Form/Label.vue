<script setup>
defineProps(['value']);
</script>

<template>
    <label class="block font-medium text-base text-gray-700 dark:text-gray-300 mb-1">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot/></span>
    </label>
</template>
