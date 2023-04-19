<script setup>
import {computed} from "vue";

const emits = defineEmits(['toggleFilter', 'sort', 'update:modelValue']);
const props = defineProps(['modelValue']);

const selectedSort = computed({
    get: () => props.modelValue,
    set: (value) => {
        emits('update:modelValue', value);
    },
});
</script>

<template>
    <div class="block">
        <select v-model="selectedSort"
                @change="$emit('update:modelValue', selectedSort); $emit('sort')"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option :value="null">Популярні</option>
            <option value="created_at">Новинки</option>
            <option value="min_price">Від дешевих до дорогих</option>
            <option value="max_price">Від дорогих до дешевих</option>
        </select>
    </div>
</template>
