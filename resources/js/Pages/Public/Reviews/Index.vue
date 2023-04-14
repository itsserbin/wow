<template>
        <Head title="Відгуки"/>

        <div v-if="state.reviews.length">
            <Breadcrumbs :current-url="route().current" :options="options" :lang="lang" title="Відгуки"/>

            <h1 class="font-bold text-black text-center text-[24px] mb-[15px]">
                Відгуки
            </h1>
            <Card v-for="item in state.reviews" :item="item"/>
            <div class="text-center" v-if="state.showLoadMore">
                <Loader v-if="state.isLoadingMore"></Loader>
                <Button v-if="!state.isLoadingMore" @click="fetch" type="button">
                    {{ textLoadMore }}
                </Button>
            </div>
        </div>
</template>

<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
import Card from './Card.vue';
import Loader from '@/Pages/Public/Components/Loader.vue'
import Button from '@/Pages/Public/Components/Button.vue'
import Head from "@/Pages/Public/Components/Head.vue";
import MasterLayout from "@/Layouts/MasterLayout.vue";

import {onMounted, ref} from "vue";

defineOptions({layout: MasterLayout})

const props = defineProps({
    lang: String,
    categories: Array,
    options: Object,
    pages: Array,
    textLoadMore: {
        type: String,
        default: 'Завантажити ще'
    },
    eventIdPageView: String
})

const state = ref({
    reviews: [],
    isLoadingMore: false,
    showLoadMore: true,
    currentPage: 0,
    endpoint: '/api/v1/reviews/paginate-list?page='
});

onMounted(async () => {
    await fetch();
})

const fetch = async () => {
    state.value.isLoadingMore = true;
    axios.get(state.value.endpoint + (state.value.currentPage + 1))
        .then(({data}) => {
            state.value.isLoadingMore = false;
            state.value.currentPage = data.result.current_page;
            state.value.reviews = state.value.reviews.concat(data.result.data);
            state.value.showLoadMore = (data.result.to !== data.result.total);
        });
}
</script>
