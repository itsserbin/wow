<template>
    <div>
        <loader v-if="state.isLoading"></loader>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-4" v-if="state.categories.length && !state.isLoading">
            <div class="border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg"
                 v-for="item in state.categories">
                <a :href="route('category',item.slug)">
                    <div class="h-52">
                        <picture class="w-full">
                            <source v-lazy
                                    :data-src="item.preview ? route('images.350',item.preview.webp_src) : null"
                                    type="image/webp">
                            <img v-lazy
                                 :data-src="item.preview ? route('images.350',item.preview.src) : null "
                                 class="h-full object-cover w-full rounded-t-lg"
                            >
                        </picture>
                    </div>

                    <div class="font-bold text-center p-5 font-subheading">
                        {{ item.title[lang] }}
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import vLazy from '@/Includes/lazyload.js';

const state = ref({
    categories: [],
    isLoading: false,
})

const props = defineProps(['lang'])

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

const title = computed(() => (val) => props.lang === 'ru' ? val.ru : (props.lang === 'ua' ? val.ua : null))
</script>
