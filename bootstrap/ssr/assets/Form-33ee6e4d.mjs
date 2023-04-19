import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { ref, onMounted, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$2 } from "./Input-4be85f13.mjs";
import { M as Multiselect } from "./Multiselect-c4e07430.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const products = ref([]);
    onMounted(async () => {
      await axios.get(route("api.products.list")).then(({ data }) => products.value = data.result).catch((response) => console.log(response));
    });
    const h1AndCodeAndId = ({ h1, id, vendor_code }) => {
      const title = h1 ? h1.ua ? h1.ua : h1.ru : "";
      const separator = title && id ? " - " : "";
      const code = vendor_code ? `${vendor_code}/` : "";
      return `${title}${separator}${code}${id}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Товар" }, null, _parent));
      _push(ssrRenderComponent(Multiselect, {
        options: products.value,
        modelValue: __props.item.product_id,
        "onUpdate:modelValue": ($event) => __props.item.product_id = $event,
        "custom-label": h1AndCodeAndId,
        class: "mb-5",
        "track-by": "id",
        "close-on-select": true,
        searchable: true
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Розмір" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.size,
        "onUpdate:modelValue": ($event) => __props.item.size = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Колір" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.color,
        "onUpdate:modelValue": ($event) => __props.item.color = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Кількість" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.count,
        "onUpdate:modelValue": ($event) => __props.item.count = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div class="block mb-5"><div class="flex items-center mb-4"><input id="resale"${ssrIncludeBooleanAttr(Array.isArray(__props.item.resale) ? ssrLooseContain(__props.item.resale, null) : __props.item.resale) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="resale" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Додаткова продажа</label></div></div>`);
      if (__props.item.resale) {
        _push(`<div class="block mb-5">`);
        _push(ssrRenderComponent(_sfc_main$1, { value: "Сума знижки (грн.)" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$2, {
          modelValue: __props.item.discount,
          "onUpdate:modelValue": ($event) => __props.item.discount = $event,
          type: "number"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/Items/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
