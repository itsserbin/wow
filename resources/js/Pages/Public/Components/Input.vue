<script setup>
import {onMounted, ref} from 'vue';

defineProps(['modelValue', 'placeholder']);
defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
</script>

<template>
    <input type="text"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           ref="input"
           :placeholder="placeholder"
           class="
                    text-base
                    text-text
                    border-[0.5px]
                    border-main
                    rounded-[10px]
                    box-border
                    mt-[0.75rem]
                    p-[1rem]
                    w-[100%]
                    focus:border-accent
                    focus:ring-accent

            "
    >
</template>
