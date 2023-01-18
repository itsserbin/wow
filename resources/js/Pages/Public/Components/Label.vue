<script setup>
defineProps(['value','required']);
</script>

<template>
    <label class="text-base text-text font-subheading font-[500] w-[100%] inline-block">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot/></span>
        <span v-if="required" class="text-red-600">*</span>
    </label>
</template>
