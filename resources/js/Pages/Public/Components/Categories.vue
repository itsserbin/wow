<template>
    <div>
        <loader v-if="state.isLoading"></loader>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-4" v-if="state.categories.length && !state.isLoading">
            <div class="border-[1px] border-[#e9e9e9]" v-for="item in state.categories">
                <a :href="route('category',item.slug)" class="text-decoration-none">
                    <div class="h-52">
                        <img :src="route('images.category',item.preview)"
                             :alt="lang === 'ru' ? item.title.ru : (lang === 'ua' ? item.title.ua : null)"
                             class="h-full w-full object-cover"
                        >
                    </div>

                    <div class="font-bold text-center p-5">
                        {{ lang === 'ru' ? item.title.ru : (lang === 'ua' ? item.title.ua : null) }}
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const state = ref({
    categories: [],
    isLoading: false,
})

defineProps(['lang', 'categoriesRoute'])

onMounted(() => {
    state.value.isLoading = true;
    axios.get('/api/v1/category/list')
        .then(({data}) => {
            state.value.categories = data.result;
            state.value.isLoading = false;
        })
        .catch((response) => {
            state.value.isLoading = false;
            console.log(response);
        });
})
</script>
