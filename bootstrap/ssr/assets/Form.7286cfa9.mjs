import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "../app2.mjs";
import { ref, onMounted, useSSRContext } from "vue";
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
    const props = __props;
    console.log(props.item);
    const categories = ref([]);
    onMounted(() => {
      axios.get(route("api.statistics.costs.categories.list")).then(({ data }) => {
        data.result.forEach((item) => {
          categories.value.push({
            key: item.id,
            value: item.title
          });
        });
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "\u041D\u0430\u0437\u0432\u0430" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.title,
        "onUpdate:modelValue": ($event) => __props.item.title = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "\u041A\u043E\u0434 \u0442\u0440\u0430\u043D\u0437\u0430\u0446\u0456\u0457 \u0432 \u0431\u0430\u043D\u043A\u0443" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.code,
        "onUpdate:modelValue": ($event) => __props.item.code = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Slug" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.slug,
        "onUpdate:modelValue": ($event) => __props.item.slug = $event,
        type: "text"
      }, null, _parent));
      _push(`</div></div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/CostCategories/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
