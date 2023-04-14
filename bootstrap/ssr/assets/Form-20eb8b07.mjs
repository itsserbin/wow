import { inject, ref, onMounted, resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    inject("$publishedStatuses");
    inject("$defaultLang");
    const state = ref({
      xmlCategories: [
        {
          key: "fb",
          value: "Facebook"
        }
      ],
      products: []
    });
    onMounted(() => {
      axios.get(route("api.products.list")).then(({ data }) => state.value.products = data.result).catch((response) => console.log(response));
    });
    function h1AndCodeAndId({ h1, id }) {
      if (h1 && id) {
        return `${h1.ua ? h1.ua : h1.ru} - ${id}`;
      } else {
        return `${id}`;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_input_component = resolveComponent("input-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_multiselect = resolveComponent("multiselect");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Назва" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.title,
        "onUpdate:modelValue": ($event) => __props.item.title = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Slug" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.slug,
        "onUpdate:modelValue": ($event) => __props.item.slug = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Опис" }, null, _parent));
      _push(ssrRenderComponent(_component_textarea_component, {
        modelValue: __props.item.description,
        "onUpdate:modelValue": ($event) => __props.item.description = $event
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Категорія" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.category,
        "onUpdate:modelValue": ($event) => __props.item.category = $event,
        options: state.value.xmlCategories
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Товари" }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
        options: state.value.products,
        modelValue: __props.item.products,
        "onUpdate:modelValue": ($event) => __props.item.products = $event,
        "custom-label": h1AndCodeAndId,
        placeholder: "Оберіть товари",
        "track-by": "id",
        "close-on-select": false,
        searchable: true,
        multiple: true
      }, null, _parent));
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Xmls/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
