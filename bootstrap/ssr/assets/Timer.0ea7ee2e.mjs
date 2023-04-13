import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Timer",
  __ssrInlineRender: true,
  props: ["timer"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><div class="grid grid-cols-3 gap-4 max-w-[320px] mx-auto text-2xl font-bold"><div class="bg-red-100 rounded-xl p-5 relative after:content-[&#39;:&#39;] after:right-[-10px] after:absolute">${ssrInterpolate(__props.timer.hours)}</div><div class="bg-red-100 rounded-xl p-5 relative after:content-[&#39;:&#39;] after:right-[-10px] after:absolute">${ssrInterpolate(__props.timer.mins)}</div><div class="bg-red-100 rounded-xl p-5 relative">${ssrInterpolate(__props.timer.secs)}</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Thanks/Timer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
