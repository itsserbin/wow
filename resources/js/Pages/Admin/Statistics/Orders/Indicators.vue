<script setup>
import Card from '@/Components/Card.vue';

defineProps(['data']);
</script>

<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <Card v-for="(item,i) in data"
              class="text-center"
              :title="i"
              :description="item ? item : '0'"
        >
        </Card>
    </div>
</template>
