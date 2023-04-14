import { inject, ref, onMounted, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const publishedStatuses = inject("$publishedStatuses");
    const products = ref([]);
    onMounted(() => {
      axios.get(route("api.products.list")).then(({ data }) => products.value = data.result).catch((response) => console.log(response));
    });
    function titleProduct({ h1 }) {
      return h1.ua ? h1.ua : h1.ru;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_multiselect = resolveComponent("multiselect");
      const _component_input_component = resolveComponent("input-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0422\u043E\u0432\u0430\u0440" }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
        options: products.value,
        modelValue: __props.item.product,
        "onUpdate:modelValue": ($event) => __props.item.product = $event,
        "custom-label": titleProduct,
        placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0442\u043E\u0432\u0430\u0440",
        "track-by": "id",
        "close-on-select": true,
        searchable: true
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0406\u043C\u02BC\u044F" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.phone,
        "onUpdate:modelValue": ($event) => __props.item.phone = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0422\u0435\u043A\u0441\u0442 \u0432\u0456\u0434\u0433\u0443\u043A\u0430" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.item.comment,
        "onUpdate:modelValue": ($event) => __props.item.comment = $event,
        rows: "4"
      }, null, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Reviews/Products/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
