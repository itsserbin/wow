<script setup>
import Card from '@/Components/Card.vue';

defineProps(['data'])
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card v-for="(item, i) in data"
              :title="i"
              :description="item"
              class="text-center"
        />
    </div>
</template>
