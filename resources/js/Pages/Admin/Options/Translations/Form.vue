<template>
    <form>
        <div class="grid grid-cols-1 mb-5">
            <div class="block mr-2">
                <label-component value="Статус публікації"/>
                <select-component v-model="item.published" :options="publishedStatuses"/>
            </div>
        </div>

        <div class="grid grid-cols-1 mb-5">
            <div class="block mr-2">
                <label-component value="Назва"/>
                <input-component v-model="item.title" type="text"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject} from "vue";

defineProps(['item'])
const publishedStatuses = inject('$publishedStatuses');
</script>
