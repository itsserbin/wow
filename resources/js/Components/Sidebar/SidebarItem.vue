<script setup>
import {Link} from "@inertiajs/inertia-vue3";

defineProps(['item', 'active']);
</script>

<template>
    <li>
        <Link
            :href="item.href ? item.href : 'javascript:'"
            :class="{'bg-gray-100 dark:bg-gray-700' : active}"
            class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                dark:text-white
                hover:bg-gray-100
                dark:hover:bg-gray-700
            "
        >
            <i v-if="item.icon" :class="item.icon"></i>

            <span class="ml-3">{{ item.title }}</span>
        </Link>
    </li>
</template>
