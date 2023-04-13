import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./ProductCard.5c4ddc79.mjs";
import "vuex";
import "@gtm-support/vue-gtm";
import "swiper/vue";
import "swiper";
const _sfc_main = {
  __name: "ProductCards",
  __ssrInlineRender: true,
  props: {
    products: Array,
    lang: {
      type: String,
      default: "ua"
    },
    slider: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid justify-items-center" }, _attrs))}><div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full"><!--[-->`);
      ssrRenderList(__props.products, (product, i) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          product,
          lang: __props.lang,
          slider: __props.slider
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/ProductCards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
