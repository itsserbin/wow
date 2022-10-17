<template>
    <div>
        <div class="bg-red-200 rounded p-7 mb-5" v-for="review in state.reviews" :key="review.id">
            <div class="grid grid-cols-1 md:grid-cols-3">
                <div class="font-bold">{{ review.name }}</div>
                <div class="text-center">
                    <a :href="route('product',review.product.id)" target="_blank">
                        {{ lang === 'ru' ? review.product.h1.ru : (lang === 'ua' ? review.product.h1.ua : null) }}
                    </a>
                </div>
                <div class="text-end">{{ moment(review.created_at).format('MM.DD.YY') }}</div>
            </div>
            <hr class="my-2">
            <div class="review-item-content">{{ review.comment }}</div>
        </div>
        <div class="text-center" v-if="state.showLoadMore">
            <loader v-if="state.isLoadingMore"></loader>
            <button-component v-if="!state.isLoadingMore" @click="fetch" type="button">
                {{ textLoadMore }}
            </button-component>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import moment from "moment";

defineProps({
    lang: String,
    textReviews: String,
    textNoReviews: String,
    textLoadMore: {
        type: String,
        default: 'Завантажити ще'
    },
})

const state = ref({
    reviews: [],
    isLoadingMore: false,
    showLoadMore: true,
    currentPage: 1,
    total: 1,
    endpoint: '/api/v1/reviews/paginate-list?page='
});

onMounted(() => {
    axios.get(route('api.v1.public.reviews.list.paginate'))
        .then(({data}) => state.value.reviews = data.result.data)
        .catch((response) => console.log(response));
})

function fetch() {
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
