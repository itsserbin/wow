<template>
    <Head :title="$page.props.page.meta_title[$page.props.lang]"/>
    <div v-if="$page.props.page">
        <Breadcrumbs :current-url="route().current"
                     :options="$page.props.options"
                     :lang="$page.props.lang"
                     :title="$page.props.page.h1[$page.props.lang]"
        />
        <h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
            {{ $page.props.page.h1[$page.props.lang] }}
        </h1>
        <div class="content"
             v-html="$page.props.page.content[$page.props.lang]"
        ></div>
    </div>
</template>

<script setup>
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Head from "@/Pages/Public/Components/Head.vue";

defineOptions({layout: MasterLayout})
</script>
