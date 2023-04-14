import { ref, onMounted, resolveComponent, useSSRContext } from "vue";
import { ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "../app2.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "vue-i18n";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const products = ref([]);
    onMounted(() => {
      axios.get(route("api.products.list")).then(({ data }) => products.value = data.result).catch((response) => console.log(response));
    });
    const h1AndCodeAndId = ({ h1, id, vendor_code }) => {
      const title = h1 ? h1.ua ? h1.ua : h1.ru : "";
      const separator = title && id ? " - " : "";
      const code = vendor_code ? `${vendor_code}/` : "";
      return `${title}${separator}${code}${id}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_multiselect = resolveComponent("multiselect");
      _push(`<!--[--><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "\u0422\u043E\u0432\u0430\u0440" }, null, _parent));
      _push(ssrRenderComponent(_component_multiselect, {
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
      _push(ssrRenderComponent(_sfc_main$1, { value: "\u0420\u043E\u0437\u043C\u0456\u0440" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.size,
        "onUpdate:modelValue": ($event) => __props.item.size = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "\u041A\u043E\u043B\u0456\u0440" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.color,
        "onUpdate:modelValue": ($event) => __props.item.color = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block mb-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.count,
        "onUpdate:modelValue": ($event) => __props.item.count = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div class="block mb-5"><div class="flex items-center mb-4"><input id="resale"${ssrIncludeBooleanAttr(Array.isArray(__props.item.resale) ? ssrLooseContain(__props.item.resale, null) : __props.item.resale) ? " checked" : ""} type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label for="resale" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0430</label></div></div>`);
      if (__props.item.resale) {
        _push(`<div class="block mb-5">`);
        _push(ssrRenderComponent(_sfc_main$1, { value: "\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438 (\u0433\u0440\u043D.)" }, null, _parent));
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
