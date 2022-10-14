<template>
    <div class="mb-3">
        <div class="ml-auto">
            <div class="
                        rounded-[10px]
                        border-red-600
                        border-[3px]
                        flex justify-center
                        max-w-[230px]
                        relative
                        m-0
                        p-2
                    "
            >
                <button class="grid gap-4 grid-cols-4" type="button" @click="showModal">
                    <span class="before:content-['\f0ce'] col-span-1"></span>
                    <span class="col-span-3">{{ textSizesTable }}</span>
                </button>
            </div>
        </div>
    </div>

    <modal @closeModal="showModal" v-if="show" size="medium">
        <template #content>
            <div class="sizes-table" v-html="sizeTable"></div>
        </template>
    </modal>
</template>

<script setup>

import {ref} from "vue";

const show = ref(false);

function showModal() {
    show.value = !show.value;
}

defineProps({
    sizeTable: {
        type: String,
        default: '<table>\n' +
            '                <tr>\n' +
            '                    <th>Размеры</th>\n' +
            '                    <th>Чашка</th>\n' +
            '                    <th>Объем груди</th>\n' +
            '                    <th>Объем бедер</th>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                    <th>S</th>\n' +
            '                    <td>A-B</td>\n' +
            '                    <td>82-85</td>\n' +
            '                    <td>85-90</td>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                    <th>M</th>\n' +
            '                    <td>B-C</td>\n' +
            '                    <td>86-89</td>\n' +
            '                    <td>91-95</td>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                    <th>L</th>\n' +
            '                    <td>C-D</td>\n' +
            '                    <td>90-93</td>\n' +
            '                    <td>96-100</td>\n' +
            '                </tr>\n' +
            '                <tr>\n' +
            '                    <th>XL</th>\n' +
            '                    <td>D-E</td>\n' +
            '                    <td>94-97</td>\n' +
            '                    <td>101-105</td>\n' +
            '                </tr>\n' +
            '            </table>'
    },
    textSizesTable: {
        type: String,
        default: 'Таблиця розмірів'
    },
})
</script>
