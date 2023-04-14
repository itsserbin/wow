import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Advantages",
  __ssrInlineRender: true,
  props: ["data", "lang"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-black grid grid-cols-1 md:grid-cols-3 mb-3 p-16 rounded-full" }, _attrs))}><!--[-->`);
        ssrRenderList(__props.data, (item) => {
          _push(`<div class="text-center text-white md:mb-0 mb-7"><div class="flex justify-center mb-3">${item.icon}</div><h3 class="font-bold">${ssrInterpolate(item.text[__props.lang])}</h3></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Advantages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
