import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Heading",
  __ssrInlineRender: true,
  props: ["heading"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.heading) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-bold text-black text-center text-2xl font-subheading mb-[15px]" }, _attrs))}>${ssrInterpolate(__props.heading)}</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Heading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
