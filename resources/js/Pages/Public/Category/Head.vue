<script setup>
import Head from "@/Pages/Public/Components/Head.vue";

defineProps(['category', 'lang']);
</script>

<template>
    <Head :title="category.meta_title[lang]" :description="category.meta_description[lang]">
        <meta v-if="category.preview"
              property="og:image"
              :content="route('images', category.preview.webp_src)"
        />
        <meta v-if="category.preview"
              property="og:image:secure_url"
              :content="route('images', category.preview.webp_src)"
        />
        <meta v-if="category.preview"
              property="og:image:type"
              content="image/webp"/>

        <meta v-if="category.preview"
              property="og:image:alt"
              :content="category.title[lang]"
        />
    </Head>
</template>
