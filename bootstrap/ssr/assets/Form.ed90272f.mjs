import { inject, resolveComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const publishedStatuses = inject("$publishedStatuses");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_input_component = resolveComponent("input-component");
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 mb-5"><div class="block mr-2">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 mb-5"><div class="block mr-2">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041D\u0430\u0437\u0432\u0430" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.title,
        "onUpdate:modelValue": ($event) => __props.item.title = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Translations/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
