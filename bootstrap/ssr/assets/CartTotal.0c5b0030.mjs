import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useStore } from "vuex";
import _sfc_main$1 from "./Button.ec6da28a.mjs";
const _sfc_main = {
  __name: "CartTotal",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-[15px] bg-[#fff] border-[0.5px] border-gray-300 shadow-lg box-border mb-[1.5rem] p-[1rem] font-subheading" }, _attrs))}><div class="pb-[0.625rem]"><div class="items-center flex justify-between"><div class="text-text font-[500] uppercase">\u0422\u043E\u0432\u0430\u0440\u0456\u0432</div><div class="value"><div class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap"><div class="price total">${ssrInterpolate(unref(store).state.totalCount)}</div></div></div></div><hr><div class="items-center flex justify-between"><div class="text-[#e3342f] text-base">\u0426\u0456\u043D\u0430 \u0431\u0435\u0437 \u0437\u043D\u0438\u0436\u043A\u0438</div><div class="value"><div class="product-card__price"><div class="price"><del><span class="amount price-old">${ssrInterpolate(unref(store).state.price_without_discount)} \u0433\u0440\u043D. </span></del></div></div></div></div><div class="flex items-center justify-between"><div class="text-[#000] font-[500] uppercase">\u0414\u043E \u0441\u043F\u043B\u0430\u0442\u0438</div><div class="value"><div class="text-[#231f20] flex flex-col text-[1.5rem] font-[700] whitespace-nowrap"><div class="price total">${ssrInterpolate(unref(store).state.totalPrice)} \u0433\u0440\u043D.</div></div></div></div></div><div class="items-center flex flex-col">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "submit",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F `);
          } else {
            return [
              createTextVNode(" \u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Cart/CartTotal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
