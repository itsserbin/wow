import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: ["items-center px-4 py-2 border border-transparent rounded-lg font-semibold text-xs text-white uppercase tracking-widest active:bg-accent focus:outline-none focus:border-accent focus:shadow-outline-accent transition ease-in-out duration-300 hover:scale-105", {
          "outline-none border-accent shadow-outline-gray bg-accent": __props.active,
          "bg-button hover:bg-accent": !__props.active
        }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
