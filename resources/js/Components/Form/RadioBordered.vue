<script setup>
import {computed} from "vue";

const props = defineProps(['label', 'value', 'name', 'modelValue'])
const emits = defineEmits(['update:modelValue'])

const emitUpdate = () => emits('update:modelValue', props.value)
const isChecked = computed(() => props.modelValue === props.value)
</script>

<template>
    <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
        <input :name="name"
               :checked="isChecked"
               @input="emitUpdate"
               :value="value"
               type="radio"
               class="
                    w-4
                    h-4
                    text-blue-600
                    bg-gray-100
                    border-gray-300
                    focus:ring-blue-500
                    dark:focus:ring-blue-600
                    dark:ring-offset-gray-800
                    focus:ring-2
                    dark:bg-gray-700
                    dark:border-gray-600
                "
        >
        <label
            class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
            {{ label }}
        </label>
    </div>
</template>
