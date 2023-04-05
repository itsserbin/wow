<template>
    <div>
        <div :class="classes" v-if="data.length">
            <div class="border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg"
                 v-for="item in data">
                <a :href="route('category',item.slug)">
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
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from "vue";

const classes = computed(() => {
    const classes = {
        'grid': true,
        'gap-4': true,
        'grid-cols-2': true,
    };
    classes[`md:grid-cols-${props.data.length}`] = true;
    return classes;
});

const props = defineProps(['lang', 'data'])
</script>
