import { computed, ref, unref, mergeProps, isRef, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import Datepicker from "@vuepic/vue-datepicker";
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
        label: "Сьогодні",
        range: [
          /* @__PURE__ */ new Date(),
          /* @__PURE__ */ new Date()
        ]
      },
      {
        label: "Вчора",
        range: [
          /* @__PURE__ */ new Date() - 864e5,
          /* @__PURE__ */ new Date() - 864e5
        ]
      },
      {
        label: "Поточний місяць",
        range: [
          startOfMonth(/* @__PURE__ */ new Date()),
          endOfMonth(/* @__PURE__ */ new Date())
        ]
      },
      {
        label: "Попередній місяць",
        range: [
          startOfMonth(subMonths(/* @__PURE__ */ new Date(), 1)),
          endOfMonth(subMonths(/* @__PURE__ */ new Date(), 1))
        ]
      },
      {
        label: "Поточний рік",
        range: [
          startOfYear(/* @__PURE__ */ new Date()),
          endOfYear(/* @__PURE__ */ new Date())
        ]
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Datepicker), mergeProps({
        modelValue: unref(value),
        "onUpdate:modelValue": ($event) => isRef(value) ? value.value = $event : null,
        class: "w-100",
        locale: "ru",
        placeholder: "Оберіть дату",
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
