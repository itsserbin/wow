import { inject, ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$2 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$3 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$4 } from "./Textarea-1805d9a6.mjs";
import { M as Multiselect } from "./Multiselect-c4e07430.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
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
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Статус публікації" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Товар" }, null, _parent));
      _push(ssrRenderComponent(Multiselect, {
        options: products.value,
        modelValue: __props.item.product,
        "onUpdate:modelValue": ($event) => __props.item.product = $event,
        "custom-label": titleProduct,
        placeholder: "Оберіть товар",
        "track-by": "id",
        "close-on-select": true,
        searchable: true
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Імʼя" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.name,
        "onUpdate:modelValue": ($event) => __props.item.name = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Телефон" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.phone,
        "onUpdate:modelValue": ($event) => __props.item.phone = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Текст відгука" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
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
