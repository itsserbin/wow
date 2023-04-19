import { ref, onMounted, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$4 } from "./Input-4be85f13.mjs";
import { _ as _sfc_main$5 } from "./Textarea-1805d9a6.mjs";
import { _ as _sfc_main$2 } from "./Select-b70673dc.mjs";
import _sfc_main$3 from "./Datepicker-d51e85a4.mjs";
import "@vuepic/vue-datepicker";
import "date-fns";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item", "modalAction"],
  setup(__props) {
    const props = __props;
    const categories = ref([]);
    onMounted(async () => {
      await axios.get(route("api.statistics.costs.categories.list")).then(({ data }) => {
        data.result.forEach((item) => {
          categories.value.push({
            key: item.id,
            value: item.title
          });
        });
      });
    });
    const totalSum = computed(() => props.item.quantity * props.item.sum);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4" }, _attrs))}><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Категорія витрат" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.cost_category_id,
        "onUpdate:modelValue": ($event) => __props.item.cost_category_id = $event,
        options: categories.value
      }, null, _parent));
      _push(`</div>`);
      if (__props.modalAction === "create") {
        _push(`<div class="block"><div class="grid grid-cols-2 gap-4"><div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700"><input name="cost_type"${ssrIncludeBooleanAttr(ssrLooseEqual(__props.item.cost_type, "single")) ? " checked" : ""} value="single" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> Один день </label></div><div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700"><input name="cost_type"${ssrIncludeBooleanAttr(ssrLooseEqual(__props.item.cost_type, "range")) ? " checked" : ""} value="range" type="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"><label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> Діапазон </label></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.modalAction === "create") {
        _push(`<div class="block">`);
        if (__props.item.cost_type === "single") {
          _push(ssrRenderComponent(_sfc_main$3, {
            modelValue: __props.item.date,
            "onUpdate:modelValue": ($event) => __props.item.date = $event,
            class: "w-100",
            locale: "ru",
            placeholder: "Оберіть дату",
            autoApply: "",
            monthChangeOnScroll: false,
            enableTimePicker: false,
            utc: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.item.cost_type === "range") {
          _push(ssrRenderComponent(_sfc_main$3, {
            modelValue: __props.item.date,
            "onUpdate:modelValue": ($event) => __props.item.date = $event,
            class: "w-100",
            locale: "ru",
            placeholder: "Оберіть дату",
            autoApply: "",
            monthChangeOnScroll: false,
            enableTimePicker: false,
            range: "",
            utc: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.modalAction === "edit") {
        _push(`<div class="block">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          modelValue: __props.item.date,
          "onUpdate:modelValue": ($event) => __props.item.date = $event,
          class: "w-100",
          locale: "ru",
          placeholder: "Оберіть дату",
          autoApply: "",
          monthChangeOnScroll: false,
          enableTimePicker: false,
          utc: ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Кількість" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.quantity,
        "onUpdate:modelValue": ($event) => __props.item.quantity = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Вартість" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        modelValue: __props.item.sum,
        "onUpdate:modelValue": ($event) => __props.item.sum = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Загалом" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        value: unref(totalSum),
        type: "number",
        disabled: ""
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Коментар" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Costs/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
