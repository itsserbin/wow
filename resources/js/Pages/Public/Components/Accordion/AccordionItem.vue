<template>
  <div class="
                        border-b-accent
                        border
                        first:rounded-t-lg
                        last:rounded-b-lg
                        last:border-b-0
                        bg-secondary
                "
       :class="{'bg-main': visible}"
  >
    <button type="button"
            class="flex
                        items-center
                        justify-between
                        w-full
                        p-5
                        text-left
                        text-gray-500

                        text-text
                        font-subheading
                        transition-all
                        duration-300
                        text-base
                        ring-0"
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
    <!--        @enter="start"-->
    <!--        @after-enter="end"-->
    <!--        @before-leave="start"-->
    <!--        @after-leave="end">-->
    <transition
        name="staggered-fade"
        tag="ul"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
    >
      <div class="accordion-collapse-body" key="tet" v-show="visible">
        <div class="p-5 font-light border border-gray-200 font-text bg-white">
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import gsap from 'gsap'

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
