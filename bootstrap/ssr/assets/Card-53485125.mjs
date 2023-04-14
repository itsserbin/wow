import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import moment from "moment";
const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: ["item", "lang"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-secondary rounded p-7 mb-5" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-3"><div class="font-bold font-subheading">${ssrInterpolate(__props.item.name)}</div><div class="text-center font-subheading"><a${ssrRenderAttr("href", _ctx.route("product", __props.item.product.id))} target="_blank">${ssrInterpolate(__props.item.product.h1[__props.lang])}</a></div><div class="text-end font-subheading">${ssrInterpolate(unref(moment)(__props.item.created_at).format("MM.DD.YY"))}</div></div><hr class="my-2"><div class="review-item-content font-text">${ssrInterpolate(__props.item.comment)}</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Reviews/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
