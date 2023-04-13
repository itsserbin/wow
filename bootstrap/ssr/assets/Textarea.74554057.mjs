import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Textarea",
  __ssrInlineRender: true,
  props: ["modelValue", "placeholder", "rows"],
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
        value: __props.modelValue,
        placeholder: __props.placeholder,
        rows: __props.rows ? __props.rows : "2",
        class: "border-[0.5px] rounded-[10px] box-border font-[350] h-[100] mt-[0.75rem] p-[1rem] resize-none w-[100%] outline-none border-red-600 focus:border-red-600 focus:ring-red-600"
      }, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
