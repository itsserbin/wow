<template>
    <ul :class="containerClass" v-if="!noLiSurround">
        <li v-if="firstLastButton" :class="[pageClass, firstPageSelected() ? disabledClass : '']">
            <a
                @click="selectFirstPage()"
                @keyup.enter="selectFirstPage()"
                :class="pageLinkClass"
                :tabindex="firstPageSelected() ? -1 : 0"
                v-html="firstButtonText"
            ></a>
        </li>

        <li
            v-if="!(firstPageSelected() && hidePrevNext)"
            :class="[prevClass, firstPageSelected() ? disabledClass : '']"
        >
            <a
                @click="prevPage()"
                @keyup.enter="prevPage()"
                :class="prevLinkClass"
                :tabindex="firstPageSelected() ? -1 : 0"
                v-html="prevText"
            ></a>
        </li>

        <li
            v-for="page in pages"
            :key="page.index"
            :class="[pageClass, page.selected ? activeClass : '', page.disabled ? disabledClass : '', page.breakView ? breakViewClass : '']"
        >
            <a v-if="page.breakView"
               :class="[pageLinkClass, breakViewLinkClass]"
               tabindex="0"
            >
                <slot name="breakViewContent">{{ breakViewText }}</slot>
            </a>
            <a v-else-if="page.disabled"
               :class="pageLinkClass"
               tabindex="0"
            >{{ page.content }}</a>
            <a
                v-else
                @click="handlePageSelected(page.index + 1)"
                @keyup.enter="handlePageSelected(page.index + 1)"
                :class="pageLinkClass"
                tabindex="0"
            >{{ page.content }}</a>
        </li>

        <li
            v-if="!(lastPageSelected() && hidePrevNext)"
            :class="[nextClass, lastPageSelected() ? disabledClass : '']"
        >
            <a
                @click="nextPage()"
                @keyup.enter="nextPage()"
                :class="nextLinkClass"
                :tabindex="lastPageSelected() ? -1 : 0"
                v-html="nextText"
            ></a>
        </li>

        <li v-if="firstLastButton" :class="[pageClass, lastPageSelected() ? disabledClass : '']">
            <a
                @click="selectLastPage()"
                @keyup.enter="selectLastPage()"
                :class="pageLinkClass"
                :tabindex="lastPageSelected() ? -1 : 0"
                v-html="lastButtonText"
            ></a>
        </li>
    </ul>

    <div :class="containerClass" v-else>
        <a
            v-if="firstLastButton"
            @click="selectFirstPage()"
            @keyup.enter="selectFirstPage()"
            :class="[pageLinkClass, firstPageSelected() ? disabledClass : '']"
            tabindex="0"
            v-html="firstButtonText"
        ></a>
        <a
            v-if="!(firstPageSelected() && hidePrevNext)"
            @click="prevPage()"
            @keyup.enter="prevPage()"
            :class="[prevLinkClass, firstPageSelected() ? disabledClass : '']"
            tabindex="0"
            v-html="prevText"
        ></a>
        <template v-for="page in pages">
            <a
                v-if="page.breakView"
                :key="page.index"
                :class="[pageLinkClass, breakViewLinkClass, page.disabled ? disabledClass : '']"
                tabindex="0"
            >
                <slot name="breakViewContent">{{ breakViewText }}</slot>
            </a>
            <a
                v-else-if="page.disabled"
                :key="page.index"
                :class="[pageLinkClass, page.selected ? activeClass : '', disabledClass]"
                tabindex="0"
            >{{ page.content }}</a>
            <a
                v-else
                :key="page.index"
                @click="handlePageSelected(page.index + 1)"
                @keyup.enter="handlePageSelected(page.index + 1)"
                :class="[pageLinkClass, page.selected ? activeClass : '']"
                tabindex="0"
            >{{ page.content }}</a>
        </template>
        <a
            v-if="!(lastPageSelected() && hidePrevNext)"
            @click="nextPage()"
            @keyup.enter="nextPage()"
            :class="[nextLinkClass, lastPageSelected() ? disabledClass : '']"
            tabindex="0"
            v-html="nextText"
        ></a>
        <a
            v-if="firstLastButton"
            @click="selectLastPage()"
            @keyup.enter="selectLastPage()"
            :class="[pageLinkClass, lastPageSelected() ? disabledClass : '']"
            tabindex="0"
            v-html="lastButtonText"
        ></a>
    </div>
</template>

<script setup>
import {computed, onBeforeMount, onBeforeUpdate, onMounted, ref} from "vue";

const state = ref({
    innerValue: 1,
    pageCount: null,
})

