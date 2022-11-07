<template>
    <textarea :value="modelValue"
              @input="$emit('update:modelValue', $event.target.value)"
              :placeholder="placeholder"
              :rows="rows ? rows : '2'"
              class="
                    border-[0.5px]
                    rounded-[10px]
                    box-border
                    font-[350]
                    h-[100]
                    mt-[0.75rem]
                    p-[1rem]
                    resize-none
                    w-[100%]
                    outline-none
                    border-red-600
                    focus:border-red-600
                    focus:ring-red-600
                "
    ></textarea>
</template>

<script setup>
defineProps(['modelValue', 'placeholder', 'rows']);
defineEmits(['update:modelValue']);
</script>
