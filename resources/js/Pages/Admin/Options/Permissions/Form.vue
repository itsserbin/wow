<template>
    <form class="grid grid-cols-1 gap-4">
        <div class="block">
            <label-component value="Назва"/>
            <input-component v-model="item.name" type="text"/>
        </div>

        <div class="block">
            <label-component value="Slug"/>
            <input-component v-model="item.slug" type="text"/>
        </div>
    </form>
</template>

<script setup>
defineProps(['item'])
</script>
