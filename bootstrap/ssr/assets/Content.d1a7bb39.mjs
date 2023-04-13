import { ref, computed, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderVNode } from "vue/server-renderer";
import _sfc_main$1 from "./Characteristics.5cdcd447.mjs";
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
        label: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u0430",
        key: "deliveryAndPayment",
        value: {
          ua: props.options.text_delivery_and_payment_ua,
          ru: props.options.text_delivery_and_payment_ru
        },
        class: "content"
      },
      {
        label: "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0442\u0430 \u043E\u0431\u043C\u0456\u043D",
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
        label: "\u0412\u0456\u0434\u0435\u043E-\u043E\u0433\u043B\u044F\u0434",
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
        label: "\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432",
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
        label: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438",
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
