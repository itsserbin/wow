import { computed, ref, resolveComponent, mergeProps, unref, isRef, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { startOfMonth, endOfMonth, subMonths, startOfYear, endOfYear } from "date-fns";
const _sfc_main = {
  __name: "Datepicker",
  __ssrInlineRender: true,
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emits("update:modelValue", value2);
      }
    });
    const presetRanges = ref([
      {
        label: "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
        range: [
          new Date(),
          new Date()
        ]
      },
      {
        label: "\u0412\u0447\u043E\u0440\u0430",
        range: [
          new Date() - 864e5,
          new Date() - 864e5
        ]
      },
      {
        label: "\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u043C\u0456\u0441\u044F\u0446\u044C",
        range: [
          startOfMonth(new Date()),
          endOfMonth(new Date())
        ]
      },
      {
        label: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C",
        range: [
          startOfMonth(subMonths(new Date(), 1)),
          endOfMonth(subMonths(new Date(), 1))
        ]
      },
      {
        label: "\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0440\u0456\u043A",
        range: [
          startOfYear(new Date()),
          endOfYear(new Date())
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Datepicker = resolveComponent("Datepicker", true);
      _push(ssrRenderComponent(_component_Datepicker, mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        class: "w-100",
        locale: "ru",
        placeholder: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0434\u0430\u0442\u0443",
        autoApply: "",
        monthChangeOnScroll: false,
        enableTimePicker: false,
        range: "",
        presetRanges: presetRanges.value
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Datepicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
