<template>
    <form>
        <div class="grid grid-cols-1 mb-5">
            <div class="block mr-2">
                <label-component value="Назва"/>
                <input-component v-model="item.name" type="text"/>
            </div>
        </div>

        <div class="grid grid-cols-1 mb-5">
            <div class="block mr-2">
                <label-component value="Slug"/>
                <input-component v-model="item.slug" type="text"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject} from "vue";

defineProps(['item'])
const publishedStatuses = inject('$publishedStatuses');
</script>
