import { withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import Loader from "./Loader-f0774e51.mjs";
import _sfc_main$1 from "./ProductCards-d6a93abf.mjs";
import _sfc_main$2 from "./Button-e6d9c4d7.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./ProductCard-68eacbd3.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
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
      default: "Завантажити ще"
    },
    textGoToProductCard: {
      type: String,
      default: "Детальніше"
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
                  _push2(`Завантажити ще `);
                } else {
                  return [
                    createTextVNode("Завантажити ще ")
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
