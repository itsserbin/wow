<template>
    <div class="relative whitespace-nowrap left-[0.4rem]">
        <button @click="showFunction"
                class="text-red-500 mr-[-25px] bg-white hover:bg-white focus:outline-none  font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center dark:bg-white  "
                type="button">
            {{ lang === 'ua' ? 'UA' : (lang === 'ru' ? 'RU' : null) }}
            <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 9l-7 7-7-7"></path>
            </svg>
        </button>
        <!-- Dropdown menu -->
        <transition name="fadeSecond">
            <div v-if="show"
                 class=" z-10 w-[50px] bg-white rounded divide-y divide-gray-100 shadow "
                 style="position: absolute; inset: 0px auto auto 0px;margin-left: 1px; margin-top: 25px; transform: translate(0px, 10px);">

                <ul class="py-1 text-sm text-red-600 dark:text-gray-200">
                    <li>
                        <a :href="route('setlocale','ru')" v-if="lang === 'ua'"
                           class="block py-2 text-red-600 px-4   dark:hover:text-red-600">RU</a>
                    </li>
                    <li>
                        <a :href="route('setlocale','ua')" v-if="lang === 'ru'"
                           class="block py-2 text-red-600 px-4   dark:hover:text-red-600">UA</a>
                    </li>

                </ul>
            </div>
        </transition>
    </div>
</template>

<script setup>
import {ref} from "vue";

defineProps(['lang'])

const show = ref(false);

function showFunction() {
    show.value = !show.value;
}
</script>
