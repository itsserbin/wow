import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><div class="font-bold text-text text-2xl font-heading mb-5"> Запитання / Скарги / Пропозиції </div><div class="font-[400] text-xl font-subheading mb-5"> Маєте питання, скарги або пропозиції як ми можемо стати краще? </div><div class="font-text text-base"> Будь ласка, заповніть <a${ssrRenderAttr("href", _ctx.route("support"))} class="text-link hover:text-accent underline">форму на сайті</a> та ми обовʼязково роздивимось ваш запит і зв&#39;яжемося з вами найближчим часом </div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Support.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Support = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Support as default
};
