<script setup>
defineProps(['data', 'lang']);
</script>

<template>
    <section v-if="data.length" class="bg-black grid grid-cols-1 md:grid-cols-3 mb-3 p-16 rounded-full">
        <div class="text-center text-white md:mb-0 mb-7" v-for="item in data">
            <div class="flex justify-center mb-3" v-html="item.icon"></div>
            <h3 class="font-bold">
                {{ item.text[lang] }}
            </h3>
        </div>
    </section>

</template>
