import { withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "./Heading-7025d0e4.mjs";
import _sfc_main$3 from "./Button-e6d9c4d7.mjs";
import Loader from "./Loader-f0774e51.mjs";
import _sfc_main$2 from "./ProductCards-1bca5486.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "./ProductCard-ea4cf1fa.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
import "swiper/vue";
import "swiper";
const _sfc_main = {
  __name: "ProductsList",
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
    textLoadMore: {
      type: String,
      default: "Завантажити ще"
    },
    heading: {
      type: String,
      default: null
    },
    slider: {
      type: Boolean,
      default: false
    }
  },
  emits: ["fetch"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.data.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        if (__props.heading) {
          _push(ssrRenderComponent(_sfc_main$1, { heading: __props.heading }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$2, {
          products: __props.data,
          lang: __props.lang,
          class: "mb-5",
          slider: __props.slider
        }, null, _parent));
        if (__props.isShowLoadMore) {
          _push(`<div class="text-center">`);
          if (__props.isLoadMore) {
            _push(ssrRenderComponent(Loader, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (!__props.isLoadMore) {
            _push(ssrRenderComponent(_sfc_main$3, {
              onClick: ($event) => _ctx.$emit("fetch"),
              type: "button"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(__props.textLoadMore)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.textLoadMore), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Home/ProductsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
