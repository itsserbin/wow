<script setup>
import {Link} from "@inertiajs/inertia-vue3";

defineProps(['item', 'active']);
</script>

<template>
    <li>
        <Link
            v-if="item"
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
            <div v-if="item.icon" v-html="item.icon"></div>

            <span class="ml-3">{{ item.title }}</span>
        </Link>
        <a v-else
           href="javascript:"
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
            <slot></slot>
        </a>
    </li>
</template>