const props = defineProps({
    pagination: {
        type: Object
    },
    modelValue: {
        type: Number
    },
    pageRange: {
        type: Number,
        default: 10
    },
    initialPage: {
        type: Number,
        default: 1
    },
    forcePage: {
        type: Number
    },
    clickHandler: {
        type: Function,
        default: () => {
        }
    },
    marginPages: {
        type: Number,
        default: 1
    },
    prevText: {
        type: String,
        default: '<'
    },
    nextText: {
        type: String,
        default: '>'
    },
    breakViewText: {
        type: String,
        default: '…'
    },
    containerClass: {
        type: String,
        default: 'inline-flex -space-x-px mt-8 rounded-lg  dark:bg-gray-800'
    },
    pageClass: {
        type: String,
        default: 'cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
    },
    pageLinkClass: {
        type: String,
        default: ''
    },
    prevClass: {
        type: String,
        default: 'cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
    },
    prevLinkClass: {
        type: String,
        default: ''
    },
    nextClass: {
        type: String,
        default: 'cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
    },
    nextLinkClass: {
        type: String,
        default: ''
    },
    breakViewClass: {
        type: String
    },
    breakViewLinkClass: {
        type: String
    },
    activeClass: {
        type: String,
        default: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white'
    },
    disabledClass: {
        type: String,
        default: 'disabled'
    },
    noLiSurround: {
        type: Boolean,
        default: false
    },
    firstLastButton: {
        type: Boolean,
        default: true
    },
    firstButtonText: {
        type: String,
        default: '<<'
    },
    lastButtonText: {
        type: String,
        default: '>>'
    },
    hidePrevNext: {
        type: Boolean,
        default: false
    }
});

onBeforeMount(() => {
    state.value.innerValue = props.initialPage;
})

onBeforeUpdate(() => {
    if (props.forcePage === undefined) return
    if (props.forcePage !== selected.value) {
        selected.value = props.forcePage
    }
})

const selected = computed({
    get() {
        return props.modelValue || state.value.innerValue
    },
    set(newValue) {
        state.value.innerValue = newValue
    }
})

const pages = computed(() => {
    let items = {};
    state.value.pageCount = props.pagination.last_page;

    if (state.value.pageCount <= props.pageRange) {
        for (let index = 0; index < state.value.pageCount; index++) {
            items[index] = {
                index: index,
                content: index + 1,
                selected: index === (selected.value - 1)
            }
        }
    } else {
        const halfPageRange = Math.floor(props.pageRange / 2)

        let setPageItem = index => {
            items[index] = {
                index: index,
                content: index + 1,
                selected: index === (selected.value - 1)
            }
        }

        let setBreakView = index => {
            items[index] = {
                disabled: true,
                breakView: true
            }
        }

        // 1st - loop thru low end of margin pages
        for (let i = 0; i < props.marginPages; i++) {
            setPageItem(i);
        }

        // 2nd - loop thru selected range
        let selectedRangeLow = 0;
        if (selected.value - halfPageRange > 0) {
            selectedRangeLow = selected.value - 1 - halfPageRange;
        }

        let selectedRangeHigh = selectedRangeLow + props.pageRange - 1;
        if (selectedRangeHigh >= state.value.pageCount) {
            selectedRangeHigh = state.value.pageCount - 1;
            selectedRangeLow = selectedRangeHigh - props.pageRange + 1;
        }

        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= state.value.pageCount - 1; i++) {
            setPageItem(i);
        }

        // Check if there is breakView in the left of selected range
        if (selectedRangeLow > props.marginPages) {
            setBreakView(selectedRangeLow - 1)
        }

        // Check if there is breakView in the right of selected range
        if (selectedRangeHigh + 1 < state.value.pageCount - props.marginPages) {
            setBreakView(selectedRangeHigh + 1)
        }

        // 3rd - loop thru high end of margin pages
        for (let i = state.value.pageCount - 1; i >= state.value.pageCount - props.marginPages; i--) {
            setPageItem(i);
        }
    }
    return items
})

const emits = defineEmits(['update:modelValue']);

function handlePageSelected(value) {


    if (selected.value === value) return

    state.value.innerValue = value
    emits('update:modelValue', value)
    props.clickHandler(value)
}

function prevPage() {
    if (selected.value <= 1) return

    handlePageSelected(selected.value - 1)
}

function nextPage() {
    if (selected.value >= state.value.pageCount) return

    handlePageSelected(selected.value + 1)
}

function firstPageSelected() {
    return selected.value === 1
}

function lastPageSelected() {
    return (selected.value === state.value.pageCount) || (state.value.pageCount === 0)
}

function selectFirstPage() {
    if (selected.value <= 1) return

    handlePageSelected(1)
}

function selectLastPage() {
    if (selected.value >= state.value.pageCount) return

    handlePageSelected(state.value.pageCount)
}
</script>
