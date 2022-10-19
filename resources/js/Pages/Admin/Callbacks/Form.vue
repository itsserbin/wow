<template>
    <form class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="grid gap-4">
                <div class="block">
                    <label-component value="Статус"/>
                    <select-component v-model="item.status" :options="state.statuses"/>
                </div>
                <div class="block">
                    <label-component value="Імʼя"/>
                    <input-component v-model="item.name" type="text"/>
                </div>
                <div class="block">
                    <label-component value="Телефон"/>
                    <input-component v-model="item.phone" type="tel"/>
                </div>
            </div>
            <div>
                <label-component value="Коментар"/>
                <textarea-component v-model="item.comment" rows="8"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from "vue";
const props = defineProps(['item', 'statuses'])

const state = ref({
    statuses: []
});

onMounted(() => {
    for (const [key, value] of Object.entries(props.statuses)) {
        state.value.statuses.push({
            key: key,
            value: value,
        })
    }
})

function changeLang(val) {
    state.value.activeLang = val;
}
</script>
