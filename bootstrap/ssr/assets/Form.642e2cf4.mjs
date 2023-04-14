import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["options"],
  emits: ["submitForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      const _component_button_component = resolveComponent("button-component");
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 gap-4 mb-5"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Head scripts" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.options.head_scripts,
        "onUpdate:modelValue": ($event) => __props.options.head_scripts = $event,
        rows: "6"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Before body scripts" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.options.after_body_scripts,
        "onUpdate:modelValue": ($event) => __props.options.after_body_scripts = $event,
        rows: "6"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Footer scripts" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.options.footer_scripts,
        "onUpdate:modelValue": ($event) => __props.options.footer_scripts = $event,
        rows: "6"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_button_component, { type: "submit" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438`);
          } else {
            return [
              createTextVNode("\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438")
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
