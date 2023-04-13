import { ref, onMounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = {
  __name: "Input",
  __ssrInlineRender: true,
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
  setup(__props) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        type: "text",
        value: __props.modelValue,
        ref_key: "input",
        ref: input,
        placeholder: __props.placeholder,
        class: "text-base text-text border-[0.5px] border-main rounded-[10px] box-border mt-[0.75rem] p-[1rem] w-[100%] focus:border-accent focus:ring-accent"
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
