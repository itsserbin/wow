import { ref, onMounted, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const roles = ref([]);
    onMounted(() => {
      axios.get(route("api.roles.list")).then(({ data }) => roles.value = data.result);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_input_component = resolveComponent("input-component");
      const _component_multiselect = resolveComponent("multiselect");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041D\u0430\u0437\u0432\u0430" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Email" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.email,
        "onUpdate:modelValue": ($event) => __props.item.email = $event,
        type: "email"
      }, null, _parent));
      _push(`</div></div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0420\u043E\u043B\u0456" }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
        options: roles.value,
        modelValue: __props.item.roles,
        "onUpdate:modelValue": ($event) => __props.item.roles = $event,
        label: "name",
        placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u043E\u043B\u0456",
        "track-by": "id",
        "close-on-select": false,
        searchable: true,
        multiple: ""
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041D\u043E\u0432\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.password,
        "onUpdate:modelValue": ($event) => __props.item.password = $event,
        type: "password"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043F\u0430\u0440\u043E\u043B\u044E" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.password_confirmation,
        "onUpdate:modelValue": ($event) => __props.item.password_confirmation = $event,
        type: "password"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Users/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
