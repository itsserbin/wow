import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Label-45b40ea1.mjs";
import _sfc_main$2 from "./Input-4d6b8e1d.mjs";
const _sfc_main = {
  __name: "Delivery",
  __ssrInlineRender: true,
  props: ["order"],
  setup(__props) {
    ref({
      cities: [],
      isLoadingCities: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-[15px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]" }, _attrs))}><div class="text-2xl font-heading font-[400]"><h3>Доставка</h3></div><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Місто`);
          } else {
            return [
              createTextVNode("Місто")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        placeholder: "Вкажіть місто",
        modelValue: __props.order.city,
        "onUpdate:modelValue": ($event) => __props.order.city = $event
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Відділення Нова Пошта`);
          } else {
            return [
              createTextVNode("Відділення Нова Пошта")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        placeholder: "Вкажіть відділення НП",
        modelValue: __props.order.postal_office,
        "onUpdate:modelValue": ($event) => __props.order.postal_office = $event
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Checkout/Delivery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
