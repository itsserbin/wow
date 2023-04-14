import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useStore } from "vuex";
import _sfc_main$1 from "./Button-e6d9c4d7.mjs";
const _sfc_main = {
  __name: "CheckoutTotal",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-[15px] mt-[50px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg box-border mb-[1.5rem] p-[1rem] font-subheading" }, _attrs))}><div class="pb-[0.625rem]"><div class="items-center flex justify-between"><div class="text-[#e3342f] text-base">Ціна без знижки</div><div class="value"><div class="product-card__price"><div class="price"><del><span class="amount price-old">${ssrInterpolate(unref(store).state.price_without_discount)} грн. </span></del></div></div></div></div><div class="flex items-center justify-between"><div class="text-[#000] font-[500] uppercase">До сплати</div><div class="value"><div class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap"><div class="price total">${ssrInterpolate(unref(store).state.totalPrice)} грн. </div></div></div></div></div><div class="items-center flex flex-col">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "submit",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Оформити замовлення `);
          } else {
            return [
              createTextVNode(" Оформити замовлення ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Checkout/CheckoutTotal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
