import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./AdditionalProductCard.15c754d4.mjs";
import "vuex";
const _sfc_main = {
  __name: "AdditionalProducts",
  __ssrInlineRender: true,
  props: ["products", "lang"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.products.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "additions" }, _attrs))}><h3 class="text-2xl font-heading mb-[1rem]">\u0412\u0430\u043C \u0441\u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u0441\u044F</h3><div class="grid gap-4"><!--[-->`);
        ssrRenderList(__props.products, (item) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            item,
            lang: __props.lang
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Cart/AdditionalProducts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
