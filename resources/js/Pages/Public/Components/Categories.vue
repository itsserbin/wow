<script setup>
import {Link} from "@inertiajs/inertia-vue3";

defineProps(['lang', 'data'])
</script>

<template>
    <div>
        <div class="grid gap-4 grid-cols-2 md:grid-cols-8" v-if="data.length">
            <div class="border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg"
                 v-for="item in data">
                <Link :href="route('category',item.slug)">
                    <div class="h-52">
                        <picture class="w-full">
                            <source :srcset="item.preview ? route('images.350',item.preview.webp_src) : null"
                                    type="image/webp">
                            <img :src="item.preview ? route('images.350',item.preview.src) : null "
                                 class="h-full object-cover w-full rounded-t-lg"
                                 :alt="item.title[lang]"
                            >
                        </picture>
                    </div>

                    <div class="font-bold text-center p-5 font-subheading">
                        {{ item.title[lang] }}
                    </div>
                </Link>
            </div>
        </div>
    </div>
</template>
