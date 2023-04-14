import { ref, computed, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Characteristics-920f1b64.mjs";
const _sfc_main = {
  __name: "Content",
  __ssrInlineRender: true,
  props: [
    "lang",
    "description",
    "characteristics",
    "sizeTable",
    "youtube",
    "options",
    "returnAndExchangeUa",
    "returnAndExchangeRu",
    "deliveryAndPaymentUa",
    "deliveryAndPaymentRu"
  ],
  setup(__props) {
    const props = __props;
    const state = ref({
      active: "",
      content: "",
      class: ""
    });
    const isActiveCharacteristic = computed(() => state.value.active === "characteristics" ? _sfc_main$1 : null);
    const items = [
      {
        label: "Доставка та оплата",
        key: "deliveryAndPayment",
        value: {
          ua: props.options.text_delivery_and_payment_ua,
          ru: props.options.text_delivery_and_payment_ru
        },
        class: "content"
      },
      {
        label: "Повернення та обмін",
        key: "returnAndExchange",
        value: {
          ua: props.options.text_return_and_exchange_ua,
          ru: props.options.text_return_and_exchange_ru
        },
        class: "content"
      }
    ];
    if (props.youtube) {
      items.unshift({
        label: "Відео-огляд",
        key: "youtube",
        value: props.youtube,
        class: "youtube"
      });
      state.value = {
        active: "youtube",
        content: props.youtube,
        class: "youtube"
      };
    }
    if (props.sizeTable) {
      items.unshift({
        label: "Таблиця розмірів",
        key: "sizeTable",
        value: props.sizeTable,
        class: "sizes-table"
      });
      state.value = {
        active: "sizeTable",
        content: props.sizeTable,
        class: "sizes-table"
      };
    }
    if (Object.keys(props.characteristics).length) {
      items.unshift({
        label: "Характеристики",
        key: "characteristics",
        value: props.characteristics,
        class: "characteristics-table"
      });
      state.value = {
        active: "characteristics",
        content: "",
        class: "characteristics-table"
      };
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 gap-4" }, _attrs))}><div class="border-b border-red-200 dark:border-red-700"><ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-main"><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<li class="mr-2"><a href="javascript:" class="${ssrRenderClass([{ "text-red-600 border-red-600": state.value.active === item.key }, "inline-flex p-4 border-b-2 border-transparent rounded-t-lg hover:text-accent hover:border-accent group font-subheading text-base"])}">${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div>`);
      if (state.value.active !== "characteristics" && state.value.active !== "youtube") {
        _push(`<div class="${ssrRenderClass(state.value.class)}">${state.value.content}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (state.value.active === "youtube") {
        _push(`<iframe width="100%" height="500px"${ssrRenderAttr("src", state.value.content)}></iframe>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(isActiveCharacteristic)), {
        items: __props.characteristics,
        lang: __props.lang
      }, null), _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Product/Content.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
