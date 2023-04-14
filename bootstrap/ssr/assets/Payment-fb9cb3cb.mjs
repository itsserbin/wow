import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseEqual } from "vue/server-renderer";
const _sfc_main = {
  __name: "Payment",
  __ssrInlineRender: true,
  props: ["order"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#fff] border-[0.5px] border-gray-300 rounded-[12px] shadow-lg box-border mb-[1.5rem] pt-[1.25rem] pr-[1rem] pb-[1.25rem] pl-[1rem]" }, _attrs))}><div class="text-2xl font-heading font-[400]"><h3>Оплата</h3></div><div class="grid gap-4 font-subheading"><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] flex items-center"><input type="radio" name="payment" value="cash_on_delivery"${ssrIncludeBooleanAttr(ssrLooseEqual(__props.order.payment_method, "cash_on_delivery")) ? " checked" : ""} class="mr-2 focus:border-red-600 focus:ring-red-600"><p class="a-text">Накладений платіж</p></label><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] flex items-center"><input type="radio" name="payment" value="minimum_prepayment"${ssrIncludeBooleanAttr(ssrLooseEqual(__props.order.payment_method, "minimum_prepayment")) ? " checked" : ""} class="mr-2 focus:border-red-600 focus:ring-red-600"><p class="a-text">Мінімальна передоплата (10%)</p></label><label class="text-[1.075rem] text-[#686868] font-[500] w-[100%] flex items-center"><input type="radio" name="payment" value="full_prepayment"${ssrIncludeBooleanAttr(ssrLooseEqual(__props.order.payment_method, "full_prepayment")) ? " checked" : ""} class="mr-2 focus:border-red-600 focus:ring-red-600"><p class="a-text">Повна передоплата</p></label></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Checkout/Payment.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
