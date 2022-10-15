<template>
    <div class="accordion-collapse-heading">
        <button type="button"
                class="
                        flex
                        items-center
                        justify-between
                        w-full
                        p-5
                        font-medium
                        text-left
                        text-gray-500
                        border
                        border-b-0
                        border-gray-200
                        focus:ring-4
                        focus:ring-gray-200
                        hover:bg-gray-100
                "
                :class="{'bg-gray-100': visible}"
                @click="open"
        >
            <slot name="accordion-trigger"></slot>
            <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
            </svg>
        </button>

        <!--        <div-->
        <!--            class="accordion__trigger"-->
        <!--            :class="{'accordion__trigger_active': visible}"-->
        <!--            @click="open">-->

        <!--            &lt;!&ndash; This slot will handle the title/header of the accordion and is the part you click on &ndash;&gt;-->
        <!--            <slot name="accordion-trigger"></slot>-->
        <!--            <arrow-down width="20" height="20" class="text-dark"></arrow-down>-->
        <!--        </div>-->

        <transition
            name="fadeLast"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end">

            <div class="accordion-collapse-body" v-show="visible">
                <div class="p-5 font-light border border-b-0 border-gray-200">
                    <!-- This slot will handle all the content that is passed to the accordion -->
                    <slot name="accordion-content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
export default {
    props: {},
    inject: ["Accordion"],
    data() {
        return {
            index: null
        };
    },
    computed: {
        visible() {
            return this.index === this.Accordion.active;
        }
    },
    methods: {
        open() {
            if (this.visible) {
                this.Accordion.active = null;
            } else {
                this.Accordion.active = this.index;
            }
        },
        start(el) {
            el.style.height = el.scrollHeight + "px";
        },
        end(el) {
            el.style.height = "";
        }
    },
    created() {
        this.index = this.Accordion.count++;
    }
};
</script>
