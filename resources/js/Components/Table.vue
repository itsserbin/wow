<script setup>
import ArrowUp from '@/Components/Icons/ArrowUp.vue';
import ArrowDown from '@/Components/Icons/ArrowDown.vue';

defineEmits(['fetch', 'sort']);

defineProps({
    headings: Array,
    rows: Array,
    isSlotMode: {
        type: Boolean,
        default: false,
    },
    nowrap: {
        type: Boolean,
        default: true,
    },
    responsive: {
        type: Boolean,
        default: true,
    },
})
</script>

<template>
    <div class="
                    not-prose
                    relative
                    bg-slate-50
                    rounded-xl
                    overflow-hidden
                    dark:bg-slate-800/25
            "
    >
        <div class="
                        absolute
                        inset-0
                        bg-grid-slate-100
                        [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]
                        dark:bg-grid-slate-700/25
                        dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]
                "
        >
        </div>
        <div class="relative rounded-xl">
            <div class="shadow-sm my-8"
                 :class="{'whitespace-nowrap' : nowrap,'overflow-x-scroll' : responsive}">
                <table class="border-collapse table-auto w-full text-sm text-center">
                    <thead>
                    <tr>
                        <th v-for="heading in headings"
                            class="
                                    border-b
                                    dark:border-slate-600
                                    font-medium
                                    p-4
                                    pl-8
                                    pt-0
                                    pb-3
                                    text-slate-400
                                    dark:text-slate-200
                                "
                        >
                            <div class="flex items-center justify-center">
                                <span v-html="heading.label"></span>
                                <div v-if="heading.sortable" class="hover:cursor-pointer ml-2">
                                    <ArrowUp @click="$emit('sort',heading.key,'asc')"/>
                                    <ArrowDown @click="$emit('sort',heading.key,'desc')"/>
                                </div>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white dark:bg-slate-800">
                    <tr v-for="(row,i) in rows" class="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                        <td v-for="heading in headings"
                            class="
                                        border-b
                                        border-slate-100
                                        dark:border-slate-700
                                        p-4
                                        pl-8
                                        text-slate-500
                                        dark:text-slate-400
                                "
                        >
                            <div v-if="isSlotMode && $slots[heading.key]">
                                <slot :name="heading.key" :data="{row,i}"></slot>
                            </div>
                            <div v-else v-for="(value,key) in row">
                                {{ key === heading.key ? value : null }}
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="
                        absolute
                        inset-0
                        pointer-events-none
                        border
                        border-black/5
                        rounded-xl
                        dark:border-white/5
                "
        ></div>
    </div>
</template>
