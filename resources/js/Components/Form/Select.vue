<script setup>
defineProps(['modelValue', 'options'])
</script>

<template>
    <select @input="$emit('update:modelValue', $event.target.value)"
            :value="modelValue"
            class="relative block w-full pl-3 pr-12 py-2.5 rounded-lg overflow-hidden border-solid text-sm text-vtd-secondary-700 placeholder-vtd-secondary-400 transition-colors bg-white border border-vtd-secondary-300 focus:border-vtd-primary-300 focus:ring focus:ring-vtd-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-vtd-secondary-800 dark:border-vtd-secondary-700 dark:text-vtd-secondary-100 dark:placeholder-vtd-secondary-500 dark:focus:border-vtd-primary-500 dark:focus:ring-opacity-20"
    >
        <option :value="null">Не обрано</option>
        <option v-for="option in options" :value="option.key">{{ option.value }}</option>
    </select>
</template>
