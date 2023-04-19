<script>
import gsap from 'gsap'
import ArrowUp from '@/Components/Icons/ArrowUp.vue';
import ArrowDown from '@/Components/Icons/ArrowDown.vue';

export default {
    props: {},
    inject: ["Accordion"],
    data() {
        return {
            index: null
        };
    },
    components: {
        ArrowUp,
        ArrowDown
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
        beforeEnter(el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter(el, done) {
            gsap.to(el, {
                duration: 0.5,
                opacity: 1,
                height: el.scrollHeight,
                delay: el.dataset.index * .15,
                ease: "Power3.easeIn",
                onComplete: done
            })
        },
        leave(el, done) {
            gsap.to(el, {
                duration: 0.5,
                opacity: 0,
                height: 0,
                delay: el.dataset.index * .15,
                ease: "Power3.easeOut",
                onComplete: done
            })
        }
    },
    created() {
        this.index = this.Accordion.count++;
    }
};
</script>

<template>
    <div class="
                first:rounded-t-lg
                last:rounded-b-lg
                border
                border-gray-200
                dark:border-gray-800
                hover:bg-gray-100
                dark:hover:bg-gray-800
                transition-all
            "
         :class="{
                    'dark:bg-gray-800' : visible,
                    'dark:bg-gray-600' : !visible
                }"
    >
        <button @click="open" type="button"
                class="
                        flex
                        items-center
                        justify-between
                        w-full
                        p-5
                        font-medium
                        text-left
                        text-gray-500
                        dark:text-gray-400
                    ">
            <span><slot name="accordion-trigger"></slot></span>
            <ArrowUp v-if="!visible"/>
            <ArrowDown v-if="visible"/>
        </button>
        <transition
            name="staggered-fade"
            tag="ul"
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
        >
            <div v-show="visible">
                <div class="
                            p-5
                            font-light
                            border
                            border-b-0
                            border-gray-200
                            dark:border-gray-800
                            dark:bg-gray-800
                        ">
                    <slot name="accordion-content"></slot>
                </div>
            </div>
        </transition>
    </div>

</template>
