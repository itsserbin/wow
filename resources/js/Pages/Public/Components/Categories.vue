<template>
    <div>
        <div class="grid grid-cols-2 md:grid-cols-7 gap-4" v-if="data.length">
            <div class="border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg"
                 v-for="item in data">
                <a :href="route('category',item.slug)">
                    <div class="h-52">
                        <picture class="w-full">
                            <source :srcset="item.preview ? route('images.350',item.preview.webp_src) : null"
                                    type="image/webp">
                            <img :src="item.preview ? route('images.350',item.preview.src) : null "
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

const props = defineProps(['lang', 'data'])
//
// onMounted(() => {
//     state.value.isLoading = true;
//     axios.get('/api/v1/category/list')
//         .then(({data}) => {
//             state.value.categories = data.result;
//             state.value.isLoading = false;
//         })
//         .catch((response) => {
//             state.value.isLoading = false;
//             console.log(response);
//         });
// })
//
// const title = computed(() => (val) => props.lang === 'ru' ? val.ru : (props.lang === 'ua' ? val.ua : null))
</script>
