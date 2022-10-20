<template>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <card-component v-for="(item,i) in data"
                        class="text-center"
                        :title="i"
                        :description="item ? item : '0'"
        >
        </card-component>
    </div>
</template>

<script setup>
defineProps(['data']);
</script>
