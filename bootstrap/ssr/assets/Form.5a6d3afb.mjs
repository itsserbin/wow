import { ref, onMounted, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item", "statuses"],
  setup(__props) {
    const props = __props;
    const state = ref({
      statuses: []
    });
    onMounted(() => {
      for (const [key, value] of Object.entries(props.statuses)) {
        state.value.statuses.push({
          key,
          value
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_input_component = resolveComponent("input-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.status,
        "onUpdate:modelValue": ($event) => __props.item.status = $event,
        options: state.value.statuses
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0406\u043C\u02BC\u044F" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.phone,
        "onUpdate:modelValue": ($event) => __props.item.phone = $event,
        type: "tel"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.order_id,
        "onUpdate:modelValue": ($event) => __props.item.order_id = $event,
        type: "tel"
      }, null, _parent));
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.item.comment,
        "onUpdate:modelValue": ($event) => __props.item.comment = $event,
        rows: "14"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Supports/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
