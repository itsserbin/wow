<script setup>
import Head from "@/Pages/Public/Components/Head.vue";

defineProps(['product', 'lang']);
</script>

<template>
    <Head :title="product.title[lang]" :description="product.description[lang]">
        <meta v-if="product.preview"
              property="og:image"
              :content="`/storage/products/${product.preview.webp_src}`"
        />
        <meta v-if="product.preview"
              property="og:image:secure_url"
              :content="`/storage/products/${product.preview.webp_src}`"
        />
        <meta v-if="product.preview"
              property="og:image:type"
              content="image/webp"/>

        <meta v-if="product.preview"
              property="og:image:alt"
              :content="product.title[lang]"
        />
    </Head>
</template>
