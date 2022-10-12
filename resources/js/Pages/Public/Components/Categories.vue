<template>
    <div class="grid justify-items-center grid-cols-1">
        <loader v-if="state.isLoading"></loader>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
            <!--        <div class="row justify-content-center" v-if="categories.length && !state.isLoading">-->
            <div class="card__category my-3" v-for="item in categories">
                <a :href="categoriesRoute + '/' + item.slug" class="text-decoration-none">
                    <div class="card__image ml-[0.5rem] mr-[0.5rem]">
                        <img :src="item.preview">

                        <!--                        <img :src="item.preview"-->
                        <!--                             :alt="lang === 'ru' ? item.title.ru : (lang === 'ua' ? item.title.ua : null)">-->
                    </div>

                    <div class="flex 
            flex-col 
            items-center 
            border-r-[1px] 
            border-r-[#e9e9e9]
            border-b-[1px]
            border-b-[#e9e9e9]
            border-l-[1px]
            border-l-[#e9e9e9]
            rounded-b-[5px]">
                        <div class="font-bold d-flex align-items-center m-0">
                            {{ item.title.ru }}
                            <!--                            {{ lang === 'ru' ? item.title.ru : (lang === 'ua' ? item.title.ua : null) }}-->
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const categories = [
    {
        preview: 'https://dabango.store/storage/category/32990333_5.jpg',
        title: {
            ru: 'Роздільні купальники'
        }
    }, {
        preview: 'https://dabango.store/storage/category/32990333_5.jpg',
        title: {
            ru: 'Роздільні купальники'
        }
    }, {
        preview: 'https://dabango.store/storage/category/32990333_5.jpg',
        title: {
            ru: 'Роздільні купальники'
        }
    }, {
        preview: 'https://dabango.store/storage/category/32990333_5.jpg',
        title: {
            ru: 'Роздільні купальники'
        }
    }, {
        preview: 'https://dabango.store/storage/category/32990333_5.jpg',
        title: {
            ru: 'Роздільні купальники'
        }
    },
]

const state = ref({
    categories: [],
    isLoading: false,
})

defineProps(['lang', 'categoriesRoute'])

onMounted(() => {
    // state.value.isLoading = true;
    // axios.get('/api/v1/category/all-on-prod')
    //     .then(({data}) => {
    //         state.value.categories = data.result;
    //         state.value.isLoading = false;
    //     })
    //     .catch((response) => {
    //         state.value.isLoading = false;
    //         console.log(response);
    //     });
})
</script>
