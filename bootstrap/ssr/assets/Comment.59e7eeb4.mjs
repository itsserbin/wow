import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Comment",
  __ssrInlineRender: true,
  props: ["order"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] border-[0.5px] border-gray-300 rounded-[12px] shadow-lg box-border mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]" }, _attrs))}><div class="text-2xl font-heading font-[400]"><h3>\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440</h3></div><label class="text-[1.075rem] font-[500] text-[#686868] w-[100%]"><textarea placeholder="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0448 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440" class="border-[0.5px] rounded-[10px] box-border font-[350] h-[100] mt-[0.75rem] p-[1rem] resize-none w-[100%] outline-none border-main focus:border-accent focus:ring-accent">${ssrInterpolate(__props.order.comment)}</textarea></label></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Checkout/Comment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
