<script setup>
defineProps(['value','required']);
</script>

<template>
    <label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] inline-block">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot/></span>
        <span v-if="required" class="text-red-600">*</span>
    </label>
</template>
