<template>
    <form>
        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <label-component value="Назва"/>
                <input-component v-model="item.title" type="text"/>
            </div>

            <div class="block">
                <label-component value="Slug"/>
                <input-component v-model="item.slug" type="text"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

const props = defineProps(['item'])

const categories = ref([]);

onMounted(() => {
    axios.get(route('api.statistics.costs.categories.list'))
        .then(({data}) => {
            data.result.forEach((item) => {
                categories.value.push({
                    key: item.id,
                    value: item.title
                })
            })
        })
})

const totalSum = computed(() => props.item.quantity * props.item.sum)
</script>
