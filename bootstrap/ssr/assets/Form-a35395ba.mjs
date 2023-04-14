import { ref, onMounted, computed, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item", "modalAction"],
  setup(__props) {
    const props = __props;
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
    const totalSum = computed(() => props.item.quantity * props.item.sum);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_Datepicker = resolveComponent("Datepicker");
      const _component_input_component = resolveComponent("input-component");
      const _component_textarea_component = resolveComponent("textarea-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4" }, _attrs))}><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Категорія витрат" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
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
          _push(ssrRenderComponent(_component_Datepicker, {
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
          _push(ssrRenderComponent(_component_Datepicker, {
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
        _push(ssrRenderComponent(_component_Datepicker, {
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
      _push(ssrRenderComponent(_component_label_component, { value: "Кількість" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.quantity,
        "onUpdate:modelValue": ($event) => __props.item.quantity = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Вартість" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.sum,
        "onUpdate:modelValue": ($event) => __props.item.sum = $event,
        type: "number"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Загалом" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        value: unref(totalSum),
        type: "number",
        disabled: ""
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1">`);
      _push(ssrRenderComponent(_component_label_component, { value: "Коментар" }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Costs/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
