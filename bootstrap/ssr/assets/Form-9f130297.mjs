import { inject, ref, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Select-b70673dc.mjs";
import { _ as _sfc_main$1 } from "./Label-229c476a.mjs";
import { _ as _sfc_main$3 } from "./Input-4be85f13.mjs";
import Datepicker from "@vuepic/vue-datepicker";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["item"],
  setup(__props) {
    const props = __props;
    const publishedStatuses = inject("$publishedStatuses");
    const state = ref({
      discount_type: "",
      discountTypeOptions: [
        {
          key: "discount_in_hryvnia",
          value: "Знижка в гривнях"
        },
        {
          key: "percent_discount",
          value: "Знижка в відсотках"
        }
      ]
    });
    onMounted(() => {
      if (props.item.discount_in_hryvnia) {
        state.value.discount_type = "discount_in_hryvnia";
      }
      if (props.item.percent_discount) {
        state.value.discount_type = "percent_discount";
      }
    });
    function onChangeDiscountType() {
      if (state.value.discount_type === "discount_in_hryvnia") {
        props.item.percent_discount = null;
      }
      if (state.value.discount_type === "percent_discount") {
        props.item.discount_in_hryvnia = null;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Статус публікації" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Код" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: __props.item.code,
        "onUpdate:modelValue": ($event) => __props.item.code = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Кінцева дата" }, null, _parent));
      _push(ssrRenderComponent(unref(Datepicker), {
        modelValue: __props.item.end_date,
        "onUpdate:modelValue": ($event) => __props.item.end_date = $event,
        class: "w-100",
        locale: "ru",
        placeholder: "Оберіть дату",
        autoApply: "",
        monthChangeOnScroll: false,
        enableTimePicker: false
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, { value: "Тип знижки" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: state.value.discount_type,
        "onUpdate:modelValue": ($event) => state.value.discount_type = $event,
        options: state.value.discountTypeOptions,
        onChange: onChangeDiscountType
      }, null, _parent));
      _push(`</div>`);
      if (state.value.discount_type) {
        _push(`<div class="block">`);
        _push(ssrRenderComponent(_sfc_main$1, { value: "Сума знижки" }, null, _parent));
        if (state.value.discount_type === "discount_in_hryvnia") {
          _push(ssrRenderComponent(_sfc_main$3, {
            modelValue: __props.item.discount_in_hryvnia,
            "onUpdate:modelValue": ($event) => __props.item.discount_in_hryvnia = $event,
            type: "number"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (state.value.discount_type === "percent_discount") {
          _push(ssrRenderComponent(_sfc_main$3, {
            modelValue: __props.item.percent_discount,
            "onUpdate:modelValue": ($event) => __props.item.percent_discount = $event,
            type: "number"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/PromoCodes/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
