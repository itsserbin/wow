import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-center" }, _attrs))}><div class="font-bold text-text text-2xl font-heading mb-5"> \u0417\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F / \u0421\u043A\u0430\u0440\u0433\u0438 / \u041F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 </div><div class="font-[400] text-xl font-subheading mb-5"> \u041C\u0430\u0454\u0442\u0435 \u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u0441\u043A\u0430\u0440\u0433\u0438 \u0430\u0431\u043E \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u044F\u043A \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0441\u0442\u0430\u0442\u0438 \u043A\u0440\u0430\u0449\u0435? </div><div class="font-text text-base"> \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C <a${ssrRenderAttr("href", _ctx.route("support"))} class="text-link hover:text-accent underline">\u0444\u043E\u0440\u043C\u0443 \u043D\u0430 \u0441\u0430\u0439\u0442\u0456</a> \u0442\u0430 \u043C\u0438 \u043E\u0431\u043E\u0432\u02BC\u044F\u0437\u043A\u043E\u0432\u043E \u0440\u043E\u0437\u0434\u0438\u0432\u0438\u043C\u043E\u0441\u044C \u0432\u0430\u0448 \u0437\u0430\u043F\u0438\u0442 \u0456 \u0437\u0432&#39;\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C </div></div>`);
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
