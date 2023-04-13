import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><div class="lds-ellipsis inline-block relative w-[80px] h-[80px]"><div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div><div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div><div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div><div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Loader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Loader = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Loader as default
};
