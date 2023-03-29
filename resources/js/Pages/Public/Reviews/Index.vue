<template>
    <div v-if="state.reviews.length">
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
import Card from './Card.vue';
import {onMounted, ref} from "vue";
import Loader from '@/Pages/Public/Components/Loader.vue'
import Button from '@/Pages/Public/Components/Button.vue'
import {isLoading} from "@/Pages/Public/load";

defineProps({
    lang: String,
    textLoadMore: {
        type: String,
        default: 'Завантажити ще'
    },
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
    isLoading.value = false;
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
