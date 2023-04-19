import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$2 } from "./Textarea-1805d9a6.mjs";
import { _ as _sfc_main$3 } from "./Button-6b2e52a5.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["options"],
  emits: ["submitForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Head scripts" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.options.head_scripts,
        "onUpdate:modelValue": ($event) => __props.options.head_scripts = $event,
        rows: "6"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Before body scripts" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.options.after_body_scripts,
        "onUpdate:modelValue": ($event) => __props.options.after_body_scripts = $event,
        rows: "6"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Footer scripts" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.options.footer_scripts,
        "onUpdate:modelValue": ($event) => __props.options.footer_scripts = $event,
        rows: "6"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$3, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Зберегти`);
          } else {
            return [
              createTextVNode("Зберегти")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Scripts/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
