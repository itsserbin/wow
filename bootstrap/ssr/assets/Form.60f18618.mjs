import { ref, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item", "statuses"],
  setup(__props) {
    ref({
      statuses: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_input_component = resolveComponent("input-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="grid grid-cols-1 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.order_id,
        "onUpdate:modelValue": ($event) => __props.item.order_id = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0443\u043C\u0430" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.sum,
        "onUpdate:modelValue": ($event) => __props.item.sum = $event,
        type: "number"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Invoices/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
