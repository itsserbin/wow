<template>
    <aside class="w-full" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul class="space-y-2">
                <li v-for="item in items">
                    <Link
                        :href="item.href"
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
                </li>
            </ul>
        </div>
    </aside>
</template>

<script setup>
import {Link} from "@inertiajs/inertia-vue3";

defineProps(['items'])
</script>
