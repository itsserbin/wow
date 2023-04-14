import { computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./OrderItem-7624c01e.mjs";
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
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="grid grid-cols-1 gap-4"><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">ID завомлення:</h3><div class="text-xl">${ssrInterpolate(__props.order.id)}</div></div><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Статус виконання:</h3><div class="text-xl">${ssrInterpolate(__props.order.status === "transferred_to_supplier" ? "Передано до упакування" : props.statuses[__props.order.status])}</div></div><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Загальна сума замовлення:</h3><div class="text-xl">${ssrInterpolate(__props.order.total_price)}</div></div>`);
      if (__props.order.prepayment_sum) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Передоплата:</h3><div class="text-xl">${ssrInterpolate(__props.order.prepayment_sum)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<hr class="my-3"><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Контактні дані:</h3><div class="text-xl">${ssrInterpolate(unref(name))}</div></div><div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Номер телефону:</h3><div class="text-xl">${ssrInterpolate(__props.order.client.phone)}</div></div><hr class="my-3">`);
      if (__props.order.city) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Місто призначення:</h3><div class="text-xl">${ssrInterpolate(__props.order.city)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.order.postal_office) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Почтове відділення:</h3><div class="text-xl">${ssrInterpolate(__props.order.postal_office)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.order.waybill) {
        _push(`<div class="grid grid-cols-2 gap-4 justify-center items-center"><h3 class="font-semibold text-xl">Номер накладної:</h3><div class="text-xl">${ssrInterpolate(__props.order.waybill)}</div></div>`);
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
