import gsap from "gsap";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
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
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        height: el.scrollHeight,
        delay: el.dataset.index * 0.15,
        ease: "Power3.easeIn",
        onComplete: done
      });
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        ease: "Power3.easeOut",
        onComplete: done
      });
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["border-b-accent border first:rounded-t-lg last:rounded-b-lg last:border-b-0 bg-secondary", { "bg-main": $options.visible }]
  }, _attrs))}><button type="button" class="flex items-center justify-between w-full p-5 text-left text-gray-500 text-text font-subheading transition-all duration-300 text-base ring-0">`);
  ssrRenderSlot(_ctx.$slots, "accordion-trigger", {}, null, _push, _parent);
  _push(`<svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button><div class="accordion-collapse-body" style="${ssrRenderStyle($options.visible ? null : { display: "none" })}"><div class="p-5 font-light border border-gray-200 font-text bg-white">`);
  ssrRenderSlot(_ctx.$slots, "accordion-content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Accordion/AccordionItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccordionItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AccordionItem as default
};
