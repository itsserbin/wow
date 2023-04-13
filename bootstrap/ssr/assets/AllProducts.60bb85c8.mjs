import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$2 from "./Button.ec6da28a.mjs";
import Loader from "./Loader.43a0c8e2.mjs";
import _sfc_main$1 from "./ProductCards.0f12ca5a.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./ProductCard.5c4ddc79.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
import "swiper/vue";
import "swiper";
const _sfc_main = {
  __name: "AllProducts",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Array
    },
    isShowLoadMore: {
      type: Boolean
    },
    isLoadMore: {
      type: Boolean
    },
    lang: {
      type: String,
      default: "ua"
    },
    textGoToProductCard: {
      type: String,
      default: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"
    },
    textAllProducts: {
      type: String,
      default: "\u0423\u0441\u0456 \u0442\u043E\u0432\u0430\u0440\u0438"
    }
  },
  emits: ["fetch"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-bold text-black text-center text-2xl font-subheading mb-[15px]">${ssrInterpolate(__props.textAllProducts)}</div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          products: __props.data,
          lang: __props.lang,
          "text-go-to-product-card": __props.textGoToProductCard,
          class: "mb-5",
          slider: true
        }, null, _parent));
        if (__props.isShowLoadMore) {
          _push(`<div class="text-center">`);
          if (__props.isLoadMore) {
            _push(ssrRenderComponent(Loader, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (!__props.isLoadMore) {
            _push(ssrRenderComponent(_sfc_main$2, {
              onClick: ($event) => _ctx.$emit("fetch"),
              type: "button"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435`);
                } else {
                  return [
                    createTextVNode("\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home/AllProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
