<template>
    <div class="accordion-collapse-heading">
        <button type="button"
                class="
                        flex
                        items-center
                        justify-between
                        w-full
                        p-5
                        text-left
                        text-gray-500
                        bg-secondary
                        hover:bg-main
                        text-text
                        font-subheading
                        transition-all
                        duration-300
                        border
                        border-b-accent
                        text-base
                        ring-0
                "
                :class="{'bg-main': visible}"
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
        <transition
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end">

            <div class="accordion-collapse-body" v-show="visible">
                <div class="p-5 font-light border border-gray-200 font-text">
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

<style>
.accordion-enter-active,
.accordion-leave-active {
    transition: opacity 0.5s ease;
}

.accordion-enter-from,
.accordion-leave-to {
    opacity: 0;
}
</style>
