<template>
    <div v-if="heading"
         class="font-bold text-black text-center text-2xl font-subheading mb-[15px]"
    >{{ heading }}
    </div>
</template>

<script setup>
defineProps(['heading']);
</script>
