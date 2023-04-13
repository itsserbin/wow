import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import Loader from "./Loader.43a0c8e2.mjs";
import _sfc_main$1 from "./ProductCards.0f12ca5a.mjs";
import _sfc_main$2 from "./Button.ec6da28a.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./ProductCard.5c4ddc79.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
import "swiper/vue";
import "swiper";
const _sfc_main = {
  __name: "Products",
  __ssrInlineRender: true,
  props: {
    isShowLoadMore: Boolean,
    isLoadingMore: Boolean,
    title: String,
    data: Array,
    lang: {
      type: String,
      default: "ua"
    },
    textLoadMore: {
      type: String,
      default: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435"
    },
    textGoToProductCard: {
      type: String,
      default: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435"
    }
  },
  emits: ["fetch"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-bold text-black text-center text-[24px] mb-[15px]">${ssrInterpolate(__props.title)}</div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          products: __props.data,
          lang: __props.lang,
          "text-go-to-product-card": __props.textGoToProductCard,
          slider: true
        }, null, _parent));
        if (__props.isShowLoadMore) {
          _push(`<div class="text-center mt-5">`);
          if (__props.isLoadingMore) {
            _push(ssrRenderComponent(Loader, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (!__props.isLoadingMore) {
            _push(ssrRenderComponent(_sfc_main$2, {
              onClick: ($event) => _ctx.$emit("fetch"),
              type: "button"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435 `);
                } else {
                  return [
                    createTextVNode("\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435 ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Category/Products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
