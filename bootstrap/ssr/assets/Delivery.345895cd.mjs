import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Label.4ae45cc4.mjs";
import _sfc_main$2 from "./Input.aac4ec2d.mjs";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-[15px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]" }, _attrs))}><div class="text-2xl font-heading font-[400]"><h3>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</h3></div><div class="grid gap-4"><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041C\u0456\u0441\u0442\u043E`);
          } else {
            return [
              createTextVNode("\u041C\u0456\u0441\u0442\u043E")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        placeholder: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",
        modelValue: __props.order.city,
        "onUpdate:modelValue": ($event) => __props.order.city = $event
      }, null, _parent));
      _push(`</div><div class="block">`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0412\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u041D\u043E\u0432\u0430 \u041F\u043E\u0448\u0442\u0430`);
          } else {
            return [
              createTextVNode("\u0412\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u041D\u043E\u0432\u0430 \u041F\u043E\u0448\u0442\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        type: "text",
        placeholder: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F \u041D\u041F",
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
