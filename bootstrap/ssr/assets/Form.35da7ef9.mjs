import { inject, ref, onMounted, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
          value: "\u0417\u043D\u0438\u0436\u043A\u0430 \u0432 \u0433\u0440\u0438\u0432\u043D\u044F\u0445"
        },
        {
          key: "percent_discount",
          value: "\u0417\u043D\u0438\u0436\u043A\u0430 \u0432 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0430\u0445"
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
      const _component_label_component = resolveComponent("label-component");
      const _component_select_component = resolveComponent("select-component");
      const _component_input_component = resolveComponent("input-component");
      const _component_Datepicker = resolveComponent("Datepicker");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: __props.item.published,
        "onUpdate:modelValue": ($event) => __props.item.published = $event,
        options: unref(publishedStatuses)
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041A\u043E\u0434" }, null, _parent));
      _push(ssrRenderComponent(_component_input_component, {
        modelValue: __props.item.code,
        "onUpdate:modelValue": ($event) => __props.item.code = $event,
        type: "text"
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u041A\u0456\u043D\u0446\u0435\u0432\u0430 \u0434\u0430\u0442\u0430" }, null, _parent));
      _push(ssrRenderComponent(_component_Datepicker, {
        modelValue: __props.item.end_date,
        "onUpdate:modelValue": ($event) => __props.item.end_date = $event,
        class: "w-100",
        locale: "ru",
        placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",
        autoApply: "",
        monthChangeOnScroll: false,
        enableTimePicker: false
      }, null, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="block">`);
      _push(ssrRenderComponent(_component_label_component, { value: "\u0422\u0438\u043F \u0437\u043D\u0438\u0436\u043A\u0438" }, null, _parent));
      _push(ssrRenderComponent(_component_select_component, {
        modelValue: state.value.discount_type,
        "onUpdate:modelValue": ($event) => state.value.discount_type = $event,
        options: state.value.discountTypeOptions,
        onChange: onChangeDiscountType
      }, null, _parent));
      _push(`</div>`);
      if (state.value.discount_type) {
        _push(`<div class="block">`);
        _push(ssrRenderComponent(_component_label_component, { value: "\u0421\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438" }, null, _parent));
        if (state.value.discount_type === "discount_in_hryvnia") {
          _push(ssrRenderComponent(_component_input_component, {
            modelValue: __props.item.discount_in_hryvnia,
            "onUpdate:modelValue": ($event) => __props.item.discount_in_hryvnia = $event,
            type: "number"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (state.value.discount_type === "percent_discount") {
          _push(ssrRenderComponent(_component_input_component, {
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
