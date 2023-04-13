import { computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./OrderItem.f44a4629.mjs";
const _sfc_main = {
  __name: "Status",
  __ssrInlineRender: true,
  props: ["order", "statuses"],
  setup(__props) {
    const props = __props;
    const name = computed(() => {
      const { name: name2, last_name, middle_name } = props.order.client;
      return `${name2 ? name2 : ""} ${last_name ? last_name : ""} ${middle_name ? middle_name : ""}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 gap-4"><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">ID \u0437\u0430\u0432\u043E\u043C\u043B\u0435\u043D\u043D\u044F:</h3><div class="text-xl">${ssrInterpolate(__props.order.id)}</div></div><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u0421\u0442\u0430\u0442\u0443\u0441 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F:</h3><div class="text-xl">${ssrInterpolate(__props.order.status === "transferred_to_supplier" ? "\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043E \u0434\u043E \u0443\u043F\u0430\u043A\u0443\u0432\u0430\u043D\u043D\u044F" : props.statuses[__props.order.status])}</div></div><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F:</h3><div class="text-xl">${ssrInterpolate(__props.order.total_price)}</div></div>`);
      if (__props.order.prepayment_sum) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u041F\u0435\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0430:</h3><div class="text-xl">${ssrInterpolate(__props.order.prepayment_sum)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr class="my-3"><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0456 \u0434\u0430\u043D\u0456:</h3><div class="text-xl">${ssrInterpolate(unref(name))}</div></div><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443:</h3><div class="text-xl">${ssrInterpolate(__props.order.client.phone)}</div></div><hr class="my-3">`);
      if (__props.order.city) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u041C\u0456\u0441\u0442\u043E \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F:</h3><div class="text-xl">${ssrInterpolate(__props.order.city)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.order.postal_office) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u041F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F:</h3><div class="text-xl">${ssrInterpolate(__props.order.postal_office)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.order.waybill) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457:</h3><div class="text-xl">${ssrInterpolate(__props.order.waybill)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="block"><!--[-->`);
      ssrRenderList(__props.order.items, (item) => {
        _push(ssrRenderComponent(_sfc_main$1, { item }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Status/Status.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
